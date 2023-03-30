import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import LogoComponent from './components/LogoComponents';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Hero from './components/Hero';
import SocialBar from './components/SocialMediaBar';
import GlobalStyle from './components/GlobalStyle';
import IntroText from './components/IntroText';
import ContactForm from './components/ContactForm'; // Import the ContactForm component

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <LogoComponent />
          </div>
          <div className="col-12 col-md-8">
            <NavbarComponent style={{ marginTop: '3rem' }} />
          </div>
        </div>
      </div>
      <IntroText />
      <About />
      <Hero />
      <Portfolio />
      <SocialBar />
      <ContactForm /> {/* Add the ContactForm component to the bottom of the page */}
    </>
  );
};

export default App;
