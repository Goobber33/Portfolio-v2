// GlobalStyle.tsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
#root {
    background-color: #284B63;
    min-height: 350vh;
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
  
  h1, {
    margin: 0;
    font-size: 3rem;
  }
  
  main {
    margin: 2rem auto;
    max-width: 960px;
    padding: 0 2rem;
  }

  .navbar-hidden {
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }
  
  .navbar {
    transition: transform 0.3s ease;
  }

  .line-by-line {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .line-by-line.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s, transform 0.5s;
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

  .intro-text-line {
    opacity: 0;
    transform: translateY(50px);
    animation: slideUpFadeIn 1s ease-in-out forwards;
  }
  
  .intro-text-line:nth-child(1) {
    animation-delay: 0s;
  }

  .intro-text-line:nth-child(2) {
    animation-delay: 0.25s;
  }

  .intro-text-line:nth-child(3) {
    animation-delay: 0.5s;
  }

  .intro-text-line:nth-child(4) {
    animation-delay: 0.75s;
  }

  .about-text-line:nth-child(1) {
    animation-delay: 0s;
  }

  .about-text-line:nth-child(2) {
    animation-delay: 0.25s;
  }

  .about-text-line:nth-child(3) {
    animation-delay: 0.5s;
  }

  .about-text-line:nth-child(4) {
    animation-delay: 0.75s;
  }

  .intro-text-line {
    font-size: 1.1em;
  }

  .about-text-line {
    font-size: 1.3em;
  }

  @keyframes slideUpFadeIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }


  
  .pt-custom {
    padding-top: 10rem;
  }
  
  .pt-hero {
    padding-top: 1rem;
  }
  
  .custom-mt {
    margin-top: 30rem; 
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

  .contact-section {
    color: #fff;
    padding: 4rem 0;
  }
  
  .contact-section h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .contact-section form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .contact-section label {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  .contact-section input,
  .contact-section textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 2rem;
    border-radius: 5px;
    border: none;
    background-color: #d9d9d9;
    color: #333;
    font-size: 1.2rem;
  }
  
  .contact-section textarea {
    height: 10rem;
  }
  
  .contact-section button[type='submit'] {
    background-color: #3c6e71;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  .contact-section button[type='submit']:hover {
    background-color: #284b63;
  }

  .hover-effect:hover {
    background-color: white !important;
    color: #284B63 !important;
  }
  
  // GlobalStyle.tsx
.social-icon {
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
}

.social-icon .fa-github {
  color: #181717;
}

.social-icon .fa-linkedin {
  color: #0A66C2;
}

.social-icon .fa-instagram {
  color: #E1306C;
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
