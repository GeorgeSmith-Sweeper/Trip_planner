var Express = require('express');
var models = require('../models/models.js');

var Hotel = models.Hotel;
var Place = models.Place;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Promise = require('bluebird')

exports.home = function(req, res) {
  res.render('home');
}
