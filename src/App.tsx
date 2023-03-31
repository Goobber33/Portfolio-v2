// Import necessary dependencies and components

import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import LogoComponent from './components/LogoComponents';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Hero from './components/Hero';
import SocialBar from './components/SocialMediaBar';
import GlobalStyle from './components/GlobalStyle';
import IntroText from './components/IntroText';
import ContactForm from './components/ContactForm';

// Define the main App component

const App: React.FC = () => {

  // Create a reference to the ContactForm component
  
  const contactFormRef = useRef<HTMLDivElement>(null);


  // Render the App component

  return (
    <>

      {/* Add global styles to the app */}

      <GlobalStyle />

      {/* Create a container for the logo and navbar */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">

            {/* Render the LogoComponent */}

            <LogoComponent />
          </div>
          <div className="col-12 col-md-8">

            {/* Render the NavbarComponent and pass in the contactFormRef */}

            <NavbarComponent style={{ marginTop: '3rem' }} contactFormRef={contactFormRef} />
          </div>
        </div>
      </div>

      {/* Render the IntroText component */}

      <IntroText />

      {/* Render the About component */}

      <About />

      {/* Render the Hero component */}

      <Hero />

      {/* Render the Portfolio component */}

      <Portfolio />

      {/* Render the SocialBar component */}

      <SocialBar />

      {/* Create a div with the contactFormRef */}

      <div ref={contactFormRef}>

        {/* Render the ContactForm component */}

        <ContactForm />
      </div>
    </>
  );
};

// Export the App component as the default export of this module

export default App;
