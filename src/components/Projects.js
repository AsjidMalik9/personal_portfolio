import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React, { useState, useEffect } from 'react';
import projImg1 from "../assets/img/project-img1.1.png";
import projImg2 from "../assets/img/project-img2.1.png";
import projImg3 from "../assets/img/project-img3.1.png";
import projImg4 from "../assets/img/project-img4.2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg5 from "../assets/img/certificate.jpeg";
import projImg6 from "../assets/img/certificate2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "EDU KIDS",
      description: "NextJS, NestJS, Prisma, Postgresql, Redux",
      imgUrl: projImg1,
      visitLink: 'https://cx-lms-advertisement.vercel.app/home'
    },
    {
      title: "Taleemabad",
      description: "Ruby on Rails",
      imgUrl: projImg2,
      visitLink: 'https://schools.taleemabad.com/dashboard'
    },
    {
      title: "One Day Event",
      description: "React with Ruby on Rails",
      imgUrl: projImg4,
      visitLink: 'https://onedayevent.com/'
    },
    {
      title: "Metroverse",
      description: "Front end Design",
      imgUrl: projImg3,
      visitLink: 'https://metroverse-design.netlify.app/'
    }
  ];

  const certificates = [
    {
      title: "Udemy MERN Stack",
      description: "I enrolled in a Full Stack MERN course to enhance my skills and knowledge in the MERN Stack.",
      imgUrl: projImg5,
      visitLink: 'https://udemy-certificate.s3.amazonaws.com/image/UC-7b02e76b-58a6-4089-a371-30bf90ffa39f.jpg'
    },
    {
      title: "Certificate of Language Ability",
      description: "Certificate of language ability showcases my communication skills. This certificate is accepted in various countries. ",
      imgUrl: projImg6,
      visitLink: 'https://drive.google.com/file/d/1ZclMY3FST4KXBltXBwBzqkav4-mwYOKO/view?usp=sharing'
    },
  ];

  const [animate, setAnimate] = useState(false);


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ once }) =>
              <div className={once ? "animate__animated  ": ""} onAnimationEnd={setAnimate(true)}>
                <h2>Projects</h2>
                <p> Worked in Ruby on Rails, ReactJS and in AngularJS, to name a few technologies. Complete detailed programming and development tasks for front-end public and internal websites as well as challenging back-end server code. Maintained the code base of the project, Worked as the only developer and also managed teams.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className=" mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certificates</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={once ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="d-flex justify-content-center">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>As a Full Stack Developer with over 4 years of experience, I have worked on various projects, utilizing my expertise in Ruby on Rails, Node, React, VueJs, Express, and AWS. Throughout my professional journey, I have successfully contributed to the development, testing, and implementation of Agile and SDLC approaches.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row className="d-flex justify-content-center">
                        {
                          certificates.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
