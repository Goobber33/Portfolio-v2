import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const useTextAnimation = (showText: boolean, delay: number) => {
  return useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? 'translateY(0)' : 'translateY(100px)',
    delay: delay,
  });
};

const IntroText: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const helloTextAnimation = useTextAnimation(showText, 500);
  const nameTextAnimation = useTextAnimation(showText, 700);
  const descriptionTextAnimation = useTextAnimation(showText, 900);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 offset-md-1 offset-lg-2">
          <div className="intro-text-wrapper">
            <animated.h2 style={helloTextAnimation} className="hello-text mb-3">
              Hi{' '}
              <span role="img" aria-label="waving hand" className="waving-hand fs-2">
                👋 {' '}
              </span> my name is
            </animated.h2>
            <animated.h3 style={nameTextAnimation} className="name-text fs-1 mb-5">
              <span className="name-inner">
                <span className="name-text-inner">Kyle Parks.</span> {/* Add this line */}
              </span>
              <span className="underline"></span>
            </animated.h3>
            <animated.h2 style={descriptionTextAnimation} className="text-white">
              I am a Full Stack Developer, and I love to create and learn new things.
            </animated.h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
