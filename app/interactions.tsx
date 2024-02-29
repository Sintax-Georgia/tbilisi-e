import React from 'react'
import Interaction from './Interaction'
import "./interactions.css"
import Image from 'next/image'

export const Interactions = () => {
  return (
    <div className='interactions'>
        <Interaction src="./Group.svg" text="University" linecolor="#0A1125"></Interaction>
        <Interaction src="./Frame.svg" text="Design & Art" linecolor='white'></Interaction>
        <Interaction src="./Frame (1).svg" text="Sports & Gyms" linecolor='white'></Interaction>
        <Interaction src="./Frame (2).svg" text="Music & instuments" linecolor='white'></Interaction>
        <Interaction src="./Frame (3).svg" text="Digital Courese" linecolor='white'></Interaction>
        <Interaction src="./Frame (4).svg" text="Langunanges" linecolor='white'></Interaction>
        <div className='filter'><p>filter</p> <Image src="./Group 2.svg" alt="" width={16} height={14}></Image></div>
    </div>
  )
}
export default Interactions