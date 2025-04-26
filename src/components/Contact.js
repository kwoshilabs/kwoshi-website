import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
// Assuming Contact.css is correctly located relative to this file
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

  // EmailJS initialization (remains the same)
  useEffect(() => {
    // IMPORTANT: Replace with your actual EmailJS User ID (Public Key)
    // It's recommended to store these keys in environment variables
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
  }, []);

  // Form handling functions (remain the same)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    // IMPORTANT: Replace with your actual Service ID and Template ID
    // Store these in environment variables for security
    const serviceID = "YOUR_SERVICE_ID"; // Replace
    const templateID = "YOUR_TEMPLATE_ID"; // Replace

    // Template params including your target email
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      // Optional: Define these in your EmailJS template instead of here if static
      // to_email: "kwoshilabs@gmail.com",
      // to_name: "Kwoshi Labs"
    };

    emailjs.send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log('EMAILJS SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form
        // Optional: Hide success message after a few seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, (err) => {
        console.error('EMAILJS FAILED...', err);
        setIsSubmitting(false);
        setSubmitError('Failed to send message. Please try again later.');
         // Optional: Hide error message after a few seconds
         setTimeout(() => setSubmitError(''), 5000);
      });
  };

  // --- Animation Variants & Settings ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const viewportSettings = {
    once: false, // Trigger animation every time
    amount: 0.2  // Trigger when 20% of the element is in view
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Animate the title */}
        <motion.h2
          initial="hidden"
          whileInView="visible" // Changed from animate
          viewport={viewportSettings} // Added viewport settings
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>
        <div className="contact-content">
          {/* Animate the contact info section */}
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible" // Changed from animate
            viewport={viewportSettings} // Added viewport settings
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }} // Keep existing delay
          >
            {/* Content remains the same */}
            <h3>Contact Information</h3>
            <p><i className="fas fa-envelope"></i> kwoshilabs@gmail.com</p>
            <p><i className="fas fa-phone"></i> +1 (318) 503-7293</p>
            <p><i className="fas fa-map-marker-alt"></i> 127 Sparkleberry Ln, Columbia, SC, 29229</p>
            <div className="social-links">
              <a href="https://www.facebook.com/" className="social-icon" target="_blank" rel="noreferrer" ><i className="fab fa-facebook-f"></i></a>
              {/* Ensure linkedin link is correct */}
              <a href="https://www.linkedin.com/" className="social-icon" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/" className="social-icon" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </motion.div>
          {/* Animate the contact form section */}
          <motion.div
            className="contact-form"
            initial="hidden"
            whileInView="visible" // Changed from animate
            viewport={viewportSettings} // Added viewport settings
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }} // Keep existing delay
          >
            {/* Use the actual handleSubmit function */}
            <form onSubmit={handleSubmit}>
              {/* Form groups remain the same */}
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
                  rows={5} // Added rows for better default size
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {/* Submit button motion remains the same */}
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
            {/* Success/Error message motion remains the same */}
            {submitSuccess && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Your message has been sent successfully!
              </motion.div>
            )}
            {submitError && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
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