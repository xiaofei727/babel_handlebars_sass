var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');

gulp.task('default', function () {
    return browserify({entries: './js/app.es6.js', debug: false})
        .transform("babelify", { presets: ["@babel/preset-env"] })
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./js'));
});
