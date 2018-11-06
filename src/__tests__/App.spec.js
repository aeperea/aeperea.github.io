import React from 'react'
import {shallow} from 'enzyme'
import App from '../App'

describe('basic app mounting and structure', () => {

  it('should be a mountable component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App').length).toBeTruthy()
  })

});
