const passport = require('passport')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

const signup = (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const city = req.body.city
  const state = req.body.state

  const newUser = {
    username,
    password,
    city,
    state,
  }

  User.create(newUser, (err, result) => {
    if (err) {
      console.log(err)
      res.json({
        success: false,
        message: err.message,
      })
    } else {
      console.log(result)
      res.json({
        success: true,
        user: result,
      })
    }
  })
}

const authenticate = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err)

    if (!user) {
      console.log('user not found')

      return res.json({
        success: false,
        message: info,
      })
    }

    req.logIn(user, (loginErr) => {
      if (loginErr) return next(loginErr)

      console.log('login success')

      return res.json({
        success: true,
        user: {
          _id: user._id,
          username: user.username,
          city: user.city,
          state: user.state,
        },
      })
    })
  })(req, res, next)
}

const signout = (req, res) => {
  req.logout()
  res.json({
    success: true,
    message: 'Successfully logged out.',
  })
}

const getProfile = (req, res) => {
  res.json({
    success: true,
    user: {
      _id: req.user._id,
      username: req.user.username,
      city: req.user.city,
      state: req.user.state,
    },
  })
}

const updateProfile = (req, res) => {
  User.findByUsername(req.body.username, (err, user) => {
    if (err) {
      res.json({
        success: false,
        message: err.message,
      })
    } else if (!user) {
      res.json({
        success: false,
        message: 'Username does not exist',
      })
    } else {
      bcrypt.compare(req.body.password, user.password)
        .then((match) => {
          if (match) {
            /* eslint-disable no-param-reassign */
            user.city = req.body.city
            user.state = req.body.state

            user.save(() => {
              res.json({
                success: true,
                user: {
                  _id: user._id,
                  username: user.username,
                  city: user.city,
                  state: user.state,
                },
              })
            })
          } else {
            res.json({
              success: false,
              message: 'Invalid password',
            })
          }
        })
    }
  })
}

module.exports = {
  signup,
  authenticate,
  signout,
  getProfile,
  updateProfile,
}
