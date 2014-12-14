'use strict';

var passport = require('passport');
var mongoose = require('mongoose');
var UserModel = mongoose.model('User');
var fs = require('fs');

module.exports = exports = function() {
	// serialize our Passport sessions
	passport.serializeUser(function(user, done) {

		// when we are done, pass the user's ID through, without the error
		// even if there is one (it's probably just an authentication error anyway)
		done(null, user.id);

	});

	// deserialize our Passport sessions
	passport.deserializeUser(function(id, done) {

		// find a user with the ID we are given
		UserModel.findById(id,

			// do not include salt, password or temporary password
			// in the result, for security
			'-salt -password',

			// when we are done, return the user and any errors
			function(err, user) {
				done(err, user);
			}
			
		);

	});

	var strat_path = __dirname + '/strategies/';
	fs.readdirSync(strat_path).forEach(function(strat) {
		require(strat_path + strat)();
	});
};