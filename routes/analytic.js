const express = require('express')
const router = express.Router()
const controller = require('../controllers/analytic')

//http://localhost:5000/api/analytic/overview
router.get('/overview', controller.overview)

//http://localhost:5000/api/analytic/analytic
router.get('/analytics', controller.analytic)

module.exports = router