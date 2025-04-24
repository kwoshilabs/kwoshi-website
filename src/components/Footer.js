import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="box">
        <img src="/kwoshi-high-resolution-logo-transparent.png" alt="Kwoshi labs" style={{ height:50}} />
        </div>

        <div className="box">
        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
        </div>
        
        <div className="footer-copyright">
          &copy; {currentYear} Kwoshi Labs | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;