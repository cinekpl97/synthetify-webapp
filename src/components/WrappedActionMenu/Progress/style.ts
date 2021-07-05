import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: 16,
    color: colors.gray.manatee,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      fontSize: 13
    }
  },
  icon: {
    paddingRight: 10,
    minWidth: 42
  }
}))

export default useStyles
