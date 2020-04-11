const mongoose = require("mongoose");
const { Schema } = mongoose;

const BooksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
