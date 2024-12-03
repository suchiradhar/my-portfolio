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
            Hi, I'm Suchira, a UX designer with over a decade of professional experience, blending creativity and strategy to design user-centric solutions. My journey in design spans startups, multinationals, and the tech-driven world of AI, where I've contributed to building compelling brand identities and seamless digital experiences. Currently pursuing a master's in Interaction and Experience Design at the University of Limerick, I am committed to exploring innovative solutions that bridge human needs with technological advancements.
            </p>

            <p className='about__description'> {/* Description paragraph detailing the designer's background */}
            Throughout my career, I've honed a diverse skill set in tools like Figma, Adobe Creative Suite, Miro, Notion, HTML CSS and currently Maya, Unity and Javascript. My passion lies in crafting intuitive interfaces and experiences that inspire, engage, and make a difference in the world, building products that enhance human lives with sustainability. Whether working on responsive web designs, AR/VR experiences, or branding projects, I approach every challenge with creativity and a user-first mindset.
            </p>

            <p className='about__description'> {/* Description paragraph detailing the designer's background */}
            As a student ambassador at UL, I enjoy connecting with people, sharing insights, and inspiring others to pursue their creative ambitions. Outside the world of design, I love exploring museums, rowing, music and capturing moments of daily life. I enjoy writing poetry, journalling and learning about personal growth and balance. 
            This portfolio reflects not only my skills but also my passion for innovation and storytelling through design. It’s my way of showing how creativity and technology can work together to create meaningful impacts.
            </p>

        </div>
        
    </div>
  );
};

export default About;
