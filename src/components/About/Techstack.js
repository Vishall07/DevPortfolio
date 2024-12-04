import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCsharp, SiJavascript, SiPython, SiHtml5, SiCss3, SiDotnet, SiReact, SiFirebase, SiVisualstudiocode, SiGithub, SiGit, SiMicrosoftazure } from "react-icons/si";
import { FaVial } from "react-icons/fa"; // NUnit Test Placeholder
import { MdWeb } from "react-icons/md"; // Windows Forms Placeholder
import { IoServerOutline } from "react-icons/io5"; // SQL Placeholder



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

    
<Col xs={4} md={2} className="tech-icons">
          <SiCsharp title="C#" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript title="JavaScript" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython title="Python" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <IoServerOutline title="SQL" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 title="HTML" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 title="CSS" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDotnet title=".NET Core" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiReact title="React JS" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <MdWeb title="Windows Forms" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaVial title="NUnit Test" />
        </Col>
    </Row>
  );
}

export default Techstack;
