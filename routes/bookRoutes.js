const express = require('express')
const bookController = require('../controllers/bookController')
const loggedIn = require('../config/passport').loggedIn

const bookRouter = express.Router()

bookRouter.get('/all', bookController.listAllBooks)

bookRouter.post('/new', loggedIn, bookController.createBook)

bookRouter.put('/update', loggedIn, bookController.updateBook)

module.exports = bookRouter
