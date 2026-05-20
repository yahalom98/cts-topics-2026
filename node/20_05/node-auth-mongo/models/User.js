let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    // 1
  name: String,

//   2
  email: {
    type: String,
    unique: true,
  },

//   3
  password: String,

//   4
  role: {
    type: String,
    default: "Simple User",
  },
});


let User = mongoose.model('User', userSchema);
module.exports = User;