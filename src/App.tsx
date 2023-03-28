import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Portfolio from './components/Portfolio';
import About from './components/About';

const App: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
