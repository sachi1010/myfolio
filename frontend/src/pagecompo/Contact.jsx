
import React from 'react'
import '../css/Contact.css';
export const Contact = () => {
  return (
    <section className="new-contact-section">
      <div className='Contact-container'>


        <div className="new-contact-left" data-aos="zoom-in-up">
          <h1>Design and<br />Innovation</h1>
          <p>
            As a passionate full-stack developer, I strive to bring innovative digital solutions to life through clean code and thoughtful design. With a solid foundation in both frontend and backend technologies, I aim to build seamless, user-friendly web experiences that solve real-world problems. I'm driven by curiosity, creativity, and the desire to continuously learn and grow in this dynamic tech space.
          </p>
        </div>

        <div className="new-contact-right" data-aos="slide-left">
          <h2>get in touch with me</h2>
          <p>
            I'm always excited to discuss new projects, creative ideas, and opportunities to bring visions to life.
            Whether you're looking for a reliable full-stack developer or just want to connect, feel free to reach out!
          </p>
          <form className="new-contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </section>
  )
}
