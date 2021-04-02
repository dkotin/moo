const router = require('express').Router()
const model = require('./../models/people')
const http = require('./../services/http')

router.get('/:id', async function (req, res) {
	const result = await model.getOne(req.params.id)
	if (result === null) {
		http.respond(res, 404, 'not found')
	}


	res.send(result)})

router.get('/', async function (req, res) {
	const result = await model.getAll()
	res.send(result)
})

module.exports = router
