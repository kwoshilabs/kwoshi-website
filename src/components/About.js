import React from 'react';
import { motion } from 'framer-motion';
// Assuming About.css is correctly located relative to this file
import '../styles/About.css'; // No changes needed here

const About = () => {
  // The fadeIn animation definition remains the same
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Define viewport settings for scroll trigger - updated 'once'
  const viewportSettings = {
    once: false, // Set to false to trigger animation every time
    amount: 0.3 // Trigger when 30% of the element is in view (adjust if needed)
  };

  return (
    // The section and container structure remains the same
    <section id="about" className="about">
      <div className="container">
        {/* Updated motion.h2 with viewportSettings */}
        <motion.h2
          initial="hidden"
          whileInView="visible" // Trigger based on viewport visibility
          viewport={viewportSettings} // Use updated viewport settings
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          About Kwoshi Labs
        </motion.h2>
        <div className="about-content"> {/* Structure remains the same */}
          {/* Updated motion.div for about-text with viewportSettings */}
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible" // Trigger based on viewport visibility
            viewport={viewportSettings} // Use updated viewport settings
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Innovating Since 2021</h3> {/* Content remains the same */}
            <p>
            At Kwoshi Labs, we believe in transforming ideas into innovative digital solutions. {/* */}
            As a creative tech studio, we specialize in building custom websites and mobile applications
            that are not only visually appealing but also user-friendly, scalable, and results-driven. {/* */}
            </p>
            <h3>Our Mission</h3> {/* Content remains the same */}
            <p>
            Founded with a passion for problem-solving and a dedication to quality, Kwoshi Labs partners
            with businesses, entrepreneurs, and organizations to bring their digital vision to life. Whether {/* */}
            it's crafting a sleek e-commerce platform, a robust web portal, or an intuitive mobile app, we tailor {/* */}
            every project to meet the unique needs and goals of our clients. {/* */}
            </p>
          </motion.div>
          {/* Updated motion.div for about-stats with viewportSettings */}
          <motion.div
            className="about-stats"
            initial="hidden"
            whileInView="visible" // Trigger based on viewport visibility
            viewport={viewportSettings} // Use updated viewport settings
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Stat items remain the same */}
            <div className="stat-item">
              <span className="stat-number">10+</span> {/* */}
              <span className="stat-label">Apps</span> {/* */}
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span> {/* */}
              <span className="stat-label">Projects Completed</span> {/* */}
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span> {/* */}
              <span className="stat-label">Support</span> {/* */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;