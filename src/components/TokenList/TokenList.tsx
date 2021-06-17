import React from 'react'
import { IToken, TokenItem } from '@components/TokenItem/TokenItem'
import { Grid, Typography, Card, CardContent, Divider } from '@material-ui/core'
import { OutlinedButton } from '@components/OutlinedButton/OutlinedButton'
import useStyles from './style'

export interface IProps {
  tokens: IToken[]
  addAccount: () => void
}

export const TokenList: React.FC<IProps> = ({ tokens, addAccount }) => {
  const classes = useStyles()
  const items = tokens.map((token, index) => (
    <Grid item key={index}>
      <Divider className={classes.divider} />
      <TokenItem token={token} />
    </Grid>
  ))

  return (
    <Card>
      <CardContent className={classes.card}>
        <Grid item xs={12} className={classes.root} style={{ overflowX: 'hidden' }}>
          <Grid container justify='space-between'>
            <Grid item>
              <Typography className={classes.ownedTokens}>Owned tokens</Typography>
            </Grid>
            <Grid item>
              <OutlinedButton onClick={addAccount} name='Add account' />
            </Grid>
          </Grid>
          <Grid>
            <Divider className={classes.divider} />
          </Grid>
          <Grid container>
            <Grid item xs={12} className={classes.headerFont}>
              <Grid container style={{ flexWrap: 'nowrap' }}>
                <Grid item xs={4}>
                  <Typography variant='body1' color='textPrimary' className={classes.headerFont}>
                    Token
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body1' color='textPrimary' className={classes.headerFont}>
                    Balance
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='body1' color='textPrimary' className={classes.headerFont}>
                    USD value
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction='column'>
            {items}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
