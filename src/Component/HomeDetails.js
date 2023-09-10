import React from 'react'
import './HomeDetails.css'
import AboutComponent from '../Components/Router/AboutComponent'
import Project from '../Components/Router/Project'
import Contact from '../Components/Router/Contact'

const HomeDetails = () => {
  return (
    <>
      <div className='container'>
        <div className='content'>
            <div className='hero-text'>
              <h1>Front-End React Developer</h1>
              <p>Hi, I'm Md Zahid Khan. A passionate Front-end React Developer based in Pune, India. 📍</p> 
            </div>
            <div className='profile-picture'>
            </div>
        </div>

      </div>
      <AboutComponent />
      <Project />
      <Contact />

        

    
    </>
  )
}

export default HomeDetails