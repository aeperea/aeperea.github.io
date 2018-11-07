import {
  TOGGLE_CHECKBOX_STUDIES
} from '../constants'

const initialState = {
  isSummary: false,
  levelsOfEducation: [],
  yearsOfExperience: '',
  minHours: 32,
  maxHours: 40
}

export let jobCriteriaReducer = (state = initialState, action) => {
  let {type, selectedSegment, segments} = action

  switch (type) {
  // case SET_MORE_FLIGHT_OPTIONS_VISIBLE:
  //   return {...state, isMoreOptionsVisible: !state.isMoreOptionsVisible}

  // case ADD_SEGMENT:
  //   return {...state, selectedSegments: state.selectedSegments.concat(selectedSegment)}

  // case UPDATE_SEGMENTS:
  //   return {...state, selectedSegments: segments}

  // case CLEAR_ALL_SEGMENTS:
  //   return {...state, selectedSegments: []}
  default:
    return state
  }
}
