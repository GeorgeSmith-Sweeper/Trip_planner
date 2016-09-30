var models = require('./models/models.js');

var Hotel = models.Hotel;
var Place = models.Place;
var Restaurant = models.Restaurant;
var Activity = models.Activity;

var app = require('./app');

Place.sync()
    .then(function () {
        return Hotel.sync();
    })
    .then(function () {
        return Restaurant.sync();
    })
    .then(function () {
        return Activity.sync();
    })
    .then(function () {
        app.listen(3000, function () {
            console.log('Server is listening on port 3001!');
        });
    })
    .catch(function() {
      console.error
    })
