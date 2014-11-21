'use strict';

// get extra modules
var _ = require('lodash');

// get variables & functions related to environment
var env = require('../env/' + (process.env.NODE_ENV || 'dev'));

// general GETting strategy for after routing successfully
module.exports = function(req, res, next) {
	console.log(res.locals);
	res.locals.extScripts = _.union(res.locals.extScripts, env.getModularJs(res.locals.module));
	res.locals.extStyles = _.union(res.locals.extStyles, env.getModularCss(res.locals.module));
	console.log(req.method);
	res.render('layout');
};