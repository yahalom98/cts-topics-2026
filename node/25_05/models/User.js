let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let mongoose = require("mongoose");

// schema
let schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

schema.pre("save", async function (next) {
  if (this.isModified(password)) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

schema.methods.generateAuthToken = function () {
  let token = jwt.sign({ id: this.id }, process.env.SECRET);
  return token;
};

exports.module = mongoose.model("User", schema);
