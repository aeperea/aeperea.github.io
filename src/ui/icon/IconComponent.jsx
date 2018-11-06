import './_Icon.scss'

import React from 'react'
import PropTypes from 'prop-types'

export const IconComponent = ({number, type}) => <span className="Icon">{number}</span>

IconComponent.propTypes = {
  number: PropTypes.string,
  type: PropTypes.string
}

export default IconComponent
