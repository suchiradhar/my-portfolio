import React from 'react';
import aboutimg from "../../assets/aboutme.jpg";

import './About.css';

const About = () => {
  return (
    <div className='about' id='about'> {/* Main container for the About section */}
        <div className='about__heading'> {/* Heading container for the section */}
            <h2 className="section__title text-cs">About</h2> {/* Main title of the section */}
            <p className="section__subtitle"> {/* Subtitle providing additional context */}
            My <span>Story</span> {/* Highlighted part of the subtitle */}
            </p>
        </div>

        <div className='about__content container'> {/* Content area containing the image and description */}
            <div className='about__image-wrapper'> {/* Wrapper for the profile image */}
                <img src={aboutimg} alt="" className='about__image' /> {/* Profile image */}
            </div>
            <p className='about__description'> {/* Description paragraph detailing the designer's background */} 
                    Hi, I am Suchira, a passionate UX Designer with over 6 years of experience creating user-centered designs.
                    My mission is to build intuitive and engaging digital experiences that bridge the gap between technology and human interaction. 
                    From wireframing in Figma to creating immersive AR/VR environments in Unity, I thrive in transforming ideas into meaningful designs.</p>

        </div>
        
    </div>
  );
};

export default About;
