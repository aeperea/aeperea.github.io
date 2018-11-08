import includes from 'lodash/includes'
import {
  TOGGLE_CHECKBOX_STUDIES,
  UPDATE_EDUCATION,
  UPDATE_YEARS_OF_EXPERIENCE,
  UPDATE_MIN_HOURS,
  UPDATE_MAX_HOURS,
  TOGGLE_SUMMARY_DISPLAY
} from '../constants'

const initialState = {
  isSummary: false,
  levelsOfEducation: [
  ],
  yearsOfExperience: '',
  minHours: '32',
  maxHours: '40',
  errors: []
}

export const updateLevelsOfEducation = (level, currentLevels) => {
  if (includes(currentLevels, level)) {
    let [level, ...newLevels] = currentLevels
    return newLevels
  }
  return [...currentLevels, level]
}

export const jobCriteriaReducer = (state = initialState, action) => {
  let {type, level, years, min, max} = action

  switch (type) {
  case UPDATE_EDUCATION:
    return {...state, levelsOfEducation: updateLevelsOfEducation(level, state.levelsOfEducation)}
  case UPDATE_YEARS_OF_EXPERIENCE:
    return {...state, yearsOfExperience: years}
  case UPDATE_MIN_HOURS:
    return {...state, minHours: min}
  case UPDATE_MAX_HOURS:
    return {...state, maxHours: max}
  case TOGGLE_SUMMARY_DISPLAY:
    return {...state, isSummary: !state.isSummary}
  default:
    return state
  }
}
