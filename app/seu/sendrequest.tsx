import Image from 'next/image'
import React from 'react'
import "./sendrequest.css"
const Sendrequest = () => {
  return (
    <div className='request'>
        <div className='sendrequest'>
            <p>Send Request</p>
        </div>
        <div className='social'>
        <Image src="../Group 1165.svg" alt="" width={32} height={32}></Image>
        <Image src="../Group 1166.svg" alt="" width={32} height={32}></Image>
        <Image src="../Group 1167.svg"alt="" width={32} height={32}></Image>
        <Image src="../Group 1168.svg" alt="" width={32} height={32}></Image>
  
        </div>
    </div>
  )
}

export default Sendrequest