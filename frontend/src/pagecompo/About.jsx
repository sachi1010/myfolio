import React, { useEffect, useState } from 'react';
import '../css/About.css';



// const API_URL = 'http://localhost:3000/About';

export const About = () => {
 const [About, setAbout] = useState({title:"", description:""});

  // useEffect(() => {
  //     fetchAbout();
  //   }, []);


// const fetchAbout = async () => {
//     try{
//       const res = await fetch(API_URL);
//     const data = await res.json();
//     setAbout(data);
//     }catch(err){
//       console.log(err);
//     } 
//   };


useEffect(() => {
  fetch('http://localhost:3000/about')
    .then(res => res.json())
    .then(info => setAbout(info))
    .catch(err => console.error('Error fetching about data:', err));

}, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text" data-aos="zoom-in-up">
          <h3 className="about-subtitle">About Me</h3>
          <h1 className="about-title">{About.title}</h1>
          <p className="about-description">{About.description}</p>
         
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
