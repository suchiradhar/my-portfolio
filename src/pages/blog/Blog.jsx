import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';

import blogimageOne from '../../assets/blogimageOne.jpg';
import blogimageTwo from '../../assets/blogimageTwo.jpg';
import blogimageThree from '../../assets/blogimageThree.jpg';

import './Blog.css';


const Blog = () => {
  return (
    <div className='blog' id='blog'>
        <div className='blog__heading'>
            <h2 className="section__title text-cs">Blog</h2>
            <p className="section__subtitle">
            My <span>Articles</span>
            </p>
        </div>
      
    <div className='blog__container container'>
        <Link to="/blog/professional-headshot" className='blog__item card-one'>
            <img src={blogimageOne} alt="" className="blog__img" />
            <span className='blog__date text-css'>October 3, 2024</span>
            <h3 className='blog__title'>Professional Headshot</h3>
            <p className='blog__description'>For this photograph, a room was selected with good natural lighting and a clean, non-distracting white background to enhance focus on the subject. 
                                            The subject was positioned between two windows to utilize the natural light...</p>
            <div className='blog__cardlink'>
                <span className='link__text'>Read More</span>
                <FaArrowRight className='link__icon'></FaArrowRight>
            </div>
        </Link>

        <Link to="/blog/aesthetic-shot" className='blog__item card-two'>
            <img src={blogimageTwo} alt="" className="blog__img" />
            <span className='blog__date text-css'>October 7, 2024</span>
            <h3 className='blog__title'>Aesthetic Shot</h3>
            <p className='blog__description'>This photograph aims to capture a quiet, celebratory moment with emotional depth. 
                                            The lighting and composition evokes a sense of solace and resilience, capturing not just a moment but the warmth and hope that can arise even in solitude...</p>
            <div className='blog__cardlink'>
                <span className='link__text'>Read More</span>
                <FaArrowRight className='link__icon'></FaArrowRight>
            </div>
        </Link>

        <Link to="/blog/tellastory-shot" className='blog__item card-three'>
            <img src={blogimageThree} alt="" className="blog__img" />
            <span className='blog__date text-css'>October 3, 2024</span>
            <h3 className='blog__title'>Tell-a-Story Shot</h3>
            <p className='blog__description'>The picture above reflects my passion for music and writing. 
                                            I like to spend time in nature with my books, pens, colors, guitar and iPad. 
                                            Through this picture, I also want to demonstrate the importance of finding balance and harmony with nature...</p>
            <div className='blog__cardlink'>
                <span className='link__text'>Read More</span>
                <FaArrowRight className='link__icon'></FaArrowRight>
            </div>
        </Link>
    </div>


    </div>
  );
};

export default Blog;
