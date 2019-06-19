import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export class Title extends Component {
  render() {
    return (
      <Container className="page-title-container flex-column">
        <h1 className="title">
          Why Data Ethics and Privacy Need Excessive Attention
        </h1>
        <h2 className="subtitle">
          How the prevalence of data affects global and daily decisions by
          consumers, corporations, and government – and where it's headed.
        </h2>
      </Container>
    );
  }
}

export default Title;
