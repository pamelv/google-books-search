import React from "react";
import history from "../history";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleFormSubmit = (event) => {
    var data = { search: document.getElementById("search").value };
    this.setState({ search: data.search });
    event.preventDefault();
    localStorage.setItem("search", data.search);
    history.push("/results");
  };

  render() {
    return (
      <Container style={{ padding: "15rem 8rem" }}>
        <h1>Google Books</h1>
        <Form.Group style={{ display: "flex" }}>
          <Form.Control
            size="lg"
            name="search"
            type="text"
            placeholder="Title or Author"
            id="search"
          />
          <Button
            variant="warning"
            onClick={this.handleFormSubmit}
            style={{ marginLeft: "5px" }}
          >
            Search
          </Button>
        </Form.Group>
      </Container>
    );
  }
}
