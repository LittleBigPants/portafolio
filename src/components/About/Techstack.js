import React from "react";
import { Row } from "react-bootstrap";
import {
  SiNextdotjs,
  SiFramer,
  SiExpo,
  SiSupabase,
  SiPostgresql,
  SiStrapi,
  SiDeno,
  SiJest,
  SiPlaywright,
} from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import TechIcon from "./TechIcon";

const techs = [
  { name: "TypeScript", src: Typescript },
  { name: "JavaScript", src: Javascript },
  { name: "SQL", src: SQL },
  { name: "Python", src: Python },
  { name: "React", src: ReactIcon },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", src: Tailwind },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "React Native", src: ReactIcon },
  { name: "Expo", Icon: SiExpo },
  { name: "Supabase", Icon: SiSupabase },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Node.js", src: Node },
  { name: "Strapi", Icon: SiStrapi },
  { name: "Deno", Icon: SiDeno },
  { name: "Jest", Icon: SiJest },
  { name: "Playwright", Icon: SiPlaywright },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech) => (
        <TechIcon key={tech.name} {...tech} />
      ))}
    </Row>
  );
}

export default Techstack;
