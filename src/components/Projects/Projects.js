import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import instaverse from "../../Assets/Projects/instaverse.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          Mis <strong className="green">Trabajos</strong> Recientes
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Aquí muestro uno de mis projectos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instaverse}
              isBlog={false}
              title="Instaverse"
              description="Una plataforma donde te puedes registrar e iniciar sesión y un vez dentro compartir una imagen con los hastag respectivos"
              ghLink="https://github.com/dturin1997/instaverse-client"
              demoLink="https://instaverse-client.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
