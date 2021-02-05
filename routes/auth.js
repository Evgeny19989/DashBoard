const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')

//http://localhost:5000/api/auth/login
router.post('/login', controller.login)

//http://localhost:5000/api/auth/register
router.post('/register', controller.register)

module.exports = router