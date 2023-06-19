import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'


const Socials = () => {

  return (
    <div className='socials' data-aos="zoom-out-left">
        <a href="https://www.instagram.com/jsnflix/" target='_blank' rel="noreferrer" className='social__icon'><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/webflex/" target='_blank' rel="noreferrer" className='social__icon'><BsLinkedin /></a>
        <a href="https://github.com/jasondev01" target='_blank' rel="noreferrer" className='social__icon'><FaGithub /></a>
        <a href="https://twitter.com/jsnflix" target='_blank' rel="noreferrer" className='social__icon'><BsTwitter /></a>
    </div>
  )
}

export default Socials
