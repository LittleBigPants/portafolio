import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/foto.jpg";
import Tilt from "react-parallax-tilt";
import { useLang } from "../../i18n";

// En celulares el tilt se activa al tocar y hace que la foto se mueva sola.
const canHover =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function Home2() {
  const i = useLang().t.intro;
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {i.titleA} <span className="purple"> {i.titleB} </span>
            </h1>
            <p className="home-about-body">
              {i.p1a}
              <b className="purple">UTN</b>
              {i.p1b}
              <b className="purple">UNR</b>
              {i.p1c}
              <br />
              <br />
              {i.p2a}
              <i>
                <b className="purple"> TypeScript, Next.js, React Native </b>
              </i>
              {i.p2b}
              <i>
                <b className="purple"> Supabase, PostgreSQL, Node.js </b>
              </i>
              {i.p2c}
              <br />
              <br />
              {i.p3a}
              <b className="purple"> {i.p3b} </b>
              {i.p3c}
              <i>
                <b className="purple"> {i.p3d} </b>
              </i>
              {i.p3e}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt tiltEnable={canHover} className="profile-photo">
              <img src={myImg} alt="Juan Manuel García" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
