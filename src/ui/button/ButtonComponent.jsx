import './_Button.scss'

import React from 'react'
import classNames from 'classnames'

export const ButtonComponent = props => <div className={classNames('Button', props.className)}>
    {props.children}
  </div>

export default ButtonComponent
