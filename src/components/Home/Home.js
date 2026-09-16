import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import SocialLinks from "../SocialLinks";
import { profile } from "../../data/profile";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                ¡Hola!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Soy
                <strong className="main-name"> {profile.name.toUpperCase()}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="ilustración"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Contacto</h1>
            <p>
              No dudes en <span className="purple">escribirme</span>
            </p>
            <p>
              <a className="purple" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <br />
              <a
                className="purple"
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                {profile.phone}
              </a>
            </p>
            <SocialLinks
              listClassName="home-about-social-links"
              linkClassName="icon-colour home-social-icons"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
