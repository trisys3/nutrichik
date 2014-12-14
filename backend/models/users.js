'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DietSchema = mongoose.model('Diet');

var scrypt = require('scrypt');

// user collection schema
var UserSchema = new Schema({

	// space-separated list of user name prefixes (Mr., Mrs., M.D., etc.)
	prefix: {
		type: String,
		trim: true,
		default: ''
	},

	// user's first name
	firstName: {
		type: String,
		trim: true,
		default: ''
	},

	// user's middle name
	middleName: {
		type: String,
		trim: true,
		default: ''
	},

	// user's last name
	lastName: {
		type: String,
		trim: true,
		default: ''
	},

	// space-separated list of user name suffixes (Jr., Sr., III, etc.)
	suffix: {
		type: String,
		trim: true,
		default: ''
	},

	// username
	username: {
		type: String,
		trim: true,
		required: 'Username is required',
		unique: true
	},

	// user's email
	email: {
		type: String,
		trim: true,
		default: null,
		match: [/[\w.%+-]+@[\w.]+\.[a-zA-Z]{2,4}/, 'Please fill in a valid email address']
	},

	// user's password
	password: {
		type: String,
		required: 'Please enter a valid password'
	},

	// user's date of birth
	born: {
		type: Date,
		default: Date.now
	},

	// user-defined description
	aboutMe: {
		type: String,
		trim: true,
		default: ''
	},

	// temporary password for when user forgets his/her own
	tempPassword: {
		type: String,
		default: null
	},

	// expiration datetime for temporary password
	tempPasswordExpires: {
		type: Date,
		default: null
	},

	// user's current diet(s)
	diet: {
		type: [DietSchema],
		default: []
	}
});

// pre-save hook to hash our new password
UserSchema.pre('save', function(next) {
	if(this.password) {
		this.password = this.hashPassword(this.password);
	}
	next();
});

// password-hashing function
UserSchema.methods.hashPassword = function(password) {
	if(password) {
		return scrypt.hash(new Buffer(password), scrypt.params(0.5));
	}
	else {
		return password;
	}
};

// authentication function
UserSchema.methods.authenticate = function(password) {
	try {
		if(scrypt.verify(this.password, new Buffer(password))) {
			return true;
		}
		else if(this.tempPassword && this.tempPasswordExpires > Date.now && scrypt.verify(this.tempPassword, new Buffer(password))) {
			return true;
		}
		else {
			return false;
		}
	}
	catch(err) {
		console.log('Error during login: ' + err);
		return false;
	}
};

mongoose.model('User', UserSchema);