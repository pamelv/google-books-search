const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const books = require("./utils/books.api");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(morgan("dev")); // logging

mongoose.connect("mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", books);

// Define API routes here
app.route("/ping").get((req, res) => {
  res.send("google books");
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
