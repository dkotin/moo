/**
 * Removes keys not in allowed list from payload
 *
 * @param payload object
 * @param allowed array
 *
 * @return object
 */
exports.sanitizePayload = (payload, allowed) => {
	let result = {}
	allowed.forEach(key => {
		if (typeof payload[key] !== 'undefined') {
			result[key] = payload[key]
		}
	})

	return result
}
