import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import LogoComponent from './components/LogoComponents';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Hero from './components/Hero';
import SocialBar from './components/SocialMediaBar';
import GlobalStyle from './components/GlobalStyle';

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <h2 className="intro-text text-white pt-custom mb-5">
              Hello! My name is Kyle Parks. I am a Full Stack Developer, and I love to create and learn new things. I am
              currently enrolled in the University of Washington's Full Stack coding bootcamp where I am learning new skills
              every day. Please take a look at my Portfolio, and follow my social media links if you would like to get in
              contact!
            </h2>
          </div>
        </div>
      </div>
      <About />
      <Hero />
      <Portfolio />
      <SocialBar />
    </>
  );
};

export default App;
