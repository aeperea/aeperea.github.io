import './_JobForm.scss'

import React from 'react'

export const JobFormComponent = () => <div className="JobForm">
  <div className="JobForm--header">
    <Icon number={1} />
    <div className="JobForm--subheader">
      <div className="JobForm--title">Job criteria</div>
      <div className="JobForm--description">We will use the data we collect here to better target your desired audicience.</div>
    </div>
  </div>
</div>

export default JobFormComponent
