import './_Icon.scss'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const IconComponent = props => <span className={classNames('Icon', `Icon--${props.type}`)}>{props.children}</span>

IconComponent.propTypes = {
  type: PropTypes.string
}

export default IconComponent
