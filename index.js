var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('<h1>Working</h1>');
});