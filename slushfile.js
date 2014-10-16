/*
 * slush-meanjs
 * https://github.com/arvindr21/slush-meanjs
 *
 * Copyright (c) 2014, Arvind Ravulavaru
 * Licensed under the MIT license.
 */
(function(){

  'use strict';

  var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inflection = require('inflection'),
    inquirer = require('inquirer'),
    mkdirp = require('mkdirp'),
    g    = require('gulp-load-plugins')({lazy:false}),
    config = require('./config.js');

  // load generators
  gulp = require('./generators/app/index.js')(gulp, install, conflict, template, rename, _, inflection, inquirer, mkdirp, g, config);
  gulp = require('./generators/sub-generators/controller/index.js')(gulp, install, conflict, template, rename, _, inflection, inquirer, mkdirp, g, config);

})();
