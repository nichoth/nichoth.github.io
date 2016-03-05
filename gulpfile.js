var gulp = require('gulp');
var rename = require('gulp-rename');
var fs = require('fs');
var through = require('through2');
var hyperstream = require('hyperstream');

function gulpHyperstream(path, mapper) {
  return through.obj(function(file, _, next) {
    var hs = hyperstream(mapper(file.contents));

    var stream = fs.createReadStream(path)
      .pipe(hs)
    ;
    file.contents = stream.pipe(through.obj((html, _, next) => {
      next(null, html);
    }));
    next(null, file);
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
    .pipe(gulp.dest('public'))
  ;
});
