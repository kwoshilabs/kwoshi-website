import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/WorkCarousel.css';

const WorkCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    fade: true,
  };

  const works = [
    { id: 1, image: '/Ecommerce.png', title: 'E-commerce Platform', description: 'A fully responsive online store with advanced features' },
    { id: 2, image: '/PhonePay.png', title: 'Phone Pay App', description: 'Secure and user-friendly mobile payment solution' },
    { id: 3, image: '/Chatbot.jpg', title: 'AI-powered Chatbot', description: 'Intelligent customer service chatbot for improved engagement' },
    { id: 4, image: '/LocalBusiness.png', title: 'Local Business Website', description: 'Modern website design for local businesses. ' },
    { id: 5, image: '/DataVisualization.png', title: 'Data Visualization Dashboard', description: 'Interactive dashboard for complex data analysis' },
  ];

  return (
    <section id ="work-carousel" className="work-carousel">
      <div className="container">
        <h2>Our Previous Works</h2>
        <Slider {...settings}>
          {works.map((work) => (
            <div key={work.id} className="carousel-item">
              <div className="carousel-content">
                <img src={work.image} alt={work.title} />
                <div className="carousel-text">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkCarousel;