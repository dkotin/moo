const dbcon = require('./../services/dbcon')
const TABLE_NAME = 'people'
const MAX_LIMIT = 1000

exports.getAll = async function() {
	const result = await dbcon(TABLE_NAME)
		.select('*')
		.limit(MAX_LIMIT)

	return result || []
}

exports.getOne = async function(Uuid) {
	const result = await dbcon(TABLE_NAME)
		.select('*')
		.where('Uuid', Uuid)

	return result && result[0] || null
}
