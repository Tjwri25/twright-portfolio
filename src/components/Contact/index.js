
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'

import "../../index.css";

function ContactMe() {
  return (
    <body>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            {" "}
            <img
              src="https://user-images.githubusercontent.com/74884495/120242847-ec638d80-c233-11eb-8622-2b5eb709dc16.png"
              alt=""
              className="img-about"
            ></img>
            <Card className="contact-card" >
              <Card.Body>
                
              <h1>Contact Me!</h1>
                    <p>Phone: (719)453-8516</p>
                    <p>Email: tjwri25@gmail.com</p>
                    {""}
                    {""}
                    <p >Click <a
                        href="https://github.com/Tjwri25/portfolio/files/6586579/TWrightResume.pdf" target="_blank" rel="noreferrer"  download="TWrightResume.pdf">here </a>
                    to download a copy of my resume</p>
                
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <img
              src="https://user-images.githubusercontent.com/74884495/119378656-b8103000-bc7b-11eb-95d1-3b05c6fbbd72.jpg"
              alt=""
              width="600"
              height="900"
              className="img-main"
            ></img>
          </Col>
        </Row>
      </Container>
    </body>
  );
}

export default ContactMe;