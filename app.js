const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
require("./db/conn"); // Atfirst declare the .env file, then others who come through .env file

app.use(express.json());
const port = process.env.PORT;

app.use(require("./router/registerRouter"));
app.use(require("./router/loginRouter"));
// Middleware

// const middleware = (req, res, next) => {
//   console.log(`Hello Middelware`);
//   next();
// };

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
