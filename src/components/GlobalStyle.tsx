// GlobalStyle.tsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
#root {
    background-color: #284B63;
    min-height: 300vh;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    scroll-behavior: smooth;
  }
  
  header {
    padding: 2rem 0;
    color: white;
  }
  
  h1 {
    margin: 0;
    font-size: 3rem;
  }
  
  main {
    margin: 2rem auto;
    max-width: 960px;
    padding: 0 2rem;
  }
  
  .logo-box {
    display: inline-block;
  }
  
  .logo {
    height: 180px;
  }
  
  .custom-navbar {
    font-size: 1.2rem;
  }
  
  .custom-navbar-link {
    font-size: 1.9rem;
  }
  
  .pt-custom {
    padding-top: 10rem;
  }
  
  .pt-hero {
    padding-top: 1rem;
  }
  
  .custom-mt {
    margin-top: 20rem; /* Adjust this value to your desired spacing */
  }
  
  .typewriter-text {
    font-family: 'Your Desired Font', sans-serif;
    font-size: 1rem;
    color: white;
    text-align: left;
    padding-left: 2rem;
  }
  
  .typewriter-container {
    max-width: 30%;
    padding-left: 2rem;
  }
  
  .card {
    box-shadow: 0 2px 4px #3C6E71;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  .card:hover {
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.5);
  }
  
  .card .card-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .card .card-text {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
  
  .hero-image {
    width: 100%;
    height: auto; 
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #284B63;
  }
  
  
  ::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 20px;
    
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  
  .hero-section {
    position: relative;
    text-align: center;
    background-color: #284B63;
    padding: 2rem 0;
    padding-top: 6rem;
  }

  .hero-container {
    position: relative;
  }

  .hero-image {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    object-fit: cover;
  }

  .hero-title {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    color: white;
    background-color: #3C6E71;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }

  @media screen and (max-width: 991px) {
    .hero-image {
      width: 120px;
      height: 120px;
    }

    .hero-title {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 991px) {
    .transparent-menu {
      background-color: transparent !important;
    }
  }
`;

export default GlobalStyle;
