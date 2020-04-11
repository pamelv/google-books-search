const axios = require("axios");
const router = require("express").Router();
require("dotenv").config();

router.get("/books", async (req, res) => {
  console.log(req);
  var search = req.body.search;
  console.log(search);
  var results;
  await axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=5&key=${process.env.API_KEY}`
    )
    .then(function (res) {
      results = res.data.items;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  res.send(results);
});

module.exports = router;
