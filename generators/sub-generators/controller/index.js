(function(){
  'use strict';

    module.exports = function (gulp, install, conflict, template, rename, _, inflections, inquirer, mkdirp, g, config) {

      gulp.task('controller', function (done) {
        var templatesPath = __dirname + '/templates/';
        var controller = require('./controller');
        var templates = {
          client: templatesPath + 'client/**/*'
        }

        var prompts = [
          {
            name: 'controllerName',
            message: 'What would you like to call your controller?',
            default: 'BeastController'
          },{
            type: 'list',
            name: 'options',
            message: 'What would you like do?',
            default: 'code',
            choices: [
              {
                name: 'code',
                value: 'code'
              },{
                name: 'eat',
                value: 'eat'
              },{
                name: 'sleep',
                value: 'sleep'
              }
            ]
          }
        ];

        controller
          .ask( prompts )
          .then( GenerateTemplates )
          .catch( done );

        function GenerateTemplates( answers ){
          answers.filters = {};
          answers.filters[answers.options] = true;
          console.log(answers)
          gulp
            .src( templates.client )
              .pipe( g.template( answers ))
              .pipe( g.conflict('./'))
              .pipe( gulp.dest('./'))
              .on('end', function () {
                  done();
              });
        }

      });
      return gulp;
    };

})();