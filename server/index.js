require('dotenv').config();
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('../db/index.js');
const router = require('./router.js');

const app = express();
const PORT = process.env.PORT || 9001;

app.use(parser.json());
app.use(parser.urlencoded({extends: true}));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

// db.connect is not a function - ERROR
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })

app.listen(PORT, () => {console.log('connected to port: ', PORT)});






