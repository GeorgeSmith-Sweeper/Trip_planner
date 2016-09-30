var Express = require('express');
var models = require('../models/models.js');

var Hotel = models.Hotel;
var Place = models.Place;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Promise = require('bluebird')

exports.home = function(req, res, next) {
  Promise.all([Hotel.findAll(), Restaurant.findAll(), Activity.findAll()])
.spread(function(hotels, restaurants, activities){
  res.render('home', { hotels: hotels, restaurants: restaurants, activities: activities});
})
  .catch(function(err){
    console.err
  })
}
