require("babel-core/register");

import babelify from 'babelify';
import browserify from 'browserify';
import gulp from 'gulp';
import gutil from 'gulp-util';
import less from 'gulp-less';
import minify from 'gulp-minify';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import nodemon from 'gulp-nodemon';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-istanbul';
import isparta from 'isparta';
import runSequence from 'run-sequence';
import source from 'vinyl-source-stream';

(() => {
    'use strict';

    // Source files
    let SRC = 'src/*.js';
    // Test files
    let TESTS = 'tests/*.js';

    /*
     * Instrument files using istanbul and isparta
     */
    gulp.task('coverage:instrument', function() {
        return gulp.src(SRC)
            .pipe(istanbul({
                instrumenter: isparta // Use the isparta instrumenter (code coverage for ES6)
                // Istanbul configuration (see https://github.com/SBoudrias/gulp-istanbul#istanbulopt)
                // ...
            }))
            .pipe(istanbul.hookRequire()); // Force `require` to return covered files
    });

    /*
     * Write coverage reports after test success
     */
    gulp.task('coverage:report', function(done) {
        return gulp.src(SRC, {read: false})
        .pipe(istanbul.writeReports({
            // Istanbul configuration (see https://github.com/SBoudrias/gulp-istanbul#istanbulwritereportsopt)
            // ...
        }));
    });

    /**
     * Run unit tests
     */
    gulp.task('test', function() {
        return gulp.src(TESTS, {read: false})
            .pipe(mocha({
                require: [__dirname + '/scripts/test.jsdom'] // Prepare environement for React/JSX testing
            }));
    });

    /**
     * Run unit tests with code coverage
     */
    gulp.task('test:coverage', function(done) {
        runSequence('coverage:instrument', 'test', 'coverage:report', done);
    });

    /**
     * Watch files and run unit tests on changes
     */
    gulp.task('tdd', function(done) {
        gulp.watch([
            TESTS,
            SRC
        ], ['test']).on('error', gutil.log);
    });

    /**
     * Build style.
     */
    gulp.task("style", function(){
        gulp.src('./node_modules/bootstrap/dist/fonts/*.*')
            .pipe(gulp.dest('./demo/fonts/'));
        return gulp.src('less/grot.less')
            .pipe(less())
            .pipe(gulp.dest('demo/style'));
    });

    /**
     * Run Development mode.
     */
    gulp.task("devel", ['demo'], function(){
        nodemon({
            script: 'dist/',
            watch: 'src'
        }).on('restart', function(){
            console.log('restarted!');
        });
    });

    gulp.task("demo", ["style"], function () {
        return browserify( {
                            extensions: [".jsx", ".js", ".json"]
                        }).add(
                                'scripts/buildDemo.js'
                        ).transform(
                            babelify, { presets: ["stage-0","es2015", "react"] }
                        )
                        .bundle()
                        .pipe(source('bundle.js'))
                        .pipe(gulp.dest('./demo/dist/'));
    });

    gulp.task("dist", function(){
        return gulp.src('src/*.js')
            .pipe(babel({ presets: ["stage-0","es2015", "react"] }))
            // .pipe(concat('grot.js'))
            // .pipe(minify())
            .pipe(gulp.dest('dist/'));
    });
})();
