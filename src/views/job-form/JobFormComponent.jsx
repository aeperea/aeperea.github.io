import './_JobForm.scss'

import React from 'react'
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

export const JobFormComponent = () => <div className="JobForm">
  <JobFormHeader />
  <form>
    <div className="JobForm--section">
      <label className="JobForm--sectionText">A minimum No. years of experience</label>
      <input
        placeholder="i.e. 5+"
        type="text"
        value={''}
      />
    </div>

    <div className="JobForm--section">
      <label className="JobForm--sectionText">Level of education</label>
      {LEVELS.map((level, index) =>
          <Checkbox
            key={`education-${index}`}
            name={level}
            checked={true}
            onChange={() => {console.log('checked')}}>
          {level}
          </Checkbox>
        )}
    </div>

    <div className="JobForm--section">
      <label className="JobForm--sectionText">No. of working hours (per week)</label>
      <div className="JobForm--hours">
        <label>Min.</label>
        <input type="text" value={''} />
        <label>Max.</label>
        <input type="text" value={''} />
      </div>
    </div>

    <div className="text-right">
      <Button className="Button--save" type="submit" onSubmit={onSubmit}>
        Save
      </Button>
    </div>
  </form>
</div>

export default JobFormComponent
