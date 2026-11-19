import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsLock, BsCodeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLang } from "../../i18n";

function ProjectCards(props) {
  const p = useLang().t.projects;
  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      ) : (
        <div className="project-card-placeholder">
          {props.confidential ? <BsLock /> : <BsCodeSlash />}
          <span>{props.confidential ? p.confidential : props.tag}</span>
        </div>
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.tag && <div className="project-card-tag">{props.tag}</div>}
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        {props.problem && (
          <Card.Text style={{ textAlign: "left" }}>
            <strong className="purple">{p.problem} </strong>
            {props.problem}
          </Card.Text>
        )}
        {props.mine && (
          <Card.Text style={{ textAlign: "left" }}>
            <strong className="purple">{p.mine} </strong>
            {props.mine}
          </Card.Text>
        )}
        {props.stack && (
          <div className="project-card-stack">{props.stack}</div>
        )}

        {props.cases && (
          <Button
            variant="primary"
            as={Link}
            to={`/project/${props.projectKey}`}
            style={{ margin: "5px" }}
          >
            {p.cases}
          </Button>
        )}

        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ margin: "5px" }}
          >
            <BsGithub /> &nbsp;GitHub
          </Button>
        )}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ margin: "5px" }}
          >
            <CgWebsite /> &nbsp;{p.site}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
