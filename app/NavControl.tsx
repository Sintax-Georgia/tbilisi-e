import React from 'react'
import "./NavControl.css"
interface Props{
    text: string;
    background:string;
    color:string;
}
const NavControl = (props:Props) => {
  return (
    <div className='navcontrol' style={{background:props.background, color:props.color}}><p>{props.text}</p></div>
  )
}

export default NavControl