'use strict'

var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
    res.sendfile('./app/index.html');
});

app.listen(8080);
console.log('Magic happens on 8080');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});