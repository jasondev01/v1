import './about.css'
import ME from '../../assets/about__me.png'
import {RxTriangleRight} from 'react-icons/rx'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    AOS.init({duration:1000})
  }, []);

  return (
    <section id='about' >
      <h5 data-aos="fade-up">Get To Know</h5>
      <h2 data-aos="fade-up">About Me</h2>

      <div className="container about__container">

          <div className="about__me" data-aos="fade-right">
            <div className="about__me-image">
              <img src={ME} alt="Jason Ruben" width={100} />
            </div>

          </div>

          <article className="about__content" >
            <p data-aos="fade-left" data-aos-delay='100'>
              Hello! My name is Jason Ruben, and I am a highly motivated freelance web developer from the Philippines. 
            </p>
            <p data-aos="fade-left" data-aos-delay='200'>
              Before transitioning into web development, I spent two years working as a Virtual Assistant. While this experience provided valuable skills, I realized that my true passion lay in the world of web development. Determined to shift my career and pursue my dreams, I enrolled in an online bootcamp to gain the necessary knowledge and skills.
            </p>
            <p data-aos="fade-left" data-aos-delay='300'>
              I am a passionate web developer constantly seeking growth, embracing new technologies, and delivering high-quality solutions. Enthusiastic about the ever-evolving field and excited for future possibilities.
            </p>
            <p data-aos="fade-left" data-aos-delay='400'>
              Some of the technologies I have been working with recently include:
            </p>
            <ul className='about__me-tech text-light' data-aos="zoom-in-up">
              <li><RxTriangleRight className='about__me-tech-icon'/> javascript</li>
              <li><RxTriangleRight className='about__me-tech-icon'/> reactjs </li>
              <li><RxTriangleRight className='about__me-tech-icon'/> nodejs</li>
              <li><RxTriangleRight className='about__me-tech-icon'/> html5 </li>
              <li><RxTriangleRight className='about__me-tech-icon'/> css3</li>
              <li><RxTriangleRight className='about__me-tech-icon'/> taidwindcss</li>
            </ul>
          </article>

      </div>
    </section>
  )
}

export default About
