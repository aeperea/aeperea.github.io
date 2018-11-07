import './_JobSummary.scss'

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import get from 'lodash/get'
import Icon from '../../ui/icon'
import Button from '../../ui/button'
import {TOGGLE_SUMMARY_DISPLAY} from '../../redux/constants'

export const JobSummaryComponent = ({levelsOfEducation, yearsOfExperience, minMaxCopy, toggleSummary}) => <div className="JobSummary">
  <div className="JobForm--header">
    <h2 className="JobForm--title"><Icon type="success"/>Job criteria</h2>
    <div className="JobForm--subheader">
      <Button className="Button--edit" onClick={toggleSummary}>
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
      {levelsOfEducation && levelsOfEducation.map((level, index) => <span key={`tags-${index}`} className="JobForm--tag">{level}</span>)}
    </div>
  </div>
</div>

JobSummaryComponent.propTypes = {
  jobCriteria: PropTypes.func,
  levelsOfEducation: PropTypes.array,
  yearsOfExperience: PropTypes.string,
  minMaxCopy: PropTypes.string,
  toggleSummary: PropTypes.func
}

export const mapStateToProps = ({jobCriteria}) => ({
  levelsOfEducation: get(jobCriteria, 'levelsOfEducation', []),
  yearsOfExperience: get(jobCriteria, 'yearsOfExperience', ''),
  minMaxCopy: `${get(jobCriteria, 'minHours', '')}-${get(jobCriteria, 'maxHours', '')} hours`
})

export const mapDispatchToProps = dispatch => ({
  toggleSummary: () => dispatch({type: TOGGLE_SUMMARY_DISPLAY})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobSummaryComponent)
