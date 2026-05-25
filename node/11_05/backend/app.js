const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const studentsRoutes = require("./routes/studentRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentsRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});