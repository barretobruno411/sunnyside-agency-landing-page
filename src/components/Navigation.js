import React from 'react'
import "./Navigation.css"
import hamburger from "../images/icon-hamburger.svg"

const Navigation = () => {
  return (
    <nav>
        <h1 className="logo">sunnyside</h1>
        
        <img src={hamburger} alt="hamburger-menu" className='hamburger-menu'/>
        <ul className='mobile-menu hidden'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className='contact'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation