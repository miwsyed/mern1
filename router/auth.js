const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.send("this is server router js");
});

router.post("/register", (req, res) => {
  console.log(req.body);

  res.json(req.body);
});

module.exports = router;
