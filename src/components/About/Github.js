import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { profile } from "../../data/profile";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Días que <strong className="purple">programo</strong>
      </h1>
      <GitHubCalendar
        username={profile.githubUser}
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
