import './_JobForm.scss'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import get from 'lodash/get'
import includes from 'lodash/includes'
import Input from '../../ui/input'
import Icon from '../../ui/icon'
import Button from '../../ui/button'
import Checkbox from '../../ui/checkbox'
import {
  UPDATE_EDUCATION, UPDATE_YEARS_OF_EXPERIENCE,
  UPDATE_MIN_HOURS, UPDATE_MAX_HOURS
} from '../../redux/constants'
import {LEVELS, ONLY_DIGITS_REGEX} from '../../utils/generalUtils'

const JobFormHeader = () => <div className="JobForm--header">
    <Icon type="number">1</Icon>
    <div className="JobForm--subheader">
      <h2 className="JobForm--title-form">Job criteria</h2>
      <div className="JobForm--description">We will use the data we collect here to better target your desired audicience.</div>
    </div>
  </div>

export const onSubmit = e => {
  e.preventDefault()
  console.log("submitting")
}

export const JobFormComponent = ({isSummary, levelsOfEducation, yearsOfExperience,
  minHours, maxHours, updateEducationList, updateYearsOfExperience,
  updateMinHours, updateMaxHours}) => {

  return <div className="JobForm">
  <JobFormHeader />
  <form>
    <div className="JobForm--section">
      <label className="JobForm--sectionText">A minimum No. years of experience</label>
      <Input
        placeholder={"i.e. 5"}
        type={"text"}
        regex={ONLY_DIGITS_REGEX}
        value={yearsOfExperience}
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
    </div>

    <div className="JobForm--section">
      <label className="JobForm--sectionText">No. of working hours (per week)</label>
      <div className="JobForm--hours">
        <label className="JobForm--label">Min.</label>
        <Input
          placeholder={"0"}
          type={"text"}
          regex={ONLY_DIGITS_REGEX}
          value={minHours}
          onChange={e => updateMinHours(e.target.value)}/>
        <label className="JobForm--label">Max.</label>
        <Input
          placeholder={"0"}
          type={"text"}
          regex={ONLY_DIGITS_REGEX}
          value={maxHours}
          onChange={e => updateMaxHours(e.target.value)}/>
      </div>
    </div>

    <div className="text-right">
      <Button className="Button--save" type="submit" onSubmit={onSubmit}>
        Save
      </Button>
    </div>
  </form>
</div>
}

JobFormComponent.propTypes = {
  jobCriteria: PropTypes.func,
  levelsOfEducation: PropTypes.array,
  yearsOfExperience: PropTypes.string,
  minHours: PropTypes.string,
  maxHours: PropTypes.string,
  updateEducationList: PropTypes.func,
  updateYearsOfExperience: PropTypes.func,
  updateMinHours: PropTypes.func,
  updateMaxHours: PropTypes.func,
}

export const mapStateToProps = ({jobCriteria}) => ({
  isSummary: get(jobCriteria, 'isSummary', false),
  levelsOfEducation: get(jobCriteria, 'levelsOfEducation', []),
  yearsOfExperience: get(jobCriteria, 'yearsOfExperience', ''),
  minHours: get(jobCriteria, 'minHours', ''),
  maxHours: get(jobCriteria, 'maxHours', '')
})

export const mapDispatchToProps = dispatch => ({
  updateEducationList: level => dispatch({type: UPDATE_EDUCATION, level}),
  updateYearsOfExperience: years => dispatch({type: UPDATE_YEARS_OF_EXPERIENCE, years}),
  updateMinHours: min => dispatch({type: UPDATE_MIN_HOURS, min}),
  updateMaxHours: max => dispatch({type: UPDATE_MAX_HOURS, max})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobFormComponent)
