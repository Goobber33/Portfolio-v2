import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

// Custom hook to animate text

const useTextAnimation = (showText: boolean, delay: number) => {
  return useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? 'translateY(0)' : 'translateY(100px)',
    delay: delay,
  });
};

// Component that displays the introductory text

const IntroText: React.FC = () => {
  const [showText, setShowText] = useState(false);

  // Sets the "showText" state to true when the component mounts

  useEffect(() => {
    setShowText(true);
  }, []);

  // Animations for the different parts of the text

  const helloTextAnimation = useTextAnimation(showText, 500);
  const nameTextAnimation = useTextAnimation(showText, 700);
  const descriptionTextAnimation = useTextAnimation(showText, 900);
  const descriptionTextAnimationtwo = useTextAnimation(showText, 1100);

  return (

    // Container for the text

    <div className="container-fluid">
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
  );
};

export default IntroText;
