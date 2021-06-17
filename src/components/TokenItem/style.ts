import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  font: {
    fontSize: 22,
    fontWeight: 400,
    color: colors.gray.C4,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      fontSize: 18
    }
  },
  ticker: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))

export default useStyles
