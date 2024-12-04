import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCsharp, SiJavascript, SiPython, SiHtml5, SiCss3, SiDotnet, SiReact, SiFirebase, SiVisualstudiocode, SiGithub, SiGit, SiMicrosoftazure } from "react-icons/si";
import { FaVial } from "react-icons/fa"; // NUnit Test Placeholder
import { MdWeb } from "react-icons/md"; // Windows Forms Placeholder
import { IoServerOutline } from "react-icons/io5"; // SQL Placeholder
import { BiGitBranch } from "react-icons/bi"; // VSTS Placeholder


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode title="VS Code" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGit title="Git" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub title="GitHub" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftazure title="Microsoft Azure" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase title="Firebase" />
        </Col>
    </Row>
    
  );
}

export default Toolstack;
