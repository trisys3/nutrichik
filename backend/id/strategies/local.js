'use strict';

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('mongoose').model('User');

module.exports = function() {

	// create our local passport strategy & use it
	passport.use(new LocalStrategy(
		
		// main strategy function
		function(username, password, done) {

			// find user with given username
			UserModel.findOne({
				username: username
			},

			// with this username, do this
			function(err, user) {

				// if there's an error, log it then pass it along
				if(err) {
					console.log("Error during login: " + err);
					return done(err);
				}

				// if the username and/or password is incorrect, return an error
				// along with a message
				if(!user || !user.authenticate(password)) {
					return done(null, false, {
						message: 'Invalid username and/or password'
					});
				}

				// if everything is correct, return the user document from the database
				return done(null, user);

			});
		}

	));
};