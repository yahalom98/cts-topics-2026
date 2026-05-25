let User = require("../models/User");
let { loginValidator, registerValidator } = require("../validators/user.js");

let register = async (req, res) => {
  // validation

  let { value } = registerValidator(req.body);
  let user = new User(value);
  let token = user.generateAuthToken();
  await user.save();
  res.json({ token });
};

let login = async (req, res) => {
//   let { value } = loginValidator(req.body);
//   let user = await User.findOne({ email: value.email });
//   if (!user) return res.status(403).json("User not exist");
//   let token = user.generateAuthToken();
//   res.json({ token });
};

module.exports = { register, login };
