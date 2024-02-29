import React from 'react'
import Image from 'next/image';
import "./university.css"
interface Props{
    src:string;
    name:string;
    raiting:string;
    description:string;
}
const University = (props:Props) => {
  return (
    <div className='university'>
        
        <div>
            <Image src={props.src} alt={props.src} width={420} height={276}></Image>
          
        </div>
        <div className='aboutuniversity'>
        <div className='universityname'>
            <p> {props.name}</p>
            <div className='universityraiting'>
            <Image src="./Star 1.svg" alt="" width={16} height={16}></Image>
                <p>{props.raiting}</p>
            </div>
        </div>
        <div className='universitydescription'>
            <p>{props.description}</p>
        </div>
        <div className='universitydatails'>
            <div className='discover'>
                <p>Discover</p>
                <div className='discoverline'></div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default University