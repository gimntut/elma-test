'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();


gulp.task('template', function () {
    return gulp.src(['./app/**/*.pug', '!./app/shared/**/*.pug'])
        .pipe(changed('./public'))
        .pipe(pug({
            pretty: true
        }))
        .on('error', notify.onError())
        .pipe(gulp.dest('./public'))
});

gulp.task('styles', function () {
    return gulp.src(['./app/styles/*.scss', './app/**/*.scss'])
        .pipe(changed('./public/css'))
        .pipe(sass())
        .on('error', notify.onError())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./public/css'))
});

gulp.task('scripts', function () {
    return gulp.src(['./app/**/*.js'])
        .pipe(changed('./public'))
        .on('error', notify.onError())
        .pipe(gulp.dest('./public'))
});

gulp.task('assets', function () {
    return gulp.src(['./app/assets/**/*.*'])
        .pipe(changed('./public/css'))
        .on('error', notify.onError())
        .pipe(gulp.dest('./public/assets'))
});


gulp.task('build', ['template', 'styles', 'scripts', 'assets']);

gulp.task('watch', function () {
    gulp.watch('./app/**/*.pug', ['template']);
    gulp.watch('./app/**/*.scss', ['styles']);
    gulp.watch('./app/**/*.js', ['scripts']);
    gulp.watch('./app/assets/**/*.*', ['assets']);
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./public",
            routes: {
              '/bower_components': 'bower_components'
          },
        }
    });

    gulp.watch('./public/**/*.*').on('change', browserSync.reload)
});

gulp.task('default', ['build', 'watch', 'server']);