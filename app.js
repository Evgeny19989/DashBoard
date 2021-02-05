const  multer = require("multer")

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const authRoutes  = require('./routes/auth')
const orderRoutes  = require('./routes/order')
const positionRoutes  = require('./routes/position')
const categoryRoutes  = require('./routes/category')
const analyticRoutes  = require('./routes/analytic')
const keys = require('./config/keys')
const passport = require('passport')

mongoose.connect(keys.mongoUrl,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log('mongodb conected')})
    .catch(error=>{console.log(error)})

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use('/uploads' , express.static('uploads'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth',authRoutes)
app.use('/api/order',orderRoutes)
app.use('/api/position',positionRoutes)
app.use('/api/category',categoryRoutes)
app.use('/api/analytic',analyticRoutes)

module.exports = app