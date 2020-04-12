import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function BookResults(props) {
  return (
    <Card style={{ marginBottom: "35px" }}>
      <Card.Header as="h3">{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{props.authors}</Card.Title>
        <img src={props.imageLink} alt={props.title} />
        <Card.Text>{props.description}</Card.Text>
        <Button href={props.link} variant="warning">
          Preview
        </Button>
      </Card.Body>
    </Card>
  );
}
