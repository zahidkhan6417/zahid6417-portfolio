import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import{MdEmail} from 'react-icons/md'
import {AiOutlineDownload} from "react-icons/ai"

import './ContStyle.css'

const ContactInfo = () => {
  return ( 
    <div className='contact-left'>
      <div className='sub-title'>
          <h2>Need Additional Information</h2>
          <p>
                    A multifaceted professional skilled in multiple fields of
                    research, development as well as a learning specialist. Over 15
                    years of experience.
          </p>
      </div>

      <p><MdEmail />example@gmail.com</p>
      <p><FaPhone /> Phone: Your Phone Number</p>
      <p><FaMapMarkerAlt /> Address: Your Address</p>
      <div class="social-icons">
        <p><FaInstagram /> Instagram: <a href="https://www.instagram.com/your_username/">@your_username</a></p>
        <p><FaFacebook /> Facebook: <a href="https://www.facebook.com/your_username/">@your_username</a></p>
        <p><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/your_username/">@your_username</a></p>
        <p><FaTwitter /> Twitter: <a href="https://twitter.com/your_username/">@your_username</a></p>
        </div>
      <a href="images/my-cv.pdf" download class="btn btn2">Download CV <AiOutlineDownload /></a>                             
    </div>
  )
}


export default ContactInfo;
