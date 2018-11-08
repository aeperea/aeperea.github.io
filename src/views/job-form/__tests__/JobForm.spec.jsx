import React from 'react'
import {shallow} from 'enzyme'
import {JobFormComponent, ErrorTag} from '../JobFormComponent'

describe('Job Form', () => {
  it('should be a mountable component', () => {
    const wrapper = shallow(<JobFormComponent />)
    expect(wrapper.find('.JobForm').length).toBeTruthy()
  })

  it('should have an ErrorTag component with a composable message', () => {
    const wrapper = shallow(<ErrorTag msg="Hey hi" />)
    expect(wrapper.find('.JobForm--errorText').text()).toBe('Hey hi')
  })

  it('should have an ErrorTag component with a default message', () => {
    const wrapper = shallow(<ErrorTag />)
    expect(wrapper.find('.JobForm--errorText').text()).toBe('This field is required.')
  })
});
