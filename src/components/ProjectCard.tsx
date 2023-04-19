import React, { useState, useEffect, forwardRef } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { scroller } from 'react-scroll';
import { Element } from 'react-scroll';
import { throttle } from 'lodash';


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

const titleStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 0,
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const ProjectCard = forwardRef<HTMLDivElement>((_, ref) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = throttle(() => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition <= 0) {
      setVisible(true);
    } else if (currentScrollPosition > scrollPosition) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setScrollPosition(currentScrollPosition);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const [activeLink, setActiveLink] = useState<string>('ContactForm');

  const handleNavLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    scroller.scrollTo(linkName, {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 2,
    });
  };

  const handleScrollUp = () => {
    scroller.scrollTo('about', {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 50,
    });
  };

  return (
    <div ref={ref}>
      <Element name="projectCard">
        <section id="ProjectCard" className="project py-3 custom-pr">

          <div
            onClick={handleScrollUp}
            className="d-flex justify-content-center arrowfour-container"
          >
            <span className="arrow-up-two mt-1" style={{ cursor: 'pointer' }}>
              <i className="fa fa-angle-up text-white"></i>
            </span>
          </div>

          <Container fluid style={{ paddingLeft: 70 }}>
            <a id="projectsAnchor" href="#projects" className="anchor"></a>
            <Row noGutters className="justify-content-center">
              {projects.map((project, index) => (

                <Col key={index} className={`mb-2 custom-col project-card-margin`} xl={4} lg={4} md={6} sm={12}>

                  <Card className="card custom-card-spacing" style={cardStyle}>

                    <Card.Header className="d-flex justify-content-between align-items-center">
                      <Card.Title style={titleStyle}>{project.title}</Card.Title>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={logoStyle}>
                        <FaGithub size={24} color="#000" />
                      </a>
                    </Card.Header>

                    <Card.Body>
                      <Card.Text>{project.description}</Card.Text>
                    </Card.Body>

                  </Card>

                </Col>
              ))}
            </Row>
          </Container>

          <div
            onClick={() => handleNavLinkClick('contact')}
            className="d-flex justify-content-center arrow-container">
            <span className="arrow-down mt-3" style={{ cursor: 'pointer' }}>
              <i className="fa fa-angle-down fs-1 text-white"></i>
            </span>
          </div>

        </section>
      </Element>
    </div>
  );
});

export default ProjectCard;