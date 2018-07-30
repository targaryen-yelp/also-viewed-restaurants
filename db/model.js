const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: {type: String, require: true},
  reviews: {type: Number, require: true},
  rating: {type: Number, require: true},
  price: {type: Number, require: true},
  mainCategory: {type: String, require: true},
  subCategories: {type: String, require: true},
  city: {type: String, require: true},
  img: {type: String, require: true}
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { Restaurant };