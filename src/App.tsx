import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Hero from './components/Hero';
import useTypewriter from 'react-typewriter-hook';

const App: React.FC = () => {
  const typewriterText = useTypewriter('Kyle Parks Portfolio');

  return (
    <>
      <NavbarComponent />
      <header>
        <h1>{typewriterText}</h1>
      </header>
      <Hero />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
