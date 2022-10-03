import React from 'react'
import Media from "react-media"
import "./Header.css"
import Navigation from "./Navigation"
import NavigationWide from "./NavigationWide"
import arrow from "../images/icon-arrow-down.svg"

const Header = () => {
  return (
    <header>
      <Media queries={{
        small: "(max-width: 599px)",
        large: "(min-width: 600px) and (max-width: 1920px)"
      }}>
        {matches => (
          <>
            {matches.small && <Navigation />}
            {matches.large && <NavigationWide />}
          </>
        )}
      </Media>
        <h1 className='main-text'>WE ARE CREATIVES</h1>
        <img src={arrow} alt="arrow" className='arrow'/>
    </header>
  )
}

export default Header