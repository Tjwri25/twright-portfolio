
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container'

import "../../index.css";

function AboutMe() {
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
            <Card className="about-card" >
              <Card.Body>
                
                  Hello! My name is Taylor Wright. I am a Colorado Native,
                  currently living in Aurora, Colorado. I have a wonderful
                  husband of 14 years, Tyler, and we share a 12 year old son,
                  Kross. I enjoyed a fulfilling 14 year career as a hairstylist,
                  specializing in men's hair. You could say that I have always
                  had a flair for the creative. I aspire to keep that going in
                  my next career venture, as a full stack web developer. I have
                  always loved to create beautiful things, so if you'd like to
                  join me, please visit my contact page and reach out. For links
                  to my Github and LinkedIn pages, to download a copy of my
                  resume, or to see some of my work, please visit my portfolio
                  page. I look forward to hearing from you!
                
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

export default AboutMe;