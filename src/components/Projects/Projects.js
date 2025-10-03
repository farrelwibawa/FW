import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/bnsp.png";
import emotion from "../../Assets/Projects/dicoding.png";
import editor from "../../Assets/Projects/aiphone.png";
import chatify from "../../Assets/Projects/fafm.png";
import suicide from "../../Assets/Projects/sic.jpg";
import bitsOfCode from "../../Assets/Projects/Clockify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Activities </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few activities I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FAFM Game Project"
              description="FAFM Game is a web-based game library platform where users can discover trending games, explore detailed information, and add their favorites to a personal collection. Built with React.js, Material-UI, and Firebase, it provides a modern, responsive, and user-friendly experience."
              ghLink="https://github.com/farrelwibawa/FAFM_Game"
              demoLink="https://fafm-game.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Clockify Project"
              description="Clockify is a web application featuring a digital clock, stopwatch, and countdown timer, designed with a minimalist and modern interface. It combines functionality with a clean aesthetic, making time tracking simple and visually appealing."
              ghLink="https://github.com/farrelwibawa/Clockify"
              demoLink="https://clockify-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AiPhone Manager Project"
              description="AiPhone Manager is a web-based inventory management system designed to manage iPhone stock efficiently. Built with PHP and CRUD functionality, it allows administrators to add, edit, update, and delete product data, ensuring smooth and organized stock management."
              ghLink="https://github.com/farrelwibawa/AiPhone_Manager_Final"
              demoLink="https://www.figma.com/proto/aqrV8v6sL6cLeqea4XDwcz/Kel.8-Web-Iphone-16?node-id=0-1&p=f&t=r1dIvOsrO4ObVnOB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=41%3A3&show-proto-sidebar=1"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="UI/UX Certification - BNSP"
              description="Awarded in 2025 by BNSP (National Professional Certification Agency of Indonesia) through DigiUp, this certification recognizes proven competency in User Interface and User Experience Design. It validates professional skills in designing user-friendly, functional, and visually appealing digital products. This achievement also demonstrates the ability to apply industry standards in creating meaningful digital experiences, ensuring both usability and aesthetic quality in every project."
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dicoding Web Dev Certification"
              description="Awarded in October 2023 by Dicoding Indonesia for successfully completing the Basic Web Programming course. This certification demonstrates foundational skills in HTML, CSS, and JavaScript, as well as the ability to build structured, responsive, and user-friendly web pages." 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="IoT Project Documentation"
              description="This project was developed collaboratively in a team of four, focusing on building an IoT-based system using ESP32. The process included planning, coding, assembling hardware components, and testing functionalities. Through teamwork and problem-solving, we successfully implemented IoT features that highlight real-time connectivity, automation, and practical application of embedded systems."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
