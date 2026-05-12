import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ─────────────────────────────────────────────────────────────────
//  PROJECT DATA
//  Edit the objects below to swap in your real project details.
//  Fields:
//    title       – project name displayed as the card heading
//    description – one-paragraph summary of what the project does
//    techStack   – array of technology/library names shown as badges
//    ghLink      – GitHub repo URL  (remove the key to hide the button)
//    demoLink    – live demo URL    (remove the key to hide the button)
//    imgPath     – imported image   (remove the key to hide the image)
// ─────────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Fake News Detection System",
    description:
      "ML and NLP-driven system that classifies news statements as true or false " +
      "using the LIAR dataset. Implemented a Retrieval-Augmented Generation (RAG) " +
      "pipeline to fetch verified source data, embed input news, and cross-check it " +
      "against a vector database for credibility scoring. Achieved 99% accuracy " +
      "through real-time web data integration.",
    techStack: ["Python", "NLP", "Machine Learning", "Streamlit", "RAG"],
    ghLink: "https://github.com/Vishall07/NLP_Fake_News_Detector",
  },
  {
    title: "Music Recommendation System",
    description:
      "Full-stack recommendation engine using collaborative filtering that achieves " +
      "85% precision on user predictions. Designed the FastAPI backend connecting a " +
      "Streamlit UI, Grafana monitoring dashboard, and PostgreSQL database. Automated " +
      "data quality checks and real-time ingestion pipelines using Apache Airflow DAGs.",
    techStack: ["FastAPI", "Apache Airflow", "Streamlit", "Grafana", "PostgreSQL"],
    ghLink: "https://github.com/Vishall07/Music-Prediction-App",
  },
  {
    title: "Pothole Volume Detector",
    description:
      "Computer Vision system that detects and measures pothole volumes using a " +
      "camera combined with ultrasonic IoT sensors. Developed a custom edge-detection " +
      "algorithm with grayscale conversion and noise reduction preprocessing to " +
      "estimate volume, reaching 72% detection accuracy.",
    techStack: ["OpenCV", "Arduino", "Computer Vision", "IoT"],
    demoLink: "https://www.youtube.com/watch?v=H-bwy9gw7OU",
  },
];
// ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        {/* ── Section heading ── */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "#00ff41" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* ── Project cards ── */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
