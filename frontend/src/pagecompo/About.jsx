import React, { useEffect, useState } from 'react';
import '../css/About.css';

export const About = () => {
  const [data, setData] = useState({});
useEffect(() => {
  fetch('http://localhost:3000/about')
 
    .then(res => res.json())
    .then(info => setData(info))
    .catch(err => console.error('Error fetching about data:', err));
}, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text" data-aos="zoom-in-up">
          <h3 className="about-subtitle">About Me</h3>
          <h1 className="about-title">{data.title}</h1>
          <p className="about-description">{data.description}</p>
         
           <a href="/cv.pdf" download className="download-btn">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Download CV <i className="bi bi-download"></i>
    </a>
        </div>

        <div className="about-image-wrapper" data-aos="zoom-in-up">
          <div className="image-border"></div>
          <img src="./images/myimg.png" alt="Sachithananthan" className="about-image"  height='300px'  />
        </div>
      </div>
    </section>
  );
};
