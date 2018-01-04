
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat-util');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var cssnano = require('gulp-cssnano');
var strict = require('babel-plugin-transform-remove-strict-mode');
var env = require('babel-preset-env');

var readyWrap = '$(function(){\n';

gulp.task('jsbundle', function() {
    gulp.src('src/js/{,*/}*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets:[env],
            plugins:[strict],
        }))
        .pipe(concat('js.bundle.js'))
        .pipe(concat.header(
            readyWrap
            ))
        .pipe(concat.footer('\n});'))
        //.pipe(gulpif('*.js', uglify()))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js'))
});

gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
          .pipe(sourcemaps.init())
          .pipe(sass({
            outputStyle:'expanded',
            sourceComments: 'map'
          }))
          //.pipe(gulpif('*.css', cssnano()))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest('./build/css'))
          .pipe(browserSync.reload({
            stream: true
          }));
 });

gulp.task('reloadBrowser', function (done) {
   browserSync.reload();
   done();
});

 gulp.task('browserSync', function(){
   browserSync.init({
     server: {
       baseDir: "./build"
     },
     browser: "default"
   });
 });

gulp.task('watch',['browserSync','sass','jsbundle'], function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/*.js',['jsbundle']);
  gulp.watch('build/js/*.js', ['reloadBrowser']);
  gulp.watch('build/*.html',['reloadBrowser']);
});
