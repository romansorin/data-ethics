import React, { Component } from "react";
import Row from "react-bootstrap/Row";

export class Heading extends Component {
  render() {
    const heading = this.props.heading;
    return (
      <Row>
        <h2 className="section-heading">{heading}</h2>
      </Row>
    );
  }
}

export default Heading;
