import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import LogoComponent from './components/LogoComponents';
import About from './components/About';
import SocialBar from './components/SocialMediaBar';
import GlobalStyle from './components/GlobalStyle';
import Intro from './components/IntroText';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';
import 'font-awesome/css/font-awesome.min.css';
import ProgressBar from './components/ProgressBar';

const App: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectCardRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [sections, setSections] = useState<number[]>([]);

  useEffect(() => {
    const calculateSections = () => {
      const introPos = introRef.current?.offsetTop || 0;
      const aboutPos = aboutRef.current?.offsetTop || 0;
      const projectCardPos = projectCardRef.current?.offsetTop || 0;
      const contactFormPos = contactFormRef.current?.offsetTop || 0;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
    
      setSections([
        (introPos / totalHeight) * 100,
        (aboutPos / totalHeight) * 100,
        (projectCardPos / totalHeight) * 100,
        (contactFormPos / totalHeight) * 100,
      ]);
    };
    
    const handleScroll = () => {
      requestAnimationFrame(calculateSections);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateSections);
    calculateSections();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateSections);
    };
  }, []);
  
  // Render the App component
  return (
    <>
      {/* Add global styles to the app */}
      <GlobalStyle />

      <ProgressBar sections={sections} />

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
      <Intro ref={introRef} />

      {/* Render the About component */}
      <About ref={aboutRef} />

      {/* Render the ProjectCard component */}
      <ProjectCard ref={projectCardRef} />

      {/* Render the SocialBar component */}
      <SocialBar />

      {/* Create a div with the contactFormRef */}
      <ContactForm ref={contactFormRef} />
        {/* Render the ContactForm component */}
    </>
  );
};

// Export the App component as the default export of this module
export default App;
