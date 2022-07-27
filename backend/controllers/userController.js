const asyncHandler = require('express-async-handler')
// @desc Register a new User
// @route POST /api/users
// @access Public
const registerUser =asyncHandler(async  (req, res) => {

    const { name, email, password } = req.body
    console.log(req.body)
  // Validation
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }
    res.json('registerUser')
})

// @desc Login User
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.send('loginUser')
}

module.exports = {
    registerUser,
    loginUser
}