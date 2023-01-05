import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Service from './Service'

const Services = () => {
    const bgImage = {
        backgroundImage: "url('11.jpg')",
        width: "100%",
        objectFit: "cover",
      };
      const bgImageHeading = {
        backgroundImage: "url('8.jpg')",
        width: "100%",
        objectFit: "cover",
      };
  return (
    <div className='mb-4' style={bgImage} id="Services">
        <div>
            <h3 style={bgImageHeading} className='text-center bg-services-heading p-5'>Our Services as ByteCity INC</h3>
        </div>
        <Container>
            <Row>
                <Col>
                    <Service />
                </Col>
                <Col>
                    <Service />
                </Col>
                <Col>
                    <Service />
                </Col>
                <Col>
                    <Service />
                </Col>
                <Col>
                    <Service />
                </Col>
                <Col>
                    <Service />
                </Col>
                <Col>
                    <Service />
                </Col>
                <Col>
                    <Service />
                </Col>
            </Row>
    
        </Container>
    </div>
  )
}

export default Services