import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: colors.gray.component,
    borderRadius: 10,
    padding: 32,
    paddingTop: 23
  },
  title: {
    fontSize: 22,
    color: colors.gray.light,
    lineHeight: '26px'
  },
  titleDivider: {
    background: colors.gray.light,
    marginTop: 13,
    marginBottom: 8
  },
  tokenComponent: {
    background: colors.gray.upperMid,
    borderRadius: 10,
    padding: 6,
    paddingLeft: 22,
    marginTop: 32
  },
  tokenComponentText: {
    color: colors.gray.C7C9D1,
    fontWeight: 700,
    fontSize: 16
  },
  amountDivider: {
    background: colors.gray.light,
    height: 57,
    marginLeft: 30,
    marginRight: 30
  },
  numbersField: {
    marginTop: 40
  },
  numbersFieldTitle: {
    fontSize: 22,
    color: colors.gray.light,
    lineHeight: '26px',

    [theme.breakpoints.down('md')]: {
      fontSize: 16
    }
  },
  numbersFieldAmount: {
    fontSize: 22,
    color: colors.gray.veryLight,
    lineHeight: '40px',
    fontWeight: 600,

    [theme.breakpoints.down('md')]: {
      fontSize: 13,
      lineHeight: '15px'
    }
  }
}))

export default useStyles
