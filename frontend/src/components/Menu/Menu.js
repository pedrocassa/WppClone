import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router';

export default function Menu() {
  const history = useHistory()

  const handleClick = () => {
    history.push("/")
  }

  return (
    <Navbar variant="dark" bg="success" expand="lg">
      <Navbar.Brand>WhatsApp Clone</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={handleClick}>Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}