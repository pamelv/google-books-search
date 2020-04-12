import React from "react";
import API from "../utils/booksapi";
import ResultsCard from "../components/ResultsCard";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";

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
        <Navbar />
        <Container style={{ padding: "1rem 6rem" }}>
          <h2>Results</h2>

          {this.state.books.map((book) => (
            <div key={book.publishedDate}>
              <ResultsCard
                alt={book.title}
                title={book.title}
                description={book.description}
                imageLink={book.imageLinks.thumbnail}
                link={book.previewLink}
                authors={book.authors.join(", ")}
              />
            </div>
          ))}
        </Container>
      </div>
    );
  }
}
