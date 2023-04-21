import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

interface NavbarProps {
  style?: React.CSSProperties;
  contactFormRef: React.RefObject<HTMLDivElement>;
}

const NavbarComponent: React.FC<NavbarProps> = ({ style, contactFormRef }) => {
  const [expanded, setExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    const introTextSection = document.getElementById('introText');
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('ProjectCard');
    const contactSection = document.getElementById('contact');
    const resumeSection = document.getElementById('resume');

    const sections = [
      { name: 'home', element: introTextSection },
      { name: 'about', element: aboutSection },
      { name: 'projects', element: projectsSection },
      { name: 'contact', element: contactSection },
      { name: 'resume', element: resumeSection },
    ];

    const sectionInView = sections.find((section) => {
      if (section.element && section.name !== '') {
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom >= 80;
      }
    });

    setActiveLink(sectionInView?.name ?? 'home');
  }, [scrollPosition]);

  const [activeLink, setActiveLink] = useState('');

  const navbarLinkStyle = { color: 'gray' };

  return (
    <Navbar
      variant="dark"
      
      fixed="top"
      className={`mb-4 mt-3 mt-md-0`}
    >

      <Nav className="ml-auto">
        <Nav.Link
          className={activeLink === 'home' ? 'active' : ''}
          href="#introText"
          style={navbarLinkStyle}
        >
          01. Home
        </Nav.Link>
        <Nav.Link
          className={activeLink === 'about' ? 'active' : ''}
          href="#about"
          style={navbarLinkStyle}
        >
          02. About
        </Nav.Link>
        <Nav.Link
          className={activeLink === 'projects' ? 'active' : ''}
          href="#ProjectCard"
          style={navbarLinkStyle}
        >
          03. Projects
        </Nav.Link>
        <Nav.Link
          className={activeLink === 'contact' ? 'active' : ''}
          href="#contact"
          style={navbarLinkStyle}
        >
          04. Contact
        </Nav.Link>
        <Nav.Link
          className={activeLink === 'resume' ? 'active' : ''}
          href="#resume"
          style={navbarLinkStyle}
        >
          05. Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
