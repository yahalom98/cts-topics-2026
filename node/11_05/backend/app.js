let express = require('express');
let cors = require('cors');
let connect = require('./db');
let studentRoutes = require('./routes/studentRoutes');

let app = express();

connect();

// middleware 
app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Student Routes API is working');
})

app.use('/api/students', studentRoutes);

app.listen(3000);