import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

interface NavbarProps {
  style?: React.CSSProperties;
}

const NavbarComponent: React.FC<NavbarProps> = ({ style }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition <= 0) {
      setVisible(true);
    } else if (currentScrollPosition > scrollPosition) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

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
            href="#projects"
            active={activeLink === 'projects'}
          >
            03. Projects
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavLinkClick('contact')}
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
