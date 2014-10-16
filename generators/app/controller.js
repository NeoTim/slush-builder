(function(){

  'use strict';

    var fs = require('fs');
    var inquirer = require('inquirer');
    var Q = require('q');
    var _ = require('underscore.string');


    exports.proccessFile = function( file ){
      if (file.basename.indexOf('__') == 0) {
        file.basename = '.' + file.basename.slice(2);
      }
      return file;
    }

    exports.ask = function( prompts ){

      var promised = Q.defer();

      inquirer.prompt( prompts, function (answers) {
        if (!answers.appName) {
          return promised.reject()
        }
        promised.resolve( answers );

      });
      return promised.promise;
    }

})();