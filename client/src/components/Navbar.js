import React from "react";
import Nav from "react-bootstrap/Nav";

export default function BookResults(props) {
  return (
    <Nav
      className="justify-content-center"
      style={{ backgroundColor: "#ffc107", padding: "10px" }}
    >
      <Nav.Item>
        <Nav.Link href="/" style={{ color: "#333" }}>
          New Search
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
