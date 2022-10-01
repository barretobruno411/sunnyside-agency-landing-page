import React from 'react'
import "./Header.css"
import Navigation from "./Navigation"
import arrow from "../images/icon-arrow-down.svg"

const Header = () => {
  return (
    <header>
        <Navigation />
        <h1 className='main-text'>WE ARE CREATIVES</h1>
        <img src={arrow} alt="arrow" className='arrow'/>
    </header>
  )
}

export default Header