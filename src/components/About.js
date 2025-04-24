import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          About Kwoshi Labs
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Innovating Since 2021</h3>
            <p>
            At Kwoshi Labs, we believe in transforming ideas into innovative digital solutions. 
            As a creative tech studio, we specialize in building custom websites and mobile applications 
            that are not only visually appealing but also user-friendly, scalable, and results-driven.


            </p>
            <h3>Our Mission</h3>
            <p>
            Founded with a passion for problem-solving and a dedication to quality, Kwoshi Labs partners 
            with businesses, entrepreneurs, and organizations to bring their digital vision to life. Whether 
            it's crafting a sleek e-commerce platform, a robust web portal, or an intuitive mobile app, we tailor 
            every project to meet the unique needs and goals of our clients.


            </p>
          </motion.div>
          <motion.div 
            className="about-stats"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Apps</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;