import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { throttle } from 'lodash';

interface NavbarProps {
  style?: React.CSSProperties;
  contactFormRef: React.RefObject<HTMLDivElement>;
}

const NavbarComponent: React.FC<NavbarProps> = ({ style, contactFormRef }) => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (linkName: string) => {
    setExpanded(false);
    setActiveLink(linkName);
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      className={`mb-4 mt-3 mt-md-0 ${visible ? '' : 'navbar-hidden'}`}
      style={style}
    >
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={toggleNavbar}
        className="ml-auto"
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className={`${expanded ? 'show transparent-menu' : ''} text-right`}
      >
        <Nav className="ml-auto">
          <Nav.Link
            onClick={() => { scrollToTop(); handleNavLinkClick('home'); }}
            active={activeLink === 'home'}
          >
            01. Home
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavLinkClick('about')}
            href="#about"
            active={activeLink === 'about'}
          >
            02. About
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavLinkClick('projects')}
            href="#projectsAnchor"
            active={activeLink === 'projects'}
          >
            03. Projects
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              handleNavLinkClick('contact');
              if (contactFormRef.current) {
                contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            href="#contact"
            active={activeLink === 'contact'}
          >
            04. Contact
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavLinkClick('resume')}
            href="#resume"
            active={activeLink === 'resume'}
          >
            05. Resume
          </Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
