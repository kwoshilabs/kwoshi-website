import React from 'react';
import '../styles/Services.css';

const Services = () => {
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
    <section id="services" className="services">
      <div className="container">
        <h2>Our Work</h2>
        <div className="service-grid">
          {serviceList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;