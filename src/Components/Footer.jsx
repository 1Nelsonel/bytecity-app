import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./components.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="p-3 bg-dark" expand="sm" variant='dark'>
      <Container className="p-3">
        <Row>
          <Col>
            <div>
              <img className="logo" src="bytecity.png" alt="" />
            </div>
            <div className="p-2">
              <blockquote className="text-light">
                Bytecity is a software company that specializes in creating
                innovative and user-friendly applications for the web and mobile
                devices. Our team of skilled developers and designers are
                dedicated to delivering high-quality products that exceed our
                clients' expectations.
              </blockquote>
            </div>
          </Col>
          <Col>
            <div>
              <h3 className="text-light">Quick Links</h3>
            </div>
            <Nav  className="flex-column">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About/">About</Nav.Link>
              <Nav.Link as={Link} to="/Services/">Services</Nav.Link>
              <Nav.Link as={Link} to="/Service/">Service</Nav.Link>
              
            </Nav>
          </Col>
          <Col>
            <div>
              <h3 className="text-light">Location</h3>
            </div>
            <div>
            <p className="text-light bold">
                <span className="text-light none">Mombasa rd, Nairobi</span>
              </p>
              <p className="text-light bold">
                <span className="text-light none">Email: info@bytecity.com</span>
              </p>
              <p className="text-light bold">
                <span className="text-light none">Tel: 0728345678</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
