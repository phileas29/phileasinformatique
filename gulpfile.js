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

function importAssets(callback) {
  gulp.src('./src/assets/**/*.*')
  .pipe(gulp.dest('dist/assets/'));
  callback();
};

function watchFiles(cb) {
  gulp.watch('./src/**/*.html', generateHTML);
  gulp.watch('./src/assets/*.*', importImages);
  cb();
}

function browserSync(cb) {
  sync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('./src/**/*.html', generateHTML);
  gulp.watch('./src/assets/*.*', importAssets);
  gulp.watch("./dist/**/*.html").on('change', sync.reload);
  cb();
}

exports.html = generateHTML;
exports.asset = importAssets;
exports.sync = browserSync;
exports.default = browserSync;
