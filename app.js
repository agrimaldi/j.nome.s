/**
 * Module dependencies.
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , utils = require('./lib/utils')
  , Config = require('./lib/config').Config;


/**
 * Create the main app
 */
var app = module.exports = express.createServer(),
    config = new Config(app);


/**
 * Configuration of the express app
 */
config.loadDir();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'topsecret' }));
  app.use(stylus.middleware({
    src: __dirname + '/public'
  , compile: function(str, path){
      return stylus(str)
        .set('filename', path)
        .set('compress', true)
        .use(nib());
    }
  }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  console.log('Application started in development mode.')
});

app.configure('test', function(){
  require('express-trace')(app);
  console.log('Application started in test mode.')
});

app.configure('production', function(){
  console.log('Application started in production mode.');
});


/**
 * Map routes to app functions
 */
var doc = require('./controllers/doc')
  , about = require('./controllers/about')
  , browse = require('./controllers/browse');

app.get('/', function(req, res){
  res.render('index', {
    title: 'j.nome.s'
  });
});

app.get('/api', function(req, res){
  res.sendfile('./docs/j.nome.s-doc.html');
});

app.get('/globalconfig.json', function(req, res){
  res.send(app._locals.config.global.style);
});

doc.route(app);
about.route(app);
browse.route(app);


/**
 * Error handling
 */
var errors = require('./controllers/errors');

errors.route(app);


/**
 * Start the express app
 */
if (!module.parent) {
  app.listen(3000);
  console.log("j.nome.s listening on port %d", app.address().port);
}
