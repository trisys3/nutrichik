// JavaScript-minification tasks
module.exports = {
	
	// default options for all tasks
	options: {
		banner: '/* <%= grunt.file.readJSON("package.json").name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
		compress: true, // compress files
		sourceMap: true, // create source maps

		// reduce variable names to as few characters as possible
		mangle: {
			except: ['jQuery', '$'] // except jQuery variables
		}
	},

	// minify frontend non-library files
	front: {
		files: '<%= patterns.minJs %>'
	}
};