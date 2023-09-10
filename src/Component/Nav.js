import { useState } from "react";
import './Nav.css'
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";


function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const [nav, setNav] = useState(false);


  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };


  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };
  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className={hamburger ? "Hamburger" : ""}>
        <div className="navbar">
          <Link to="/">
            <p onClick={pageUp}>Zahid.Dev</p>
          </Link>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span>
            {/* mobile */}
            <i onClick={openNav} className="hamburger-menu"><FaBars /></i>
          </span>
        </div>
      </nav>

        {/* mobile nav */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="close-mobile">
            <i><FaTimes /></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav}>
                <a href="#home">Home</a>
              </Link>
            </li>
            <li>
              <Link onClick={openNav}>
                <a href="#about">About</a>
              </Link>
            </li>
            <li>
              <Link onClick={openNav}>
                <a href="#projects">Projects</a>
              </Link>
            </li>
            <li>
              <Link onClick={openNav}>
                <a href="#contact">Contact</a>
              </Link>
            </li>
          </ul>
        </div>


    </>
  );
}

export default Navbar;
