import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link, Navigate, useParams } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import Particle from "../Particle";
import { useLang } from "../../i18n";

const PARTS = ["problem", "cause", "fix", "learned"];

function ProjectDetail() {
  const { key } = useParams();
  const { projects, t } = useLang();
  const p = t.projects;
  const project = projects.find((x) => x.key === key);
  if (!project) return <Navigate to="/project" />;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="project-detail">
        <h1 className="project-heading">
          <strong className="purple">{project.title}</strong>
        </h1>
        <div className="project-card-tag">{project.tag}</div>
        <p>{project.description}</p>
        <p>
          <strong className="purple">{p.problem} </strong>
          {project.problem}
        </p>
        <p>
          <strong className="purple">{p.mine} </strong>
          {project.mine}
        </p>
        <div className="project-card-stack">{project.stack}</div>

        {project.cases && (
          <>
            <h2 className="project-detail-sub">
              {p.casesA} <strong className="purple">{p.casesB}</strong>
            </h2>
            {project.cases.map((c) => (
              <Card className="project-card-view project-case" key={c.title}>
                <Card.Body>
                  <Card.Title>{c.title}</Card.Title>
                  {PARTS.map((field) => (
                    <Card.Text key={field}>
                      <strong className="purple">{p.parts[field]}. </strong>
                      {c[field]}
                    </Card.Text>
                  ))}
                </Card.Body>
              </Card>
            ))}
          </>
        )}

        <div style={{ marginTop: "30px" }}>
          {project.demoLink && (
            <Button
              variant="primary"
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              style={{ margin: "5px" }}
            >
              <CgWebsite /> &nbsp;{p.site}
            </Button>
          )}
          <Button variant="primary" as={Link} to="/project" style={{ margin: "5px" }}>
            {p.all}
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default ProjectDetail;
