import React from 'react'
import './others.css'
import { CiFolderOn } from 'react-icons/ci'
import { RiGithubLine } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const data = [
  
  {
    github: 'https://github.com/jasondev01/Tobuy_List_Twist',
    demo: 'https://tobuy-list-twist.vercel.app/',
    title: 'Grocery List',
    preview: 'This is a personal project, and the app serves as a Todo List or Grocery List. To ensure data propagation, I utilized the useState hook. Additionally, I incorporated the use of localStorage for data storage and data manipulation.',
    tech: [ 'CSS3', 'Vite + React', 'Vercel']
  },
  {
    github: 'https://github.com/jasondev01/react-todo',
    demo: 'https://react-todo-jsnflix.vercel.app/',
    title: 'Todo List',
    preview: 'This app serves as the name this serves as the basis for the Grocery List app. This app also utilizes the localStorate for the data storage and data manipulation',
    tech: ['CSS3', 'Bootstrap5', 'React', 'Vercel']
  },
  {
    github: 'https://github.com/jasondev01/my-blog-app',
    demo: 'https://my-blog-app-phi.vercel.app/',
    title: 'React Route Practice Project',
    preview: 'This application serves as a learning tool for me to practice routing in React. It is designed as a mock portfolio showcasing my skills and experience.',
    tech: [ 'React', 'CSS3', 'Bootstrap5', 'Vercel']
  },
  {
    github: 'https://github.com/jasondev01/simple_calculator',
    demo: 'https://simple-calculator-one-livid.vercel.app/',
    title: 'Simple Calculator',
    preview: 'This is a basic calculator application that can perform calculations involving only two numbers simultaneously. The calculator is implemented using JavaScript, which provides the calculation algorithm',
    tech: [ 'HTML5', 'CSS3', 'JavaScript', 'Vercel']
  },
  {
    github: 'https://github.com/jasondev01/MiniProject1',
    demo: 'https://mini-project1-mu.vercel.app/',
    title: 'Ecommerce Website',
    preview: 'This is a product-centric multipage e-commerce website that exclusively focuses on selling computer-related items. The website features three main categories: Computer Cards, Desktops, and Accessories',
    tech: ['React', 'Bootstrap5', 'CSS3', 'Vercel']
  },
  {
    github: 'https://github.com/jasondev01/MiniProject2',
    demo: 'https://mini-project2-4h978tdj9-jsnflix.vercel.app/',
    title: 'Movie App ',
    preview: `Netflix-inspired movie web app with Trending, Top Rated, Popular, Upcoming, and Latest Movies. Dynamic pages provide detailed information, and there's a search function powered by themoviedb API.`,
    tech: [ 'HTML5', 'CSS3', 'JavaScript', 'SwiperJs', 'WebAPI']
  },
]

const Others = () => {

  useEffect(() => {
    AOS.init({duration:1800})
  }, []);

  return (
    <section id='others'>
      <h2 data-aos='fade-up'>Other Projects</h2>
      <div className="container others__container">
      {
        data.map( ({github, demo, title, preview, tech}, index ) => {
          return (
            <div key={index} className="other__container" data-aos="zoom-in">
              <ul className='other__head'>
                <li><CiFolderOn className='other__head-icon'/></li>
                <li className='other__head-links'>
                  <a href={github} target='_blank'><RiGithubLine /></a>
                  <a href={demo} target='_blank'><FiExternalLink /></a>
                </li>
              </ul>
              <article className='other__details'>
                <a href={demo} target='_blank'>
                  <h3>{title}</h3>
                </a>
                <p>{preview}</p>
              </article>
              <ul className='other__tech'>
              {
                tech.map( (item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
              })
              }
              </ul>
            </div> 
          )
        })
        }
      </div>
    </section>
  )
}

export default Others

