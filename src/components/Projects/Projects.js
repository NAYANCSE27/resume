import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import disease from "../../Assets/Projects/disease.jfif";
import admin from "../../Assets/Projects/admin-dashboard.jpg";
import commerce from "../../Assets/Projects/commerce.jpg";
import job from "../../Assets/Projects/job-portal.png";
import smart from "../../Assets/Projects/smart-school.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commerce}
              isBlog={false}
              title="OLDUCT"
              description="An old product e-commerce website is a digital platform that allows users to browse, view, and purchase older or second-hand products. Unlike traditional e-commerce websites that primarily focus on selling new items, an old product e-commerce website caters to the market for pre-owned or vintage goods. These products may include used electronics, furniture, clothing, accessories, collectibles, and more."
              ghLink="https://github.com/NAYANCSE27/olduct"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smart}
              isBlog={false}
              title="Smart School"
              description="A smart school project using the MERN stack (MongoDB, Express.js, React, Node.js) aims to create an intelligent and efficient digital platform for managing various aspects of a school or educational institution. The project leverages modern web technologies to provide seamless communication between students, teachers, administrators, and parents."
              ghLink="https://github.com/NAYANCSE27/SmartSchool"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Admin Dashboard"
              description="An admin dashboard is a web application designed to provide an interface for administrators or authorized personnel to manage and monitor various aspects of a system or organization. It serves as a centralized platform for administrative tasks, data visualization, and decision-making. The primary goal of an admin dashboard is to simplify complex processes and provide actionable insights to administrators."
              ghLink="https://github.com/NAYANCSE27/ad-board"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Online Job Portal"
              description="An online job portal is a web-based platform that connects job seekers with employers and facilitates the process of job searching and hiring. The project aims to provide an efficient and user-friendly digital space where job seekers can explore job opportunities, submit applications, and showcase their skills, while employers can post job listings, review applications, and find suitable candidates."
              ghLink="https://github.com/NAYANCSE27/Job-Portal-Website"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disease}
              isBlog={false}
              title="DiagnoSmart"
              description="The motivation for multiple diseases prediction using machine learning lies in the potential to improve patient outcomes and reduce healthcare costs. By leveraging the power of machine learning algorithms, we can develop models that can accurately predict the likelihood of a patient developing multiple diseases, such as diabetes, heart disease, and cancer."
              ghLink="https://github.com/NAYANCSE27/DiagnoSmart"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
