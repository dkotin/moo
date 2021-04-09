const dbcon = require('./../services/dbcon')
const { sanitizePayload } = require('./../services/utils')
const { v4: uuid } = require('uuid')
const TABLE_NAME = 'people'
const MAX_LIMIT = 1000

const ALLOWED_FIELDS = [
	'survived',
	'passengerClass',
	'name',
	'sex',
	'age',
	'siblingsOrSpousesAboard',
	'parentsOrChildrenAboard',
	'fare'
]

const ALLOWED_FIELDS_RESPONSE = [...ALLOWED_FIELDS, 'uuid']

	exports.getAll = async function() {
	const result = await dbcon(TABLE_NAME)
		.select('*')
		.limit(MAX_LIMIT)

	return result || []
}

exports.getOne = async function(uuid) {
	const result = await dbcon(TABLE_NAME)
		.select('*')
		.where('uuid', uuid)
		.limit(1)

	return result && result[0] && sanitizePayload(result[0], ALLOWED_FIELDS_RESPONSE) || null
}

exports.create = async function(req) {
	const result = await dbcon(TABLE_NAME)
		.insert({ ...sanitizePayload(req.body, ALLOWED_FIELDS), 'uuid': uuid() })

	if (result && result[0]) {
		const response = await dbcon(TABLE_NAME)
			.select('*')
			.where('id', result[0])

		return sanitizePayload(response[0], ALLOWED_FIELDS_RESPONSE)
	}

	throw new Error('Unable to add a record')
}

exports.update = async function(req) {
	const exists = await dbcon(TABLE_NAME)
		.select('uuid')
		.where('uuid', req.params.id)
		.limit(1)

	if (!exists.length) {
		return null
	}

	const result = await dbcon(TABLE_NAME)
		.update(sanitizePayload(req.body, ALLOWED_FIELDS))
		.where('uuid', req.params.id)
		.limit(1)

	if (result === 1) {
		const response = await dbcon(TABLE_NAME)
			.select('*')
			.where('uuid', req.params.id)
		return response && response[0] && sanitizePayload(response[0], ALLOWED_FIELDS_RESPONSE) || null
	}

	throw new Error('Unable to update a record')
}

exports.remove = async function(uuid) {
	const exists = await dbcon(TABLE_NAME)
		.select('uuid')
		.where('uuid', uuid)
		.limit(1)

	if (!exists.length) {
		return null
	}

	await dbcon(TABLE_NAME)
		.where('uuid', uuid)
		.limit(1)
		.del()

	return true
}
