import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faNode, faNpm } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';
import useTypewriter from 'react-typewriter-hook';
import { Element, scroller } from 'react-scroll';

const useIconAnimation = (showIcons: boolean, delay: number) => {
  return useSpring({
    opacity: showIcons ? 1 : 0,
    transform: showIcons ? 'translateY(0)' : 'translateY(100px)',
    delay: delay,
  });
};

const About: React.FC = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  const reactIconAnimation = useIconAnimation(showIcons, 500);
  const htmlIconAnimation = useIconAnimation(showIcons, 700);
  const cssIconAnimation = useIconAnimation(showIcons, 900);
  const jsIconAnimation = useIconAnimation(showIcons, 1100);
  const nodeIconAnimation = useIconAnimation(showIcons, 1300);
  const npmIconAnimation = useIconAnimation(showIcons, 1500);

  const typewriterText = useTypewriter(showTypewriter ? 'About Me' : '');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        setShowIcons(isInViewport);
        setShowTypewriter(isInViewport);
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
      <section id="about" className="py-5 custom-mt">
        <div className="container text-white d-flex flex-column align-items-center">
          <h2 onClick={scrollToAbout} className="mb-4">{typewriterText}</h2>
          <p>
            I am a software developer with a passion for building web applications. I enjoy solving complex problems and
            collaborating with others to build innovative solutions. In my free time, I enjoy hiking, playing guitar, and
            exploring new technologies.
          </p>

          <div className="d-flex justify-content-center">
            <div>
              <animated.div style={reactIconAnimation}>
                <FontAwesomeIcon icon={faReact} size="3x" className="mx-3 my-3 fa-icon" color="#61dafb" />
              </animated.div>
              <animated.div style={htmlIconAnimation}>
                <FontAwesomeIcon icon={faHtml5} size="3x" className="mx-3 my-3 fa-icon" color="#f06529" />
              </animated.div>
              <animated.div style={cssIconAnimation}>
                <FontAwesomeIcon icon={faCss3} size="3x" className="mx-3 my-3 fa-icon" color="#2965f1" />
              </animated.div>
            </div>
            <div>
              <animated.div style={jsIconAnimation}>
                <FontAwesomeIcon icon={faJs} size="3x" className="mx-3 my-3 fa-icon" color="#f7df1e" />
              </animated.div>
              <animated.div style={nodeIconAnimation}>
                <FontAwesomeIcon icon={faNode} size="3x" className="mx-3 my-3 fa-icon" color="#68a063" />
              </animated.div>
              <animated.div style={npmIconAnimation}>
                <FontAwesomeIcon icon={faNpm} size="3x" className="mx-3 my-3 fa-icon" color="#68a063" />
              </animated.div>
            </div>
          </div>
        </div>

      </section>
    </Element>
  );
};

export default About;
