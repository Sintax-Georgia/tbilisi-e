import Image from 'next/image'
import React from 'react'
import "./galery.css"
const Galery = () => {
  return (
    <div className='galery'>
        <div>
            <Image src="../Rectangle 11.svg" alt="" width={670} height={442}></Image>
        </div>
        <div className='imgcontainer'>
        <Image src="../Rectangle 12.svg" alt="" width={309} height={216}></Image>
        <Image src="../Rectangle 13.svg" alt="" width={309} height={216}></Image>
        <Image src="../Rectangle 14.svg" alt="" width={309} height={216}></Image>
        <Image src="../Rectangle 15.svg" alt="" width={309} height={216}></Image>
        </div>
        <div className='showall'><p>Show all Photos</p></div>
       
    </div>
  )
}

export default Galery