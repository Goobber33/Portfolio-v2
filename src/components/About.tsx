import React, { useState, useEffect, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faNode, faNpm } from '@fortawesome/free-brands-svg-icons';
import { Element } from 'react-scroll';
import heroImage from '../images/hero.webp';
import { scroller } from 'react-scroll';
import { throttle } from 'lodash';


const About = forwardRef<HTMLDivElement>((_, ref) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = throttle(() => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition <= 0) {
      setVisible(true);
    } else if (currentScrollPosition > scrollPosition) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setScrollPosition(currentScrollPosition);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const [activeLink, setActiveLink] = useState<string>('ProjectCard');

  const handleNavLinkClick = (linkName: string) => {
    setActiveLink(linkName);

    // Set a default offset value
    let offset = 0;

    // Update the offset value based on the screen size using window.matchMedia
    if (window.matchMedia('(min-width: 3840px)').matches) {
      // For screens with a width of at least 3840px
      offset = 0; // Set the desired offset value for this breakpoint
    }

    scroller.scrollTo(linkName, {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset,
    });
  };

  const handleScrollUp = () => {
    // Set a default offset value
    let offset = -180;

    // Update the offset value based on the screen size using window.matchMedia
    if (window.matchMedia('(min-width: 3840px)').matches) {
      // For screens with a width of at least 3840px
      offset = -600; // Set the desired offset value for this breakpoint
    }

    if (window.matchMedia('(min-width: 2560px)').matches) {
      offset = -800;
    }

    if (window.matchMedia('(min-width: 1920px)').matches) {
      offset = -940;
    }

    if (window.matchMedia('(min-width: 1440px)').matches) {
      offset = -1000
    }

    scroller.scrollTo('introText', {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset,
    });
  };


  return (
    <div ref={ref}>
      <Element name="about">
        <section id="about" className="about py-5 custom-mt about-fullscreen">

          <div
            onClick={handleScrollUp}
            className="d-flex justify-content-center arrowtwo-container"
          >
            <span className="arrow-up-one mt-3" style={{ cursor: 'pointer' }}>
              <i className="fa fa-angle-up arronec"></i>
            </span>

            <span className="hometext">
              Home
            </span>

          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-6 offset-md-1 offset-lg-2">
                <div className="row">

                  {/* About me text section */}
                
                  <div className="col-md-8">
                    <div className="text-start">
                      <h2 className="mb-4 about-me-heading">About Me</h2>
                    </div>
                    <div className="d-grid gap-0">
                      <div style={{ maxWidth: '500px' }}>
                        <p className="mb-1 fs-4 about-me-text">
                          I am a Full Stack Developer and IT
                        </p>
                        <p className="mb-1 fs-4 about-me-text">
                          Professional with a passion for Software
                        </p>  
                        <p className="mb-1 fs-4 about-me-text">
                          Development. Having worked in IT for 3 years,
                        </p>
                        <p className="mb-1 fs-4 about-me-text">
                          I spend my downtime working on personal
                        </p>
                        <p className="mb-1 fs-4 about-me-text">
                          projects and learning new technologies.
                        </p>
                        <p className="mb-1 fs-4 about-me-text">
                          Currently, I am working my way through a
                        </p>
                        <p className="mb-1 fs-4 about-me-text">
                          coding bootcamp, and plan to focus on cloud
                        </p>
                        <p className="mb-1 fs-4 about-me-text">
                          technologies afterwards. My goal is to pursue
                        </p>
                        <p className="mb-1 fs-4 about-me-text">
                          certifications in AWS, Azure, and Google
                        </p>
                        <p className="mb-5 fs-4 about-me-text">
                          Cloud, further enhancing my skillset.
                        </p>

                      </div>
                    </div>

                    <p className="text-white-two">Here are some languages I have worked with: </p>

                    {/* These are the icons below the about me text */}

                    <div className="d-flex justify-content-start mb-5">
                      <FontAwesomeIcon icon={faReact} size="3x" className="mx-3 my-3 fa-icon" color="#61dafb" />
                      <FontAwesomeIcon icon={faHtml5} size="3x" className="mx-3 my-3 fa-icon" color="#f06529" />
                      <FontAwesomeIcon icon={faCss3} size="3x" className="mx-3 my-3 fa-icon" color="#2965f1" />
                      <FontAwesomeIcon icon={faJs} size="3x" className="mx-3 my-3 fa-icon" color="#f7df1e" />
                      <FontAwesomeIcon icon={faNode} size="3x" className="mx-3 my-3 fa-icon" color="#68a063" />
                      <FontAwesomeIcon icon={faNpm} size="3x" className="mx-3 my-3 fa-icon" color="#68a063" />
                    </div>
                  </div>
                  
                  {/* Hero Image */}

                  <div className="col-md-4 col-sm-12">
                    <div className="hero-wrapper">
                      <div className="hero-image-wrapper">
                        <img
                          src={heroImage}
                          alt="Kyle Parks"
                          className="hero-image"
                          loading="lazy"
                        />
                        <h1 className="hero-title">Kyle Parks</h1>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => handleNavLinkClick('ProjectCard')}

            className="d-flex justify-content-center arrowthree-container">

            <span className="arrow-down-two mt-3" style={{ cursor: 'pointer' }}>
              <i className="fa fa-angle-down arrthreec"></i>
            </span>

            <span className="pcard">
              Projects
            </span>

          </div>

        </section>
      </Element>
    </div>
  )
});

export default About;