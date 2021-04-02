const responseHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': '*',
	'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, PATCH',
	'Content-Type': 'application/json'
}

exports.respond = async function(res, code, body) {
	res.writeHead(code, responseHeaders)
	res.send(body)
	res.end()
}
