import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';

const About: React.FC = () => {
  const [showIcons, setShowIcons] = React.useState(false);
  const iconAnimation = useSpring({
    opacity: showIcons ? 1 : 0,
    transform: showIcons ? 'translateY(0)' : 'translateY(100px)',
    delay: 500,
  });

  React.useEffect(() => {
    setShowIcons(true);
  }, []);

  return (
    <section id="about" className="py-5">
      <div className="container text-white">
        <h2>About Me</h2>
        <p>I am a software developer with a passion for building web applications. I enjoy solving complex problems and collaborating with others to build innovative solutions. In my free time, I enjoy hiking, playing guitar, and exploring new technologies.</p>
        <animated.div style={iconAnimation}>
          <FontAwesomeIcon icon={faReact} size="3x" className="mx-3 my-3 fa-icon" />
          <FontAwesomeIcon icon={faHtml5} size="3x" className="mx-3 my-3 fa-icon" />
          <FontAwesomeIcon icon={faCss3} size="3x" className="mx-3 my-3 fa-icon" />
          <FontAwesomeIcon icon={faJs} size="3x" className="mx-3 my-3 fa-icon" />
        </animated.div>
      </div>
    </section>
  );
}

export default About;
