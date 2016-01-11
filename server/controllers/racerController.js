var restful = require('node-restful');

module.exports = function(app, route) {
  //Setup controller for REST
  var rest = restful.model(
      'racers',
      app.models.racer
  ).methods(['get', 'put', 'post', 'delete']);

  //Register endpoint with application
  rest.register(app, route);

  //Return middleware
  return function(req, res, next) {
    next();
  };
};