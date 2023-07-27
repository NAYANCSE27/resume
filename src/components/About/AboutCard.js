import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mehadi Hasan </span>
            from <span className="purple"> Dhaka, India.</span>
            <br /> I have completed my B.Sc in Computer Science and Engineering
            from Jahangirnagar University, Savar, Bangladesh.
            <br />
            Additionally, I am working as a{" "}
            <span className="purple">Teaching Assistant</span> in my department.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn to make balance between logic and emotion!"{" "}
          </p>
          <footer className="blockquote-footer">Nayan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
