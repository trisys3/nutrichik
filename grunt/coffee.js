// tasks to compile CoffeeScript into Javascript
module.exports = {

	// options for all tasks
	options: {
		sourceMap: true
	}

	// change all frontend CoffeeScript files into JavaScript
	front: {
		files: '<%= patterns.moveCoffee %>'
	}
};