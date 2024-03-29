import React, { useState, useEffect, forwardRef } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { scroller } from 'react-scroll';
import { Element } from 'react-scroll';
import { throttle } from 'lodash';
import { AiOutlineLink } from 'react-icons/ai';
import image1 from '../images/first.jpg';
import image2 from '../images/second.jpg';
import image3 from '../images/third.jpg';
import image4 from '../images/fourth.jpg';
import image5 from '../images/fifth.jpg';
import image6 from '../images/sixth.jpg';


const projects = [
  {
    title: 'Portfolio v2',
    description: 'This current site is the second version of my Personal Portfolio, built with React, Bootstrap and Typescript',
    githubUrl: 'https://github.com/Goobber33/Portfolio-v2',
    liveUrl: 'https://goobber33.github.io/Portfolio-v2/',
    image: image1
  },
  {
    title: 'Jobstacle Course',
    description: 'Jobstacle course is a collaborative Full-Stack website that logs you in, tracks what jobs you have applied to, interviewed for, and been denied for and utilizes a user friendly UI to track these. It uses MySQL, Node.js, Handlebars, and many other tools.',
    githubUrl: 'https://github.com/chewytaro/Jobstacle-course',
    liveUrl: 'https://jobstacle-course.herokuapp.com/',
    image: image2
  },
  {
    title: 'Where Wolf',
    description: 'Where Wolf is a collaborative project built to list dog friendly businesses in a searched area. It uses Yelpp-Fusion API to find the businesses, and leaflet API to show these businesses on an interactive map.',
    githubUrl: 'https://github.com/jacksonmaltby/where-wolf',
    liveUrl:'https://jacksonmaltby.github.io/where-wolf/',
    image: image3
  },
  {
    title: 'Chatbot',
    description: 'What a fun project! I built a chatbot using OpenAIs API, OpenWeather API, Python and React. Interact with the chatbot by asking it any question you would like!',
    githubUrl: 'https://github.com/Goobber33/Chabot',
    liveUrl:'https://goobber33.github.io/Chabot/',
    image: image4
  },
  {
    title: 'Web Scraper',
    description: 'This project is a web scraper that fetches data from various websites and saves the extracted data to a MongoDB Atlas database. It also provides a user-friendly frontend built with React and TypeScript.',
    githubUrl: 'https://github.com/Goobber33/Web-Scraper',
    liveUrl:'https://goobber33.github.io/Web-Scraper/',
    image: image5
  },
  {
    title: 'Arcanum',
    description: 'This is a card game, like hearthstone, built for game lovers. Are you ready to harness the power of magic, assemble your ultimate deck and rise above all others in the realm of Arcanum?',
    githubUrl: 'https://github.com/Goobber33/Arcanum',
    liveUrl: 'https://arcanum.herokuapp.com/',
    image: image6
  },
];

const cardStyle = {
  height: '300px',
  width: '450px',
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

const imgWrapper: React.CSSProperties = {
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
};

const cardTextWrapper: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: '10px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
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
      offset: 70,
    });
  };

  const handleScrollUp = () => {

    let offset = 50;

    if (window.matchMedia('(min-width: 1440px)').matches) {
      offset = 90;
    }

    scroller.scrollTo('about', {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset,
    });
  };

  return (
    <div ref={ref}>
      <Element name="projectCard">
        <section id="ProjectCard" className="project py-3 custom-pr">

          <div onClick={handleScrollUp} className="d-flex justify-content-center arrowfour-container">

            <span className="arrow-up-two mt-1" style={{ cursor: 'pointer' }}>
              <i className="fa fa-angle-up text-white"></i>
            </span>

            <span className="abouttext">
              About
            </span>

          </div>

          <Container fluid style={{ paddingLeft: 70 }}>
            <a id="projectsAnchor" href="#projects" className="anchor"></a>
            <Row className="justify-content-center">
              {projects.map((project, index) => (

                <Col key={index} className={`mb-2 custom-col project-card-margin`} xl={4} lg={4} md={6} sm={12}>

                  <Card className={`card custom-card-spacing`} style={cardStyle}>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title className="project-card-title" style={titleStyle}>{project.title}</Card.Title>
                      <div style={logoStyle}>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <AiOutlineLink size={24} color="#000" className="mr-2" /> {/* use the AiOutlineLink icon */}
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <FaGithub size={24} color="#000" />
                        </a>
                      </div>
                    </Card.Header>

                    <Card.Body style={{ position: 'relative', padding: 0 }}>
                      <div style={{ ...imgWrapper, backgroundImage: `url(${project.image})` }} className="imgWrapper">
                        <div className="cardTextWrapper" style={cardTextWrapper}>
                          <Card.Text>{project.description}</Card.Text>
                        </div>
                      </div>
                    </Card.Body>

                  </Card>

                </Col>
              ))}
            </Row>
          </Container>

          <div onClick={() => handleNavLinkClick('contact')} className="d-flex justify-content-center arrowfive-container">

            <span className="arrow-down-three mt-3" style={{ cursor: 'pointer' }}>
              <i className="fa fa-angle-down text-white"></i>
            </span>

            <span className="contacttext">
              Contact
            </span>

          </div>

        </section>
      </Element>
    </div>
  );
});

export default ProjectCard;