import React from 'react'
import {shallow} from 'enzyme'
import {MainLayoutComponent, mapStateToProps} from '../MainLayoutComponent'
import {JobForm, JobSummary} from '../../views/job-form'

describe('MainLayout', () => {
  it('should be a mountable component', () => {
    const wrapper = shallow(<MainLayoutComponent />)
    expect(wrapper.find('.MainLayout').length).toBeTruthy()
  })

  it('should have a JobForm when the summary flag is false in the store', () => {
    let store = {jobCriteria: {isSummary: false}}
    const wrapper = shallow(<MainLayoutComponent isSummary={false} />)
    expect(wrapper.find(JobForm).length).toBeTruthy()
  })

  it('should have a JobSummary when the summary flag is true in the store', () => {
    const wrapper = shallow(<MainLayoutComponent isSummary />)
    expect(wrapper.find(JobSummary).length).toBeTruthy()
  })

  it('should return a isSummary value as it is in the store', () => {
    let store = {jobCriteria: {isSummary: false}}
    expect(mapStateToProps(store)).toEqual({
      isSummary: false
    })
  })
})
