import React from 'react'
import "./Footer.css"
import facebook from "../images/icon-facebook.svg"
import instagram from "../images/icon-instagram.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"

const Footer = () => {
  return (
    <footer className='footer-container'>
        <h1>sunnyside</h1>
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
        </ul>
        <div className="social-medias">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
        </div>
    </footer>
  )
}

export default Footer