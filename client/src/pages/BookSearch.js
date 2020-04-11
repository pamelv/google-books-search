import React from "react";
import API from "../utils/booksapi";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  searchBooks(data) {
    console.log(data);
    API.getBooks(data)
      .then((res) => {
        var results = res.data.items;
        results.forEach((result) => {
          this.state.books.push(result.volumeInfo);
        });
        this.state.books.forEach((book) => {
          console.log(book.title);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleFormSubmit = (event) => {
    var data = { search: document.getElementById("search").value };
    event.preventDefault();
    this.searchBooks(data.search);
    console.log(this.state.books);
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
          <button onClick={this.handleFormSubmit}> Button </button>
        </form>

        <div id="results">{this.state.books}</div>
      </div>
    );
  }
}
