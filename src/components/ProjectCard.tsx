import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description of Project 1.',
    imageUrl: './images/second.jpg',
  },
  {
    title: 'Project 2',
    description: 'This is a description of Project 2.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 3',
    description: 'This is a description of Project 3.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const ProjectCard: React.FC = () => {
  return (
    <Row>
      {projects.map((project, index) => (
        <Col key={index} md={4} className="mb-4">
          <Card className="card h-100">
            <Card.Img variant="top" src={project.imageUrl} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectCard;
