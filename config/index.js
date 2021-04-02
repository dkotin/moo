module.exports = {
	port: 8081,
	db: {
		client: 'mysql',
		connection: {
			host: process.env.HOST || 'localhost',
			port: process.env.port || 3307,
			user: process.env.DB_USER || 'root',
			password:  process.env.DB_PASSWORD || 'root',
			database: process.env.DB_NAME || 'titanic'
		}
	}
}
