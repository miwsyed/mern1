const express = require("express");
const loginRouter = new express.Router();
require("../db/conn");
const User = require("../models/userSchema");

loginRouter.get("/login", (req, res) => {
  res.send("this is login page");
});

loginRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill up all details" });
    }
    const userinfo = await User.findOne({ email: email });

    if (!userinfo) {
      res.status(400).json({ error: "Invaild Details" });
    } else {
      res.status(200).json({ message: "Congrats! Login Successful" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = loginRouter;
