import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import LogoComponent from './components/LogoComponents';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <>
      <div className="container-fluid"> {/* Change to container-fluid */}
        <div className="row">
          <div className="col-12 col-md-4">
            <LogoComponent />
          </div>
          <div className="col-12 col-md-8">
            <NavbarComponent />
          </div>
        </div>
      </div>
      <Hero />
      <div className="container text-white">
        <h2 className="intro-text">
          Hello! My name is Kyle Parks. I am a Full Stack Developer, and I love to create and learn new things. I am
          currently enrolled in the University of Washingtons Full Stack coding bootcamp where I am learning new skills
          every day. Please take a look at my Portfolio, and follow my social media links if you would like to get in
          contact!
        </h2>
      </div>
      <About />
      <Portfolio />
    </>
  );
};

export default App;
