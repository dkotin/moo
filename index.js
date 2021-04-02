const express = require('express')
const app = express()
const config = require('./config')

const people = require('./routes/people')

app.use('/people', people)

app.listen(config.port, () => {
  console.log(`App is listening at http://localhost:${config.port}`)
})
