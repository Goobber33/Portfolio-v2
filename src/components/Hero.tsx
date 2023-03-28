import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <img src="./images/hero.jpeg" alt="Kyle Parks" className="hero-image" />
        <h1 className="hero-title">Kyle Parks</h1>
      </div>
    </section>
  );
};

export default Hero;
