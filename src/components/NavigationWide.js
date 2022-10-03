import React from 'react'
import "./NavigationWide.css"

const Navigation = () => {
  
  return (
    <nav>
        <h1 className="logo">sunnyside</h1>
        <ul className='desktop-ul'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className='contact'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation