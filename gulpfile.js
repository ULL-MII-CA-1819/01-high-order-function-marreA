
let gulp = require('gulp');
let shell = require('gulp-shell');
const mocha = require('gulp-mocha');
uglify = require('gulp-uglify'),
concat = require('gulp-concat');
let minifyHTML = require('gulp-minify-html');


gulp.task("default", ["test"]);
gulp.task("test", () =>
        gulp.src('./docs/test/testNode.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
);
// gulp.task("test", shell.task("mocha"));

gulp.task('docs', shell.task("asciidoctor docs/resumen.adoc -o docs/index.html"));

gulp.task("pre-install", shell.task([
    "sudo gem install asciidoctor"
    ]));

gulp.task('minify', function () {


    gulp.src('./docs/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))
});

gulp.task('clean', function(cb) {
    del(['minified/*'], cb);
});
