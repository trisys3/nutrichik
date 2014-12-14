'use strict';

var path = require('path');

// express server tasks
module.exports = {
  
  // default options
  options: {
    hostname: '127.0.0.1',
    port: (process.env.SERVER_PORT || 3000)
  },

  dev: {
    options: {
      server: 'backend/page',
      livereload: true,
      bases: ['app/src', 'app/dist', 'backend']
    }
  },

  prod: {
    options: {
      server: 'backend/page',
      livereload: true,
      bases: ['app/dist', 'app/libs', 'backend']
    }
  },

  test: {
    options: {
      showStack: true, // show errors in browser
      server: 'backend/page', // express server file
      livereload: true, // automatically reload server when express pages change
      bases: ['app/src', 'app/libs', 'test', 'backend'] // watch files in these folder for changes
    }
  }
};