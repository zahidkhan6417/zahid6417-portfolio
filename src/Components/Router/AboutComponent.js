import React, { useState } from 'react';
import './AboutComponent.css'
import Image3 from '../image/images3.png'


function AboutComponent() {
    const [activeTab, setActiveTab] = useState('skills');
    const tabContents = {
        skills: [
            <ul className='skills'>
                <li><img src='https://skillicons.dev/icons?i=html'title='HTML' alt='html'/></li>
                <li><img src='https://skillicons.dev/icons?i=css'title='CSS' alt='css'/></li>
                <li><img src='https://skillicons.dev/icons?i=js'title='JavaScript' alt='js'/></li>
                <li><img src='https://skillicons.dev/icons?i=react'title='React' alt='react'/></li>
                <li><img src='https://skillicons.dev/icons?i=python'title='Python' alt='python'/></li>
                <li><img src='https://skillicons.dev/icons?i=bootstrap'title='Bootstrap' alt='bootstrap'/></li>
                <li><img src='https://skillicons.dev/icons?i=mysql'title='MYSQL' alt='mysql'/></li>
                <li><img src='https://skillicons.dev/icons?i=scss'title='SCSS' alt='scss'/></li>
                <li><img src='https://skillicons.dev/icons?i=aws'title='AWS' alt='aws'/></li>
                <li><img src='https://skillicons.dev/icons?i=github'title='Github' alt='github'/></li>




            </ul>
        ],
        experience: [
            <ul>
                <li><span>2022 - Current</span><br />Programmer at Cognizant India Pvt.ltd</li>
                <li><span>Achievement/Tasks</span><br />Integrated web applications using JavaScript, Html, Css,and
PEGA( Low code development tool ).<br />Proficiently utilized React to transform the user interface(UI)
within the PEGA platform<br />Implemented dynamic interactions and enhanced
responsiveness through React's component-based approach.<br />Worked with Project Managers, Developers, Quality
Assurance and customers to resolve technical issues.<br />Proficient in Agile methodology, consistently delivering
high-quality results through iterative development and
effective team communication.
</li>
            </ul>
        ],
        education: [
            <ul>
                <li><span>2021-2023</span><br />Master Of Computer Science(M.C.S) from Christ College Pune<br />g.p.a:: 8.9</li>
                <li><span>2018-2021</span><br />Bachelor Of Computer Science(B.C.S) from Christ College Pune<br />Percentage: 83.21%</li>
            </ul>
        ]
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const toggleMobileMenu = () => {
        // Implement the logic to toggle the mobile menu
    };

    return (
        <div id="about">
            <div className="containers">
                <div className="row">
                    <div className="about-col-1">
                        <img src={Image3} alt="mee" className="__main-img"/>
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">ABOUT ME</h1>
                        <p>
                            As a Front-End Developer, I possess an impressive skills in HTML, CSS, JavaScript, React, Python, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                        </p>
                        <div className="tab-titles">
                            <p
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('skills')}
                            >
                                <b>Skills</b>
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('experience')}
                            >
                               <b>Experience</b> 
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('education')}
                            >
                               <b> Education</b> 
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`}>
                            {tabContents.skills}
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`}>
                            {tabContents.experience}
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}>
                            {tabContents.education}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;