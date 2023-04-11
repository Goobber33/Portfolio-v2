import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

Modal.setAppElement('#root');

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();
