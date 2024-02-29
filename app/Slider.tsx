import Image from 'next/image'
import React from 'react'
import "./slider.css"

const Slider = () => {
  return (
    
    <div className='Slider'>
      <div className='slidercontroll prev'> <Image src="./Vector 1 (1).svg" alt="" width={9.5} height={19}></Image></div>
      <div className='imagecontainer' >
        <Image src="./Rectangle 10.svg" alt="" width={1320} height={494}></Image>
      </div>
      <div className='slidercontroll next'> <Image  src="./Vector 1.svg" alt="" width={9.5} height={19}></Image></div>
    </div>
  )
}

export default Slider