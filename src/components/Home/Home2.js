import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Everything <span className="purple"> About </span> Me
            </h1>
            <p className="home-about-body">
              I'd enjoyed
              screen programming since I was 10 and now I have ≈ 4 years of programming experiences
              <br />
              <br />I play
              <i>
                <b className="purple"> Valorant, Minecraft, Apex Legends and Osu </b>
              </i>
              <br />
              <br />
              I love to build &nbsp;
              <i>
                <b className="purple">Trojans </b> and
                also in areas related to{" "}
                <b className="purple">
                  Web Developing, Data Developing and Game Developing
                </b>
              </i>
              <br />
              <br />
              I usew
              with <b className="purple">ASUS ROG</b> 
              <i>
                <b className="purple">
                  {" "}
                  /
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> IPHONE X</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>My Social Media</h1>
            <p>
              Feel Free To <span className="purple">Contact Me </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hy.dev_0808/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/hy_valorant"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@hy_valorant"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/lhydev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
