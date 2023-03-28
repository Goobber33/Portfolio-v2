import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <main>
      <Container fluid className="px-4">
        <ProjectCard />
      </Container>
    </main>
  );
};

export default Portfolio;
