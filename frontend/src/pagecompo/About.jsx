
import React from 'react';
import '../css/About.css';

export const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Left Text Section */}
        <div className="about-text" data-aos="zoom-in-up">
          <h3 className="about-subtitle">About Me</h3>
          <h1 className="about-title">Passionate Developer Crafting Seamless Web Experiences</h1>
          <p className="about-description">
           Hello! I'm Sachithananthan, a passionate and dedicated web developer with a love for building clean, responsive, and functional websites. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.

         I specialize in <b>React, JavaScript, HTML, and CSS, and I'm always eager to learn new technologies and frameworks</b>. Whether it's creating engaging front-end interfaces or working on full-stack applications, I strive to write efficient and maintainable code.

         I believe in continuous growth, collaboration, and the power of technology to make a positive impact. Outside of coding, I enjoy exploring design trends, watching tech talks, and contributing to open-source projects.
          </p>
          <a href="/cv.pdf" download className="download-btn">
            Download CV <i class="bi bi-download"></i>
          </a>
        </div>

        {/* Right Image Section */}
        <div className="about-image-wrapper" data-aos="zoom-in-up">
          <div className="image-border"></div>
          <img
            src="./images/myimg.png"
            alt="Sachithananthan"
            className="about-image"
            height='300px'
          />
         
        </div>

      </div>
    </section>
  );
};
