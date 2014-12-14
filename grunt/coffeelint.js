// CoffeeScript-checking tasks
module.exports = {

	// options for all tasks
	options: {
		// warn when classes are not Pascal-cased, but do not throw error
		"camel_case_classes": {
			"level": "warn"
		},
		// do not impose maximum line length
		"max_line_length": {
			"level": "ignore"
		},
		// only warn when using backticks
		"no_backticks": {
			"level": "warn"
		},
		// allow tabs when indenting
		"no_tabs": {
			"level": "ignore"
		},
		// only warns when semicolon is at end of line
		"no_trailing_semicolons": {
			"level": "ignore"
		}
	},

	// check all frontend CoffeeScript files
	check: {
		files: '<%= patterns.checkCoffee %>'
	}
};