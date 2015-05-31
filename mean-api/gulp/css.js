var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('css', function() {
   gulp.src('css/**/*.styl')
       .pipe(stylus())
       .pipe(gulp.dest('static'));
});

gulp.task ('watch:css', ['css'], function() {
    gulp.watch('css/**/*.js', ['css']);
});