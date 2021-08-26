import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: colors.navy.component,
    borderRadius: 10,
    padding: 15,
    height: '260px',

    [theme.breakpoints.down('sm')]: {
      padding: 20
    }
  },

  selectBox: {
    background: colors.navy.darkGrey,
    borderRadius: 5,
    minWidth: 100,
    height: 20,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '25px'
  },
  dropdown: {
    borderRadius: '5%',
    backgroundColor: colors.navy.darkGrey,
    width: '100%',
    maxWidth: 200
  },
  dropdownItems: {
    fontSize: 10,
    alignItems: 'center'
  },
  icon: {
    left: 90,
    color: 'white'
  },

  button: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    color: colors.navy.grey,
    fontWeight: 300,
    fontSize: '20px',
    alignItems: 'center',
    border: 'none',
    maxWidth: 30,
    outline: 'none'
  },
  activeButton: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    maxWidth: 30,
    alignItems: 'center',
    border: 'none',
    outline: 'none'
  },
  statsCard: {
    background: colors.navy.component,
    borderRadius: 10
  },
  statsCardTitle: {
    color: colors.navy.lightGrey,
    fontSize: '16px',
    fontWeight: 500,
    marginTop: -15,
    marginRight: -10
  },
  statsCardSecondTitle: {
    color: colors.navy.darkGrey,
    fontSize: '20px',
    fontWeight: 600,
    marginTop: -15,
    marginRight: -10
  },
  statsCardAmount: {
    color: colors.navy.button,
    fontSize: 28,
    fontWeight: 600
  },
  pos: {
    color: colors.navy.darkGrey,
    marginBottom: -30
  }
}))

export default useStyles
