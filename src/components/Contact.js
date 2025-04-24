import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    emailjs.init("NxLDbRnVbLgqUs861"); // Replace with your EmailJS User ID (Public Key)
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    emailjs.send(
      "service_gotdgma", // Replace with your EmailJS service ID
      "template_dm4l6r3", // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "rameshchapagain1043@gmail.com",
        to_name: "Kwoshi Labs"
      }
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        console.log('FAILED...', err);
        setIsSubmitting(false);
        setSubmitError('Failed to send email. Please try again.');
      });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact Information</h3>
            <p><i className="fas fa-envelope"></i> kwoshilabs@gmail.com</p>
            <p><i className="fas fa-phone"></i> +1 (318) 503-7293</p>
            <p><i className="fas fa-map-marker-alt"></i> 127 Sparkleberry Ln, Columbia, SC, 29229</p>
            <div className="social-links">
              <a href="https://www.facebook.com/" className="social-icon" target="_blank" rel="noreferrer" ><i className="fab fa-facebook-f"></i></a>
              <a href="linkedin.com" className="social-icon"><i className="fab fa-linkedin-in" target="_blank"  rel="noreferrer"></i></a>
              <a href="https://www.instagram.com/" className="social-icon" target="_blank"  rel="noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </motion.div>
          <motion.div
            className="contact-form"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
            {submitSuccess && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Your message has been sent successfully!
              </motion.div>
            )}
            {submitError && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {submitError}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;