// Get name, email and password
// check if the user already exists
// hash the password
// save the user to MongoDB
// return a success message

let express = require("express");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let User = require("../models/User");
let { JWT_SECRET } = require("../config");
let router = express.Router();

router.post("/register", (req, res) => {
  let { name, email, password } = req.body;

  let exisitingUser = User.findOne({ email });
  if (exisitingUser) {
    return res.json({
      message: "User already exists",
    });
  }

  let hashedPassword = bcrypt.hash(password, 10);

  let newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  newUser.save();
});

module.exports = router;
