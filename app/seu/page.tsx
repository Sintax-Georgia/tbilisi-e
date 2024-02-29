import React from 'react'
import "../main.css"
import Nav from '../Nav'
import Firstsection from './firstsection'
import Secondsection from './secondsection'
import Thirdsection from './thirdsection'
import Sectionfour from './sectionfour'
import Galery from './galery'
import "./seu.css"

const seu = () => {
  return (
    <main className='main'>
        <Nav></Nav>
        <Firstsection name="GEORGIAN NATIONAL UNIVERSTY SEU" src="../Group 1169.svg"></Firstsection>
        <Secondsection reviews='4.89 ·9 reviews' location='Georgia,Tbilisi'></Secondsection>
        <Galery></Galery>
        <div className='cols'>
        <Thirdsection></Thirdsection>
        <Sectionfour></Sectionfour>
        </div>
    </main>
  )
}

export default seu