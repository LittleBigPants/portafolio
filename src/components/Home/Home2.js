import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/foto.jpg";
import Tilt from "react-parallax-tilt";

// En celulares el tilt se activa al tocar y hace que la foto se mueva sola.
const canHover =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DÉJAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy desarrollador Full-Stack y construyo productos completos para
              clientes: desde la base de datos hasta la app que usa la gente.
              <br />
              <br />
              Trabajo con
              <i>
                <b className="purple"> TypeScript, Next.js y React Native </b>
              </i>
              en el frontend y mobile, y con
              <i>
                <b className="purple"> Supabase, PostgreSQL y Node.js </b>
              </i>
              en el backend.
              <br />
              <br />
              Integro servicios como la
              <b className="purple"> API de WhatsApp de Meta </b>
              y uso
              <i>
                <b className="purple"> herramientas de IA para desarrollo </b>
              </i>
              (Claude Code, agentes y flujos automatizados) para entregar más
              rápido sin resignar calidad.
              <br />
              <br />
              Soy Técnico en Programación (<b className="purple">UTN</b>) y
              estudio Inteligencia Artificial en la{" "}
              <b className="purple">UNR</b>.
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
