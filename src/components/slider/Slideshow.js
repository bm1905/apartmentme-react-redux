import React from 'react';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
    `{process.env.PUBLIC_URL}` + '/img/login-image.jpg',
    `{process.env.PUBLIC_URL}` + '/img/register-image.jpg',
    `{process.env.PUBLIC_URL}` + '/img/create-rental.jpg'
  ];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}