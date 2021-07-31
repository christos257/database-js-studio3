const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    age: Number,
    email: String,
    username: String,
    password: String,
})

module.exports = userSchema;