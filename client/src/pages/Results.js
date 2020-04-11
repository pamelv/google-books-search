import React from "react";
import API from "../utils/booksapi";
import ResultsCard from "../components/ResultsCard";

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: localStorage.getItem("search"),
      imageLink:
        "https://donrheem.com/wp-content/uploads/2016/11/Book-Placeholder.png",
    };
  }

  componentDidMount() {
    API.getBooks(this.state.search)
      .then((res) => {
        var books = [];
        var results = res.data.items;
        results.map((result) => books.push(result.volumeInfo));
        books = books.filter((book) => book.imageLinks !== undefined);
        this.setState({ books: books });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Results</h1>
        {this.state.books.map((book) => (
          <div key={book.publishedDate}>
            <ResultsCard
              title={book.title}
              description={book.description}
              imageLink={book.imageLinks.thumbnail}
              link={book.previewLink}
              authors={book.authors.join(", ")}
            />
          </div>
        ))}
      </div>
    );
  }
}
