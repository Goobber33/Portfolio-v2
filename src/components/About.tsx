import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faNode, faNpm } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';
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
  const [showText, setShowText] = useState(false);

  const reactIconAnimation = useIconAnimation(showIcons, 900);
  const htmlIconAnimation = useIconAnimation(showIcons, 1100);
  const cssIconAnimation = useIconAnimation(showIcons, 1300);
  const jsIconAnimation = useIconAnimation(showIcons, 1500);
  const nodeIconAnimation = useIconAnimation(showIcons, 1700);
  const npmIconAnimation = useIconAnimation(showIcons, 1900);

  const typewriterText = 'About Me';

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInViewport) {
          setShowIcons(true);
          setShowText(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showText) {
      setTimeout(() => {
        document.getElementById('aboutHeader')?.classList.add('visible');
        document.getElementById('aboutParagraph1')?.classList.add('visible');
        document.getElementById('aboutParagraph2')?.classList.add('visible');
      }, 500);
    }
  }, [showText]);

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
        <div className="container text-white d-flex flex-column ">
          <h2 id="aboutHeader" onClick={scrollToAbout} className="mb-5 text-center">{typewriterText}</h2>
          <p id="aboutParagraph1" className="mb-3 text-center">
            I am a Full Stack Developer and IT Professional. I have worked in IT for 3 years, and have developed a passion for Software Development.
          </p>
          <p id="aboutParagraph2" className="mb-5 text-center">On my down time, I like to work on personal projects and learn new technologies. I am working my way through my coding bootcamp,
            and I intend to learn cloud technologies post bootcamp and pursue certifications in AWS, Azure, and Google cloud.</p>

          <div className="d-flex justify-content-end mb-5">
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
