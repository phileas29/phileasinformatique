const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const sync = require("browser-sync").create();

function generateHTML(callback) {
  gulp.src(['./src/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist/'));
  callback();
};

function importImages(callback) {
  gulp.src('./src/img/**/*.*')
  .pipe(gulp.dest('dist/img'));
  callback();
};

function watchFiles(cb) {
  gulp.watch('./src/**/*.html', generateHTML);
  gulp.watch('./src/img/*.*', importImages);
  cb();
}

function browserSync(cb) {
  sync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('./src/**/*.html', generateHTML);
  gulp.watch('./src/img/*.*', importImages);
  gulp.watch("./dist/**/*.html").on('change', sync.reload);
  cb();
}

exports.html = generateHTML;
exports.img = importImages;
exports.sync = browserSync;
exports.default = browserSync;
