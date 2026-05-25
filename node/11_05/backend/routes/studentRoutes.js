const express = require("express");
const studentModel = require("../models/student");

const router = express.Router();

router.get("/", async (req, res) => {
  const students = await studentModel.find();
  res.json(students);
});

router.post("/", async (req, res) => {
  const { title, content, category } = req.body;

  const newStudent = new studentModel({
    title,
    content,
    category,
  });

  const savedStudent = await newStudent.save();

  res.json(savedStudent);
});

module.exports = router;
