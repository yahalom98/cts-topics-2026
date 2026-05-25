let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');

let authRoutes = require('./routes/authRoutes');
let userRoutes = require('./routes/userRoutes');
let {MONGO_URI} = require('./config');

let app = express();
app.use(cors());
app.use(express.json());





app.get('/', function(req,res){
    res.send('Auth api is running')
})

app.listen(3000);