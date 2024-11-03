// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css';
import Mail from '/assets/Icons/icons8-gmail-64.png'
import Linkedin from '/assets/Icons/icons8-linkedin-64.png'
import Github from '/assets/Icons/icons8-github-64.png'

const Footer = () => {
  return (
    <>
    <footer className='main-footer'>
      <div className="social-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="social-links">
        <div>
          <a href="">
            <img src={Mail} alt="Mail" className="mail-icon" />
          </a>
        </div>
        <div>
          <a href="">
            <img src={Linkedin} alt="Linkedin" className="linkedin-icon" />
          </a>
        </div>
        <div>
          <a href="">
            <img src={Github} alt="Github" className="github-icon" />
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer