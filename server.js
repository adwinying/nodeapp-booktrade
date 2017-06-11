const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const path = require('path')

const mongoDB = require('./config/mongoose')

const app = express()
const port = process.env.PORT || 5000

// Connect to DB
mongoDB.config()

// Compression mw
app.use(compression())

// Body Parser mw
app.use(bodyParser.json())

// TODO: passport config

// TODO: Routes

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
