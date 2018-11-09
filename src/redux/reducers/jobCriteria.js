import includes from 'lodash/includes'
import {
  UPDATE_EDUCATION,
  UPDATE_YEARS_OF_EXPERIENCE,
  UPDATE_MIN_HOURS,
  UPDATE_MAX_HOURS,
  TOGGLE_SUMMARY_DISPLAY,
  UPDATE_ERRORS
} from '../constants'

const initialState = {
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

export const updateLevelsOfEducation = (level, currentLevels) => {
  if (includes(currentLevels, level)) {
    // eslint-disable-next-line
    let [level, ...newLevels] = currentLevels
    return newLevels
  }
  return [...currentLevels, level]
}

export const updateErrorList = (errorType, value, errors) => {
  let newError = {}
  newError[errorType] = value
  return {...errors, ...newError}
}

export const jobCriteriaReducer = (state = initialState, action) => {
  let {type, level, years, min, max, errorType, value} = action

  switch (type) {
  case UPDATE_EDUCATION:
    return {...state, levelsOfEducation: updateLevelsOfEducation(level, state.levelsOfEducation)}
  case UPDATE_YEARS_OF_EXPERIENCE:
    return {...state, yearsOfExperience: years.trim()}
  case UPDATE_MIN_HOURS:
    return {...state, minHours: min.trim()}
  case UPDATE_MAX_HOURS:
    return {...state, maxHours: max.trim()}
  case TOGGLE_SUMMARY_DISPLAY:
    return {...state, isSummary: !state.isSummary}
  case UPDATE_ERRORS:
    return {...state, errors: updateErrorList(errorType, value, state.errors)}
  default:
    return state
  }
}
