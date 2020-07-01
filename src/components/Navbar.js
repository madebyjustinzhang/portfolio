import React from "react"
import { Link } from "gatsby"

import "../App.css"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Landing = () => {
  return (
    <Navbar bg="light" collapseOnSelect expand="sm" variant="light">
      <Container>
        <Navbar.Brand className="font-weight-medium" as={Link} to="/">
          Justin Zhang
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" style={{ color: "#507899" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#507899" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/fun" style={{ color: "#507899" }}>
              Fun
            </Nav.Link>
            <Nav.Link
              href="https://justinzhang.imfast.io/JustinZhangResume.pdf"
              target="_blank"
              className="font-weight-medium"
              style={{ color: "#507899" }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Landing