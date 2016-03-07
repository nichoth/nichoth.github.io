var gulp = require('gulp');
var combine = require('stream-combiner');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');
var after = require('after');
var xtend = require('xtend');
var from = require('from2');
var Vinyl = require('vinyl');
var merge = require('merge-stream');
var concat = require('concat-stream');
var rename = require('gulp-rename');
var fs = require('fs');
var through = require('through2');
var hyperstream = require('hyperstream');
var rs = fs.createReadStream;

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

gulp.task('template', function(done) {
  var next = after(2, done);

  var index = gulp.src('src/content/*.html')
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
      path.basename = 'index';
    }))
    .pipe(gulp.dest('public'))
  ;

  index.on('finish', next);

  var portfolio = gulp.src('src/content/portfolio/*.json')
    .pipe(gulpHyperstream(
      __dirname+'/src/layouts/portfolio-item.html',
      (data) => {
        var d = JSON.parse(data.toString());
        return {
          'li>span.title': d.title,
          'li span.description': d.description
        };
      })
    )
    .pipe(gulpAggregate('portfolio/index.html', (stream) => {
      stream.pipe(gulpHyperstream(
        __dirname+'/src/layouts/portfolio.html', (html) => {
          return {
            ul: html
          };
        })
      )
      .pipe(gulpHyperstream(
        __dirname+'/src/layouts/index.html',
        function mapper(html) {
          return {
            '#content': html
          };
        }
      ))
      .pipe(gulp.dest('public'));

      stream.on('finish', next);
    }))
  ;

});

// buffer all the src files, then call cb with a stream of all the source
// files merged together
function gulpAggregate(filename, cb) {
  return concat(function onEnd(data) {
    var v = source(filename);
    var merged = merge();
    data.forEach((d) => merged.add(d.contents));
    merged.pipe(v);
    cb(v);
  });
}


gulp.task('watch', function() {
  return gulp.watch(['src/content/**/*', 'src/layouts/**/*'], ['template']);
});
