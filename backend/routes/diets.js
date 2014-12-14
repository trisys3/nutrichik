'use strict';

var express = require('express');
var router = express.Router();

var diets = require('../controllers/diets');

router.route('/diets/:diet?').get(diets.get)
                            .patch(diets.update)
                            .post(diets.create)
                            .delete(diets.delete);

router.param('diet', diets.dietQuery);

module.exports = router;