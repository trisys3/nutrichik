'use strict';

// get passport & mongoose
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('mongoose').model('User');

module.exports = function() {

	// signup function
	passport.use('local-signup', new LocalStrategy({
			passReqToCallback: true // pass the entire request to the callback
		},

		function(req, username, password, done) {
			
			process.nextTick(function() {

			// find a user with the same username
				UserModel.findOne({username: username}, function(err, user) {

					// if there is an error, log it then return it
					if(err) {
						console.log("Error finding a user in the database: " + err);
						return done(err);
					}

					// if a user was already found
					if(user) {
						return done(null, false, "User already exists");
					}

					// if we get this far, create a new user from the request body
					var newUser = new UserModel(req.body);

					// save it and sign it in
					newUser.save(function(err) {
						if(err) {
							console.log("Error during signup: " + err);
							return done(err);
						}
						return done(null, newUser);
					});

				});

			});

		}

	));

};