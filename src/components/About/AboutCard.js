import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Law Hao Yet </span>
            from <span className="purple"> Selangor, Kajang.</span>
            <br />I am a student, currently studying in TCISKL. I was borned in 2009/08/08 which is a nice number. I'm a kpop fan too and my favourite kpop band would be BlackPink and BTS.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Study Physics
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Piano and Listening To Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You're the only one to judge your self!"{" "}
          </p>
          <footer className="blockquote-footer">Hao yet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
