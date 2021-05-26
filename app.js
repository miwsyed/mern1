const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/conn"); // Atfirst declare the .env file, then others who come through .env file
const port = process.env.PORT;

// Middleware

const middleware = (req, res, next) => {
  console.log(`Hello Middelware`);
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello World from Express Server`);
});
app.get("/about", middleware, (req, res) => {
  console.log(`hello About page`);
  res.send(`Hello About World from Express Server`);
});
app.get("/contact", (req, res) => {
  res.send(`Hello Contact World from Express Server`);
});
app.get("/signin", (req, res) => {
  res.send(`Hello SignIn World from Express Server`);
});
app.get("/signup", (req, res) => {
  res.send(`Hello Registration World from Express Server`);
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
