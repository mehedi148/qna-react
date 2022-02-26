import React from 'react'
import './job.css'

const Job = ({job}) => {
    const{company,role, level, location, languages} = job;
   

  return (
    <div className='jobStyle'>
        <h1>{company}</h1>
        <h5>{languages}</h5>
        <h2>{role}</h2>
        <p>{level}</p>
        <h6>{location}</h6>

    </div>
  )
}
export default Job;
