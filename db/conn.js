const mongoose = require("mongoose");
const DB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fauep.mongodb.net/mern1?retryWrites=true&w=majority`;

console.log(`this is mongo atlas server : ${DB}`);

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Mongoose server connection Successful`);
  })
  .catch((err) => {
    console.log(`Mongoose ERROR...`);
  });
