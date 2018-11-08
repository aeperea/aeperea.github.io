import React from 'react'
import Button from '../index'
import {shallow} from 'enzyme'

describe('ButtonComponent', () => {

  it('should mount the component when called', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('.Button').length).toBeTruthy()
  })

})
