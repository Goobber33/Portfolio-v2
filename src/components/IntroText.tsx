import React, { useState, useEffect, forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Element } from 'react-scroll';
import { throttle } from 'lodash';
import { scroller } from 'react-scroll';


const useTextAnimation = (showText: boolean, delay: number) => {
  return useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? 'translateY(0)' : 'translateY(100px)',
    delay: delay,
  });
};


const IntroText = forwardRef<HTMLDivElement>((_, ref) => {
  const [showText, setShowText] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const helloTextAnimation = useTextAnimation(showText, 500);
  const nameTextAnimation = useTextAnimation(showText, 700);
  const descriptionTextAnimation = useTextAnimation(showText, 900);
  const descriptionTextAnimationtwo = useTextAnimation(showText, 1100);


  useEffect(() => {
    setShowText(true);
  }, []);

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

  const [activeLink, setActiveLink] = useState<string>('about');

  const handleNavLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    scroller.scrollTo(linkName, {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 2,
    });
  };



  return (
    <div ref={ref}>
      <Element name="introText">
        <section id="introText" className="vh-40 background-#284B63">
          <div className="container-fluid custom">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-6 offset-md-1 offset-lg-2">
                <div className="intro-text-wrapper">

                  <animated.h2
                    style={{
                      ...helloTextAnimation,
                      fontFamily: 'Garamond, serif',
                    }}
                    className="hello-text mb-3 text-white"
                  >
                    Hi{' '}
                    <span role="img" aria-label="waving hand" className="waving-hand fs-2">
                      👋 {' '}
                    </span> my name is
                  </animated.h2>

                  <animated.h3
                    style={{
                      ...nameTextAnimation,
                    }}
                    className="name-text fs-1 mb-4"
                  >
                    <span className="name-inner">
                      <span className="name-text-inner">Kyle Parks.</span>
                    </span>
                    <span className="underline"></span>
                  </animated.h3>

                  <animated.h2 style={descriptionTextAnimation} className="text-white mb-1">
                    I am a Full Stack Developer, and I love to create and
                  </animated.h2>
                  <animated.h2 style={descriptionTextAnimationtwo} className="text-white">
                    learn new things.
                  </animated.h2>

                </div>
              </div>
            </div>
          </div>

      

          <div
            onClick={() => handleNavLinkClick('about')}
            
            className="d-flex justify-content-center arrowone-container"
          >
            <span className="arrow-down-one mt-3" style={{ cursor: 'pointer' }}>
              <i className="fa fa-angle-down text-white"></i>
            </span>
           
              <span className="about-me mt-1">
                About Me
              </span>
          
          </div>


        </section>
      </Element>
    </div>
  )
});

export default IntroText;
