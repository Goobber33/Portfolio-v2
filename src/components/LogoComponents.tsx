import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import logo from '../images/logo.png';

// Custom hook to animate the logo

const useLogoAnimation = (showLogo: boolean, delay: number) => {
  return useSpring({
    opacity: showLogo ? 1 : 0,
    transform: showLogo ? 'translateY(0)' : 'translateY(100px)',
    delay: delay,
  });
};

const LogoComponent = () => {
  const [showLogo, setShowLogo] = useState(false);

  // Sets the "showLogo" state to true when the component mounts

  useEffect(() => {
    setShowLogo(true);
  }, []);

  // Animation for the logo

  const logoAnimation = useLogoAnimation(showLogo, 200);

  return (
    <animated.div style={logoAnimation} className="mt-3 mt-md-0">
      <Image src={logo} alt="Kyle Parks Portfolio" height={180} />
    </animated.div>
  );
};

export default LogoComponent;
