import React from "react";
import history from "../history";

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
      <div>
        <form>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Title or Author"
          />
          <button onClick={this.handleFormSubmit}> Button</button>
        </form>
      </div>
    );
  }
}
