import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishal Gouli </span>
            from <span className="purple"> Banglore, India.</span>
            <br />
            <br />
            I have completed Btech From RV College of Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginTop: "10px" }}>
            <a
              href="mailto:vgouli1998@gmail.com"
              style={{ color: "#00ff41" }}
            >
              vgouli1998@gmail.com
            </a>
          </p>
          <p style={{ color: "#00cc33" }}>
            "Learn Apply and Repeat"{" "}
          </p>
          <footer className="blockquote-footer">Vishal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
