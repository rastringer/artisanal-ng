'use strict'

var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
    res.sendfile('./app/index.html');
});

app.listen(8080);
console.log('Magic happens on 8080');
