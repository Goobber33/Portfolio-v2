import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

interface NavbarProps {
  style?: React.CSSProperties;
}

const NavbarComponent: React.FC<NavbarProps> = ({ style }) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      className="mb-4 mt-3 mt-md-0"
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
          <Nav.Link onClick={scrollToTop}>01. Home</Nav.Link>
          <Nav.Link href="#about">02. About</Nav.Link>
          <Nav.Link href="#projects">03. Projects</Nav.Link>
          <Nav.Link href="#contact">04. Contact</Nav.Link>
          <Nav.Link href="#resume">05. Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
