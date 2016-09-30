var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner');

var Place = db.define('place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DOUBLE)
  }
});

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.INTEGER
  },
  amenities: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    set: function (value) {

      var arrayOfAmenities;

      if (typeof value === 'string') {
          arrayOfAmenities = value.split(',').map(function (s) {
              return s.trim();
          });
          this.setDataValue('amenities', arrayOfAmenities);
      } else {
          this.setDataValue('amenities', value);
      }

    }
  }
}, {
  hooks: {
    beforeValidate: function(hotel) {
      if (hotel.num_stars > 5) {
        hotel.num_stars = 5;
      }
      else if (hotel.num_stars < 1) {
        hotel.num_stars = 1;
      }
    }
  }
});

var Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

var Restaurant = db.define('restaurant', {
   name: {
    type: Sequelize.STRING,
    allowNull: false
   },
   cuisine: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    set: function (value) {

      var arrayOfCusines;

      if (typeof value === 'string') {
          arrayOfCusines = value.split(',').map(function (s) {
              return s.trim();
          });
          this.setDataValue('cuisines', arrayOfCusines);
      } else {
          this.setDataValue('cuisines', value);
      }

    }
   },
   price: {
    type: Sequelize.INTEGER
   }
}, {
  hooks: {
    beforeValidate: function(restaurant) {
      if (restaurant.price > 5) {
        restaurant.price = 5;
      }
      else if (restaurant.price < 1) {
        restaurant.price = 1;
      }
    }
  }
});

Activity.belongsTo(Place);
Restaurant.belongsTo(Place);
Hotel.belongsTo(Place);

module.exports = {
  db: db,
  Place: Place,
  Activity: Activity,
  Hotel: Hotel,
  Restaurant: Restaurant
};
