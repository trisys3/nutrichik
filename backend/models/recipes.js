'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = require('./users');

var RecipeSchema = new Schema({
	
	// recipe name
	name: {
		type: String,
		trim: true,
		required: 'All recipes need a name'
	},

	// list of ingredients
	ingredients: {
		type: [String],
		default: []
	},

	// list of steps
	steps: {
		type: [String],
		default: []
	},

	// recipe creation date
	created: {
		type: Date,
		default: Date.now
	},

	// recipe creator
	creator: {
		type: UserSchema,
		default: null
	}
});

mongoose.model('Recipe', RecipeSchema);