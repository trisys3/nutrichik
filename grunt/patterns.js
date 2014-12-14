'use strict';

// file patterns for Grunt tasks
module.exports = {

	// SCSS pattern for conversion to CSS
	moveScss: [{
		expand: true,
		cwd: 'app/src',
		src: ['**/*.sass', '**/*.scss'],
		dest: '',
		ext: '.css',
		rename: function(dest, src) {
			return 'app/src/' + src.replace('scss', 'css');
		}
	}],
	// syntax-checking pattern for Sass files
	checkScss: [{
		expand: true,
		cwd: 'app/src',
		src: ['**/*.sass', '**/*.scss']
	}],

	// syntax-checking pattern for CoffeeScript
	checkCoffee: [{
		expand: true,
		cwd: 'app/src',
		src: ['**/*.coffee']
	}],
	// pattern for conversion from CoffeeScript to JavaScript
	moveCoffee: [{
		expand: true,
		cwd: 'app/src',
		src: ['**/*.coffee'],
		dest: '',
		ext: '.js',
		rename: function(dest, src) {
			return 'app/src/' + src.replace('coffee', 'js');
		}
	}],

	// syntax-checking pattern for frontend JavaScript in development
	checkJsDev: [{
		expand: true,
		cwd: 'app/src',
		src: ['**/*.js', '**/*.json']
	}],
	// syntax-checking pattern for frontend JavaScript in production
	checkJsProd: [{
		expand: true,
		cwd: 'app/dist',
		src: ['**/*.js', '**/*.json']
	}],
	// syntax-checking pattern for backend JavaScript
	checkNode: ['Gruntfile.js', 'grunt/**/*.js', 'backend/**/*.js', 'test/**/*.js'],
	minJs: [{
		expand: true,
		cwd: 'app/src',
		src: ['**/*.js'],
		dest: 'app/dist',
		ext: '.min.js'
	}],

	// syntax-checking pattern for frontend CSS in development
	checkCssDev: [{
		expand: true,
		cwd: 'app/src',
		src: ['**/*.css']
	}],
	// syntax-checking pattern for frontend CSS in production
	checkCssProd: [{
		expand: true,
		cwd: 'app/dist',
		src: ['**/*.css']
	}],
	// minify development CSS files for production
	minCss: [{
		expand: true,
		cwd: 'app/src',
		src: ['**.css'],
		ext: '.min.css',
		dest: 'app/dist'
	}]
};