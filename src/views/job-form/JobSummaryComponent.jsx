import './_JobForm.scss'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import get from 'lodash/get'
import Icon from '../../ui/icon'
import Button from '../../ui/button'

export const onSubmit = e => {
  e.preventDefault()
  console.log("submitting edit")
}

export const JobSummaryComponent = ({levelsOfEducation, yearsOfExperience, minMaxCopy}) => <div className="JobForm">
  <div className="JobForm--header">
    <h2 className="JobForm--title-summary"> <Icon type="success" />Job criteria</h2>
    <div className="JobForm--subheader">
      <Button className="Button--edit" onSubmit={onSubmit}>
        Edit
      </Button>
    </div>
  </div>
  <div className="JobForm--section">
    <div className="JobForm--summaryText">
      A minimum No. years of experience: <span className="JobForm--summaryValue">{yearsOfExperience}</span>
    </div>
    <div className="JobForm--summaryText">
      No. of working hours (per week): <span className="JobForm--summaryValue">{minMaxCopy}</span>
    </div>
  </div>
  <div className="JobForm--section">
    <div className="JobForm--sectionText">
      Level of education
    </div>
    <div className="JobForm--tagList">
      {levelsOfEducation.map((level, index) => <span key={`tags-${index}`} className="JobForm--tag">{level}</span>)}
    </div>
  </div>
</div>

JobSummaryComponent.propTypes = {
  jobCriteria: PropTypes.func,
  levelsOfEducation: PropTypes.array,
  yearsOfExperience: PropTypes.string,
  minMaxCopy: PropTypes.string
}

export const mapStateToProps = ({jobCriteria}) => ({
  levelsOfEducation: get(jobCriteria, 'levelsOfEducation', []),
  yearsOfExperience: get(jobCriteria, 'yearsOfExperience', ''),
  minMaxCopy: `${get(jobCriteria, 'minHours', '')}-${get(jobCriteria, 'maxHours', '')} hours`
})

export const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobSummaryComponent)
