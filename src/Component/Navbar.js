import React, {useState,useEffect} from 'react'
import { Link,useLocation } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [nav, setNav] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY
        if(offset > 150) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    window.addEventListener("scroll",  handleScroll)

    const handleScrollToSection = (event,sectionId) => {
        event.preventDefault()
        const section = document.getElementById(sectionId)
        if (section){
            section.scrollIntoView({behavior:'smooth'})
        }
    }
    const goTop = () => {
        window.scrollTo({
          top: (0, 0),
          behavior: "smooth",
        });
      };
    const openNav = () => {
        setNav(!nav);
    };

    return (
    <>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="header">
                <Link to='/'>
                    <h1  onClick={goTop} className="logo"><a href="#">zahid.dev</a></h1>
                </Link>
                <ul className={click ? "nav-menu active" :"nav-menu"}>
                    <li>
                        <a href="#home" onClick={(e) => {
                            handleScrollToSection(e, 'home')
                            goTop()
                        }}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')}>
                            Project
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')}>
                            Contact
                        </a>
                    </li>

                </ul>
                {/* mobile */}
                <span>
                    <i onClick={openNav} className="hamburger-menu"><FaBars /></i>
                </span>
            </div>
        </nav>
        {/* mobile nav */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
            <div onClick={openNav} className="close-mobile">
                <i className='hamburger-cross'><FaTimes /></i>
            </div>
            <ul className="mobile-navbar__links">
                <li>
                    <Link onClick={openNav}>
                        <a href="#home" onClick={(e) => {
                            handleScrollToSection(e, 'home')
                            goTop()
                        }}>Home</a>
                   </Link>
                </li>
                <li>
                    <Link onClick={openNav}>
                        <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')}>About</a>
                    </Link>
                </li>
                <li>
                    <Link onClick={openNav}>
                      <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')}>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link onClick={openNav}>
                        <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')}>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>        
    </>
  )
}

export default Navbar