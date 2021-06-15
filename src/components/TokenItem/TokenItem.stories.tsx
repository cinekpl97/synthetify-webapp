import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { IToken, TokenItem } from '@components/TokenItem/TokenItem'
import { BN } from '@project-serum/anchor'

const xSNY: IToken = {
  ticker: '$SNY',
  balance: new BN(562830),
  decimals: 6,
  usdValue: 11.6579
}

const xBTC: IToken = {
  ticker: '$BTC',
  balance: new BN(1e6),
  decimals: 6,
  usdValue: 39193.3
}

storiesOf('Tokens/tokenItem', module)
  .addDecorator(withKnobs)
  .add('Synthetify', () => <TokenItem token={xSNY} />)
  .add('Bitcoin', () => <TokenItem token={xBTC} />)
