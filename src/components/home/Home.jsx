import React from 'react';
import profileimg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaBehance, FaDribbble, FaLinkedin, FaMedium } from "react-icons/fa";

import './Home.css';

const Home = () => {
    return (
        <section className='home' id='home'>
            <div className="home__wrapper">
                <div className="home__container container">
                <p className="home__subtitle text">HELLO, <span>MY NAME IS</span>
                </p>

                    <h1 className="home__title text-cs">
                        <span>SUCHIRA</span>
                    </h1>

                    <p className='home__job'>
                        <span className="text-cs">I am a <b>Product Designer</b></span>
                    </p>

                    <div className='home__img-wrapper'>
                        <div className="home__banner">
                            <img src={profileimg} alt="" className='home__profile' />
                        </div>

                        <p className='home__data home__data-one'>
                            <span className='text-lg'>4<b>+ </b>
                            </span>

                            <span className='text-sm text-cs'>
                                Years of <span>Experience</span>
                            </span>
                        </p>

                        <p className='home__data home__data-two'>
                            <span className='text-lg'>60 <b></b>
                            </span>

                            <span className='text-sm text-cs'>
                                Completed <span>Projects</span>
                            </span>
                        </p>

                        <img src={shapeOne} alt='' className='shape shape__1'></img>
                        <img src={shapeTwo} alt='' className='shape shape__2'></img>
                        <img src={shapeTwo} alt='' className='shape shape__3'></img>

                    </div>

                    <p className='home__text'>
                        Currently based in Ireland. As a Masters student at the University of Limerick, my disciplines of study include Mobile Interactions, 3D Modelling & Animation, AR/VR, and Human Computer Interaction.
                    </p>

                    <div className="home__socials">
                        <a href="https://www.linkedin.com/in/suchiradhar/" target="_blank" rel="noopener noreferrer" className="home__social-link">
                            <FaLinkedin />
                        </a>

                        <a href="https://www.behance.net/suchiradhar" target="_blank" rel="noopener noreferrer" className="home__social-link">
                            <FaBehance />
                        </a>

                        <a href="https://dribbble.com/suchira" target="_blank" rel="noopener noreferrer" className="home__social-link">
                            <FaDribbble />
                        </a>

                        <a href="https://medium.com/@suchira" target="_blank" rel="noopener noreferrer" className="home__social-link">
                            <FaMedium />
                        </a>
                    </div>

                    <div className='home__btns'>
                             <a href='./public/resume.pdf' download className='btn text-cs'>
                                Download Resume
                            </a>

                            <a href='#contact' className='hero__link text-cs'>
                                Contact me
                            </a>
                    </div>
            
                </div>
            </div>
         
        </section>
    )
}

export default Home