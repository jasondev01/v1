import React, { useEffect } from 'react'
import './projects.css'
import { featuredData } from './featuredData'
import { RiGithubLine } from 'react-icons/ri'
import { FiExternalLink } from 'react-icons/fi'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Project = () => {

    useEffect(() => {
        AOS.init({duration:1000})
    }, []);

    return (
        <section id='projects'>
            <h5 data-aos="fade-up">Things I Built</h5>
            <h2 data-aos="fade-up">Projects</h2>
            <div className='container projects__container'>
                {
                featuredData.map( ({image, title, demo, github, details, tech}, index) => {
                    return (
                        <div key={index} className='project__container'>

                            <div className='project__image-container' data-aos="fade-up">
                                <a href={demo} target='_blank' rel="noreferrer" className='project__image' >
                                    <img src={image} alt="Project Movie App" width={100} height={100}/>
                                </a>
                            </div>

                            <article className='project__content' data-aos="fade-right" data-aos-offset="300">
                                <h5 className='text-primary'>Featured Project</h5>
                                <a href={demo} target='_blank' rel="noreferrer">
                                    <h3>{title}</h3>
                                </a>
                                <div className='project__content-details'>
                                    <p className='text-light'>
                                        {details}
                                    </p>
                                </div>
                                <ul className='project__content-techs'>
                                {
                                tech.map( (item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })
                                }
                                </ul>
                                <div className='project__links'>
                                <a href={github} target='_blank' rel="noreferrer"><RiGithubLine className='project__link-icon'/></a>
                                <a href={demo} target='_blank' rel="noreferrer"><FiExternalLink className='project__link-icon'/></a>
                                </div>
                            </article>

                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}

export default Project
