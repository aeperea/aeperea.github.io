import './_JobForm.scss'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import get from 'lodash/get'
import every from 'lodash/every'
import some from 'lodash/some'
import isEmpty from 'lodash/isEmpty'
import includes from 'lodash/includes'
import Input from '../../ui/input'
import Icon from '../../ui/icon'
import Button from '../../ui/button'
import Checkbox from '../../ui/checkbox'
import ErrorTag from '../../ui/tag'
import {
  UPDATE_EDUCATION, UPDATE_YEARS_OF_EXPERIENCE,
  UPDATE_MIN_HOURS, UPDATE_MAX_HOURS,
  TOGGLE_SUMMARY_DISPLAY,
  UPDATE_ERRORS
} from '../../redux/constants'
import {LEVELS, ONLY_DIGITS_REGEX} from '../../utils/generalUtils'

const JobFormHeader = () => <div className="JobForm--header">
    <div className="JobForm--icon"><Icon type="number">1</Icon></div>
    <div className="JobForm--subheader">
      <h2 className="JobForm--title">Job criteria</h2>
      <div className="JobForm--description">We will use the data we collect here to better target your desired audicience.</div>
    </div>
  </div>

export const validateForm = (years, levels, min, max, toggleSummary, updateErrors) => Promise.all([
    updateErrors('years', isEmpty(years)),
    updateErrors('levels', isEmpty(levels)),
    updateErrors('min', isEmpty(min)),
    updateErrors('max', isEmpty(max)),
    updateErrors('negative', (Number(max) < Number(min)))])
    .then(values => {
      const errorList = values.map(v => !v.value)
      return every(errorList) ? toggleSummary() : null
    })

export const JobFormComponent = ({isSummary, levelsOfEducation, yearsOfExperience,
  minHours, maxHours, errors, updateEducationList, updateYearsOfExperience,
  updateMinHours, updateMaxHours, toggleSummary, updateErrors}) => <div className="JobForm">
    <JobFormHeader />
    <div className="JobForm--section">
      <label className="JobForm--sectionText">A minimum No. years of experience</label>
      <Input
        placeholder={"e.g. 5"}
        type={"text"}
        regex={ONLY_DIGITS_REGEX}
        value={yearsOfExperience}
        hasError={get(errors, 'years', false)}
        onChange={e => updateYearsOfExperience(e.target.value)}
      />
    </div>

    <div className="JobForm--section">
      <label className="JobForm--sectionText">Level of education</label>
      <div className="JobForm--optionGroup">
        {LEVELS.map((level, index) =>
          <Checkbox
            key={`education-${index}`}
            name={level}
            checked={includes(levelsOfEducation, level)}
            onChange={() => updateEducationList(level)}>
            {level}
          </Checkbox>
        )}
      </div>
      {get(errors, 'levels', false) && <ErrorTag/>}
    </div>

    <div className="JobForm--section">
      <label className="JobForm--sectionText">No. of working hours (per week)</label>
      <div className="JobForm--hours">
        <div className="JobForm--hourBox">
          <label className="JobForm--label">Min.</label>
          <Input
            placeholder={"0"}
            type={"text"}
            regex={ONLY_DIGITS_REGEX}
            value={minHours}
            hasError={get(errors, 'min', false)}
            onChange={e => updateMinHours(e.target.value)}/>
        </div>
        <div className="JobForm--hourBox">
          <label className="JobForm--label">Max.</label>
          <Input
            placeholder={"0"}
            type={"text"}
            regex={ONLY_DIGITS_REGEX}
            value={maxHours}
            hasError={get(errors, 'max', false)}
            onChange={e => updateMaxHours(e.target.value)}/>
        </div>
      </div>
      {get(errors, 'negative', false) && <ErrorTag msg="Min hours should be smaller than the max hours" />}
    </div>

    <div className="text-right">
      <Button className="Button--save" onClick={() => validateForm(yearsOfExperience, levelsOfEducation, minHours, maxHours, toggleSummary, updateErrors)}>
        {errors && some(Object.values(errors)) ? 'Save and Continue' : 'Save' }
      </Button>
    </div>
  </div>

JobFormComponent.propTypes = {
  jobCriteria: PropTypes.func,
  levelsOfEducation: PropTypes.array,
  yearsOfExperience: PropTypes.string,
  minHours: PropTypes.string,
  maxHours: PropTypes.string,
  errors: PropTypes.object,
  updateEducationList: PropTypes.func,
  updateYearsOfExperience: PropTypes.func,
  updateMinHours: PropTypes.func,
  updateMaxHours: PropTypes.func,
}

export const mapStateToProps = ({jobCriteria}) => ({
  levelsOfEducation: get(jobCriteria, 'levelsOfEducation', []),
  yearsOfExperience: get(jobCriteria, 'yearsOfExperience', ''),
  minHours: get(jobCriteria, 'minHours', ''),
  maxHours: get(jobCriteria, 'maxHours', ''),
  errors: get(jobCriteria, 'errors', {})
})

export const mapDispatchToProps = dispatch => ({
  updateEducationList: level => dispatch({type: UPDATE_EDUCATION, level}),
  updateYearsOfExperience: years => dispatch({type: UPDATE_YEARS_OF_EXPERIENCE, years}),
  updateMinHours: min => dispatch({type: UPDATE_MIN_HOURS, min}),
  updateMaxHours: max => dispatch({type: UPDATE_MAX_HOURS, max}),
  toggleSummary: () => dispatch({type: TOGGLE_SUMMARY_DISPLAY}),
  updateErrors: (errorType, value) => dispatch({type: UPDATE_ERRORS, errorType, value})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobFormComponent)
