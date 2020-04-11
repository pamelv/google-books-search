import React, { Component } from "react";
import BookSearch from "./pages/BookSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <BookSearch />
      </div>
    );
  }
}

export default App;
