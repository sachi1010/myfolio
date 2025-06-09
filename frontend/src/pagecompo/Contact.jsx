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
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
      } else {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }

    if (name === 'phone') {
      if (!/^\d{0,10}$/.test(value)) return; 
      if (value.length !== 10) {
        setErrors((prev) => ({ ...prev, phone: 'Phone number must be 10 digits' }));
      } else {
        setErrors((prev) => ({ ...prev, phone: '' }));
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);

    if (!isEmailValid || !isPhoneValid) {
      setStatus('Please fix validation errors before submitting.');
      return;
    }

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
    <section className="new-contact-section" id='contact'>
      <div className='Contact-container'>
        <div className="new-contact-left" data-aos="zoom-in-up">
          <h1>Design and<br />Innovation</h1>
          <p>
            As a passionate full-stack developer, I strive to bring innovative digital solutions to life through clean code and thoughtful design...
          </p>
        </div>

        <div className="new-contact-right" data-aos="slide-up">
          <h2>get in touch with me</h2>
          <p>
            I'm always excited to discuss new projects...
          </p>
          <form className="new-contact-form" onSubmit={handleSubmit}>
            <input type="text"name="name"placeholder="Your Name" value={formData.name} onChange={handleChange}    required   />

            <input  type="email"  name="email"  placeholder="Your Email"  value={formData.email}  onChange={handleChange}   required   />
             {errors.email && <p className="error-text">{errors.email}</p>}

            <input  type="number"  name="phone"  placeholder="Phone Number"  value={formData.phone}  maxLength="10"
              pattern="\d{10}"  onChange={handleChange}    required  />
               {errors.phone && <p className="error-text">{errors.phone}</p>}

            <textarea  name="message"  placeholder="Message"  rows="4"  value={formData.message}  onChange={handleChange}  required  ></textarea>
            <button type="submit">Submit now</button>
            <p className="form-status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
};
