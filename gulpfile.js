const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const log = require('fancy-log');

function fileInclude(callback) {
  gulp.src(['./src/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./predist'));
  callback();
};

function htmlMin(callback) {
  gulp.src(['./predist/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist/'));
  callback();
};

function putImg(callback) {
  gulp.src('./src/img/**/*.*')
  .pipe(gulp.dest('dist/img'));
  callback();
};

function all(callback) {
  (gulp.series('fileInclude','htmlMin', 'putImg')());
  callback();
};

exports.fileInclude = fileInclude;
exports.htmlMin = htmlMin;
exports.putImg = putImg;
exports.all = all;
