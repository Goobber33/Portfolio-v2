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

const useTextAnimation = (showText: boolean, delay: number) => {
  return useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? 'translateY(0)' : 'translateY(100px)',
    delay: delay,
  });
};

const About: React.FC = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [showText, setShowText] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const headerAnimation = useTextAnimation(showText, 500);
  const paragraph1Animation = useTextAnimation(showText, 700);
  const paragraph2Animation = useTextAnimation(showText, 900);
  const paragraph3Animation = useTextAnimation(showText, 1100);
  const paragraph4Animation = useTextAnimation(showText, 1300);
  const paragraph5Animation = useTextAnimation(showText, 1500);


  const reactIconAnimation = useIconAnimation(showIcons, 1700);
  const htmlIconAnimation = useIconAnimation(showIcons, 1900);
  const cssIconAnimation = useIconAnimation(showIcons, 2100);
  const jsIconAnimation = useIconAnimation(showIcons, 2300);
  const nodeIconAnimation = useIconAnimation(showIcons, 2500);
  const npmIconAnimation = useIconAnimation(showIcons, 2700);

  useEffect(() => {
    const handleScroll = () => {
      if (animationTriggered) return;

      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const threshold = 0.5;
        const isInViewport = rect.top <= window.innerHeight * threshold && rect.bottom >= 0;
        if (isInViewport) {
          setShowIcons(true);
          setShowText(true);
          setAnimationTriggered(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationTriggered]);


  return (
    <Element name="about">
      <section id="about" className="about py-5 custom-mt">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 offset-md-1 offset-lg-2">
              <div></div>
              <animated.div style={headerAnimation}>
                <h2 className="text-white mb-4 fs-1">About Me</h2>
              </animated.div>
              <animated.div style={paragraph1Animation} className="about-text-line">
                <p id="aboutParagraph1" className="mb-1 text-white fs-4">
                  I am a Full Stack Developer and IT Professional.
                </p>
              </animated.div>
              <animated.div style={paragraph2Animation} className="about-text-line">
                <p className="mb-1 text-white fs-4">
                  I have worked in IT for 3 years, and have developed a passion for Software Development.
                </p>
              </animated.div>
              <animated.div style={paragraph3Animation} className="about-text-line">
                <p id="aboutParagraph2" className="mb-1 text-white fs-4">
                  On my down time, I like to work on personal projects and learn new technologies.
                </p>
              </animated.div>
              <animated.div style={paragraph4Animation} className="about-text-line">
                <p className="mb-1 text-white fs-4">
                  I am working my way through my coding bootcamp,
                </p>
              </animated.div>
              <animated.div style={paragraph5Animation} className="about-text-line">
                <p className="mb-5 text-white fs-4">
                  and I intend to learn cloud technologies post bootcamp and pursue certifications in AWS, Azure, and Google cloud.
                </p>
              </animated.div>

              <div className="d-flex justify-content-start mb-5">
                <animated.div style={reactIconAnimation}>
                  <FontAwesomeIcon icon={faReact} size="3x" className="mx-3 my-3 fa-icon" color="#61dafb" />
                </animated.div>
                <animated.div style={htmlIconAnimation}>
                  <FontAwesomeIcon icon={faHtml5} size="3x" className="mx-3 my-3 fa-icon" color="#f06529" />
                </animated.div>
                <animated.div style={cssIconAnimation}>
                  <FontAwesomeIcon icon={faCss3} size="3x" className="mx-3 my-3 fa-icon" color="#2965f1" />
                </animated.div>
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
        </div>
    </section>
    </Element >
  );
};

export default About;
