var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('compress', function() {
  return gulp.src("dist/MyFirstApp/**").pipe(zip("MyFirstApp.zip"))
    .pipe(gulp.dest('./nexus/nexus-repo'));
});
