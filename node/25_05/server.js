let express = require("express");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
let cors = require("cors");
let authRouter = require('./routes/auth');

// start
let app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());

// db connection
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Everything is connected");
});

app.use(authRouter);

// start server
app.listen(process.env.PORT);
