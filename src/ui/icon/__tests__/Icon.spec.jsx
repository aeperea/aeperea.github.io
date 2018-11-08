import React from 'react'
import Icon from '../index'
import {shallow} from 'enzyme'

describe('IconComponent', () => {
  it('should mount the component when called', () => {
    const wrapper = shallow(<Icon />)
    expect(wrapper.find('.Icon').length).toBeTruthy()
  })

  it('should add the right class when a type is added', () => {
    const wrapper = shallow(<Icon type="success" />)
    expect(wrapper.find('.Icon--success').length).toBeTruthy()
  })
})
