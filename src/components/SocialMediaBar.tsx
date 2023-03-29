import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Navbar } from 'react-bootstrap';

const SocialBar: React.FC = () => {
  return (
    <Navbar bg="transparent" fixed="bottom" className="d-flex justify-content-between" style={{ backgroundColor: '#284B63' }}>
      <div className="d-flex">
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-url/" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="text-muted">© 2023 Kyle Parks</div>
    </Navbar>
  );
};

export default SocialBar;
