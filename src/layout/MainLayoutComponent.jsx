import './_MainLayout.scss'
import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import {connect} from 'react-redux'
import {JobForm, JobSummary} from '../views/job-form'

export const MainLayoutComponent = ({isSummary}) => <div className="MainLayout">
    {isSummary ? <JobSummary /> : <JobForm />}
  </div>

MainLayoutComponent.propTypes = {
  jobCriteria: PropTypes.func
}

export let mapStateToProps = ({jobCriteria}) => ({isSummary: get(jobCriteria, 'isSummary', false)})

export default connect(
  mapStateToProps,
  null
)(MainLayoutComponent)
