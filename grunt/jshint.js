// JavaScript-checking tasks
module.exports = {
	
	// default options for all tasks
	options: {
		// options designed to give more warnings & errors
		curly: true, // require curly braces around loops & conditionals
		eqeqeq: true, // require === & !==, never == or !=
		immed: true, // always use parentheses in function calls
		indent: 2, // always indent 2 spaces
		latedef: true, // never use variables until they are defined
		noarg: true, // never use arguments.caller or arguments.callee
		undef: true, // never use undeclared variables
		unused: true, // always use all declared variables
		strict: true, // use ECMAScript 5 strict mode

		// options designed to give fewer warnings & errors
		eqnull: true, // allow use of "== null"
		// esnext: true, // uncomment this when I start using ECMAScript 6
		multistr: true, // do not warn about multiline strings
		sub: true, // do not warn when using brackets for arrays when dots can be used
		force: true, // do not prematurely fail due to errors

		// environment-specific global variables
		browser: true, // browser global variables can be used
		jquery: true, // jQuery global variables can be used

		extensions: 'json', // also check JSON files

		// other global variables
		globals: {
			angular: true // AngularJS's global variable can be used
		}
	},

	// check all non-library JavaScript frontend files, optimized for development
	dev: {
		src: '<%= patterns.checkJsDev %>',
		options: {
			// extra globals
			devel: true // allow development global variables
		}
	},

	// check all non-library JavaScript frontend files & log results, optimized for development
	log: {
		src: '<%= patterns.checkJsDev %>',
		options: {
			devel: true // allow development global variables

			reporterOutput: 'log/errs/jsHint.js' // error output file
		}
	}

	// check all non-library JavaScript frontend files, optimized for browsers older than IE9
	old: {
		src: '<%= patterns.checkJsProd %>',
		options: {
			es3: true, // comply with ES3 standards
			strict: false // disallow ES5 "strict" mode, as it breaks older browsers
		}
	}

	// check all non-library JavaScript frontend files & log results, optimized for browsers older than IE9
	oldLog: {
		src: '<%= patterns.checkJsProd %>',
		options: {
			es3: true, // comply witn ES3 standards
			strict: false, // disallow ES5 "strict" mode, as it breaks older browsers

			reporterOutput: 'log/errs/jsHint.js' // error output file
		}
	}

	// check all non-library JavaScript frontend files, optimized for production
	prod: {
		src: '<%= patterns.checkJsProd %>'
	},

	// check all non-library JavaScript frontend files & log results, optimized for production
	prodLog: {
		src: '<%= patterns.checkJsProd %>',
		options: {
			reporterOutput: 'log/errs/jsHint.js'
		}
	}

	// check all backend JavaScript files
	back: {
		src: '<%= patterns.checkNode %>',
		options: {
			node: true, // allow Node.js global variables
			jquery: false, // jQuery is not needed, so disallow its global variables
			browser: false // we are not in the browser, so disallow browser global variables
		}
	}

	// check all backend JavaScript files & log results
	backLog: {
		src: '<%= patterns.checkNode %>',
		options: {
			node: true, // allow Node.js global variables
			jquery: false, // jQuery is not needed, so disallow its global variables
			browser: false, // we are not in the browser, so disallow browser global variables

			reporterOutput: 'log/errs/jsHint' // error output file
		}
	}
};