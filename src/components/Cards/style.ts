import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from '@static/theme'

const useStyles = makeStyles((theme: Theme) => ({
  valueCard: {
    background: colors.navy.component,
    borderRadius: 10
  },
  valueCardTitle: {
    color: colors.gray.light,
    fontSize: '22px',
    lineHeight: '40px',
    fontWeight: 400
  },
  valueCardAmount: {
    color: colors.gray.veryLight,
    fontSize: 32,
    fontWeight: 700,
    lineHeight: '40px'
  },
  divider: {
    width: 139,
    marginTop: 6,
    marginBottom: 15,
    background: colors.gray.light
  },
  questionMark: {
    height: 17,
    width: 17,
    float: 'right'
  },
  tooltip: {
    background: colors.gray.mid,
    color: colors.gray.veryLight,
    fontSize: 13,
    padding: '5px 8px',
    fontWeight: 400
  },
  tooltipArrow: {
    color: colors.gray.mid,
    borderColor: colors.gray.mid,
    width: 13,
    marginBlock: '-0.67em !important'
  },
  progressContent: {
    paddingBottom: 13,
    '&:last-child': {
      paddingBottom: 13
    }
  },
  minMaxDebt: {
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 'unset',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  progressContainer: {
    width: '100%',
    marginTop: 35,
    marginBottom: 17
  },
  progressRoot: {
    width: '100%',
    height: 16,
    borderRadius: 10,
    background: colors.black.background
  },
  popper: {
    zIndex: 0
  },
  progressTooltip: {
    background: colors.gray.mid,
    color: colors.gray.veryLight,
    fontSize: 13,
    padding: '7px 16px',
    fontWeight: 400,
    marginBlock: 5
  }
}))

export const useStylesWithProps = makeStyles<Theme, {
  max: number
  current: number
  topIndicatorValue: number
  bottomIndicatorValue: number
}>(() => ({
  bar: ({ max, current }) => ({
    borderRadius: 10,
    background: `linear-gradient(90deg, #40BFA0 ${100 - (max !== 0 ? (current / max) * 100 : 0)}%, #C34848 ${200 - (max !== 0 ? (current / max) * 100 : 0)}%)`
  }),
  topIndicator: ({ max, topIndicatorValue }) => ({
    width: 0.1,
    height: 0.1,
    marginLeft: `${max !== 0 ? (topIndicatorValue / max) * 100 : 0}%`
  }),
  bottomIndicator: ({ max, bottomIndicatorValue }) => ({
    width: 0.1,
    height: 0.1,
    marginLeft: `${max !== 0 ? (bottomIndicatorValue / max) * 100 : 0}%`
  })
}))

export default useStyles
