import React from 'react'
import {shallow} from 'enzyme'
import {JobFormComponent} from '../JobFormComponent'

describe('Job Form', () => {
  it('should be a mountable component', () => {
    const wrapper = shallow(<JobFormComponent />)
    expect(wrapper.find('.JobForm').length).toBeTruthy()
  })
});
