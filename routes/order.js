const express = require('express')
const router = express.Router()
const controller = require('../controllers/order')
const passport = require('passport')

router.post('/',passport.authenticate('jwt' , {session:false}), controller.create)
router.get('/',passport.authenticate('jwt' , {session:false}),controller.getAll)

module.exports = router