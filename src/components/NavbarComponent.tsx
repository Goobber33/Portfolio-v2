import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top" // Make the navbar fixed at the top
      className="mb-4 mt-3 mt-md-0"
    >
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={toggleNavbar}
        className="ml-auto" // Align the burger icon to the right side
      />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className={`${expanded ? 'show transparent-menu' : ''} text-right`} // Add the text-right class
      >
        <Nav className="ml-auto">
          <Nav.Link href="#home">01. Home</Nav.Link>
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
