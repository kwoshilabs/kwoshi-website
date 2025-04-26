import React from 'react';
import '../styles/Services.css';


const Services = () => {
  
  const scrollToAbout = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const serviceList = [
    {
      title: "Website Development",
      description: "Custom-built, responsive websites tailored to your business needs.",
      icon: "🌐"
    },
    {
      title: "App Development",
      description: "Innovative mobile and web applications for various platforms.",
      icon: "📱"
    },
    {
      title: "Digital Marketing",
      description: "Strategic online marketing to boost your brand's digital presence.",
      icon: "📈"
    },
    {
      title: "Business Analytics",
      description: "Data-driven insights to inform your business decisions.",
      icon: "📊"
    }
  ];

  return (

    <section className="hero" id="home" >
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Build it Beautiful. <br />
            <span className="hero-subtitle">& Unparalleled.</span>
          </h1>
          <p className="hero-description">
            Kwoshi is the all-in-one modern Development and AI company.
          </p>
          <button className="hero-button" onClick={scrollToAbout}>
          Learn More <span className="arrow">→</span>
        </button>
        </div>

      </div>
    </section>
  );
};

export default Services;