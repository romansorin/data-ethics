import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { GoMarkGithub } from "react-icons/go";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaExternalLinkAlt
} from "react-icons/fa";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="https://www.github.com/romansorin">
                <GoMarkGithub />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/romansorin">
                <FaLinkedinIn />
              </Nav.Link>
              <Nav.Link href="https://www.twitter.com/rmsorin">
                <FaTwitter />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/rm.sorin">
                <FaInstagram />
              </Nav.Link>
              <Nav.Link href="https://www.romansorin.com">
                <FaExternalLinkAlt />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
