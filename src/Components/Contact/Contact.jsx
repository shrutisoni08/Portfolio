/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted
  const [error, setError] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send function
    emailjs.send(
      'service_w1aepzh',
      'template_07gm7el',
      formData,
      '78yUiCg30j89KTnh-'
    )
      .then(() => {
        setIsSubmitted(true);  // Show success message
        setFormData({ name: '', email: '', message: '' });
        setError('');
      })
      .catch((err) => {
        setError('Failed to send email. Please try again.');
        console.error('Email send error:', err);
      });
  };

  // Automatically hide the success message after 20 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);  // Hide success message after 20 seconds
      }, 20000); // 20 seconds = 20000 milliseconds

      return () => clearTimeout(timer);  // Cleanup the timer on component unmount or when state changes
    }
  }, [isSubmitted]);

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {isSubmitted && <p className="success-message">Thank you! Your message has been sent.</p>}
      {error && <p className="error-message">{error}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
