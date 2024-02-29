import Image from 'next/image'
import React from 'react'
import "./secondsection.css"
interface Props{
    reviews:string;
    location:string;
}
const secondsection = (props:Props) => {
  return (
    <div className='secondsection'>
        <div className='raiting'>
            <Image src="../Star 1.svg" alt="" width={18} height={18}></Image>
            <p className='reviews'>{props.reviews}</p>
            <p className='location'>{props.location}</p>
        </div>
        <div>
            <Image src="./Group 1222.svg" alt="" width={90} height={40}></Image>
            <Image src="./Group 1223.svg" alt="" width={90} height={40}></Image>
        </div>
    </div>
  )
}

export default secondsection