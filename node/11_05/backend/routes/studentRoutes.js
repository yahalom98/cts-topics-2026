let express = require("express");
let studentModel = require("../models/student");

// EXPRESS ROUTER
let router = express.Router;

// GET ALL Students data

router.get("/", async (req, res) => {
    const studentsData = studentModel.find();
    res.json(studentsData);
});


router.post("/", async(req, res) => {
   let {title, content} = req.body;

   let newStudentData = new studentModel({
    title,
    content
   })

   let saveStudentData = newStudentData.save();

});


// Delete - todo

module.exports = router;

