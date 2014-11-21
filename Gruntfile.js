module.exports = function(grunt) {

	'use strict';

	require('time-grunt')(grunt);

	// function & property declarations
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json')

	});

	require('load-grunt-config')(grunt, {
		init: true,
		loadGruntConfig: {
			scope: 'devDependencies',
			pattern: ['grunt-*', 'time-grunt']
		}
	});
};