let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let mongoose = require("mongoose");

// Schema 
let schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Hash password before saving
schema.pre("save", async function () {
  // FIXED: "password" must be passed as a string literal
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});


schema.methods.generateAuthToken = function () {
  let token = jwt.sign({ id: this.id }, process.env.SECRET);
  return token;
};

let User = mongoose.model("User", schema);

// FIXED: Corrected export syntax
module.exports = User;