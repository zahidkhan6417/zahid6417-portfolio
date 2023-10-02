import React from 'react'
//import Navbar from '../../Component/Navbar'
//import HomeDetails from '../../Component/HomeDetails'
import Nav from "../../Component/Nav"
import AboutComponent from './AboutComponent'
import Project from './Project'
import Contact from './Contact'
import HomePage from "../../Component/HomePage"

const Home = () => {
  return (
    <div>
        {/*<Navbar />*/}
        <Nav />
        <HomePage />
        <AboutComponent />
        <Project />
        <Contact />
    </div>
  )
}

export default Home