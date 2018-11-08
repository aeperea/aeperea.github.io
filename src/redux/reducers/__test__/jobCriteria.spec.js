import {
  UPDATE_EDUCATION,
  UPDATE_YEARS_OF_EXPERIENCE,
  UPDATE_MIN_HOURS,
  UPDATE_MAX_HOURS,
  TOGGLE_SUMMARY_DISPLAY,
  UPDATE_ERRORS
} from '../../constants'

import {jobCriteriaReducer, updateErrorList, updateLevelsOfEducation} from '../jobCriteria'

describe('jobCriteriaReducer', () => {

  it('should set UPDATE_EDUCATION', () => {
    const payload = {level: 'asdf', type: UPDATE_EDUCATION}
    expect(jobCriteriaReducer({levelsOfEducation: []}, payload)).toEqual({
      levelsOfEducation: ['asdf']
    })
  })

  it('should set UPDATE_YEARS_OF_EXPERIENCE', () => {
    const payload = {years: '2', type: UPDATE_YEARS_OF_EXPERIENCE}
    expect(jobCriteriaReducer({yearsOfExperience: ''}, payload)).toEqual({
      yearsOfExperience: '2'
    })
  })

  it('should set UPDATE_MIN_HOURS', () => {
    const payload = {min: '32', type: UPDATE_MIN_HOURS}
    expect(jobCriteriaReducer({minHours: ''}, payload)).toEqual({
      minHours: '32'
    })
  })

  it('should set UPDATE_MAX_HOURS', () => {
    const payload = {max: '32', type: UPDATE_MAX_HOURS}
    expect(jobCriteriaReducer({maxHours: ''}, payload)).toEqual({
      maxHours: '32'
    })
  })

  it('should set TOGGLE_SUMMARY_DISPLAY', () => {
    const payload = {type: TOGGLE_SUMMARY_DISPLAY}
    expect(jobCriteriaReducer({isSummary: false}, payload)).toEqual({isSummary: true})
    expect(jobCriteriaReducer({isSummary: true}, payload)).toEqual({isSummary: false})
  })

  it('should set UPDATE_ERRORS', () => {
    const payload = {errorType: 'min', value: true, type: UPDATE_ERRORS}
    const defaultErrors =  {
      years: false,
      levels: false,
      min: false,
      max: false,
      negative: false
    }
    expect(jobCriteriaReducer({errors: defaultErrors}, payload)).toEqual({
      errors: {
        years: false,
        levels: false,
        min: true,
        max: false,
        negative: false
      }
    })
  })
})

describe('updateLevelsOfEducation', () => {

  it('should add the new level of education to the array', () => {
    let newLevel = 'asdf'
    let currentLevels = ['test', 'fasdf', 'dddd']
    expect(updateLevelsOfEducation(newLevel, currentLevels)).toEqual(
      ['test', 'fasdf', 'dddd', 'asdf']
    )
  })

  it('should remove the new level of education if it is alread in the list', () => {
    let newLevel = 'test'
    let currentLevels = ['test', 'fasdf', 'dddd']
    expect(updateLevelsOfEducation(newLevel, currentLevels)).toEqual(
      ['fasdf', 'dddd']
    )
  })
})

describe('updateErrorList', () => {

  it('should update the errors object', () => {
    let defaultErrors =  {
      years: false,
      levels: false,
      min: false,
      max: false,
      negative: false
    }
    expect(updateErrorList('years', true, defaultErrors)).toEqual({years: true, levels: false, min: false, max: false, negative: false})
    expect(updateErrorList('levels', true, defaultErrors)).toEqual({years: false, levels: true, min: false, max: false, negative: false})
    expect(updateErrorList('min', true, defaultErrors)).toEqual({years: false, levels: false, min: true, max: false, negative: false})
    expect(updateErrorList('max', true, defaultErrors)).toEqual({years: false, levels: false, min: false, max: true, negative: false})
    expect(updateErrorList('negative', true, defaultErrors)).toEqual({years: false, levels: false, min: false, max: false, negative: true})
  })
})
