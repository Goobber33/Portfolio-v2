import React from 'react';
import './index.css';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <Portfolio />
    </>
  );
}

export default App;
