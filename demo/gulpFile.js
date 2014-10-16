;(function(){
  'use strict';

  // required modules
  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({lazy: false});
  var server = require('./server/server.js');

  // tasks
  gulp.task('default', ['serve']);

  gulp.task('scripts', scripts);
  gulp.task('serve', serve);

  // task functions
  function serve(){
    server();
  }

  function scripts(){
    return gulp.src('./client/www/')
      .pipe($.jshint())
      .pipe($.concat('app.min.js'))
      .pipe($.uglify())
      .pipe(gulp.dest('./client/dist/'))
      .pipe($.livereload());
  }
})();

