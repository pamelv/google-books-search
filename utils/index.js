const router = require("express").Router();

router.use("/books", require("./books.api"));
module.exports = router;
