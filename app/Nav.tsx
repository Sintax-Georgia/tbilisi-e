import React from "react"
import './Nav.css'
import NavControl from "./NavControl"
import Image from "next/image"
export default function Nav() {
    return (
        
        <div className="navbar">
            <div className="logo">Tbilisi E</div>
            <div className="navcontrols"> 
               <div className="navcontrolswrapper">
                <div><NavControl text="institution" background="black" color="white"></NavControl></div>
                <div><NavControl text="Personal" background="white" color="black"></NavControl></div>
                <div className="searchbar">
                    <form>
                    <input type="text" placeholder="Search"></input>
                    <button type="submit"><Image src="./Group 1.svg" alt="" width={17} height={18} /></button>
                    </form>
                </div>
                </div>
            </div>
           
    
        </div>
      
    )
  }
  