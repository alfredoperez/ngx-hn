var config = require('./gulp.config')();
var replace = require('gulp-string-replace');
var gulp = require('gulp');
var runSequence = require('run-sequence');
const debug = require('gulp-debug');
var useref = require('gulp-useref');
var htmlbeautify = require('gulp-html-beautify');
var clean = require('gulp-clean');

gulp.task('performance', function (callback) {
  runSequence('fix-script-tags',
    'fix-link-tags',
    callback);
});

gulp.task('fix-script-tags', function () {
  gulp.src(config.index, {
    base: './dist'
  })
    .pipe(replace('></script>',
      'async ></script>'))
    .pipe(gulp.dest(config.dist));
});

gulp.task('fix-link-tags', function () {
  gulp.src(config.index, {
    base: './dist'
  })
    .pipe(replace('rel="stylesheet"',
      'preload rel="stylesheet" '))
    .pipe(gulp.dest(config.dist));
});
gulp.task('clean-scripts', function () {
  return gulp.src(config.jsFiles, {
    read: false
  })
    .pipe(clean());
});
gulp.task('insert-tags', function () {
  gulp.src(config.index, {
    base: './dist'
  })

    .pipe(replace('<script type="text/javascript" src="inline.',
      ' \r <!-- build:js bundle.js --> \r <script type="text/javascript" src="inline.'))

    .pipe(replace('</script></body>',
      ' \r </script> <!-- endbuild --> \r </body>'))

    .pipe(gulp.dest('./dist'));
});

gulp.task('bundle', function () {
  var assets = useref.assets();
  return gulp.src(config.index)
    .pipe(assets)
    .pipe(assets.restore())

    .pipe(useref())
    .pipe(gulp.dest(config.dist));
});
gulp.task('htmlbeautify', function () {

  gulp.src(config.index)
    .pipe(htmlbeautify({
      indentSize: 2
    }))
    .pipe(gulp.dest(config.dist))
});
