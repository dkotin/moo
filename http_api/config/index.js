module.exports = {
	port: 8081,
	db: {
		client: 'mysql',
		connection: {
			host: process.env.HOST || 'localhost',
			port: process.env.PORT || 3307,
			user: process.env.DB_USER || 'root',
			password:  process.env.DB_PASSWORD || 'root',
			database: process.env.DB_NAME || 'titanic'
		}
	}
}
