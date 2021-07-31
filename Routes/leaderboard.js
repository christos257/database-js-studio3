var express = require('express')
var router = express.Router()

router.get('/leaderboard', (res, req) => {
    req.send("leaderboard")
})

router.post('/leaderboard', (res, req) => {
})

module.exports = router
