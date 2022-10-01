import React from 'react'
import "./Navigation.css"
import hamburger from "../images/icon-hamburger.svg"

const Navigation = () => {
  return (
    <nav>
        <h1 className="logo">sunnyside</h1>
        <img src={hamburger} alt="hamburger-menu" className='hamburger-menu'/>
    </nav>
  )
}

export default Navigation