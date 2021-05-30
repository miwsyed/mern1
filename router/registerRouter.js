const express = require("express");
const regRouter = new express.Router();
require("../db/conn");
const User = require("../models/userSchema");

regRouter.get("/register", (req, res) => {
  res.send("this is server router js");
});

// using promise

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ Error: "Plz fill all field" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already Exist" });
//       }
//       const user = new User({
//         name: name,
//         email: email,
//         phone: phone,
//         work: work,
//         password: password,
//         cpassword: cpassword,
//       });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registration success." });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "failed to register" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// using async await

regRouter.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Plz fill up all fields properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Id already exist." });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password doesn't match" });
    } else {
      const user = new User({
        name: name,
        email: email,
        phone: phone,
        work: work,
        password: password,
        cpassword: cpassword,
      });
      // --------> bcrypt hash will work here
      await user.save();
      res.status(201).json({ message: "User Registration Successful" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = regRouter;
