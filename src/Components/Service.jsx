import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Service () {
  return (
    <Card style={{ width: '300px' }} className="mt-3">
      <Card.Img variant="top" src="7.jpg" className='Service-Image' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button as={Link} to="/Service/" variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Service;