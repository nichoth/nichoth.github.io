var gulp = require('gulp');
var rename = require('gulp-rename');
var fs = require('fs');
var through = require('through2');
var hyperstream = require('hyperstream');

gulp.task('template', function() {
  gulp.src('src/pages/*.html')
    .pipe(through.obj(function(file, _, next) {

      var hs = hyperstream({
        '#content': {
          _prependHtml: file.contents
        }
      });

      file.contents = fs.createReadStream(__dirname+'/src/index.html')
        .pipe(hs)
      ;
      next(null, file);
    }))
    .pipe(rename((path) => {
      path.dirname = path.basename;
      path.basename = 'index'
    }))
    .pipe(gulp.dest('build'))
  ;
});
