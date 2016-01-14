var express        = require('express'),
    mongoose       = require('mongoose'),
    bodyParser     = require('body-parser'),
    method_override = require('method-override'),
    _              = require('lodash');

//Create the app
var app = express();

//Add middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(method_override('X-HTTP-Method-Override'));

//CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Connect to MongoDB
mongoose.connect('mongodb://localhost/laps');
mongoose.connection.once('open', function() {
  app.models = require('./models/index');

  var routes = require('./routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });

  app.listen(3000);
  console.log('Vrooming around on port 3000....');
});