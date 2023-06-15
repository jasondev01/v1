import React, { useState } from 'react'
import './contact.css'
import { SiMinutemailer } from 'react-icons/si'
import { RiMessengerFill } from 'react-icons/ri'
import { RiWhatsappFill } from 'react-icons/ri'
import { useRef } from 'react'
import sendEmail from './validationUtils'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Contact = () => {

  useEffect(() => {
    AOS.init({duration:1000})
  }, []);

  const form = useRef(null);
  const [ failed, setFailed ] = useState(false)
  const [ success, setSuccess ] = useState(false)

  const handleSubmit = (e) => {
    sendEmail(e, setFailed, setSuccess, form);
  }

  return (
    <section id='contact' className='contact'>
      <h5 data-aos="fade-up">Get In Touch</h5>
      <h2 data-aos="fade-up">Contact Me</h2>
      <p data-aos="fade-up">
          If you believe my skills and experience align with your needs, please do not hesitate to contact me.
      </p>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option" data-aos="fade-right">
            <div className='contact__option-header'>
              <SiMinutemailer className='contact__option-icon'/> 
              <h4> Email</h4>
            </div>
            <a href="mailto:jsnrbn01@gmail.com" target='_blank' rel="noreferrer">
              jsnrbn01@gmail.com
            </a>
          </article>
          <article className="contact__option" data-aos="fade-right">
            <div className="contact__option-header">
              <RiMessengerFill className='contact__option-icon'/> 
              <h4>Messenger</h4>
            </div>
            <a href="https://m.me/iwnn.dye" target='_blank' rel="noreferrer">
              m.me/iwnn.dye
            </a>
          </article>
          <article className="contact__option" data-aos="fade-right">
            <div className="contact__option-header">
              <RiWhatsappFill className='contact__option-icon'/> 
              <h4>WhatsApp</h4>
            </div>
            <a href="https://api.whatsapp.com/send?phone=639752276475" target='_blank' rel="noreferrer">
              +63 975 227 6475
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          <div className={`send__failed ${failed ? 'span' : ''}`}>Pleae fill all the field</div>
          <div className={`send__success ${success ? 'span' : ''}`}> Email Sent Successfuly</div>
          <input type="text" name='name' placeholder='Your Full Name' data-aos="fade-left"/>
          <input type="text" name='email' placeholder='Your Email Address' data-aos="fade-left"/>
          <input type="text" name='subject' placeholder='Subject' data-aos="fade-left"/>
          <textarea name="message" rows="8" placeholder='Your Message' data-aos="fade-left"></textarea>
          <button type='submit' className='btn btn-primary' data-aos="fade-left">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
