var Express = require('express');
var models = require('../models/models.js');
var router = Express.Router();
var Hotel = models.Hotel;
var Place = models.Place;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Promise = require('bluebird')
module.exports = router;


router.get('/home', function(req, res, next) {
  Promise.all([Hotel.findAll(), Restaurant.findAll(), Activity.findAll()])
.spread(function(hotels, restaurants, activities){
  res.render('home', { hotels: hotels, restaurants: restaurants, activities: activities});
})
  .catch(function(err){
    console.log(err);
  })
});

router.get('/dayplan', function(req, res, next){
  res.render('dayplan');
})
