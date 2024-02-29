import React from 'react'
import Contact from '../seu/contact'
import "./contacts.css"
const contacts = () => {
  return (
    <div className='contacts'>
     <Contact src="../Ellipse 29.svg" info="032 2 90 00 0"></Contact>
     <Contact src="../Group 1217.svg" info="info@seu.edu.ge"></Contact>
     <Contact src="../Ellipse 29 (1).svg" info="seu.edu.ge"></Contact>
    </div>
  )
}

export default contacts