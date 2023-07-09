import React from 'react'
import './footer.css'
import logo from '../../assets/favicon.png'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Footer = () => {

  useEffect(() => {
    AOS.init({duration:1000})
  }, []);

  return (
    <section id='footer'>
      <div className="container footer__container">
        <div className="footer__logo" data-aos='zoom-in' data-aos-delay='100'>
          <a href="#header">
            <img src={logo} alt="Footer Logo" width={100} />
          </a>
        </div>
        <ul className='footer__socials'>
          <li className='footer__social' data-aos='zoom-in' data-aos-delay='200' data-aos-anchor-placement="bottom-bottom">
            <a href="https://www.instagram.com/jsnflix/" target='_blank' rel="noreferrer">
              <BsInstagram className='footer__social-icon' />
            </a>
          </li>
          <li className='footer__social' data-aos='zoom-in' data-aos-delay='300' data-aos-anchor-placement="bottom-bottom">
            <a href="https://www.linkedin.com/in/webflex/" target='_blank' rel="noreferrer">
              <BsLinkedin className='footer__social-icon'/>
            </a>
          </li>
          <li className='footer__social' data-aos='zoom-in' data-aos-delay='400' data-aos-anchor-placement="bottom-bottom">
            <a href="https://twitter.com/jsnflix" target='_blank' rel="noreferrer">
              <BsTwitter className='footer__social-icon'/>
            </a>
          </li>
          <li className='footer__social' data-aos='zoom-in' data-aos-delay='500' data-aos-anchor-placement="bottom-bottom">
            <a href="https://github.com/jasondev01" target='_blank' rel="noreferrer">
              <BsGithub className='footer__social-icon'/>
            </a>
          </li>
        </ul>
        <p data-aos='zoom-up' data-aos-delay='500' data-aos-anchor-placement="bottom-bottom">
          &copy; Designed & Built by Jason Ruben. All Rights Reserved 2023
        </p>
      </div>
    </section>
  )
}

export default Footer
