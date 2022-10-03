import React, {useState} from 'react'
import "./Navigation.css"
import hamburger from "../images/icon-hamburger.svg"

const Navigation = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <nav>
        <h1 className="logo">sunnyside</h1>
        
        <img
          src={hamburger}
          alt="hamburger-menu"
          className='hamburger-menu'
          onClick={() => setHidden(prev => !prev) }/>
        <ul className={hidden ? "mobile-menu hidden" : "mobile-menu"}>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className='contact-mobile'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation