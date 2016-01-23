var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('styles', function() {
  return gulp.src(['src/stylesheets/main.css'])
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(gulp.dest('stylesheets'));
});

gulp.task('scripts', function() {
  return gulp.src([
      'src/javascripts/first.js',
      'src/javascripts/second.js'])
    // .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('javascripts'));
});

gulp.task('build', ['styles', 'scripts']); // ÐºÐ
