import Image from 'next/image';
import React from 'react'
import "./interaction.css"
import Link from 'next/link';
interface Props{
    src:string;
    text:string;
    linecolor:string;
}
const Interaction = (props:Props) => {
  return (
    <div className='interaction'>
      <Link href="" className='interactionlink'>
      <div className="interactionsvg">
      <Image src={props.src} alt="" width="20" height="21"></Image>
      </div>
      <div className='interactiontext'>
        <p >{props.text}</p>
      </div>
      </Link> 
      <div className='line' style={{background:props.linecolor}}></div>
    </div>
  )
}

export default Interaction