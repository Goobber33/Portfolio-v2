import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useTrail, animated } from 'react-spring';

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
  {
    title: 'Project 4',
    description: 'This is a description of Project 4.',
  },
  {
    title: 'Project 5',
    description: 'This is a description of Project 5.',
  },
  {
    title: 'Project 6',
    description: 'This is a description of Project 6.',
  },
];

const cardStyle = {
  height: '300px',
  width: '540px'
};

const useTrailAnimation = (showItems: boolean) => {
  return useTrail(projects.length, {
    opacity: showItems ? 1 : 0,
    transform: showItems ? 'translateY(0)' : 'translateY(100px)',
    delay: 500,
    from: { opacity: 0, transform: 'translateY(100px)' },
  });
};

const ProjectCard: React.FC = () => {

  const [showItems, setShowItems] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const trail = useTrailAnimation(showItems);

  useEffect(() => {
    const handleScroll = () => {
      if (animationTriggered) return;

      const aboutSection = document.getElementById('projects');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInViewport) {
          setShowItems(true);
          setAnimationTriggered(true);

          // Automatically scroll and center on the page
          window.scrollTo({
            top: aboutSection.offsetTop - (window.innerHeight - aboutSection.offsetHeight) / 2,
            behavior: 'smooth',
          });

          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationTriggered]);

  return (
    <section id="projects" className="project py-3 custom-pr">
      <Container fluid style={{ paddingLeft: 16, paddingRight: 23 }}>
        <Row noGutters className="justify-content-center">
          {trail.map((style, index) => (
            <Col key={index} className="mb-2 custom-col" xl={4} lg={4} md={6} sm={12}>
              <animated.div style={style}>
                <Card className="card" style={cardStyle}>
                  <Card.Body>
                    <Card.Title>{projects[index].title}</Card.Title>
                    <Card.Text>{projects[index].description}</Card.Text>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectCard;
