// minify CSS
module.exports = {
	// global options
	options: {
		important: 2, // never use !important
		'adjoining-classes': false, // allow multiple classes in a single selector
		'box-sizing': false, // allow "box-sizing" property
		'box-model': false, // do not warn with box-model eccentricities
		'fallback-colors': false, // do not warn when not using fallback colors
		import: 2, // do not use @import
		ids: 2, // allow use of IDs in declarations
	},

	// check all CSS files for development
	check: {
		files: '<%= patterns.checkCssDev %>'
	},

	// check all CSS files for older browsers
	checkOld: {
		'adjoining-classes': 2, // disallow multiple classes in single rule (<IE7)
		'box-sizing': 2, // disallow "box-sizing" attribute (IE6-7)
		'bulletproof-font-face': 2, // do not warn when using multiple font faces in 1 definition (IE6-8)
		'fallback-colors': 2, // require fallback colors (<IE9)
		files: '<%= patterns.checkCssDev %>'
	},

	// check all CSS files for production
	checkProd: {
		files: '<%= patterns.checkCssProd %>'
	}
};