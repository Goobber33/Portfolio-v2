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

const App: React.FC = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <GlobalStyle />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <LogoComponent />
          </div>
          <div className="col-12 col-md-8">
            <NavbarComponent style={{ marginTop: '3rem' }} contactFormRef={contactFormRef} />
          </div>
        </div>
      </div>
      <IntroText />
      <About />
      <Hero />
      <Portfolio />
      <SocialBar />
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
    </>
  );
};

export default App;
