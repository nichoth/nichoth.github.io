var gulp = require('gulp');
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
      path.basename = 'index'
    }))
    .pipe(gulp.dest('public'))
  ;

  var s = gulp.src('src/content/portfolio/*.json')
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
    .pipe(gulpAggregate((stream) => {
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
      .pipe(rename(function(path) {
        path.dirname = 'portfolio';
        path.basename = 'index';
        path.extname = '.html';
      }))
      .pipe(gulp.dest('public'));
    }));
});

function gulpAggregate(cb) {
  return concat(function onEnd(data) {
    var v = data[0].clone();
    var merged = merge();
    data.forEach((d) => merged.add(d.contents));
    v.contents = merged;
    var stream = through.obj((file, _, next) => next(null, file));
    cb(stream);
    stream.write(v);
  });
}
