var express  = require('express');
var reloader = require('connect-livereload');

module.exports = function(){
  var app = express();

  app.use( reloader() );

  app.use( express.static('./client') );

  app.listen(9000, function(){
    console.log('<%= appName %> listening on 9000');
  });
}