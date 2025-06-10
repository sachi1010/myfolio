import React, { useEffect } from 'react';
import '../css/Home.css';
import { About } from './About';
import Skills from './Skills';
import Projects from './Projects';
import { Contact } from './Contact';

const Home = () => {


  return (
    <div className='bg' id='home'>
      <div className='profile-content'>
        <div className='profile-left' data-aos="fade-right">
          <h1>hello!!!</h1>
          <h2>I am <span id='myname'>sachithananthan</span></h2>
          <h2>I am a <span id='role'>Full Stack Developer</span></h2>
          <div className='social-links'>
            <a href=""><i className="bi bi-github"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
            <a href=""><i className="bi bi-whatsapp"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
          </div>
          <button id='Contactme'>Contact Me</button>
          <button id='Resume'>Resume <i className="bi bi-download"></i></button>
        </div>

        <div className='Profile-right' data-aos="fade-left">
          <div className="hex-frame-wrapper">
            <img src="/images/banner.png" alt="Hex Frame" className="hex-frame" />
            <img src="/images/myimg.png" alt="My Profile" className="hex-inner-image" />
          </div>
        </div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
