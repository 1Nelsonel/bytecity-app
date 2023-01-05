import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./components.css";

const About = () => {
  const bgImage = {
    backgroundImage: "url('12.jpg')",
    width: "100%",
    objectFit: "cover",
  };
  return (
    <div className="About mt-1" style={bgImage} id="About">
      <div className="bg-about-heading p-5">
        <h2 className="text-center text-light">About ByteCity Technologies</h2>
      </div>
      <Container className="pt-3">
        <Row className="p-4">
          <Col>
            <Image className="about-image" src="7.jpg" alt="ByteCity logo" />
          </Col>
          <Col>
            <p>
              Bytecity is a software company that specializes in creating
              innovative and user-friendly applications for the web and mobile
              devices. Our team of skilled developers and designers are
              dedicated to delivering high-quality products that exceed our
              clients' expectations. We pride ourselves on our ability to
              understand and solve our clients' needs, and we work closely with
              them to ensure that the final result meets their requirements. Our
              portfolio includes a wide range of projects, from small business
              websites to complex enterprise systems. We are constantly
              exploring new technologies and approaches to stay at the forefront
              of the industry. Contact us today to see how we can help bring
              your ideas to life.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Our Services</h3>
            <ul>
              <li>Custom software development</li>
              <li>Consulting services</li>
              <li>System integration</li>
              <li>Maintenance and support</li>
            </ul>
            <p>
              Our team of experienced developers and consultants are committed
              to delivering high-quality, reliable software that meets the needs
              of our clients.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
