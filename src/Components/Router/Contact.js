import React, {useState} from 'react';
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import{MdEmail} from 'react-icons/md'
import {AiOutlineDownload,AiOutlineSend,AiFillGithub,AiFillHeart} from "react-icons/ai"
import './Contact.css'
import axios from 'axios'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const googleDriveFileId = '1f6_sCbuUkzz3M61YZk9Z6NyiS8CSX5k0'

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('http://localhost:3001/send-email', { name, email, message });
      setShowPopup(true)
      setName('')
      setEmail('')
      setMessage('')

      setTimeout(() =>{
        setShowPopup(false)
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };



  return (
    <div id="contact">
        <div className="containerrs">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <p><i><MdEmail width={20} height={20} /></i> zahidkhan8102@gmail.com</p>
                    <p><i><FaPhone /></i> +91 9097343935</p>
                    <p><i><FaMapMarkerAlt /></i> Pune, India</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/__zahid_khan__/"><i><FaInstagram /></i></a>
                        <a href="https://github.com/zahidkhan6417"><i><AiFillGithub/></i></a>
                        <a href="https://www.linkedin.com/in/md-zahid-khan/"><i><FaLinkedin /></i></a>
                        <a href="https://twitter.com/ZahidKhan6417/"><i><FaTwitter /></i></a>
                    </div>
                    <a href={`https://drive.google.com/uc?export=download&id=${googleDriveFileId}`} className="btn2">Download CV<AiOutlineDownload /></a>
                </div>
                <div className="contact-right">
                  <div className={`popup ${showPopup ? 'show' : ''}`}>
                  <p>Email sent successfully</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                  <input
                      type="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                    <button type="submit" className='btn'>Send <AiOutlineSend /></button>
                  </form>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright © 2023. All rights are reserved<i><AiFillHeart /></i> <br/><br/>by Zahid Khan</p>
        </div>
    </div>
  );
};

export default Contact;