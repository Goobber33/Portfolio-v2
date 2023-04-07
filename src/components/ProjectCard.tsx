import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import secondImage from '../images/second.jpg';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description of Project 1.',
    
  },
  {
    title: 'Project 2',
    description: 'This is a description of Project 2.',
  },
  {
    title: 'Project 3',
    description: 'This is a description of Project 3.',
  },
];

const ProjectCard: React.FC = () => {
  return (
    <section id="project" className="project py-5 custom-pr">
    <Row>
      {projects.map((project, index) => (
        <Col key={index} md={4} className="mb-5">
          <Card className="card h-100">
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </section>
  );
};

export default ProjectCard;
