const http = require('node:http');
const url = require('node:url');

const server = http.createServer((req, res) => {
	const path = url.parse(req.url, true).pathname;
	// const query = url.parse(req.url, true).query;
	// console.log(query)
	if (path == '/') {
		console.log(query)
		res.write('Home page');
	} else if (path == '/about') {
		res.write('About page');
	} else {
		res.write('Not found');
	}
	res.end();
});

server.listen(3000);