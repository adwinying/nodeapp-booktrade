const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const path = require('path')

const mongoDB = require('./config/mongoose')
const passport = require('./config/passport')

const authRoutes = require('./routes/authRoutes')
const bookRoutes = require('./routes/bookRoutes')

const app = express()
const port = process.env.PORT || 5000

// Connect to DB
mongoDB.config()

// Compression mw
app.use(compression())

// Body Parser mw
app.use(bodyParser.json())

// Passport config
passport.config(app)

// Express Routes
app.use('/api/auth', authRoutes)
app.use('/api/book', bookRoutes)

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.json({
    api: 'online',
  })
})

app.listen(port, () => {
  console.log('Server started on port', port)
})
