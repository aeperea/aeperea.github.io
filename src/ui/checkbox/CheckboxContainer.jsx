import './_Checkbox.scss'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import noop from 'lodash/noop'

export const CheckboxComponent = ({className, name, onChange, checked, children}) =>
  <div className={classNames('Checkbox', className)}>
    <input
      type="checkbox"
      className="Checkbox-control"
      checked={checked}
      id={name}
      onChange={onChange}/>
    <span className="Checkbox-text">{children}</span>
  </div>


export class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: props.checked
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange = () => {
    this.setState({isChecked: !this.state.isChecked})
  }

  static displayName = 'CheckboxContainer'

  static defaultProps = {
    onChange: noop,
    checked: false
  }

  render() {
    return(
      <CheckboxComponent
        name={this.props.name}
        checked={this.state.isChecked}
        onChange={this.onChange}>
        {this.props.children}
      </CheckboxComponent>
    )
  }
}

CheckboxContainer.displayName = 'CheckboxContainer'

CheckboxContainer.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default CheckboxContainer
