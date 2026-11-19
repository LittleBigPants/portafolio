import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medmind from "../../Assets/Projects/medmind.jpg";
import goalplanner from "../../Assets/Projects/goalplanner.jpg";
import pyrux from "../../Assets/Projects/pyrux.jpg";
import { useLang } from "../../i18n";

const images = { medmind, goalplanner, pyrux };

function Projects() {
  const { projects, t } = useLang();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t.projects.headA} <strong className="purple">{t.projects.headB} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t.projects.sub}
        </p>
        <Row
          className="project-row"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          {projects.map((project) => (
            <Col md={6} className="project-card" key={project.key}>
              <ProjectCard
                imgPath={images[project.key]}
                projectKey={project.key}
                confidential={project.key === "salud"}
                {...project}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
