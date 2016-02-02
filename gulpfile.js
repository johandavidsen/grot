var gulp        = require("gulp");
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var babelify    = require("babelify");

gulp.task("default", function () {
    return browserify( {
                        extensions: [".jsx", ".js", ".json"]
                    }).add(
                            'src/index.js'
                    ).transform(
                        babelify, { presets: ["stage-0","es2015", "react"] }
                    )
                    .bundle()
                    .pipe(source('bundle.js'))
                    .pipe(gulp.dest('./demo/dist/'));
});
