var gulp        = require("gulp");
var less        = require("gulp-less");
var minify      = require("gulp-minify");
var babel       = require("gulp-babel");
var concat      = require("gulp-concat");
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var babelify    = require("babelify");

gulp.task("style", function(){
    gulp.src('./node_modules/bootstrap/dist/fonts/*.*')
        .pipe(gulp.dest('./demo/fonts/'));
    return gulp.src('less/grot.less')
        .pipe(less())
        .pipe(gulp.dest('demo/style'));
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
        .pipe(concat('grot.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/'));
});
