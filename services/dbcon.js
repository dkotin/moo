const knex = require('knex')
let { db } = require('./../config')

module.exports = knex(db)
