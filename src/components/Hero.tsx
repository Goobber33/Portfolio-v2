import React from 'react';
import './Hero.css';
import heroImage from '../images/hero.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container pt-hero">
        <img src={heroImage} alt="Kyle Parks" className="hero-image" />
        <h1 className="hero-title">Kyle Parks</h1>
      </div>
    </section>
  );
};

export default Hero;
