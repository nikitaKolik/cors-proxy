require('dotenv').config();
const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const port = process.env.PORT || 3001;
server.listen(port, (err) => {
	console.log(err || `Server running on port ${port}.`)
})
