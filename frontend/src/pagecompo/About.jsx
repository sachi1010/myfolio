import React, { useEffect, useState } from 'react';
import '../css/About.css';

export const About = () => {
  const [About, setAbout] = useState({ title: "", description: "" });

  useEffect(() => {
  fetch('http://localhost:5000/about')
    .then(res => res.json())
    .then(info => setAbout(info))
    .catch(err => console.error('Error fetching about data:', err));
}, []);


  return (
    <section className="about-section" id='about'>
      <div className="about-container">
        <div className="about-text" data-aos="zoom-in-up">
          <h3 className="about-subtitle">About Me</h3>
         <h1 className="about-title">{About?.title || "Loading..."}</h1>
         <p className="about-description">{About?.description || "Please wait..."}</p>


          <a href="http://localhost:5000/cv.pdf" download className="download-btn">
            <span></span><span></span><span></span><span></span>
            Download CV <i className="bi bi-download"></i>
          </a>
        </div>

        <div className="about-image-wrapper" data-aos="zoom-in-up">
          <div className="image-border"></div>
          <img src="http://localhost:5000/images/myimg.png" alt="Sachithananthan" className="about-image" height='300px' />
        </div>
      </div>
    </section>
  );
};
