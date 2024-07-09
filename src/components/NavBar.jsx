import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#">Mujer</Nav.Link>
            <Nav.Link href="#">Hombre</Nav.Link>
            <Nav.Link href="#">Niño</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    </>
  );
};

export default NavBar;
