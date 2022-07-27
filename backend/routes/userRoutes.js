const express = require('express')
const { registerUser, loginUser } = require('../controllers/userController')

const router = express.Router()

router.post('/', (req, res) => {
    registerUser(req, res)
})

router.post('/login', (req, res) => {
    loginUser(req, res)
})


module.exports = router