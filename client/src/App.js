import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import BookSearch from "./pages/BookSearch";
import Results from "./pages/Results";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <h1>Google Book Search</h1>

          <Route exact path="/" component={BookSearch} />
          <Route exact path="/results" component={Results} />
        </div>
      </Router>
    );
  }
}

export default App;
