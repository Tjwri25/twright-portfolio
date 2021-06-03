import React from "react";
import "../../index.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Main() {
  return (
    <body>
        <Row>
        <Col></Col>
          <Col>
            {" "}
            <img
              src="https://user-images.githubusercontent.com/74884495/120219797-c75a2500-c209-11eb-8bc2-d749211c6bb6.png"
              alt=""
              className="img-logo"
            ></img>
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

    </body>
  );
}

export default Main;