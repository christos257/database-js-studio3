var express = require('express')
const mongoose = require('mongoose')
const userSchema = require('../schema/user')
var router = express.Router()



router.get('/set', (req, res) => {
    console.log('Get Called')
    const user = mongoose.model('user', userSchema);
    user.create({
        fname: req.query.fname, 
        lname: req.query.lname,
        username: req.query.username,
        password: req.query.password, 
        age: req.query.age, 
        email: req.query.email

    },  (err, doc) => {
        console.log(err);
        console.log(doc);
    })

    res.send("Success!")
})

router.post('/set', (req, res) => {
    console.log('Post Called')
    console.log('POST');
    console.log(req.body);
    const user = mongoose.model('user', userSchema);
    user.create({
        fname: req.body.fname, 
        lname: req.body.lname,
        username: req.body.username,
        password: req.body.password, 
        age: req.body.age, 
        email: req.body.email
    },  (err, doc) => {
        console.log(err);
        console.log(doc);
    })

    res.send("Success!")
})

router.get('/get', (req, res) => {
    console.log('Get Called')
    const user = mongoose.model('user', userSchema);
    user.find({ name: req.query.name}, (err, doc) => {
        console.log(err);
        res.send({usersData: doc})
    })
})

module.exports = router
