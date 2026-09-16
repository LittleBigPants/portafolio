import React from "react";
import { Row } from "react-bootstrap";
import { SiGithub, SiNginx, SiLinux, SiFigma } from "react-icons/si";
import { GoCopilot } from "react-icons/go";
import { RiRobot2Line } from "react-icons/ri";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import TechIcon from "./TechIcon";

const tools = [
  { name: "Git", src: Git },
  { name: "GitHub", Icon: SiGithub },
  { name: "Docker", src: Docker },
  { name: "nginx", Icon: SiNginx },
  { name: "Linux", Icon: SiLinux },
  { name: "Figma", Icon: SiFigma },
  { name: "Claude Code", Icon: RiRobot2Line },
  { name: "GitHub Copilot", Icon: GoCopilot },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <TechIcon key={tool.name} {...tool} />
      ))}
    </Row>
  );
}

export default Toolstack;
