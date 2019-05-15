import React, { Component } from "react";
import Row from "react-bootstrap/Row";

export class Heading extends Component {
  render() {
    return <h2 className="section-heading">{this.props.heading}</h2>;
  }
}

export default Heading;
