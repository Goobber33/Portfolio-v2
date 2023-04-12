// SocialBar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Navbar } from 'react-bootstrap';

const SocialBar: React.FC = () => {
  return (
    <Navbar bg="transparent" fixed="bottom" className="d-flex justify-content-between" style={{ backgroundColor: '#284B63' }}>
      <div className="d-flex">
        <a href="https://github.com/Goobber33" target="_blank" rel="noopener noreferrer" className="mx-3 social-icon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/kyle-parks-b0a74017b/" target="_blank" rel="noopener noreferrer" className="mx-3 social-icon">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com/kcparks33" target="_blank" rel="noopener noreferrer" className="mx-3 social-icon">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <div className="text-muted m-1">© 2023 Kyle Parks</div>
    </Navbar>
  );
};

export default SocialBar;
