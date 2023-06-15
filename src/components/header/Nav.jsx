import React from 'react'
import Logo from '../../assets/favicon.png'
import { useState } from 'react'

import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos) {
                setIsNavbarVisible(true);
            } else if ( currentScrollPos === 0 ) {
                setIsNavbarVisible(false);
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const [activeHeadNav, setActiveHeadNav] = useState('#')

    const handleNavItemClick = (navItem) => {
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
        setActiveHeadNav(navItem);
    };

    return (
        <nav className={`navbar ${isNavbarVisible ? 'sticky' : ''}`}>
            <div className={`header__nav-menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={closeMenu} onTouchStart={closeMenu}></div>
            <div className="header__nav-content">
                <div className="nav__logo" data-aos='zoom-in'>
                    <a href="#header">
                        <img src={Logo} alt="logo" width={100} />
                    </a>
                </div>
                <ul className={`header__nav-menu ${isMenuOpen ? 'show' : ''}`}>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='100'>
                        <a href="#header" 
                        onClick={() => handleNavItemClick('#header')} 
                        className={activeHeadNav === '#header' ? 'active' : ''}>
                            Home
                        </a> 
                    </li>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='200'>
                        <a href="#about" 
                        onClick={() => handleNavItemClick('#about')} 
                        className={activeHeadNav === '#about' ? 'active' : ''}>
                            About
                        </a> 
                    </li>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='300'>
                        <a href="#projects" 
                        onClick={() => handleNavItemClick('#projects')} 
                        className={activeHeadNav === '#projects' ? 'active' : ''}>
                            Projects
                        </a> 
                    </li>
                    <li className='header__nav-item'
                        data-aos='zoom-in' 
                        data-aos-delay='400'>
                        <a href="#contact" 
                        onClick={() => handleNavItemClick('#contact')} 
                        className={activeHeadNav === '#contact' ? 'active' : ''}>
                            Contact
                        </a> 
                    </li>
                    <li className='header__nav-item'>
                        <div className='header__nav-social'>
                            <a href="https://www.instagram.com/jsnflix/" target='_blank' rel="noreferrer">
                                <BsInstagram />
                            </a>
                        </div>
                        <div className='header__nav-social'>
                            <a href="https://www.linkedin.com/in/webflex/" target='_blank' rel="noreferrer">
                                <BsLinkedin />
                            </a>
                        </div>
                        <div className='header__nav-social'>
                            <a href="https://twitter.com/jsnflix" target='_blank' rel="noreferrer">
                                <BsTwitter />
                            </a>
                        </div>
                        <div className='header__nav-social'>
                            <a href="https://github.com/jasondev01" target='_blank' rel="noreferrer">
                                <BsGithub />
                            </a>
                        </div>
                    </li>
                    <li className='header__nav-item'>
                        <small>
                            &copy; Built & Designed by Jason Ruben
                        </small>
                    </li>
                </ul>

                <div className={`hamburger ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </div>
        </nav>
    )
}

export default Nav
