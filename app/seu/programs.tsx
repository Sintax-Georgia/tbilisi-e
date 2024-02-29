import React from 'react'
import Program from './program'
import "./programs.css"

const programs = () => {
  return (
    <div className='programs'>
        <div className='title'>Offered Programs</div>
        <div className='columns'>
          <div className='columnsinner'>
            <div>Program</div>
            <div>Master Degree</div>
          </div>
        </div>
        <Program name="Leadeship in higher education" price="2250 USD"></Program>
        <Program name="Medical Degree Program" price="2250 USD"></Program>
        <Program name="Farmacy" price="2250 USD"></Program>
        <Program name="English Philology" price="2250 USD"></Program>
        <Program name="Materials, technological process and macheniery, constuction  facilities" price="2250 USD"></Program>
     </div>
  )
}

export default programs