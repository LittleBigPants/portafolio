import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import {
  profile,
  experience,
  projects,
  education,
  skills,
  languages,
} from "../../data/profile";

function DownloadButton() {
  if (!profile.cvPdf) return null;
  return (
    <Row style={{ justifyContent: "center", position: "relative" }}>
      <Button
        variant="primary"
        href={profile.cvPdf}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        <AiOutlineDownload />
        &nbsp;Descargar CV
      </Button>
    </Row>
  );
}

function Section({ title, children }) {
  return (
    <section className="cv-section">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function LabeledList({ items }) {
  return items.map((item) => (
    <div key={item.label} style={{ marginBottom: 4 }}>
      <strong>{item.label}:</strong> {item.items}
    </div>
  ));
}

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <DownloadButton />

        <article className="cv-sheet">
          <header className="cv-header">
            <h1>{profile.name}</h1>
            <h2>{profile.role}</h2>
            <div className="cv-contact">
              <span>{profile.location}</span>
              <a href={profile.phoneHref}>{profile.phone}</a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </header>

          <Section title="Perfil">
            <p>{profile.summary}</p>
          </Section>

          <Section title="Experiencia laboral">
            {experience.map((job) => (
              <div className="cv-item" key={job.org}>
                <div className="cv-item-title">
                  {job.title} <span>— {job.org}</span>
                </div>
                <div className="cv-muted">
                  {job.meta}
                  {job.link && (
                    <>
                      {" · "}
                      <a href={job.link} target="_blank" rel="noreferrer">
                        {job.linkLabel}
                      </a>
                    </>
                  )}
                </div>
                <div className="cv-muted">
                  <i>{job.note}</i>
                </div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="cv-muted">
                  <strong>Stack:</strong> {job.stack}
                </div>
              </div>
            ))}
          </Section>

          <Section title="Proyectos">
            {projects
              .filter((project) => project.tag.startsWith("Proyecto"))
              .map((project) => (
                <div className="cv-item" key={project.key}>
                  <div className="cv-item-title">
                    {project.title}{" "}
                    <span>
                      ·{" "}
                      <a href={project.demoLink} target="_blank" rel="noreferrer">
                        {project.demoLink.replace("https://www.", "")}
                      </a>
                    </span>
                  </div>
                  <p style={{ margin: "4px 0" }}>{project.description}</p>
                  <div className="cv-muted">
                    <i>{project.stack}</i>
                  </div>
                </div>
              ))}
          </Section>

          <Section title="Formación">
            {education.map((item) => (
              <div key={item.title} style={{ marginBottom: 6 }}>
                <strong>{item.title}</strong> — {item.org}{" "}
                <span className="cv-muted">· {item.date}</span>
              </div>
            ))}
          </Section>

          <Section title="Skills">
            <LabeledList items={skills} />
          </Section>

          <Section title="Idiomas">
            <LabeledList items={languages} />
          </Section>
        </article>

        <DownloadButton />
      </Container>
    </div>
  );
}

export default ResumeNew;
