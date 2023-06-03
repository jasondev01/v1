import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import resume from '../../assets/resume.pdf'

const CTA = () => {

  useEffect(() => {
    AOS.init({duration:1000})
  }, []);

  return (
    <div className='cta' data-aos="fade-up-right">
      <a href={resume} className='btn' target='_blank'>Resumé</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
