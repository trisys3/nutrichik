'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// diets collection
var DietSchema = new Schema({

	// diet name
	name: {
		type: String,
		trim: true,
		required: 'All diets must have a name'
	},

	// foods specifically allowed on this diet
	allowedFoods: {
		type: [String],
		default: []
	},

	// foods specifically not allowed on this diet
	notAllowedFoods: {
		type: [String],
		default: []
	},

	// type of diet, actually just reference(s) to other diet(s)
	type: {
		type: [DietSchema],
		default: []
	},

	// "cheat" days &/or times
	cheatDays: {
		type: [String],
		default: []
	},

	// any other restrictions or considerations
	restrictions: {
		type: [String],
		default: []
	}
});

mongoose.model('Diet', DietSchema);