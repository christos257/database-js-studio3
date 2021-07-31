const express = require('express')
const path = require('path')

const database = require('./db')
const userRouter = require('./Routes/users')
const leaderboardRouter = require('./Routes/leaderboard')
const { resourceUsage } = require('process')
const app = express()
const port = 1997

database.ConnectToDB();
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use('/users', userRouter);
app.use('/leaderboard', leaderboardRouter);

app.listen(port, ()=>{
    console.log('Express server is listening!');
})