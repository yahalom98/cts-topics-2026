let express = require("express");
let studentModel = require("../models/student");

// EXPRESS ROUTER
let router = express.Router();

// GET ALL Students data
router.get("/", async (req, res) => {
  try {
    const studentsData = await studentModel.find();
    res.json(studentsData);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching students",
    });
  }
});

// CREATE Student
router.post("/", async (req, res) => {
  try {
    let { title, content } = req.body;

    let newStudentData = new studentModel({
      title,
      content,
    });

    let savedStudentData = await newStudentData.save();

    res.status(201).json({
      message: "Student created successfully",
      data: savedStudentData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating student",
      error: error.message,
    });
  }
});

module.exports = router;
