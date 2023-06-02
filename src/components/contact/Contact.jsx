import React from 'react'
import './contact.css'
import { SiMinutemailer } from 'react-icons/si'
import { RiMessengerFill } from 'react-icons/ri'
import { RiWhatsappFill } from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Contact = () => {

  useEffect(() => {
    AOS.init({duration:1000})
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = e.target.elements;

    let hasEmptyField = false;

    if (!name.value) {
      name.style.borderColor = 'red';
      hasEmptyField = true;
    } else {
      name.style.borderColor = '';
    }

    if (!email.value) {
      email.style.borderColor = 'red';
      hasEmptyField = true;
    } else {
      email.style.borderColor = '';
    }

    if (!subject.value) {
      subject.style.borderColor = 'red';
      hasEmptyField = true;
    } else {
      subject.style.borderColor = '';
    }

    if (!message.value) {
      message.style.borderColor = 'red';
      hasEmptyField = true;
    } else {
      message.style.borderColor = '';
    }

    if (hasEmptyField) {
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      email.style.borderColor = 'red';
      return;
    }

    emailjs.sendForm('service_pihc4ad', 'template_6cymg67', form.current, 'PDUdg0JdDTMFftncl')
    .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        form.current.reset();
    }, (error) => {
        console.log(error.text);
    });
  };

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
            <a href="mailto:jsnrbn01@gmail.com" target='_blank'>
              jsnrbn01@gmail.com
            </a>
          </article>
          <article className="contact__option" data-aos="fade-right">
            <div className="contact__option-header">
              <RiMessengerFill className='contact__option-icon'/> 
              <h4>Messenger</h4>
            </div>
            <a href="https://m.me/iwnn.dye" target='_blank'>
              m.me/iwnn.dye
            </a>
          </article>
          <article className="contact__option" data-aos="fade-right">
            <div className="contact__option-header">
              <RiWhatsappFill className='contact__option-icon'/> 
              <h4>WhatsApp</h4>
            </div>
            <a href="https://api.whatsapp.com/send?phone=639752276475" target='_blank'>
              +63 975 227 6475
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
