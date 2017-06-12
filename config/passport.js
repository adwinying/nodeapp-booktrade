const passport = require('passport')
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/userModel')
const bcrypt = require('bcrypt')

// Passport config
const config = (app) => {
  app.use(session({
    secret: process.env.PASSPORT_SECRET,
    resave: true,
    saveUninitialized: true,
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser((user, callback) => {
    callback(null, user._id)
  })

  passport.deserializeUser((id, callback) => {
    User.findById(id, callback)
  })

  passport.use(new LocalStrategy((username, password, callback) => {
    User.findByUsername((username, (err, user) => {
      if (err) {
        console.log(err)
        callback(null, false, { message: 'Username does not exist' })
      } else {
        bcrypt.compare(password, user.password)
          .then((res) => {
            if (res) {
              callback(null, user)
            } else {
              callback(null, false, { message: 'Invalid password' })
            }
          })
      }
    }))
  }))
}

// Passport check authed mw
const loggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.json({
      success: false,
      message: 'Not logged in',
    })
  }
}

module.exports = {
  config,
  loggedIn,
}
