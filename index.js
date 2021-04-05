const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config')

const people = require('./routes/people')

app.use(bodyParser.json())
app.use('/people', people)

/**
 * Error handler
 */
app.use(function (err, req, res, next) {
  res.status(err.code || 500).send(err.message)
})

app.listen(config.port, () => {
  console.log(`App is listening at http://localhost:${config.port}`)
})
