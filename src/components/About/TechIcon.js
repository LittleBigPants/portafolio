import React from "react";
import { Col } from "react-bootstrap";

// Usa un SVG de Assets (`src`) o un ícono de react-icons (`Icon`).
function TechIcon({ name, src, Icon }) {
  return (
    <Col xs={4} md={2} className="tech-icons">
      {src ? (
        <img src={src} alt={name} className="tech-icon-images" />
      ) : (
        <Icon fontSize={"24px"} />
      )}
      <div className="tech-icons-text">{name}</div>
    </Col>
  );
}

export default TechIcon;
