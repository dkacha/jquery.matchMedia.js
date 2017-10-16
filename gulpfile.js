var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jslint = require('gulp-jslint');

var matchmediaPolyfillAddListener = 'node_modules/matchmedia-polyfill/matchMedia.addListener.js';
var matchmediaPolyfill = 'node_modules/matchmedia-polyfill/matchMedia.js';
var jsMainPath = 'src/jquery.matchMedia.js';

gulp.task('js', function () {
    gulp.src(jsMainPath)
        .pipe(jslint())
        .pipe(gulp.dest('dist/'));
});

gulp.task('js-min', function () {
    gulp.src(jsMainPath)
        .pipe(jslint())
        .pipe(uglify())
        .pipe(concat('jquery.matchMedia.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('js-polyfill', function () {
    gulp.src([matchmediaPolyfill, matchmediaPolyfillAddListener, jsMainPath])
        .pipe(jslint())
        .pipe(concat('jquery.matchMedia.polyfill.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('js-polyfill-min', function () {
    gulp.src([matchmediaPolyfill, matchmediaPolyfillAddListener, jsMainPath])
        .pipe(jslint())
        .pipe(uglify())
        .pipe(concat('jquery.matchMedia.polyfill.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('all', ['js', 'js-min', 'js-polyfill', 'js-polyfill-min']);

gulp.task('watch', function() {
    gulp.watch(jsMainPath, ['all']);
});