import React from 'react'
import './projects.css'
import P1 from '../../assets/project1.png'
import P2 from '../../assets/project2.png'
import P3 from '../../assets/project3.png'
import { RiGithubLine } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Projects = () => {

  useEffect(() => {
    AOS.init({duration:1000})
  }, []);

  return (
    <section id='projects'>
      <h5 data-aos="fade-up">Things I Built</h5>
      <h2 data-aos="fade-up">Projects</h2>
      <div className='container projects__container'>

        <div className='project__container'>
          <div className='project__image-container-second' data-aos="fade-up">
            <a href='https://mini-project2-4h978tdj9-jsnflix.vercel.app/' target='_blank' className='project__image' >
              <img src={P1} alt="" />
            </a>
          </div>

          <article className='project__content-second' data-aos="fade-right" data-aos-offset="300">
            
            <h5 className='text-primary'>Featured Project</h5>
            <a href="https://mini-project2-4h978tdj9-jsnflix.vercel.app/" target='_blank'>
              <h3>Movie App</h3>
            </a>
            <div className='project__content-details-second'>
              <p className='text-light'>
                Netflix-inspired movie web app with Trending, Top Rated, Popular, Upcoming, and Latest Movies. Dynamic pages provide detailed information, and there's a search function powered by themoviedb API.
              </p>
            </div>
            <ul className='project__content-techs-second'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>WebAPI</li>
              <li>SwiperJs</li>
              <li>Vercel</li>
            </ul>

            <div className='project__links-second'>
              <a href="https://github.com/jasondev01/MiniProject2" target='_blank'><RiGithubLine className='project__link-icon'/></a>
              <a href="https://mini-project2-4h978tdj9-jsnflix.vercel.app/" target='_blank'><FiExternalLink className='project__link-icon'/></a>
            </div>
            
          </article>
        </div>
        {/* END OF THE FIRST PROJECT  1*/}

        <div className='project__container'>

          <div className='project__image-container' data-aos="fade-up">
            <a href='https://mini-project1-mu.vercel.app/' target='_blank' className='project__image'>
              <img src={P2} alt="" />
            </a>
          </div>

          <article className='project__content' data-aos="fade-left" data-aos-offset="300">
            
            <h5 className='text-primary'>Featured Project</h5>
            <a href="https://mini-project1-mu.vercel.app/" target='_blank'>
              <h3>Ecommerce Website</h3>
            </a>
            <div className='project__content-details'>
              <p className='text-light'>
                This is a product-centric multipage e-commerce website that exclusively focuses on selling computer-related items. The website features three main categories: Computer Cards, Desktops, and Accessories.
              </p>
            </div>
            <ul className='project__content-techs'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap5</li>
              <li>JavaScript</li>
              <li>Vercel</li>
            </ul>

            <div className='project__links'>
              <a href="https://github.com/jasondev01/MiniProject1" target='_blank'><RiGithubLine className='project__link-icon'/></a>
              <a href="https://mini-project1-mu.vercel.app/" target='_blank'><FiExternalLink className='project__link-icon'/></a>
            </div>
            
          </article>
        </div>
        {/* END OF THE SECOND PROJECT  2*/}

        <div className='project__container'>
          <div className='project__image-container-second' data-aos="fade-up">
            <a href='https://jasondev01.github.io/react-project' target='_blank' className='project__image'>
              <img src={P3} alt="" />
            </a>
          </div>

          <article className='project__content-second' data-aos="fade-right" data-aos-offset="300">
            
            <h5 className='text-primary'>Featured Project</h5>
            <a href="https://jasondev01.github.io/react-project" target='_blank'>
              <h3>Mockup Portfolio</h3>
            </a>
            <div className='project__content-details-second'>
              <p className='text-light'>
              The portfolio application I developed using React incorporates dynamic components that allow for easy editing. The app leverages the useState and useEffect hooks to manage state and handle side effects.
              </p>
            </div>
            <ul className='project__content-techs-second'>
              <li>React</li>
              <li>CSS3</li>
              <li>SwiperJs</li>
              <li>EmailJs</li>
              <li>WhatsApp API</li>
              <li>GitHub</li>
            </ul>

            <div className='project__links-second'>
              <a href="https://github.com/jasondev01/react-project" target='_blank'><RiGithubLine className='project__link-icon'/></a>
              <a href="https://jasondev01.github.io/react-project" target='_blank'><FiExternalLink className='project__link-icon'/></a>
            </div>
            
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
