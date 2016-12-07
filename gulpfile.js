var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
   gulp.src('./progekt/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./progekt'));
});

gulp.task('sass:watch', function(){
    gulp.watch('./progekt/**/*.scss', ['sass']);

});