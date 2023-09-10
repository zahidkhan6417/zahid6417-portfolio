import React from 'react';
import './index.css'
import { Routes,Route} from 'react-router-dom'
import Home from './Components/Router/Home';
import Project from './Components/Router/Project';
import AboutComponent from './Components/Router/AboutComponent';
import Contact from './Components/Router/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;
