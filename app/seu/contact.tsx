import Image from 'next/image'
import React from 'react'
import "./contact.css"
interface Props{
    src:string;
    info:string;
}
const Contact = (props:Props) => {
  return (
    <div className='contact'>
        <Image src={props.src} alt="" width={48} height={48}></Image>
        <p className='info'>{props.info}</p>
    </div>
  )
}

export default Contact