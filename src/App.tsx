import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Portfolio from './components/Portfolio';
import About from './components/About';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <header>
        <h1>Kyle Parks Portfolio</h1>
      </header>
      <About />
      <Portfolio />
    </>
  );
};

export default App;
