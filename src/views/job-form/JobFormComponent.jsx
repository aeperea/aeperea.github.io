import './_JobForm.scss'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import get from 'lodash/get'
import includes from 'lodash/includes'
import Icon from '../../ui/icon'
import Button from '../../ui/button'
import Checkbox from '../../ui/checkbox'

const LEVELS = [
  'Bachelor / Graduate',
  'GCSE / A-Level / High School / GED',
  'Master / Post-Graduate / PhD',
  'Vocational / Diploma / Associates degree'
];

const JobFormHeader = () => <div className="JobForm--header">
    <Icon type="number">1</Icon>
    <div className="JobForm--subheader">
      <h2 className="JobForm--title">Job criteria</h2>
      <div className="JobForm--description">We will use the data we collect here to better target your desired audicience.</div>
    </div>
  </div>

export const onSubmit = () => {
  console.log("submitting")
}

export const JobFormComponent = ({isSummary, levelsOfEducation, yearsOfExperience, minHours, maxHours}) => {
  console.log("JOB CRITERIA")
  console.log(isSummary)

  return <div className="JobForm">
  <JobFormHeader />
  <form>
    <div className="JobForm--section">
      <label className="JobForm--sectionText">A minimum No. years of experience</label>
      <input
        placeholder="i.e. 5+"
        type="text"
        value={yearsOfExperience}
      />
    </div>

    <div className="JobForm--section">
      <label className="JobForm--sectionText">Level of education</label>
      {LEVELS.map((level, index) =>
          <Checkbox
            key={`education-${index}`}
            name={level}
            checked={includes(levelsOfEducation, level)}
            onChange={() => {console.log('checked')}}>
          {level}
          </Checkbox>
        )}
    </div>

    <div className="JobForm--section">
      <label className="JobForm--sectionText">No. of working hours (per week)</label>
      <div className="JobForm--hours">
        <label>Min.</label>
        <input type="text" value={minHours} />
        <label>Max.</label>
        <input type="text" value={maxHours} />
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
  jobCriteria: PropTypes.obj,
  levelsOfEducation: PropTypes.array,
  yearsOfExperience: PropTypes.string,
  minHours: PropTypes.string,
  maxHours: PropTypes.string
}

export let mapStateToProps = ({jobCriteria}) => ({
  isSummary: get(jobCriteria, 'isSummary', false),
  levelsOfEducation: get(jobCriteria, 'levelsOfEducation', []),
  yearsOfExperience: get(jobCriteria, 'yearsOfExperience', ''),
  minHours: get(jobCriteria, 'minHours', ''),
  maxHours: get(jobCriteria, 'maxHours', '')
})

export let mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobFormComponent)
