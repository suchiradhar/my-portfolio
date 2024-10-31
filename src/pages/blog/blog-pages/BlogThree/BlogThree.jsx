// Importing React library for building the component
import React from 'react';

// Importing the blog image from assets
import blogimageThree from '../../../../assets/blogimageThree-fullsize.jpg';

// Importing the CSS stylesheet for Blog Three
import './BlogThree.css';

// Defining the BlogPostThree functional component
const BlogPostThree = () => {
  return (

        /* Container for the entire blog post content */
        <div className='blogpost__container'>
            <h2 className='section__title'>Tell-a-story Shot</h2>

            {/* Main content wrapper for the blog post */}
            <div className='blogpost__content container'>
              <img src={blogimageThree} alt="Professional Headshot" className="blogpost__imgThree" />
              
              {/* Container for the detailed content of the blog post */}
              <div className='blog__content container'>

                {/* Container for image specifications */}
                <div className='img__specscontainer container'>
                  <h4 className='img__heading'>Image Specs</h4>
                  <p className='img__specs'>
                      Lens Model: iPhone 15 Pro back triple camera 6.765mm f/1.78 | 
                      Focal Length: 6.8 | 
                      Aperture: 1.696 | 
                      Shutter Speed: 1/244 | 
                      ISO: 80
                  </p>
                </div>

                {/* Container for the process description */}
                <div className='img__processcontainer container'>
                  <h4 className='img__heading'>Process</h4>

                  {/* Paragraphs for the photography process */}
                  <p className='img__process'>
                                        The picture above reflects my passion for music and writing. 
                                        I like to spend time in nature with my books, pens, colors, guitar and iPad. 
                                        Through this picture, I also want to demonstrate the importance of finding balance and harmony with nature.
                                        The photograph was taken in natural light. 
                                        For this shot, the process began with scouting a location the day before. 
                                        Choosing an empty green space with natural grass was important for a top shot to ensure that all the elements fit inside the frame.
                                        Early in the morning, I arrived at the spot with two of my friends who offered to take the picture for me.
                  </p>

                  <p className='img__process'>
                                        The shot was taken from the top as my friend stood on a bench.
                                        The soft natural light due to a cloudy sky was sufficient for the shot.
                                        The iPhone 15 Pro stands out with its impressive triple-camera system. 
                                        I set the focal length to 6.8mm to provide clarity and depth, while maintaining subject sharpness. 
                                        The iPhone camera lens, with an aperture of f/1.8, excels in low-light conditions.
                                        The ISO sensitivity set at 80 minimizes noise, enhancing image quality, especially in brighter conditions. 
                                        The aim in this process was to obtain a well-exposed photograph, while the camera's automatic exposure perfectly adjusted to the lighting environment.
                  </p>

                  <p className='img__process'>
                                        The image is optimized for websites and other digital uses.
                                        During post-production, I used Affinity to colour correct the image by adjusting the vibrance and saturation levels.
                                        I also adjusted the curves to balance out the blacks, whites and greys in the image.
                                        Overall, the camera of iPhone 15 is great for amateur and professional photographers, and natural photography provides great results.
                  </p>
                </div>
              </div>
            </div>
        </div>
  );
};

export default BlogPostThree