var gulp = require('gulp');

var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');

gulp.task('default', function() {
    return gulp.src('views/*.hjs')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

gulp.task('copydata', function() {
   gulp.src('public/data/*.*')
   .pipe(gulp.dest('dist/data/'));
});
gulp.task('copygfx', function() {
   gulp.src('public/gfx/*.*')
   .pipe(gulp.dest('dist/gfx/'));
});
gulp.task('copyviews', function() {
   gulp.src('public/views/*.*')
   .pipe(gulp.dest('dist/views/'));
});


