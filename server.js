var express = require('express');
var app = express();

app.get('/', function(req, res) {
	// res.send('Hello World!');
	res.send('<html><header><title>First sample</title></header><body><h1>Hello, its nice to meet you!</h1></body></html>');
});


app.use('/public', express.static('public'));

app.listen(4040, function() {
	console.log('Example app listening on port 4040!');
});