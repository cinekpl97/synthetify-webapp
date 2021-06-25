import React, { CSSProperties } from 'react'
import { Typography } from '@material-ui/core'

import useStyles from './style'
import AmountInput from './AmountInput'

interface IProps {
  setValue: (value: string) => void
  currency: string
  label?: string
  value?: string
  error?: string | null
  className?: string
  style?: CSSProperties
}

export const AmountInputWithLabel: React.FC<IProps> = props => {
  const classes = useStyles()
  const label = props.label || 'Amount'

  return (
    <div>
      <Typography>
        <label className={classes.inputLabel}>{label}</label>
      </Typography>
      <AmountInput {...props} />
    </div>
  )
}
export default AmountInputWithLabel
