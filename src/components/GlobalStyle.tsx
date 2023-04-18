  import { createGlobalStyle } from 'styled-components';

  const GlobalStyle = createGlobalStyle`
  #root {
      background-color: #284B63;
      min-height: 350vh;
      width: 100%;
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      scroll-behavior: smooth;
      overflow: hidden;
    }

    .progress-container {
      position: fixed;
      top: 50%;
      right: 3.8rem;
      transform: translateY(-50%);
      width: 20px;
      height: 50%;
      background-color: gray;
      z-index: 1000;
      border-radius: 17px;
    }

    .progress-bar {
      width: 100%;
      background-color: #B0FFF8;
      transition: height 0.5s ease-out;
      border-radius: 17px;
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

    .arrowone-container {
      margin-top: 10rem;
    }

    .arrowthree-container {
      margin-top -1rem;
    }
  
    .arrow-down-one {
      font-size: 5rem;
      animation: arrow-bounce 1.2s;
      animation-iteration-count: 3;
      margin-top: 1rem;
    }

    .arrow-down-two {
      font-size: 5rem;
      animation: arrow-bounce 1.2s;
      animation-iteration-count: 3;
      margin-top: 1rem;
    }

    .arrowone-container:hover .about-me {
      opacity: 1;
      animation: gradient-animation 4s forwards;
    }
  
    .arrowone-container:hover .about-me.visible {
      animation: gradient-animation 4s forwards;
    }
  
    .about-me {
      position: absolute;
      margin-top: -0.5rem;
      font-size: 2rem;
      background: linear-gradient(90deg, white 0%, #B0FFF8 30%);
      -webkit-background-clip: text;
      color: transparent;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  
    .about-me.visible {
      animation: gradient-animation 1s forwards;
    }
  
    @keyframes gradient-animation {
      0% {
        background-size: 0 100%;
      }
      100% {
        background-size: 400% 100%;
      }
    }
  
    @keyframes arrow-bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  
    .logo {
      height: 180px;
      width: auto;
    }
    
    .navbar {
      transition: transform 0.3s ease;
    }

    .navbar-nav .nav-link.active {
      color: #B0FFF8 !important;
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

    .hide-on-desktop {
    display: none;
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
      padding-top: 6.5rem;
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

    .about-fullscreen {
      min-height: 110vh;
    }  

    .about {
      background-color: white;
    }

    .about-me-heading {
      font-family: 'Adobe Caslon Pro, serif';
      font-weight: bold;
      font-size: 3.5rem;
      position: relative;
      color: #284B63;
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

    .about-me-text {
      color: #284B63;
    }

    .text-white-two {
      color: #284B63;
    }

    .custom-mt {
      margin-top:16.5rem; 
    }

    .custom-pr {
      margin-top: 10rem;
    }

    .contact-section {
      margin-top: 30rem;
    }
    
    .card {
      box-shadow: 0 2px 4px #3C6E71;
      border-radius: 0.5rem;
      overflow: hidden;
      max-width: 450px;
      right: 2.7rem;
      top: 4rem;
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
      display: none;
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


  @media (max-width: 768px) {
    .hide-on-desktop {
      display: initial;
    }
  }
    
  }
  `;

  export default GlobalStyle;
