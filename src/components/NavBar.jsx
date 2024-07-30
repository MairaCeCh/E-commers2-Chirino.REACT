import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="info" variant="dark" fixed="top">
      <Container className="w-100">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/Mujer">
            Mujer
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/Hombre">
            Hombre
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/Niño">
            Niño
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
