import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import React, { useEffect } from 'react';
import Home from'./pagecompo/Home';
import {About} from './pagecompo/About';
import Skills from './pagecompo/Skills';
import Projects from './pagecompo/Projects';
import {Contact} from './pagecompo/Contact';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
 useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
