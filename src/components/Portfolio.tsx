import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3.',
  },
];

const Portfolio = () => {
  return (
    <>
      <header>
        <h1>Kyle Parks Portfolio</h1>
      </header>
      <main>
        <Container>
          <Row>
            {projects.map((project, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Portfolio;
