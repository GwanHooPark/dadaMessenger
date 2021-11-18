const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

// const users = require('./routes/users');
// app.use('/users', users);

module.exports = {
	path: '/api',
	handler: app,
};
