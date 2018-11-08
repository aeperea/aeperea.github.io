import React from 'react'
import Input from '../index'
import {shallow} from 'enzyme'

describe('IconComponent', () => {
  it('should mount the component when called', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find('.Input').length).toBeTruthy()
  })
})
