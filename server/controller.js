const { Restaurant } = require('../db/model.js');
const faker = require('faker');

const controller = {
  get: (req, res) => {
    const { mainCategory } = req.query;
    console.log('req: ', mainCategory);
    Restaurant.find({
      mainCategory: mainCategory
    }, (err, found) => {
      if (err) {console.error('error getting data from db')}
      else {
        res.status(200).send(found);
        console.log('retrieved data from db: ', found);
      }
    })
  },
  post: (req, res) => {
    // const { name, categories } = req.body;
    const e = req.body;
    new Restaurant({
      name: faker.lorem.words(3),
      reviews: faker.random.number(10000),
      rating: faker.random.number(5),
      price: faker.random.number(4),
      mainCategory: faker.lorem.words(1),
      subCategories: faker.lorem.words(2),
      city: faker.address.city(),
      img: faker.image.food()
    }).save((err, newRestaurant) => {
      if (err) {console.error('error saving new restaurant to db')}
      else {
        res.status(201).send(newRestaurant);
        console.log(newRestaurant);
      }
    });
  }
}

module.exports = controller;