import React, { useState, useEffect, forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Element } from 'react-scroll';
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

  const helloTextAnimation = useTextAnimation(showText, 500);
  const nameTextAnimation = useTextAnimation(showText, 700);
  const descriptionTextAnimation = useTextAnimation(showText, 900);
  const descriptionTextAnimationtwo = useTextAnimation(showText, 1100);

  useEffect(() => {
    setShowText(true);
  }, []);

  const handleNavLinkClick = (linkName: string) => {
    // Set a default offset value
    let offset = 55;
  
    // Update the offset value based on the screen size using window.matchMedia
    if (window.matchMedia('(min-width: 3840px)').matches) {
      // For screens with a width of at least 3840px
      offset = 55; // Set the desired offset value for this breakpoint
    }

    if (window.matchMedia('(min-width: 2560px)').matches) {
      offset = 100;
    }

    if (window.matchMedia('(min-width: 1920px)').matches) 
  
    // Pass the updated offset value to the scroller
    scroller.scrollTo(linkName, {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset,
    });
  };
  

  return (
    <div ref={ref}>
      <Element name="introText">
        <section id="introText" className="main">
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
                    <span role="img" aria-label="waving hand" className="waving-hand">
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

          <div onClick={() => handleNavLinkClick('about')} className="d-flex justify-content-center arrowone-container">

            <span className="arrow-down-one mt-3" style={{ cursor: 'pointer' }}>
              <i className="fa fa-angle-down text-white"></i>
            </span>

            <span className="about-me">
              About Me
            </span>

          </div>

        </section>
      </Element>
    </div>
  )
});

export default IntroText;
