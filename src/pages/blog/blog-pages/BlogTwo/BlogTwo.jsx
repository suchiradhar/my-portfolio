import React from 'react';
import blogimageTwo from '../../../../assets/blogimageTwo-fullsize.jpg';

import './BlogTwo.css';

const BlogPostTwo = () => {
  return (
        <div className='blogpost__container'>
            <h2 className='section__title'>Aesthetic Shot</h2>
            <div className='blogpost__content'>
              <img src={blogimageTwo} alt="Professional Headshot" className="blogpost__imgTwo" />
              <div className='blog__content container'>
                <div className='img__specscontainer container'>
                  <h4 className='img__specsheading'>Image Specs</h4>
                    <p className='img__specs'>
                        Lens Model: iPhone 14 back dual wide camera 5.7mm f/1.5 | 
                        Focal Length: 5.7 | 
                        Aperture: 1.17 | 
                        Shutter Speed: 1/14 | 
                        ISO: 2,500
                    </p>
                  </div>
                <div className='img__processcontainer container'>
                  <h4 className='img__heading'>Process</h4>
                  <p className='img__process'>
                    This photograph aims to capture a quiet, celebratory moment with emotional depth. 
                    The lighting and composition evokes a sense of solace and resilience, capturing not just a moment but the warmth and hope that can arise even in solitude.  
                    Shot at the lake near the University of Limerick, the location was perfect with a complete dark background and faint street lamps. 
                    The iPhone 15 with dual camera and auto-exposure is perfect for night shots to capture light and dark photos in such scenarios.
                    Several combinations were tried, including night mode shots.
                    With a focal length of 5.7mm, a large aperture of f/1.5, and an ISO setting of 2500, the setup was well-suited for low-light conditions, allowing ample light to reach the sensor and emphasize the candle-lit subject without washing out the surrounding darkness. 
                    The combination of a large aperture and a shutter speed of 1/14 allowed for a slight, intentional softness in the shot, giving a sense of warmth and tranquility despite the evident cold setting.
                  </p>

                  <p className='img__process'>
                    The positioning of the camera and the choice of lighting were crucial. 
                    Keeping the brightness low, the delicate nuances were captured in shadow and detail, ensuring the candlelight's soft glow highlighted her facial expression without overpowering the ambient darkness. 
                    This contrast between light and shadow was key to focusing on the subject's subtle smile within the frame. 
                    With a low aperture value of 1.17, depth was maintained, making her smile the focal point against a dark backdrop, with details like the fur surrounding her face adding texture that reinforces the feeling of warmth amidst a cold setting.
                  </p>

                  <p className='img__process'>
                    With respect to low-light photography, the camera's auto exposure and normal program mode allowed for seamless adjustments, focusing on maintaining the balance between illumination and shadow.
                    During post production in Affinity, the background was made darker to highlight the subject more.
                    Colour correction, lowering the exposure and adjusting the curves made the photo appear aesthetic with meaning. 
                    This shot attempts to convey an intense, surreal mood and story through light, shadow, and subject placement.
                  </p>
                </div>
              </div>
            </div>
        </div>
  );
};

export default BlogPostTwo;