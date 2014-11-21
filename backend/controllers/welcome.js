'use strict';

var mainGet = require('../verbs/get');

exports.getPage = function(req, res, next) {
	res.locals.module = ['welcome'];
	mainGet(req, res, next);
}