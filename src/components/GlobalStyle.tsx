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
  
  h1 {
    margin: 0;
    font-size: 3rem;
  }

  h2 {
    font-family: garamond;
  }
  
  main {
    margin: 2rem auto;
    max-width: 960px;
    padding: 0 2rem;
  }

  .logo {
    height: 180px;
    width: auto;
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

  .intro-text-wrapper {
    padding-top: 9rem;
    text-align: left;
  }

  .name-inner {
    font-family: 'Adobe Caslon Pro, serif';
    font-weight: bold;
  }  
  
  .chat-box {
    width: fit-content;
    height: fit-content;
  }
  
  .hello-text {
    font-size: 2.5em;
    font-family: Garamond, serif; 
  }

  .waving-hand {
    display: inline-block;
    animation: wave 1s linear infinite;
  }
  
  .name-text-inner {
    display: inline-block;
    color: white;
    font-size: 8rem;
    position: relative;
  }
  
  .name-inner::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 80%;
    height: 2px;
    background-color: #B0FFF8;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  .name-text:hover .name-inner::after {
    transform: scaleX(1);
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

  @keyframes wave {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(20deg);
    }
  }  

  .about-me-heading {
    font-family: 'Adobe Caslon Pro, serif';
    font-weight: bold;
    font-size: 3.5rem;
    position: relative;
  }

  .about-me-heading::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 46%;
    height: 2px;
    background-color: #B0FFF8;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  .about-me-heading:hover::after {
    transform: scaleX(1);
  }

  .custom-mt {
    margin-top: 30rem; 
  }

  .custom-pr {
    margin-top: 30rem;
  }

  .contact-section {
    margin-top: 30rem;
  }
  
  .card {
    box-shadow: 0 2px 4px #3C6E71;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  
  .card:hover {
  transform: translateY(-5px);
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
  
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #284B63;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #284B63;
    border-radius: 20px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  .hero-wrapper {
    position: absolute;
    top: 35%;
    right: -99%;
    transform: translateY(-40%);
  }

  .hero-image {
  width: 450px;
  height: 450px;
  border-radius: 3%;
  object-fit: cover;
  }

  .hero-title {
  position: absolute;
  bottom: -32px;
  right: calc(61.5% - 150px);
  font-size: 2rem;
  color: white;
  background-color: #3C6E71;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  }

  .project-card-margin {
    margin-left: -4.3rem;
  }  
  
  .custom-col {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    box-sizing: border-box;
    padding: 0.2rem;
    padding-left: 3rem;
  }
  
  @media (max-width: 1200px) {
    .custom-col {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    .custom-col {
      max-width: 100%;
      margin-left: 1rem;
      margin-right: 1rem;
    }
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


  @media screen and (max-width: 767px) {

    .logo {
      height: 90px; 
      width: auto;
    }

    .name-text-inner {
      font-size: 5.5rem;
    }
  
    .intro-text-wrapper {
      padding-top: 5rem;
      padding-left: 2rem;
    }

    #about {
      padding-top: 5rem;
      padding-left: 2rem;
    }

    .about-me-text {
      font-size: 1rem !important; 
    }

    .hero-wrapper {
      top: -340px;
      right: 3%;
    }
    
    .hero-image {
      width: 300px;
      height: 300px;
    }

    .hero-title {
      right: 50px;
    }

    .text-muted {
      text-align: left;
      margin-left: 620px;
      position: absolute;
      bottom: 0;
    }

    .fa-icon {
      font-size: 1.5rem;
    }

  }
`;

export default GlobalStyle;
