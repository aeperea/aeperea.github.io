import React from 'react'
import {CheckboxComponent, CheckboxContainer} from '../CheckboxContainer'
import {shallow} from 'enzyme'

describe('CheckboxComponent', () => {

  it('should mount the component when called', () => {
    const wrapper = shallow(<CheckboxComponent name="test" />)
    expect(wrapper.find('.Checkbox').length).toBeTruthy()
  })

  it('should mount the component when called', () => {
    const wrapper = shallow(<CheckboxContainer name="test" />)
    expect(wrapper.find(CheckboxComponent).length).toBeTruthy()
  })

})
