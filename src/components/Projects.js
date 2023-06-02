import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React, { useState, useEffect } from 'react';
import projImg1 from "../assets/img/project-img1.1.png";
import projImg2 from "../assets/img/project-img2.1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "EDU KIDS",
      description: "NextJS, NestJS, Prisma, Postgresql, Redux",
      imgUrl: projImg1,
    },
    {
      title: "Taleemabad",
      description: "Ruby on Rails",
      imgUrl: projImg2,
    }
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
                <p>As a Full Stack Developer with over 4 years of experience, I have worked on various projects, utilizing my expertise in Ruby on Rails, Node, React, VueJs, Express, and AWS. Throughout my professional journey, I have successfully contributed to the development, testing, and implementation of Agile and SDLC approaches.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className=" mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <p>I have also been involved in significant projects such as EDU KIDS, where I employed technologies like NextJS, NestJS, Prisma, Postgresql, and Redux to handle data for resort management and reporting. In the Taleemabad LMS project, I maintained the existing code base and AWS EC2 servers using Ruby on Rails.</p>
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
