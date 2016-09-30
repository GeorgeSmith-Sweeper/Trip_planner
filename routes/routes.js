var Express = require('express');
var models = require('../models/models.js');

var Hotel = models.Hotel;
var Place = models.Place;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Promise = require('bluebird')

exports.home = function(req, res, next) {
  Hotel.findAll({})
  .then(function(eachHotel){
    var hotels = eachHotel.map(hotel => hotel.dataValues)
    console.log('THESE ARE THE HOTELS', hotels)
    res.render('home', { hotels: hotels });
  })
  .catch(function(err){
    console.err
  })
}
