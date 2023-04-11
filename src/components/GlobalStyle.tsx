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

  .text-white-two {
    color: white;
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
    max-width: 450px;
    right: 2.5rem;
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
    left: 2.8rem;
  }  
  
  .custom-col {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    box-sizing: border-box;
    padding: 0.2rem;
    padding-left: 3rem;
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


  // ----------- Media Queries for mobile devices -------------


  @media (max-width: 1280px) {
  
    .intro-text-wrapper {
      padding-top: 12rem;
    }
  
    .name-text-inner {
      font-size: 7rem;
    }
  
    .text-white {
      font-size: 1.8em;
    }

    .name-inner::after {
      width: 93%;
    }

    .about-me-heading {
      font-size: 3.5rem;
    }

    .about-me-text {
      font-size: 1.2rem !important;
    }

    .text-white-two {
      color: white;
    }

    .hero-wrapper {
      left: 7rem;
    }

    .hero-title {
      position: absolute;
      right: calc(52% - 150px);
      font-size: 2rem;
      color: white;
      background-color: #3C6E71;
      padding: 0.5rem 1rem;
    }

    .hero-image {
      height:400px;
      width: 400px;
    }

    .project-card-margin {
      margin-right: 1.7rem;
      left: 3rem;
    } 

    .card {
      height: 300px !important;
      width: 350px !important;
    }
  }

  @media (min-width: 1900px) {
   
    .project-card-margin {
      margin-right: -5rem ;
      left: 3.3rem;
    }
  }

  @media screen and (min-width: 1920px) and (min-height: 1080px) {
    .intro-text-wrapper {
      padding-top: 20rem;
    }
  
    .hello-text {
      font-size: 5em;
    }
  
    .name-text-inner {
      font-size: 9rem;
    }
  
    .text-white {
      font-size: 2.5em;
    }

     .project-card-margin {
      margin-right: -5rem;
      left: 3.5rem;
    } 
  }
}
`;

export default GlobalStyle;
