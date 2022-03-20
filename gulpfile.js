const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const log = require('fancy-log');

function fileInclude(callback) {
  log('=> fileInclude');
  gulp.src(['./src/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./predist'));
  callback();
};

function htmlMin(callback) {
  log('=> htmlMin');
  gulp.src(['./predist/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist/'));
  callback();
};

function putImg(callback) {
  log('=> putImg');
  gulp.src('./src/img/**/*.*')
  .pipe(gulp.dest('dist/img'));
  callback();
};

function all(callback) {
  (gulp.series('fileInclude','htmlMin', 'putImg')());
  (gulp.series('fileInclude','htmlMin', 'putImg')());
  callback();// takes in a callback so the engine knows when it'll be done

  // gulp.task('fileInclude');
  
  // // identifies a dependent task must be complete before this one begins
  // gulp.task('htmlMin', gulp.series('fileInclude', function() {
  // }));
  
  // gulp.task('putImg', gulp.series('fileInclude','htmlMin'));
};

exports.fileInclude = fileInclude;
exports.htmlMin = htmlMin;
exports.putImg = putImg;
exports.all = all;
