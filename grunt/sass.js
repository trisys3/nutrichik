// SassScript tasks
module.exports = {
	
	// default options
	options: {
		lineNumbers: true,
		compass: true,
		cacheLocation: 'app/.cache/sass',
		trace: true,
		debugInfo: true
	},

	// converts Sass/SCSS files to CSS without checking syntax
	move: {
		files: '<%= patterns.moveScss %>'
	},

	check: {
		options: {
			check: true
		},
		files: '<%= patterns.checkScss %>'
	}
};