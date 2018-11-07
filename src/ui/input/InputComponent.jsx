import './_Input.scss'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const handleOnChange = (e, onChange, regex) => {
  if (regex.test(e.target.value)) {
    return onChange && onChange(e)
  }
  return
}

export const InputComponent = ({className, onChange, placeholder, value, type, regex}) =>
  <input
    className={classNames('Input', className)}
    placeholder={placeholder}
    onChange={e => handleOnChange(e, onChange, regex)}
    value={value}
    type={type}
  />


InputComponent.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  regex: PropTypes.instanceOf(RegExp)
}

export default InputComponent
