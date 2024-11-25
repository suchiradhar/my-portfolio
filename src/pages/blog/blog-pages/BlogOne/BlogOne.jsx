import React, { useState } from "react";
import AddPostForm from "../../../../features/posts/addPostForm";
import PostsList from "../../../../features/posts/postsList";

// Importing the blog image from assets
import blogimageOne from '../../../../assets/blogimageOne-fullsize.jpg';

// Importing the CSS stylesheet for Blog One
import './BlogOne.css';

// Defining the BlogPostOne functional component
const BlogPostOne = () => {
  return (
       
        /* Container for the entire blog post content */
        <div className='blogpost__container'>
            <h2 className='section__title'>Professional Headshot</h2>
            
            {/* Main content wrapper for the blog post */}
            <div className='blogpost__content'>
              <img src={blogimageOne} alt="Professional Headshot" className="blogpost__imgOne" />
              
              {/* Container for the detailed content of the blog post */}
              <div className='blog__content container'>
                
                {/* Container for image specifications */}
                <div className='img__specscontainer container'>
                  <h4 className='img__specsheading'>Image Specs</h4>
                  <p className='img__specs'>
                  Focal length: FE 35mm | 
                  Lens: Sony A7C
                  Aperture: f/2.8 | 
                  ISO: 320 | 
                  Exposure: 0 | 
                  Shutter speed: 1/40
                  </p>
                </div>

                {/* Container for the process description */}
                <div className='img__processcontainer container'>
                  <h4 className='img__heading'>Process</h4>
                  
                  {/* Paragraphs for the photography process */}
                  <p className='img__process'>
                                        For this photograph, a room was selected with good natural lighting and a clean, non-distracting white background to enhance focus on the subject.
                                        The subject was positioned between two windows to utilize the natural light. A small hand torch with soft white light was held at the bottom of the face to focus light on the face and minimize harsh shadows.
                  </p>

                  <p className='img__process'>
                                        The camera was set at eye level and the subject's face was positioned to fill the frame appropriately. 
                                        Some space was allowed above the head for a balanced composition. 
                                        For the camera, a Sony DSLR was used with the settings of 35mm lens and set to f/2.8 for a shallow depth of field. 
                                        The ISO was set to 320 and a shutter speed of 1/40s was used with 0ev exposure.
                  </p>

                  <p className='img__process'>
                                        Adopting a natural expression, multiple shots were taken to provide a variety of options.
                                        In post production using Affinity, the images were imported to adjust exposure, contrast, and color balance. 
                                        Facial retouch was necessary to enhance the final image.
                                        Using blend mode and spot removal brush tools, the skin tone was made even and blemishes were removed wherever necessary.
                                        Colour balance and exposure was improved with the image cropped and rotated to provide a professional shot that fit in the frame perfectly.
                                        The under-eye dark areas were cleaned up to provide sharpness to the eyes. 
                                        Final check for sharpness was made, especially in the eyes.
                  </p>
                </div>
              </div>
            </div>

            <div className="comments__container container">
              <AddPostForm />
              <PostsList />
            </div>
            
        </div>
  );
};

export default BlogPostOne