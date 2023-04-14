import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useTrail, animated } from 'react-spring';
import { FaGithub } from 'react-icons/fa';
import { Element } from 'react-scroll';

const projects = [
  {
    title: 'Portfolio v2',
    description: 'This current site is the second version of my Personal Portfolio, built with React, Bootstrap and Typescript',
    githubUrl: 'https://github.com/Goobber33/Portfolio-v2'
  },
  {
    title: 'Jobstacle Course',
    description: 'Jobstacle course is a collaborative Full-Stack website that logs you in, tracks what jobs you have applied to, interviewed for, and been denied for and utilizes a user friendly UI to track these. It uses MySQL, Node.js, Handlebars, and many other tools.',
    githubUrl: 'https://github.com/chewytaro/Jobstacle-course'
  },
  {
    title: 'Where Wolf',
    description: 'Where Wolf is a collaborative project built to list dog friendly businesses in a searched area. It uses Yelpp-Fusion API to find the businesses, and leaflet API to show these businesses on an interactive map.',
    githubUrl: 'https://github.com/jacksonmaltby/where-wolf'
  },
  {
    title: 'E-commerce back-end',
    description: 'I built the back-end of an eccomerce site. This project uses Node.js and has categories, tags, and product ids.',
    githubUrl: 'https://github.com/Goobber33/Complete-E-comm-Back-End'
  },
  {
    title: 'Track Your Employees',
    description: 'Using Node.js, this is a CLI application that tracks employees names, job titles, salary, and will also show the department and manager for each employee.',
    githubUrl: 'https://github.com/Goobber33/Track-your-Employees-'
  },
  {
    title: 'Crazy Weather We Are having',
    description: 'This application is a Weather Dashboard. The user can search an area and it will show the current and 10 day weather for that area.',
    githubUrl: 'https://github.com/Goobber33/Crazy-Weather-We-re-Having'
  },
];

const cardStyle = {
  height: '300px',
  width: '450px'
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
  <Element name="ProjectCard">
    <section id="projects" className="project py-3 custom-pr">
      <Container fluid style={{ paddingLeft: 70 }}>
        <a id="projectsAnchor" href="#projects" className="anchor"></a>
        <Row noGutters className="justify-content-center">
          {trail.map((style, index) => (
            <Col key={index} className={`mb-2 custom-col project-card-margin`} xl={4} lg={4} md={6} sm={12}>
              <animated.div style={style}>
                <Card className="card custom-card-spacing" style={cardStyle}>                  
                  <Card.Header className="d-flex justify-content-end">
                    <a href={projects[index].githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={24} color="#000" />
                    </a>
                  </Card.Header>
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
    </Element>
  );
};

export default ProjectCard;
