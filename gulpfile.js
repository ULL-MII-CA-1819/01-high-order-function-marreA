
let gulp = require('gulp');
let shell = require('gulp-shell');


gulp.task("default", []); 

gulp.task('docs', shell.task("asciidoctor docs/resumen.adoc -o docs/index.html"));

gulp.task("pre-install", shell.task([
    "sudo gem install asciidoctor"
    ]));