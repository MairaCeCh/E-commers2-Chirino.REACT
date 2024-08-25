import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const NavBar = () => {
  return (
    <Navbar className="navbar" variant="dark" fixed="top">
      <Container className="w-100">
        <Nav className="me-auto d-flex flex-row align-items-center">
          <Nav.Link as={NavLink} to="/">
            <IoHome className="ioHome" />
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/category/mujer"
            style={{ color: "mediumturquoise", fontSize: "30px" }}
          >
            Mujer
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/category/hombre"
            style={{ color: "mediumturquoise", fontSize: "30px" }}
          >
            Hombre
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/category/niño"
            style={{ color: "mediumturquoise", fontSize: "30px" }}
          >
            Niño
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
