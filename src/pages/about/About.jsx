import React from 'react';
import aboutimg from "../../assets/aboutme.jpg";

import './About.css';

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about__heading'>
            <h2 className="section__title text-cs">About</h2>
            <p className="section__subtitle">
            My <span>Story</span>
            </p>
        </div>

        <div className='about__content container'>
            <div className='about__image-wrapper'>
                <img src={aboutimg} alt="" className='about__image' />
            </div>
            <p className='about__description'>Hi, I am Suchira, a passionate UX Designer with over 6 years of experience creating user-centered designs.
                    My mission is to build intuitive and engaging digital experiences that bridge the gap between technology and human interaction. 
                    From wireframing in Figma to creating immersive AR/VR environments in Unity, I thrive in transforming ideas into meaningful designs.</p>

        </div>
        
    </div>
  );
};

export default About;
