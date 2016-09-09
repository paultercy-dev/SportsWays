var express = require('express');
var mongoose = require('mongoose');
var bodyPraser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/SportsWaysdb');

app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.listen('3000', function(){
	console.log("this is working");
});