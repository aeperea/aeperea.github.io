import './_Button.scss'

import React from 'react'
import classNames from 'classnames'

export const ButtonComponent = props =>
  <button
    className={classNames('Button', props.className)}
    onClick={props.onClick}>
    {props.children}
  </button>

export default ButtonComponent
