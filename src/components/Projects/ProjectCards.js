import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsLock } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      ) : (
        <div className="project-card-placeholder">
          <BsLock />
          <span>Cliente confidencial</span>
        </div>
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.tag && <div className="project-card-tag">{props.tag}</div>}
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        {props.stack && <div className="project-card-stack">{props.stack}</div>}

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
            <CgWebsite /> &nbsp;Ver sitio
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
