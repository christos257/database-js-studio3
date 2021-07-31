const mongoose = require('mongoose')

const ConnectToDB = () =>{
    mongoose.connect(
        'mongodb+srv://ChrisData:MyFirstDatabase@cluster0.8w76f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        (err)=>{
            console.log('Connected to database');
            console.log(err);
        })
    
        
}

module.exports = {
    ConnectToDB
}