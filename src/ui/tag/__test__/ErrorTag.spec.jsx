import React from 'react'
import ErrorTag from '../index'
import {shallow} from 'enzyme'

describe('ErrorTagComponent', () => {
  it('should mount the component when called', () => {
    const wrapper = shallow(<ErrorTag />)
    expect(wrapper.find('.ErrorTag').length).toBeTruthy()
  })

  it('should have an ErrorTag component with a composable message', () => {
    const wrapper = shallow(<ErrorTag msg="Hey hi" />)
    expect(wrapper.find('.ErrorTag--description').text()).toBe('Hey hi')
  })

  it('should have an ErrorTag component with a default message', () => {
    const wrapper = shallow(<ErrorTag />)
    expect(wrapper.find('.ErrorTag--description').text()).toBe('This field is required.')
  })
})

