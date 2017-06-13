const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const saltRounds = 10

const userModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: String,
  state: String,
})

const User = mongoose.model('User', userModel)

User.create = (profile, callback) => {
  User.findOne({ username: profile.username }, (err, doc) => {
    if (err) { callback(err, null) }

    if (doc) {
      callback(new Error('Username already exists!'), null)
    } else {
      bcrypt.hash(profile.password, saltRounds)
        .then((hash) => {
          const newUser = new User({
            username: profile.username,
            password: hash,
            city: profile.city,
            state: profile.state,
          })

          newUser.save(callback)
        })
        .catch((bcryptErr) => {
          console.log(bcryptErr)
        })
    }
  })
}

User.findByUsername = (username, callback) => {
  User.findOne({ username }, (err, doc) => {
    if (err) { callback(err, null) }

    callback(null, doc)
  })
}

module.exports = User
