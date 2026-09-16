import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { profile } from "../../data/profile";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            ¡Hola! Soy <span className="purple">{profile.name}</span>, de{" "}
            <span className="purple">{profile.location}</span>.
            <br />
            Trabajo como{" "}
            <span className="purple">Full-Stack Developer freelance</span>,
            construyendo aplicaciones web, apps móviles y backends para
            clientes.
            <br />
            Soy <span className="purple">Técnico en Programación (UTN)</span> y
            estudio la{" "}
            <span className="purple">
              Tecnicatura en Inteligencia Artificial (UNR)
            </span>
            .
            <br />
            <br />
            Algunas cosas que me definen:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Programación competitiva (ICPC Argentina 2025) 🏆
            </li>
            <li className="about-activity">
              <ImPointRight /> Desarrollo asistido por IA 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Inglés intermedio · Auxiliar Bilingüe 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
