import React from 'react'
import isEmpty from 'lodash/isEmpty'
import Promise from 'bluebird'
import {shallow, mount} from 'enzyme'
import {JobFormComponent, validateForm, mapStateToProps, mapDispatchToProps} from '../JobFormComponent'
import * as constants from '../../../redux/constants'

describe('Job Form', () => {
  it('should be a mountable component', () => {
    const wrapper = shallow(<JobFormComponent />)
    expect(wrapper.find('.JobForm').length).toBeTruthy()
  })

  it('should have the three sections for input data', () => {
    const wrapper = shallow(<JobFormComponent />)
    expect(wrapper.find('.JobForm--section').length).toBe(3)
  })

  it('should display an ErrorTag for each error in the store', () => {
    const errors = {
      years: false,
      levels: true,
      min: true,
      max: false,
      negative: false
    }
    const wrapper = mount(<JobFormComponent errors={errors} />)
    expect(wrapper.find('.ErrorTag').length).toBe(2)
  })

  it('should display the SAVE copy when there are no errors in the store', () => {
    const errors = {
      years: false,
      levels: false,
      min: false,
      max: false,
      negative: false
    }
    const wrapper = shallow(<JobFormComponent errors={errors} />)
    expect(wrapper.find('.Button--save').children().text()).toBe('Save')
  })

  it('should display the SAVE AND CONTINUE copy when there are no errors in the store', () => {
    const errors = {
      years: false,
      levels: false,
      min: false,
      max: false,
      negative: true
    }
    const wrapper = shallow(<JobFormComponent errors={errors} />)
    expect(wrapper.find('.Button--save').children().text()).toBe('Save and Continue')
  })
})

describe('validateForm', () => {
  const toggleSummary = jest.fn(() => Promise.resolve())
  const updateErrors = jest.fn((val1, val2) => ({value: val2}))

  it('should call the update errors for validation', async () => {
    const [years, levels, min, max] = ['12', ['test'], '3', '4']
    validateForm(years, levels, min, max, toggleSummary, updateErrors)
    expect(updateErrors).toBeCalled()
  })

  it('should call the toggleSummary function when there is no errors', async () => {
    const [years, levels, min, max] = ['12', ['test'], '3', '4']
    await validateForm(years, levels, min, max, toggleSummary, updateErrors)
    expect(toggleSummary).toBeCalled()
  })
})


describe('mapStateToProps', () => {
  let store = {
    jobCriteria: {
      isSummary: false,
      levelsOfEducation: [
      ],
      yearsOfExperience: '',
      minHours: '32',
      maxHours: '40',
      errors: {
        years: false,
        levels: false,
        min: false,
        max: false,
        negative: false
      }
    }
  }

  it('should return an object with the correct props used in the component', () => {
    expect(mapStateToProps(store)).toEqual({
      levelsOfEducation: [],
      yearsOfExperience: '',
      minHours: '32',
      maxHours: '40',
      errors: {
        years: false,
        levels: false,
        min: false,
        max: false,
        negative: false
      }
    })
  })
})

describe('mapDispatchToProps', () => {
  let dispatch = jest.fn()
  let {updateEducationList, updateYearsOfExperience, updateMinHours, updateMaxHours, toggleSummary, updateErrors} = mapDispatchToProps(dispatch)

  it('should update the education list', () => {
    updateEducationList('new level')
    expect(dispatch).toBeCalledWith({type: constants.UPDATE_EDUCATION, level: 'new level'})
  })

  it('should update the years of experience paramter', () => {
    updateYearsOfExperience('2')
    expect(dispatch).toBeCalledWith({type: constants.UPDATE_YEARS_OF_EXPERIENCE, years: '2'})
  })

  it('should update the min hours paramter', () => {
    updateMinHours('32')
    expect(dispatch).toBeCalledWith({type: constants.UPDATE_MIN_HOURS, min: '32'})
  })

  it('should update the max hours paramter', () => {
    updateMaxHours('40')
    expect(dispatch).toBeCalledWith({type: constants.UPDATE_MAX_HOURS, max: '40'})
  })

  it('should change the summary display flag', () => {
    toggleSummary()
    expect(dispatch).toBeCalledWith({type: constants.TOGGLE_SUMMARY_DISPLAY})
  })

  it('should update the error object', () => {
    updateErrors('min', false)
    expect(dispatch).toBeCalledWith({type: constants.UPDATE_ERRORS, errorType: 'min', value: false})
  })
})
