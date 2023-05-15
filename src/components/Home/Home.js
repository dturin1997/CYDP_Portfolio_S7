import React from "react";
import YouTube from "react-youtube";
import { Container, Row, Col } from "react-bootstrap";
import CvImage from "../../Assets/Dario_Turin_cv1.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const videoId = "aC0_OyRSLig";

  const opts = {
    height: "360",
    width: "640",
  };

  return (
    <section>
      <Particle />
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hola Que tal!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  YO SOY
                  <strong className="main-name"> DARIO TURIN</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 10 }}>
              <img
                src={CvImage}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px", borderRadius: "150px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
