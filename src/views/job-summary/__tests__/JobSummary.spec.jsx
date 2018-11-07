import React from 'react'
import {shallow} from 'enzyme'
import {JobSummaryComponent} from '../JobSummaryComponent'

describe('Job Summary', () => {
  it('should be a mountable component', () => {
    const wrapper = shallow(<JobSummaryComponent />)
    expect(wrapper.find('.JobSummary').length).toBeTruthy()
  })
});
