(function(){

  'use strict';

    var fs = require('fs-extra');
    module.exports = function(gulp, install, conflict, template, rename, _, inflection, inquirer, mkdirp, g){
      gulp.task('default', function (done) {

          var templatesPath = __dirname + '/templates/';
          var controller = require('./controller');
          var templates = {
            client: templatesPath + 'client/**/*',
            static: templatesPath + 'static/**/*',
            server: templatesPath + 'server/**/*',
          }


          var prompts = [
            {
              name: 'appName',
              message: 'What would you like to call your application?',
              default: 'Beast'
            }
          ];

          controller
            .ask( prompts )
            .then( GenerateTemplates )
            .catch( done );


          function GenerateTemplates( answers ){
              gulp
                .src( templates.static )
                  .pipe( g.rename(function (file) {
                      file = controller.proccessFile( file );
                   }))
                  .pipe( g.template( answers ))
                  .pipe( g.conflict('./'))
                  .pipe( gulp.dest('./'));


              gulp
                .src( templates.server )
                  .pipe( g.template( answers ))
                  .pipe( g.conflict('./'))
                  .pipe( gulp.dest('./'));


              gulp
                .src( templates.client )
                  .pipe( g.rename(function ( file ) {
                      file = controller.proccessFile( file );
                   }))
                  .pipe( g.template( answers ))
                  .pipe( g.conflict('./' ))
                  .pipe( gulp.dest('./' ))
                  .pipe( g.install())
                  .on('end', function () {
                      done();
                  });

          }




      });
      return gulp;
    }

})();