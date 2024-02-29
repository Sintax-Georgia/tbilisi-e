import React from 'react'
import University from './university'
import "./universities.css"

const Universities = () => {
  return (
    <div className='universities'>
        <div className='universitiestitle'>
          <p>Discover University in Tbilisi</p>
          <div className='universityline'></div>
        </div>
        <div className='universitiescontainer'>
          <University src="./Rectangle 7.svg" name="Alterbridge" raiting="4.9" description='"ALTERBRIDGE” was founded in 2018 by the Educational Center “PR Academy”, which has been operating in Georgian Education .'></University>
          <University src="./Rectangle 8.svg" name="BUSINESS AND TECHNOLOGY UNIVERSITY" raiting="4.8" description="Business and Technology University was founded on September 16, 2016. BTU is the first private high - technology center in Georgia"></University>
          <University src="./Rectangle 9.svg" name="BRITISH TEACHING UNIVERSITY IN GEORGIA" raiting="4.8" description="The mission of our university is to become a modern platform for raising future leaders and contributing to the transformation of society."></University>
        </div>
    </div>
  )
}

export default Universities