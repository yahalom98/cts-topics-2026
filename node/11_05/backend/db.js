let mongoose = require('mongoose');

async function connection(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/studentapp');
        console.log('Kooli booli');
    }
    catch(err){
        console.log('Not working well');
    }
}

module.exports = connection;