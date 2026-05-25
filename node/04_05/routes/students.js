const express = require("express");
const app = express();
const router = app.router;

let student = [
  { id: 1, name: "Omer", course: "DevOps" },
  { id: 2, name: "Dan", course: "BI" },
  { id: 3, name: "Ariel", course: "Fullstack" },
];

// build this routes
// GET /students
// GET /students/:id
// GET /students/search?course=React
// POST /students
// DELETE /students/:id

router.get("/students", (req, res) => {
  res.send("students");
});

router.get("/students/:id", (req, res) => {
  res.send(`students ${id}`);
});

// router.get("/students/search?course=React", (req, res) => {
//   res.send(`students - react`);
// });

router.post("/students", (req, res) => {
  res.send(`students - react`);
});

module.exports = router;



