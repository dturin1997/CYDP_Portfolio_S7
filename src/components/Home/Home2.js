import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "2.6em" }}>
                TE CUENTO <span className="green"> ALGO </span> SOBRE MÍ
              </h1>
              <p className="home-about-body">
                Soy un apasionado de la programación y buscador de soluciones
                innovadoras,
                <br />
                bueno es lo que creo… 🤷‍♂️
                <br />
                <br />
                Soy mas afecto a los siguientes lenguajes
                <i>
                  <b className="green"> C#, Javascript and Python. </b>
                </i>
                <br />
                <br />
                El campo que más me interesa es el&nbsp;
                <i>
                  <b className="green">Desarrollo Web </b> <br /> y también las
                  áreas de&nbsp;
                  <b className="green">Desarrollo Mobile y Cloud.</b>
                </i>
                <br />
                <br />
                Cuando me es posible me gusta aprender a desarrollar con&nbsp;
                <b className="green">Node.js</b> y
                <i>
                  <b className="green"> Con la Biblioteca de Javascript</b>
                </i>
                &nbsp; en este caso
                <i>
                  <b className="green"> React.js</b>
                </i>
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN</h1>
            <p>
              Siéntete libre de <span className="green">contactarte </span>
              conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dturin1997"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/djturin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
