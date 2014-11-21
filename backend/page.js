'use strict';

// express configuration

// external libraries
var _ = require('lodash');
var fs = require('fs');

// express & its middleware
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var compress = require('compression');
var helmet = require('helmet');
var consolidate = require('consolidate');
var vhost = require('vhost');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');

// databases & session middleware
var mongoose = require('mongoose');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var passport = require('passport');

// environment-related modules
var env = require('./env/' + (process.env.NODE_ENV || 'dev'));
var touch_env = require('./env/touch'); // touch-related functions & variables

// create server object
var server = express();

// require the model files
var model_path = __dirname + '/models/';
fs.readdirSync(model_path).forEach(function(model) {
	require(model_path + model);
});

// local server variables
server.use(function(req, res, next) {
	res.locals.url = req.protocol + '://' + req.hostname + (req.url || '/');
	res.locals.extScripts = _.union(env.getJs(), env.getModularJs('main'));
	res.locals.extStyles = _.union(env.getCss(), env.getModularCss('main'));
	next();
});

// compression middleware
server.use(compress({
	filter: function(req, res) {
		return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
	},
	level: 9
}));

// view options
server.set('views', __dirname + '/view-bases'); // set the views folder to the relevant module folder
server.engine('html', consolidate['dust']); // use "dust" view engines with the ".html" extension
server.set('view engine', 'html'); // set dust (extension ".html") as the default view engine

// logging & debugging for testing & development environments
if(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test' || !process.env.NODE_ENV) {
	// use express's logging middleware, "morgan"
	server.use(morgan('dev'));

	// disable caching of views
	server.disable('view cache');

	// show errors onscreen
	server.enable('showStackError');
}

// body-parsing middleware
server.use(bodyParser.urlencoded({extended: true})); // middleware for parsing urlencoded documents
server.use(bodyParser.json()); // middleware for parsing JSON-encoded documents

// HTTP method-overriding middleware
server.use(methodOverride());

// enable JSONP
server.enable('jsonp callback');

server.use(cookieParser()); // cookie-parsing middleware

// create the database object
var monServer = mongoose.connect(env.dbUrl);

// create a client-server session, using a MongoDB collection/table to store its info
server.use(session({
	resave: true,
	saveUninitialized: true,
	secret: env.sessionSecret,
	store: new mongoStore({
		mongoose_connection: monServer.connections[0], // specify the database these sessions will be saved into
		auto_reconnect: true
	})
}));

// initialize passport & have it use the current session
server.use(passport.initialize());
server.use(passport.session());

// helmet middleware for headers
server.use(helmet.csp({ // Content Security Policy (CSP) headers
	defaultSrc: ['nutrichik.com:*', '*.nutrichik.com:*'], // only allows anything related to CSP from this domain
	scriptSrc: ['nutrichik.com:*', '*.nutrichik.com:*'], // only allows scripts from this domain
	styleSrc: ['nutrichik.com:*', '*.nutrichik.com:*'], // only allows styles from this domain
	imgSrc: ['nutrichik.com:*', '*.nutrichik.com:*'], // only allows images from this domain
	connectSrc: ['nutrichik.com:*', '*.nutrichik.com:*'], // only allows origins from this domain
	fontSrc: ['nutrichik.com:*', '*.nutrichik.com:*'], // only allows fonts from this domain
	objectSrc: ['nutrichik.com:*', '*.nutrichik.com:*'], // only allows plugins from this domain
	mediaSrc: ['nutrichik.com:*', '*.nutrichik.com:*'], // only allows audio & video from this domain
	frameSrc: ['\'none\''], // does not allow frames inside webpages on this site
	reportUri: ['/.csp/report-violation'], // where reports will be sent to
	reportOnly: false, // generate errors as well as other reports
	setAllHeaders: true, // do not set all headers
	safari5: false // do not implement CSP on clients served via Safari 5
}));
server.use(helmet.xframe('deny')); // don't let content be put in frames or iframes
server.use(helmet.xssFilter()); // X-XSS-Protection header for basic protection against XSS (Cross-Site-Scripting)
server.use(helmet.ienoopen()); // does not let users of Internet Explorer open files from this site, only save them
server.use(helmet.nosniff()); // does not let others sniff the X-Content-Type header
server.disable('x-powered-by'); // hides the X-Powered-By header

server.use(express.static('app')); // root of the client parts of the site
if(process.env.NODE_ENV === 'test') {
	server.use(express.static('test')); // if in a testing environment, add tests
}

// use the routing files
var route_path = __dirname + '/routes/';
fs.readdirSync(route_path).forEach(function(route) {
	server.use(vhost('nutrichik.com', require(route_path + route)));
});

var id = require('./id/passport'); // passport user ID configuration

id();

// listen on server port
server.listen(process.env.SERVER_PORT || 3000);

module.exports = server;