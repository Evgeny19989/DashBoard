const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const keys = require('../config/keys')
const errorHandler = require('../utils /errorHandler')
module.exports.login = async function (req, res) {
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            //генерация токена пароли совпали
            const token = jwt.sign({
                email:candidate.email,
                userid:candidate._id
            }, keys.jwt, {expiresIn: 60 * 60})
            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: 'Пароли не совпадают'
            })
        }
    } else {
        res.status(404).json({
            message: 'нет такого пользователя'
        })
    }
}

module.exports.register = async function (req, res) {
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
        //Если пользователь существует то выдает ошибку
        res.status(409).json({
            message: "email занят"
        })
    } else {
        //создать пользователя
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        try {
            await user.save()
            res.status(201).json(user)
        } catch (e) {
           errorHandler(res,e)
        }


    }
}