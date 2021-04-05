const router = require('express').Router()
const model = require('./../models/people')

router.get('/:id', async function (req, res, next) {
	let result
	try {
		result = await model.getOne(req.params.id)
	} catch(e) {
		e.code = e.code || 500
		next(e)

		return
	}

	if (result === null) {
		const e = new Error('Not found')
		e.code = 404
		next(e)

		return
	}

	res.send(result)
})

router.post('/', async function (req, res, next) {
	let result

	try {
		result = await model.create(req)
	} catch(e) {
		e.code = e.code || 500
		next(e)

		return
	}

	if (result === null) {
		const e = new Error('Not found')
		e.code = 404
		next(e)

		return
	}

	res.send(result)
})

router.put('/:id', async function (req, res, next) {
	let result

	try {
		result = await model.update(req)
	} catch(e) {
		e.code = e.code || 500
		next(e)

		return
	}

	if (result === null) {
		const e = new Error('Not found')
		e.code = 404
		next(e)

		return
	}

	res.send(result)
})

router.delete('/:id', async function (req, res, next) {
	let result

	try {
		result = await model.remove(req.params.id)
	} catch(e) {
		e.code = e.code || 500
		next(e)

		return
	}

	if (result === null) {
		const e = new Error('Not found')
		e.code = 404
		next(e)

		return
	}

	res.send(result)
})

router.get('/', async function (req, res) {
	let result

	try {
		result = await model.getAll()
	} catch(e) {
		e.code = e.code || 500
		next(e)

		retrun
	}

	res.send(result)
})


module.exports = router
