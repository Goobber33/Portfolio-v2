import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Hero from './components/Hero';
import useTypewriter from 'react-typewriter-hook';


const App: React.FC = () => {
  const typewriterText = useTypewriter('Hello! My name is Kyle Parks. I am a Full Stack Developer, and I love to create and learn new things. I am currently enrolled in the University of Washingtons Full Stack coding bootcamp where I am learning new skills every day. Please take a look at my Portfolio, and follow my social media links if you would like to get in contact!');

   return (
    <>
      <NavbarComponent />
      <div className="typewriter-container">
        <h1 className="typewriter-text">{typewriterText}</h1>
      </div>
      <Hero />
      <About />
      <Portfolio />
    </>
  );
};

export default App;
