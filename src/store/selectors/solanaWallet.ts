import { BN } from '@project-serum/anchor'
import { createSelector } from '@reduxjs/toolkit'
import { assets, collaterals, synthetics, userDebtValue } from '@selectors/exchange'
import { ISolanaWallet, solanaWalletSliceName, ITokenAccount } from '../reducers/solanaWallet'
import { keySelectors, AnyProps } from './helpers'
import { PublicKey } from '@solana/web3.js'
import { ACCURACY, DEFAULT_PUBLICKEY, ORACLE_OFFSET } from '@consts/static'
import { IAsset } from '@reducers/exchange'
import { Synthetic } from '@synthetify/sdk/lib/exchange'

const store = (s: AnyProps) => s[solanaWalletSliceName] as ISolanaWallet

export const { address, balance, accounts, status } = keySelectors(store, [
  'address',
  'balance',
  'accounts',
  'status'
])

export const tokenBalance = (tokenAddress: PublicKey) =>
  createSelector(accounts, balance, (tokensAccounts, solBalance) => {
    if (tokenAddress.equals(DEFAULT_PUBLICKEY)) {
      return { balance: solBalance, decimals: 9 }
    } else {
      if (!tokensAccounts[tokenAddress.toString()]) {
        return { balance: new BN(0), decimals: 9 }
      }
      return {
        balance: tokensAccounts[tokenAddress.toString()].balance,
        decimals: tokensAccounts[tokenAddress.toString()].decimals
      }
    }
  })
export const tokenAccount = (tokenAddress: PublicKey) =>
  createSelector(accounts, tokensAccounts => {
    if (tokensAccounts[tokenAddress.toString()]) {
      return tokensAccounts[tokenAddress.toString()]
    }
  })

export type ExchangeTokensWithBalance = IAsset & Synthetic & { balance: BN }
export const exchangeTokensWithUserBalance = createSelector(
  accounts,
  synthetics,
  assets,
  (tokensAccounts, allSynthetics, exchangeAssets) => {
    return Object.values(allSynthetics)
      .map(asset => {
        const userAccount = tokensAccounts[asset.assetAddress.toString()]
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return {
          ...exchangeAssets[allSynthetics[asset.assetAddress.toString()].assetIndex],
          ...allSynthetics[asset.assetAddress.toString()],
          balance: userAccount ? userAccount.balance : new BN(0)
        } as ExchangeTokensWithBalance
      })
  }
)

export type TokenAccounts = ITokenAccount & {
  symbol: string,
  usdValue: BN
}
export const accountsArray = createSelector(
  accounts,
  synthetics,
  collaterals,
  assets,
  (tokensAccounts, allSynthetics, allCollaterals, exchangeAssets): TokenAccounts[] => {
    return Object.values(tokensAccounts).reduce((acc, account) => {
      let asset
      if (allSynthetics[account.programId.toString()]) {
        asset = allSynthetics[account.programId.toString()]
      } else if (allCollaterals[account.programId.toString()]) {
        asset = allCollaterals[account.programId.toString()]
      }

      if (asset) {
        acc.push({
          ...account,
          symbol: exchangeAssets[asset.assetIndex].symbol,
          usdValue: exchangeAssets[asset.assetIndex].price
            .mul(new BN(10 ** 4))
            .mul(account.balance)
            .div(new BN(10 ** (ORACLE_OFFSET - ACCURACY)))
            .div(new BN(10 ** asset.decimals))
            .div(new BN(10 ** account.decimals))
        })
      }
      return acc
    }, [] as TokenAccounts[])
  }
)
export const userMaxBurnToken = (assetAddress: PublicKey) =>
  createSelector(userDebtValue, synthetics, assets, tokenAccount(assetAddress), (debt, allSynthetics, allAssets, account) => {
    const token = allSynthetics[assetAddress.toString()]
    if (debt.eq(new BN(0)) || !token) {
      return new BN(0)
    }
    const decimalChange = 10 ** (token.decimals + ORACLE_OFFSET - ACCURACY)

    const assetToBurnBalance = account ? allAssets[token.assetIndex].price.mul(account.balance).divn(decimalChange) : new BN(0)

    const val = debt.lt(assetToBurnBalance) ? debt : assetToBurnBalance

    return val.muln(decimalChange).div(allAssets[token.assetIndex].price)
  })
export const solanaWalletSelectors = {
  address,
  balance,
  accounts,
  status,
  accountsArray,
  tokenAccount,
  exchangeTokensWithUserBalance,
  userMaxBurnToken
}
export default solanaWalletSelectors
