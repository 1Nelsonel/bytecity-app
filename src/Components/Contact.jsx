import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const bgImage = {
    backgroundImage: "url('11.jpg')",
    width: "100%",
    objectFit: "cover",
  };
  return (
    <div className="p-3" style={bgImage} id="Contact" expand="sm" variant="dark">
      <Container className="p-5">
        <div className="p-3">
          <h3>Contact Us</h3>
        </div>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telephone</Form.Label>
                <Form.Control type="tel" placeholder="Telephone Number" />
              </Form.Group>

            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={10} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
