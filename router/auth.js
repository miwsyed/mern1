const express = require("express");
const router = new express.Router();
require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("this is server router js");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ Error: "Plz fill all field" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already Exist" });
      }
      const user = new User({
        name: name,
        email: email,
        phone: phone,
        work: work,
        password: password,
        cpassword: cpassword,
      });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: "user registration success." });
        })
        .catch((err) => {
          res.status(500).json({ error: "failed to register" });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
