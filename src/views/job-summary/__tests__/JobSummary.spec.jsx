import React from 'react'
import {shallow} from 'enzyme'
import {JobSummaryComponent, mapDispatchToProps} from '../JobSummaryComponent'
import * as constants from '../../../redux/constants'

describe('Job Summary', () => {
  it('should be a mountable component', () => {
    const wrapper = shallow(<JobSummaryComponent />)
    expect(wrapper.find('.JobSummary').length).toBeTruthy()
  })

  it('should render the same amount of elements as there is in the levels of education store value', () => {
    const levelsOfEducation = ['asdf', 'asdfasdf', 'asdfasdfasdf']
    const wrapper = shallow(<JobSummaryComponent levelsOfEducation={levelsOfEducation} />)
    expect(wrapper.find('.JobSummary--tag').length).toBe(3)
  })
})

describe('mapDispatchToProps', () => {
  let dispatch = jest.fn()
  let {toggleSummary} = mapDispatchToProps(dispatch)

  it('should change the summary display flag', () => {
    toggleSummary()
    expect(dispatch).toBeCalledWith({type: constants.TOGGLE_SUMMARY_DISPLAY})
  })
})
