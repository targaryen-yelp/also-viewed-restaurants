const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelp');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connnecting to db'));
db.once('open', () => {console.log('connected to db')});

module.exports = db;