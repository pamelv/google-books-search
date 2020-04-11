import axios from "axios";
require("dotenv").config();

export default {
  getBooks: function (data) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${data}&maxResults=5`
    );
  },
};
