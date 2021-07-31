const express = require('express')
const path = require('path')

const database = require('./db')
const userRouter = require('./Routes/users')
const leaderboardRouter = require('./Routes/leaderboard')
const { resourceUsage } = require('process')
const app = express()


database.ConnectToDB();
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use('/users', userRouter);
app.use('/leaderboard', leaderboardRouter);

app.listen(process.env.PORT, ()=>{
    console.log('Express server is listening!');
})