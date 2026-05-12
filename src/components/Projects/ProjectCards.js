import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">

      {/* ── Optional project image ── */}
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      )}

      <Card.Body className="d-flex flex-column">

        {/* ── Project title ── */}
        <Card.Title>{props.title}</Card.Title>

        {/* ── Project description ── */}
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>

        {/* ── Tech stack badges ── */}
        {props.techStack && props.techStack.length > 0 && (
          <div style={{ marginBottom: "12px" }}>
            {props.techStack.map((tech, index) => (
              <Badge
                key={index}
                style={{
                  marginRight: "6px",
                  marginBottom: "6px",
                  backgroundColor: "transparent",
                  border: "1px solid #00ff41",
                  color: "#00ff41",
                  fontWeight: 400,
                  fontSize: "0.78em",
                  letterSpacing: "0.04em",
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* ── Links: GitHub and Live Demo ── */}
        <div>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Live Demo
            </Button>
          )}
        </div>

      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
