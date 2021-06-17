import React from 'react'
import { CardMedia, Grid, Typography } from '@material-ui/core'
import BN from 'bn.js'
import { printBN } from '@consts/utils'
import useStyles from './style'

export interface IToken {
  ticker: string
  balance: BN
  decimals: 6
  usdValue: BN
}

export interface IProps {
  token: IToken
}

export const TokenItem: React.FC<IProps> = ({ token }) => {
  const classes = useStyles()
  const { ticker, balance, decimals, usdValue } = token

  const tickerPrefix = ['x', '$']
  const deleteFirstLatter = tickerPrefix.some(prefix => ticker.startsWith(prefix))
  const imgName = deleteFirstLatter ? ticker.substr(1) : ticker
  let icon
  try {
    icon = require(`@static/icons/${imgName.toLowerCase()}.png`)
  } catch (error) {
    icon = require('@static/icons/sny.png')
  }

  return (
    <Grid item xs={12}>
      <Grid container alignItems='center' style={{ flexWrap: 'nowrap' }}>
        <Grid item xs={3}>
          <Grid container>
            <Grid item>
              <CardMedia style={{ width: 32, height: 32, marginRight: 18 }} image={icon} />
            </Grid>
            <Grid item className={classes.ticker}>
              <Typography variant='h5' color='textPrimary' className={classes.font}>
                {ticker}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Typography variant='h5' color='textPrimary' className={classes.font}>
            {printBN(balance, decimals)}
          </Typography>
        </Grid>
        <Grid container item xs={4}>
          <Grid item>
            <Typography variant='h5' color='textPrimary' className={classes.font}>
              $
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5' color='textPrimary' className={classes.font}>
              {printBN(usdValue, 4)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}