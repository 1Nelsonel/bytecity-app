import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';

const Header = () => {
  return (
    <Navbar bg="dark" expand="sm" variant='dark' className=''>
      <Container>
        <Navbar.Brand href="#home">
            <img src="bytecity.png" className='logo' alt="logo here" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Services">Services</NavDropdown.Item>
              <NavDropdown.Item href="#Clients">Clients</NavDropdown.Item>
              <NavDropdown.Item href="#Team">Team</NavDropdown.Item>
              <NavDropdown.Item href="#Testimonials">Testimonials</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header