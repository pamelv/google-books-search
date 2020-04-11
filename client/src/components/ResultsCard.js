import React from "react";

export default function BookResults(props) {
  return (
    <div>
      <img src={props.imageLink} />
      <h3>{props.title}</h3>
      <p>{props.authors}</p>
      <p>{props.description}</p>
      <a href={props.link}>View Book</a>
    </div>
  );
}
