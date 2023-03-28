import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/Portfolio';
import NavbarComponent from './components/NavbarComponent';
import About from './components/About';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <NavbarComponent />
    <Portfolio />
    <About />
  </React.StrictMode>,
  root
);

reportWebVitals();
