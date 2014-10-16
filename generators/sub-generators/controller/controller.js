(function(){

  'use strict';

    var fs = require('fs');
    var inquirer = require('inquirer');
    var Q = require('q');
    var _ = require('underscore.string');

    exports.proccessFile = proccessFile;
    exports.ask = ask;

    function proccessFile(file, answers){

      if (file.basename.indexOf('_') == 0) {
        file.basename = file.basename.replace('_', answers.slugifiedControllerName);
      }
      return file;
    }

    function ask( prompts, moduleName ){

      var promised = Q.defer();

      inquirer.prompt( prompts, function (answers) {
        if (!answers) {
          return promised.reject()
        }

        promised.resolve( answers );

      });

      return promised.promise;
    }

})();







