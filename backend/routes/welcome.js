'use strict';

// routes for the home page

// create express router object
var express = require('express');
var router = express.Router();

// require the relevant controller
var welcome = require('../controllers/welcome');

// welcome page routes
router.route('/').get(welcome.getPage);

module.exports = router;