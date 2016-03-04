var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('concat-stream');
var fs = require('fs');
var through = require('through2');
var hyperstream = require('hyperstream');

function gulpHyperstream(path, mapper) {
  return through.obj(function(file, _, next) {
    var hs = hyperstream(mapper(file.contents));

    fs.createReadStream(path)
      .pipe(hs)
      .pipe(concat(function gotHtml(html) {
        file.contents = html;
        next(null, file);
      }))
    ;
  });

}

gulp.task('template', function() {
  gulp.src('src/content/*.html')
    .pipe(gulpHyperstream(__dirname+'/src/layouts/index.html', (html) => {
      return {
        '#content': {
          _prependHtml: html
        }
      };
    }))
    .pipe(rename((path) => {
      if (path.basename === 'index') return;
      path.dirname = path.basename;
      path.basename = 'index'
    }))
    .pipe(gulp.dest('build'))
  ;
});
