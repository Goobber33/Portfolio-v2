import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faNode, faNpm } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';
import { Element, scroller } from 'react-scroll';
import heroImage from '../images/hero.webp';

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

  const headerAnimation = useTextAnimation(showText, 300);
  const hero = useTextAnimation(showText, 100);
  const paragraph1Animation = useTextAnimation(showText, 400);
  const paragraph2Animation = useTextAnimation(showText, 500);
  const paragraph3Animation = useTextAnimation(showText, 600);
  const paragraph4Animation = useTextAnimation(showText, 700);
  const paragraph5Animation = useTextAnimation(showText, 800);
  const paragraph6Animation = useTextAnimation(showText, 900);
  const paragraph7Animation = useTextAnimation(showText, 1000);
  const paragraph8Animation = useTextAnimation(showText, 1100);
  const paragraph9Animation = useTextAnimation(showText, 1200);
  const paragraph10Animation = useTextAnimation(showText, 1300);
  const paragraph11Animation = useTextAnimation(showText, 1500)

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
              <div className="row">

                {/* About me text section */}

                <div className="col-md-8">
                  <animated.div style={headerAnimation} className="text-start">
                    <h2 className="text-white mb-4 about-me-heading">About Me</h2>
                  </animated.div>
                  <div className="d-grid gap-0">
                    <div style={{ maxWidth: '500px' }}>

                      <animated.div style={paragraph1Animation}>
                        <p className="mb-1 text-white fs-4 about-me-text">
                          I am a Full Stack Developer and IT
                        </p>
                      </animated.div>
                      <animated.div style={paragraph2Animation}>
                        <p className="mb-1 text-white fs-4 about-me-text">
                          Professional with a passion for Software
                        </p>
                      </animated.div>
                      <animated.div style={paragraph3Animation}>
                        <p className="mb-1 text-white fs-4 about-me-text">
                          Development. Having worked in IT for 3 years,
                        </p>
                      </animated.div>
                      <animated.div style={paragraph4Animation}>
                        <p className="mb-1 text-white fs-4 about-me-text">
                          I spend my downtime working on personal
                        </p>
                      </animated.div>
                      <animated.div style={paragraph5Animation}>
                        <p className="mb-1 text-white fs-4 about-me-text">
                          projects and learning new technologies.
                        </p>
                      </animated.div>
                      <animated.div style={paragraph6Animation}>
                        <p className="mb-1 text-white fs-4 about-me-text">
                          Currently, I am working my way through a
                        </p>
                      </animated.div>
                      <animated.div style={paragraph7Animation}>
                        <p className="mb-1 text-white fs-4 about-me-text">
                          coding bootcamp, and plan to focus on cloud
                        </p>
                      </animated.div>
                      <animated.div style={paragraph8Animation}>
                        <p className="mb-1 text-white fs-4 about-me-text">
                          technologies afterwards. My goal is to pursue
                        </p>
                      </animated.div>
                      <animated.div style={paragraph9Animation}>
                        <p className="mb-1 text-white fs-4 about-me-text">
                          certifications in AWS, Azure, and Google
                        </p>
                      </animated.div>
                      <animated.div style={paragraph10Animation}>
                        <p className="mb-5 text-white fs-4 about-me-text">
                          Cloud, further enhancing my skillset.
                        </p>
                      </animated.div>

                    </div>
                  </div>

                  <animated.div style={paragraph11Animation}>
                    <p className="text-white">Here are some languages I have worked with: </p>
                  </animated.div>

                  {/* These are the icons below the about me text */}

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

                {/* Hero Image */}

                <div className="col-md-4 col-sm-12">
                  <div className="hero-wrapper">
                    <div className="hero-image-wrapper">
                      <animated.div style={hero}>
                        <img
                          src={heroImage}
                          alt="Kyle Parks"
                          className="hero-image"
                          loading="lazy"
                        />
                        <h1 className="hero-title">Kyle Parks</h1>
                      </animated.div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </Element >
  );
};

export default About;