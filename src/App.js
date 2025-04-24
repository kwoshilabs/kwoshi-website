import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';
import WorkCarousel from './components/WorkCarousel';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      <WorkCarousel />
      <Team />
      <Chatbot />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;