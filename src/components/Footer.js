import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
import { profile } from "../data/profile";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Desarrollado por {profile.name} · Basado en el template de{" "}
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Soumyajit
            </a>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} {profile.shortName}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <SocialLinks
            listClassName="footer-icons"
            linkStyle={{ color: "white" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
