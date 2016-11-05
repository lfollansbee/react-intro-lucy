/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('build', ['lint'], () =>
// start the sourc folder, look at everything in that folder,
// and look at it recursively and look for any sort of JS file ->
  gulp.src(['src/**/*.js'])
  .pipe(babel())
  .pipe(gulp.dest('lib'))
);

gulp.task('lint', () => {
  gulp.src([
    'src/**/*.js',
    'src/**/*.jsx',
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});
