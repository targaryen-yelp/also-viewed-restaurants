const router = require('express').Router();
const controller = require('./controller.js');

router.route('/yelp')
.get(controller.get);

router.route('/yelp')
.post(controller.post);

module.exports = router;
