import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLang } from "../../i18n";

function AboutCard() {
  const { profile, t } = useLang();
  const a = t.about;
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            {a.hello} <span className="purple">{profile.name}</span>
            {a.from} <span className="purple">{profile.location}</span>.
            <br />
            {a.iam} <span className="purple">{a.degree}</span> {a.study}{" "}
            <span className="purple">{a.ai}</span>.
            <br />
            {a.workAs} <span className="purple">{a.role}</span>
            {a.workRest}
            <br />
            <br />
            {a.defines}
          </p>
          <ul>
            {a.items.map((item) => (
              <li className="about-activity" key={item}>
                <ImPointRight /> {item}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
