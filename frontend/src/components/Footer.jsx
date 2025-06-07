
import React from 'react'
import '../css/Footer.css'
export const Footer = () => {
  return (
     <footer className="footer">
            <div className="footer-container">

                {/* Brand */}
                <div className="footer-section">
                    <h2 className="footer-title">MyPortfolio</h2>
                    <p className="footer-text">Crafting seamless and modern web experiences.</p>
                    <a href="mailto:sachisachi8567@gmail.com">
                        <button className="hire-button">Hire Me</button>
                    </a>
                </div>


                {/* Links */}
                <div className="footer-section">
                    <h3 className="footer-subtitle">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h3 className="footer-subtitle">Contact</h3>
                    <p>Email: sachisachi8567@gmail.com</p>
                    <p>Phone: +91 8508312061</p>
                    <p>Mayiladuthurai,Tamil Nadu</p>
                </div>

                {/* Social Icons */}
                <div className="footer-section">
                    <h3 className="footer-subtitle">Follow Me</h3>
                    <div className="footer-icons">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        <a href=""><i class="bi bi-whatsapp"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Sachithananthan. All rights reserved.
            </div>
        </footer>
  )
}
