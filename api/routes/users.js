const express = require('express');
const app = express();

// route를 직접 작성할 경우
app.get('/', function (req, res) {
	res.send('USers Hello World!');
});
