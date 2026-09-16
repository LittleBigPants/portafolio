import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medmind from "../../Assets/Projects/medmind.jpg";
import goalplanner from "../../Assets/Projects/goalplanner.jpg";
import pyrux from "../../Assets/Projects/pyrux.jpg";
import { projects } from "../../data/profile";

const images = { medmind, goalplanner, pyrux };

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">trabajos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Algunos productos y sitios en los que trabajé recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={6} className="project-card" key={project.key}>
              <ProjectCard imgPath={images[project.key]} {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
