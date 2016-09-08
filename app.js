var app = require('express')();
var express = require('express');
var config = require('./config')();
var http = require('http');
var server = http.Server(app);
var routes = require('./routers');

//app.use(routes);

app.set('view engine', 'hjs');
app.set('views', __dirname + '/views');

app.use(routes);
app.use('/', express.static('public'));
app.use('/', express.static('node_modules'));
app.listen(config.port, function(){
    //Connected callback
    console.log("Server listening on: http://localhost:%s", config.port);
});
