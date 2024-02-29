import React from 'react'
import"./program.css"
interface Props{
    name:string;
    price:string

}
const Program = (props:Props) => {
  return (
    <div className='program'>
        <div className='programname'><p>{props.name}</p></div>
        <div className='programprice'><p>{props.price}</p></div>
    </div>
  )
}

export default Program