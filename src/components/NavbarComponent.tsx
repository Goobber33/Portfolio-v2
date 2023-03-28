import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LogoComponent from './LogoComponents';

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand href="#home">
        <LogoComponent />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
