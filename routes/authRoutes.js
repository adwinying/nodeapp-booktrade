const express = require('express')
const authController = require('../controllers/authController')
const loggedIn = require('../config/passport').loggedIn

const authRouter = express.Router()

authRouter.post('/signup', authController.signup)

authRouter.post('/signin', authController.authenticate)

authRouter.get('/signout', loggedIn, authController.signout)

authRouter.get('/profile', loggedIn, authController.getProfile)

authRouter.put('/profile', loggedIn, authController.updateProfile)

module.exports = authRouter
