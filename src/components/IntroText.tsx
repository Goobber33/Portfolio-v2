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
  const descriptionTextAnimationTwo = useTextAnimation(showText, 1100);

  useEffect(() => {
    setShowText(true);
  }, []);

  const handleNavLinkClick = (linkName: string) => {
    let offset = 55;

    if (window.matchMedia('(min-width: 3840px)').matches) {
      offset = 55;
    }

    if (window.matchMedia('(min-width: 2560px)').matches) {
      offset = 100;
    }

    if (window.matchMedia('(min-width: 1440px)').matches) {
      offset = 80;
    }

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
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 offset-md-1 offset-lg-2">
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
                  <animated.h2 style={descriptionTextAnimationTwo} className="text-white">
                    learn new things.
                  </animated.h2>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center">
                <div className="lottie-player-wrapper">
                  {React.createElement('lottie-player', {
                    src: "https://lottie.host/b8ec5979-f33c-429c-8bd1-058dc7b3df30/RASgR2Wqwb.json",
                    background: "transparent",
                    speed: "1",
                    style: { width: '100%', height: '100%' },
                    loop: true,
                    autoplay: true
                  })}
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
  );
});

export default IntroText;
