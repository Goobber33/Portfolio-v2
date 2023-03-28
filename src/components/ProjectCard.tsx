import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <>
      <header>
        <h1>Kyle Parks Portfolio</h1>
      </header>
      <main>
        <Container fluid>
          <ProjectCard />
        </Container>
      </main>
    </>
  );
};

export default Portfolio;
