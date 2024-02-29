import Image from 'next/image'
import React from 'react'
import "./firstsection.css"
interface Props{
    src:string;
    name:string;
}
const firstsection = (props:Props) => {
  return (
    <div className='firstsection'>
        <div className='universityname'>
            <div className='logo'><Image src={props.src} alt="" width={48} height={48}></Image></div>
            <div className='name'> <p>{props.name}</p></div>
        </div>
    </div>
  )
}

export default firstsection