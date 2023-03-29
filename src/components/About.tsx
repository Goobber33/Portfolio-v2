import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';
import useTypewriter from 'react-typewriter-hook';
import { Element, scroller } from 'react-scroll';

const About: React.FC = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false); // Add a new state for the typewriter effect
  const iconAnimation = useSpring({
    opacity: showIcons ? 1 : 0,
    transform: showIcons ? 'translateY(0)' : 'translateY(100px)',
    delay: 500,
  });

  const typewriterText = useTypewriter(showTypewriter ? 'About Me' : ''); // Trigger the typewriter effect based on the state

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        setShowIcons(isInViewport);
        setShowTypewriter(isInViewport); // Set the typewriter effect state based on the visibility of the section
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Element name="about">
      <section id="about" className="py-5">
        <div className="container text-white d-flex flex-column align-items-center">
          <h2 onClick={scrollToAbout}>
            {typewriterText}
          </h2>
          <p>
            I am a software developer with a passion for building web applications. I enjoy solving complex problems and
            collaborating with others to build innovative solutions. In my free time, I enjoy hiking, playing guitar, and
            exploring new technologies.
          </p>
          <animated.div style={iconAnimation}>
            <FontAwesomeIcon icon={faReact} size="3x" className="mx-3 my-3 fa-icon" />
            <FontAwesomeIcon icon={faHtml5} size="3x" className="mx-3 my-3 fa-icon" />
            <FontAwesomeIcon icon={faCss3} size="3x" className="mx-3 my-3 fa-icon" />
            <FontAwesomeIcon icon={faJs} size="3x" className="mx-3 my-3 fa-icon" />
          </animated.div>
        </div>
      </section>
    </Element>
  );
};

export default About;
