import './_ErrorTag.scss'

import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'

export const ErrorTagComponent = ({msg}) => <div className="ErrorTag">
    <Icon type="error"></Icon>
    <span className="ErrorTag--description">{msg}</span>
  </div>

ErrorTagComponent.defaultProps = {
  msg: 'This field is required.'
}

ErrorTagComponent.propTypes = {
  msg: PropTypes.string
}

export default ErrorTagComponent
