const routes = require('express').Router();

routes.get('/', function(req, res) {
  res.render('home');
});

module.exports = routes;
