let mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category:{
    type:String,
    default:'General'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

let studentModel = mongoose.model("StudentData", studentSchema);
module.exports = studentModel;