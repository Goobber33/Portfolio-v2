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

    .arrowtwo-container {
      position: relative;
      top: -1rem;  
    }    

    .arrowthree-container {
      margin-top: -4rem;
    }

    .arrowfour-container {
      margin-top: -1.4rem;
    }

    .arrowfive-container {
      margin-top: 2rem;
    }

    .arrowsix-container {
      margin-top: -3rem;
    }

    .arrow-up-one {
      font-size: 5rem;
    }

    .arrow-up-two {
      font-size: 5rem;
    }

    .arrow-up-three {
      font-size: 5rem;
    }

    .arronec .arrthreec {
      color: #284B63;
    }

    .arrsixc {
      color: #284B63;
    }
  
    .arrow-down-one {
      font-size: 5rem;
      animation: arrow-bounce 1.2s;
      animation-iteration-count: 6;
      margin-top: 1rem;
    }

    .arrow-down-two {
      font-size: 5rem;
      margin-top: 1rem;
    }

    .arrow-down-three {
      font-size: 5rem;
      margin-top: 1rem;
    }

    .arrowtwo-container:hover .hometext {
      opacity: 1;
      color: gray;
    }

    .arrowone-container:hover .about-me {
      opacity: 1;
      animation: gradient-animation 4s forwards;
    }
  
    .arrowone-container:hover .about-me.visible {
      animation: gradient-animation 4s forwards;
    }

    .arrowthree-container:hover .pcard {
      opacity: 1;
      color: gray;
    }

    .arrowsix-container:hover .contacttexttwo {
      opacity: 1;
      color: gray;
    }
  
    .about-me {
      position: absolute;
      margin-top: 1.5rem;
      font-size: 1.3rem;
      background: linear-gradient(90deg, white 0%, #B0FFF8 30%);
      -webkit-background-clip: text;
      color: transparent;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  
    .about-me.visible {
      animation: gradient-animation 1s forwards;
    }

    .pcard {
      position: absolute;
      margin-top: 1.5rem;
      font-size: 1.3rem;
      color: gray;
      opacity: 0;
      transition: opacity 0.3s ease, color 0.3s ease;
    }

    .hometext {
      position: absolute;
      margin-top: 6rem;
      font-size: 1.3rem;
      color: gray;
      opacity: 0;
      transition: opacity 0.3s ease, color 0.3s ease;
    }

    .abouttext {
      position: absolute;
      margin-top: 5.4rem;
      font-size: 1.3rem;
      background: linear-gradient(90deg, white 0%, #B0FFF8 30%);
      -webkit-background-clip: text;
      color: transparent;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .contacttext {
      position: absolute;
      margin-top: 1.5rem;
      font-size: 1.3rem;
      background: linear-gradient(90deg, white 0%, #B0FFF8 30%);
      -webkit-background-clip: text;
      color: transparent;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .contacttexttwo {
      position: absolute;
      margin-top: 6rem;
      font-size: 1.3rem;
      color: gray;
      opacity: 0;
      transition: opacity 0.3s ease, color 0.3s ease;
    }

    .arrowfour-container:hover .abouttext {
      opacity: 1;
      animation: gradient-animation 4s forwards;
    }
  
    .arrowfour-container:hover .about-text.visible {
      animation: gradient-animation 4s forwards;
    }

    .arrowfive-container:hover .contacttext {
      opacity: 1;
      animation: gradient-animation 4s forwards;
    }
  
    .arrowfive-container:hover .contacttext.visible {
      animation: gradient-animation 4s forwards;
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
      font-size: 2rem;
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
      word-wrap: break-word;
      width: 150%;
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
      right: 2.7rem;
      top: 2rem;
      width: 100%;
    }
    
    .card .card-title {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #284B63;
    }
    
    .card .card-text {
      font-size: 1rem;
      color: #284B63;
      line-height: 1.5;
      opacity: 0;
    }

    .cardTextWrapper {
      position: absolute;
      bottom: -50%;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 10px;
      text-align: center;
      transition: all 0.3s ease;
      overflow: hidden;
      height: 0%;
      opacity: 0;
    }    
    
    .card:hover .cardTextWrapper {
      height: 70%;
      bottom: 25%;
      opacity: 1;
    }    

    .card:hover .card-text {
      opacity: 1;
    }    
    
    ::-webkit-scrollbar {
      display: none;
    }
    
    .hero-wrapper {
      position: absolute;
      top: 39%;
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

    .project-card {
      background-color:
    }

    .project-card-margin {
      margin-left: -5rem;
      left: 4.8rem;
    }  

    .container {
      margin-top: 5rem;
      color: #284B63;
    }

    .contact-section {
      background-color: white;
      padding: 6rem 0;
      min-height: 100vh;
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
    
    // ------------ Media Queries for mobile devices ------------- //


    @media (min-width: 2560px) {

      .navbar {
        font-size: 1.8rem;
      }

      .main {
        min-height: 65vh;
        margin-top: 8rem;
      }

      .logo {
        height: 310px;
        width: auto;
      }

      .intro-text-wrapper {
        font-size: 1.4rem;
      }

      .waving-hand {
        font-size: 4rem;
      }

      .name-text-inner {
        font-size: 12rem;
      }

      h2 {
        font-size: 2.9rem;
      }

      .arrowone-container {
        margin-top: 8rem;
      }

      .arrow-down-one {
        font-size: 10rem;
      }

      .progress-container {
        width: 35px;
        border-radius: 25px;
        right: 6rem;
        border-radius: 23px;
      }

      .arrowtwo-container {
        margin-top: -1rem;
      }

      .arrow-up-one {
        font-size: 10rem;
      }

      .about-me-heading {
        font-weight: bold;
        font-size: 6.5rem;
      }

      .about-me-text {
        font-size: 2.5rem !important;
        word-wrap: break-word;
        width: 300%;
      }

      .col-md-8 {
        margin-top: -1rem;
      }

      .text-white-two {
        font-size: 2.2rem;
        margin-top: 2rem;
      }

      .about {
        font-size: 1.5rem;
      }

      .hero-image {
        width: 750px;
        height: 750px;
        border-radius: 3%;
        object-fit: cover;
        margin-top: 1rem;
        margin-left: -7rem;
      }
  
      .hero-title {
        position: absolute;
        bottom: -32px;
        right: calc(61.5% - 150px);
        font-size: 3rem;
        color: white;
        background-color: #3C6E71;
        padding: 0.5rem 1rem;
        border-radius: 10px;
      }

      .arrowthree-container {
        margin-top: -7rem;
      }

      .arrow-down-two {
        font-size: 10rem;
      }

      .project {
        min-height: 100vh;
      }

      .arrowfour-container {
        margin-top: -3rem
      }

      .arrow-up-two {
        font-size: 10rem;
      }

      .card {
        height: 28rem !important;
        width: 44rem !important;
        border-radius: 1rem;
        margin-top: 1rem;
      }

      .card .card-text {
        font-size: 2.5rem;
      }

      .project-card-margin {
        margin-left: -7rem;
        left: 6rem;
      }
      
      .arrow-down-three {
        font-size: 10rem;
      }

      .arrowsix-container {
        margin-top: -9rem;
      }

      .arrow-up-three {
        font-size: 15rem;
      }

      .arrowsix-container {
        margin-top: -6rem;
      }

      .arrow-up-three {
        font-size: 10rem;
      }

      .container {
        margin-top: 8rem;
      }

      .container h2 {
        font-size: 3rem;
      }

      .contact-section label {
        display: block;
        margin-bottom: 2rem;
        font-size: 1.7rem;
        margin-left: -18rem;
      }
      
      .contact-section input,
      .contact-section textarea {
        width: 200%;
        padding: 3rem;
        margin-bottom: 2rem;
        margin-left: -18rem;
      }
      
      .contact-section textarea {
        height: 15rem; /* Updated height */
      }

      .contact-container form button {
        font-size: 3rem !important;
        border-radius: 20px !important;
        width: 300px;
        margin-left: -18rem;
      }



    }


    @media (min-width: 3840px) {

      .navbar {
        font-size: 2.5rem;
      }
      
      .main {
        min-height: 100vh;
        margin-top: 10rem;
      }

      .logo {
        height: 450px;
        width: auto;
      }
      
      .intro-text-wrapper {
        font-size: 1.8rem;
      }

      .waving-hand {
        font-size: 6.5rem;
      }

      .name-text-inner {
        font-size: 16.5rem;
      }

      .name-inner::after {
        width: 70%;
      }

      h2 {
        font-size: 4rem;
      }

      .arrowone-container {
        margin-top: 21rem;
      }

      .arrow-down-one {
        font-size: 15rem;
      }

      .progress-container {
        width: 45px;
        border-radius: 25px;
      }

      .arrowtwo-container {
        margin-top: -3rem;
      }

      .arrow-up-one {
        font-size: 15rem;
      }

      .about-me-heading {
        font-weight: bold;
        font-size: 7.5rem;
      }

      .about-me-text {
        font-size: 3rem !important;
         word-wrap: break-word;
         width: 300%;
      }

      .col-md-8 {
        margin-top: 1rem;
      }

      .text-white-two {
        font-size: 2.2rem;
        margin-top:2rem;
      }

      .about {
        font-size: 2.5rem;
      }

      .hero-image {
        width: 1100px;
        height: 1100px;
        border-radius: 3%;
        object-fit: cover;
        margin-top: 1rem;
        margin-left: -8rem;
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

      .arrowthree-container {
        margin-top: 4rem;
      }

      .arrow-down-two {
        font-size: 15rem;
      }

      .project {
        min-height: 100vh;
      }

      .arrowfour-container {
        margin-top: rem
      }

      .arrow-up-two {
        font-size: 15rem;
      }

      .card {
        height: 40rem !important;
        width: 70rem !important;
        border-radius: 1rem;
        margin-top: 2rem;
      }

      .card .card-text {
        font-size: 2.5rem;
      }

      .project-card-margin {
        margin-left: -7rem;
        left: 6rem;
      }
      
      .arrow-down-three {
        font-size: 15rem;
      }

      .arrowsix-container {
        margin-top: -9rem;
      }

      .arrow-up-three {
        font-size: 15rem;
      }

      .container {
        margin-top: 14rem;
      }

      .container h2 {
        font-size: 5rem;
      }

      .contact-section label {
        display: block;
        margin-bottom: 2rem;
        font-size: 2rem;
        margin-left: -18rem;
      }
      
      .contact-section input,
      .contact-section textarea {
        width: 200%;
        padding: 3rem;
        margin-bottom: 6rem;
        margin-left: -18rem;
      }
      
      .contact-section textarea {
        height: 20rem; /* Updated height */
      }

      .contact-container form button {
        font-size: 4rem !important;
        border-radius: 20px !important;
        width: 300px;
        margin-left: -18rem;
      }

  }
  `;

  export default GlobalStyle;
