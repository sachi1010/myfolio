import React, { useState } from 'react';
import '../css/Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Failed to send message. Try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error occurred. Please try later.');
    }
  };

  return (
    <section className="new-contact-section">
      <div className='Contact-container'>
        <div className="new-contact-left" data-aos="zoom-in-up">
          <h1>Design and<br />Innovation</h1>
          <p>
            As a passionate full-stack developer, I strive to bring innovative digital solutions to life through clean code and thoughtful design...
          </p>
        </div>

        <div className="new-contact-right" data-aos="slide-left">
          <h2>get in touch with me</h2>
          <p>
            I'm always excited to discuss new projects...
          </p>
          <form className="new-contact-form" onSubmit={handleSubmit}>
            <input type="text"name="name"placeholder="Your Name" value={formData.name} onChange={handleChange}    required   />
            <input  type="email"  name="email"  placeholder="Your Email"  value={formData.email}  onChange={handleChange}   required   />
            <input  type="number"  name="phone"  placeholder="Phone Number"   value={formData.phone}   onChange={handleChange}    required  />
            <textarea  name="message"  placeholder="Message"  rows="4"  value={formData.message}  onChange={handleChange}  required  ></textarea>
            <button type="submit">Submit now</button>
            <p className="form-status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
};
