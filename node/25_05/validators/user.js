let Joi = require("Joi");
let registerValidator = (user) => {
  let schema = Joi.object({
    name: Joi.string().trim().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(user);
};

let loginValidator = (user) => {
  let schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  return schema.validate(user);
};

module.exports = { loginValidator, registerValidator };
