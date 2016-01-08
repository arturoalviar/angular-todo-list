'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');


gulp.task('stylus', function(){
  gulp.src('./stylus/main.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./css'));
});


gulp.task('build', ['stylus']);

gulp.task('default', ['build']);
