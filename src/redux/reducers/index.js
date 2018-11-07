import {combineReducers} from 'redux'

import {jobCriteriaReducer} from './jobCriteria.js'

export default combineReducers({
  jobCriteria: jobCriteriaReducer
})
