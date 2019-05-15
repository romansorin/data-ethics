import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Heading from "./Heading";

export class Home extends Component {
  render() {
    const content = this.props.content;
    const contentHeadings = content.map(content => content.heading);
    const contentItems = content.map((content, index) => (
      <p className="content" key={index}>
        {content.text}
        <br />
      </p>
    ));

    return (
      <Container>
        <Heading heading={contentHeadings} />
        <Row>{contentItems}</Row>
      </Container>
    );
  }
}

export default Home;
