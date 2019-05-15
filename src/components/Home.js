import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Heading from "./Heading";

export class Home extends Component {
  render() {
    const content = this.props.content;
    const contentHeadings = content.map(content => content.heading);
    const contentItems = content.map((content, index) => (
      <p className="content" key={index}>
        {content.text}
      </p>
    ));

    return (
      <Container className="content-container">
        <Heading heading={contentHeadings} />
        {contentItems}
      </Container>
    );
  }
}

export default Home;
