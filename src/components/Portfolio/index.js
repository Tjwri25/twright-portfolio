import React from "react";
import "../../index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "font-awesome/css/font-awesome.min.css";

import Container from "react-bootstrap/Container";

function PortfolioPage() {
  return (
    <body>
      <Container fluid>
        <Row>
          <Col>
            <Card className="links-card">
              <Card.Body>
                <h1>My Links</h1>
                <Button
                  variant="dark"
                  href="https://github.com/Tjwri25"
                  className="fa fa-github"
                  id="icon-link"
                ></Button>
                <Button
                  variant="dark"
                  href="https://www.linkedin.com/in/taylor-j-wright"
                  className="fa fa-linkedin"
                  id="icon-link"
                ></Button>
                <Button
                  variant="dark"
                  href="https://www.instagram.com/taylorjeneawright"
                  className="fa fa-instagram"
                  id="icon-link"
                ></Button>
                <Button
                  variant="dark"
                  href="https://twitter.com/TaylorJenea25"
                  className="fa fa-twitter-square"
                  id="icon-link"
                ></Button>
              <h2>My Work</h2>
                <Carousel className="carousel">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      id="boozy"
                      src="https://user-images.githubusercontent.com/74884495/120251549-e8456900-c24f-11eb-915b-6399edcf7b42.png"
                      alt="First slide"
                    />
                    <Carousel.Caption className="car-caption">
                      <Button
                        variant="danger"
                        href="https://github.com/paxton44/teamAwesome"
                        target="_blank"
                      >
                        Boozy Playlists Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://user-images.githubusercontent.com/74884495/120252796-8981ee80-c253-11eb-9eb2-3cb370914056.png"
            
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <Button
                        variant="danger"
                        href="https://github.com/wylie-u/BeerNuts"
                        target="_blank"
                      >
                        BeerNuts Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://user-images.githubusercontent.com/74884495/120254177-3ca01700-c257-11eb-8b79-9b8fa177084f.png"
                      
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <Button
                        variant="danger"
                        href="https://github.com/Tjwri25/weather-dashboard"
                        target="_blank"
                      >
                        Weather Dashboard Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://user-images.githubusercontent.com/74884495/120254620-3eb6a580-c258-11eb-8635-06198d6dbd6e.png"
                  
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <Button
                        variant="danger"
                        href="https://github.com/Tjwri25/workout-tracker"
                        target="_blank"
                      >
                        Workout Tracker Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://user-images.githubusercontent.com/74884495/120254775-95bc7a80-c258-11eb-9993-d0f422ce47ce.png"
                       
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <Button
                        variant="danger"
                        href="https://github.com/Tjwri25/work-day-calendar"
                        target="_blank"
                      >
                        Workday Scheduler Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://user-images.githubusercontent.com/74884495/120255238-7ffb8500-c259-11eb-9aae-cd16737925f8.png"
                    
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <Button
                        variant="danger"
                        href="https://github.com/Tjwri25/pw-generator"
                        target="_blank"
                      >
                        Password Generator Github
                      </Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
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

export default PortfolioPage;