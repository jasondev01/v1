import React, { useEffect } from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/header_me.png'
import Socials from './Socials'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from './Nav'

const Header = () => {


  useEffect(() => {
    AOS.init({duration:800})
  }, []);

  return (
    <header id='header'>
      <Nav /> 
      <div className="container header__container" >
        <div className="header__me-content">
          <div className="header__me-intro" >
            <span data-aos="fade-right" data-aos-delay="100">Hello there, I am</span>
            <h1 data-aos="fade-right" data-aos-delay="200">Jason Ruben</h1>
            <p className='text-light' data-aos="fade-right" data-aos-delay="300">
              A highly motivated amateur freelance web developer with a passion for creating dynamic, user-friendly websites and applications.
            </p>
            <CTA/>
          </div>
          <div className="header__me-image" data-aos="zoom-out-left" data-aos-delay="200">
            <img src={ME} alt="A Picture of Jason Ruben looking down" width={100} />
          </div>
          <Socials />
          <a href="#about" className='scroll_down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header
