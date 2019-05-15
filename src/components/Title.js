import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class Title extends Component {
  render() {
    return (
      <Container>
        <Row className="flex-column">
          <h1 className="title">Information</h1>
          <h2 className="subtitle">
            How a subtitle can help introduce information
          </h2>
        </Row>
      </Container>
    );
  }
}

export default Title;
