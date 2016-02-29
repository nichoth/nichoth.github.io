(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
var catchLinks = require('catch-links');
var singlePage = require('single-page');
var router = require('./routes');
var pageTmpl = require('./views/page.hbs');

var show = singlePage(function(href) {
  var m = router.match(href);
  m.fn(function updateDom(page) {
    document.querySelector('#content').innerHTML = pageTmpl({
      imgUrl: page ? '/img/'+page+'.png' : '/img/root.png',
      pages: Object.keys(require('./endpoints')).map((k) => {
        return {
          name: k,
          activeClass: page === k ? 'active' : '',
          href: '/'+k
        };
      })
    });
  });
});

catchLinks(document.body, show);
*/

// require('./animate.js');

var after = require('after');
var copies = Array.from( document.querySelectorAll('.icon-copy') );

/*
function animateIcon() {
  var ts = ['-20', '-40', '-60'];
  var iter = 0;

  function position(i, iter) {
    var j = iter - i;
    var pos = j >= 0 && j <= 2 ? ts[j] : '0';
    return pos;
  }

  var interval = setInterval(() => {
    copies.forEach((c, i) => {
      var pos = position(i, iter);
      c.setAttribute('transform', 'translate(0,'+pos+')');
    });
    iter++;
    if (iter >= copies.length*2) clearInterval(interval);
  }, 200);
}
*/

function vAnimate(done) {
  var next = after(copies.length, done);

  function animateEl(el) {
    return Velocity(el, {translateY: '-50px'}, {
        duration: 500,
        easing: 'linear'
      })
      .then(() => Velocity(el, {translateY: '0px'}, {
        duration: 0,
        complete: function() { next(); }
      }))
    ;
  }

  var time = 0;
  copies.forEach(function(c, i) {
    setTimeout(function (c) {
      animateEl(c);
    }, time+=100, c)
  });
}

var e = document.getElementById('email');
e.addEventListener('click', (ev) => {
  vAnimate(() => {
    console.log('done', e.href);
  });
});



},{"after":2}],2:[function(require,module,exports){
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9hZnRlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxudmFyIGNhdGNoTGlua3MgPSByZXF1aXJlKCdjYXRjaC1saW5rcycpO1xudmFyIHNpbmdsZVBhZ2UgPSByZXF1aXJlKCdzaW5nbGUtcGFnZScpO1xudmFyIHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVzJyk7XG52YXIgcGFnZVRtcGwgPSByZXF1aXJlKCcuL3ZpZXdzL3BhZ2UuaGJzJyk7XG5cbnZhciBzaG93ID0gc2luZ2xlUGFnZShmdW5jdGlvbihocmVmKSB7XG4gIHZhciBtID0gcm91dGVyLm1hdGNoKGhyZWYpO1xuICBtLmZuKGZ1bmN0aW9uIHVwZGF0ZURvbShwYWdlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5pbm5lckhUTUwgPSBwYWdlVG1wbCh7XG4gICAgICBpbWdVcmw6IHBhZ2UgPyAnL2ltZy8nK3BhZ2UrJy5wbmcnIDogJy9pbWcvcm9vdC5wbmcnLFxuICAgICAgcGFnZXM6IE9iamVjdC5rZXlzKHJlcXVpcmUoJy4vZW5kcG9pbnRzJykpLm1hcCgoaykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IGssXG4gICAgICAgICAgYWN0aXZlQ2xhc3M6IHBhZ2UgPT09IGsgPyAnYWN0aXZlJyA6ICcnLFxuICAgICAgICAgIGhyZWY6ICcvJytrXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5jYXRjaExpbmtzKGRvY3VtZW50LmJvZHksIHNob3cpO1xuKi9cblxuLy8gcmVxdWlyZSgnLi9hbmltYXRlLmpzJyk7XG5cbnZhciBhZnRlciA9IHJlcXVpcmUoJ2FmdGVyJyk7XG52YXIgY29waWVzID0gQXJyYXkuZnJvbSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24tY29weScpICk7XG5cbi8qXG5mdW5jdGlvbiBhbmltYXRlSWNvbigpIHtcbiAgdmFyIHRzID0gWyctMjAnLCAnLTQwJywgJy02MCddO1xuICB2YXIgaXRlciA9IDA7XG5cbiAgZnVuY3Rpb24gcG9zaXRpb24oaSwgaXRlcikge1xuICAgIHZhciBqID0gaXRlciAtIGk7XG4gICAgdmFyIHBvcyA9IGogPj0gMCAmJiBqIDw9IDIgPyB0c1tqXSA6ICcwJztcbiAgICByZXR1cm4gcG9zO1xuICB9XG5cbiAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvcGllcy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICB2YXIgcG9zID0gcG9zaXRpb24oaSwgaXRlcik7XG4gICAgICBjLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCcrcG9zKycpJyk7XG4gICAgfSk7XG4gICAgaXRlcisrO1xuICAgIGlmIChpdGVyID49IGNvcGllcy5sZW5ndGgqMikgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIDIwMCk7XG59XG4qL1xuXG5mdW5jdGlvbiB2QW5pbWF0ZShkb25lKSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIoY29waWVzLmxlbmd0aCwgZG9uZSk7XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZUVsKGVsKSB7XG4gICAgcmV0dXJuIFZlbG9jaXR5KGVsLCB7dHJhbnNsYXRlWTogJy01MHB4J30sIHtcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgZWFzaW5nOiAnbGluZWFyJ1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IFZlbG9jaXR5KGVsLCB7dHJhbnNsYXRlWTogJzBweCd9LCB7XG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7IG5leHQoKTsgfVxuICAgICAgfSkpXG4gICAgO1xuICB9XG5cbiAgdmFyIHRpbWUgPSAwO1xuICBjb3BpZXMuZm9yRWFjaChmdW5jdGlvbihjLCBpKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoYykge1xuICAgICAgYW5pbWF0ZUVsKGMpO1xuICAgIH0sIHRpbWUrPTEwMCwgYylcbiAgfSk7XG59XG5cbnZhciBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7XG5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gIHZBbmltYXRlKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZG9uZScsIGUuaHJlZik7XG4gIH0pO1xufSk7XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBhZnRlclxuXG5mdW5jdGlvbiBhZnRlcihjb3VudCwgY2FsbGJhY2ssIGVycl9jYikge1xuICAgIHZhciBiYWlsID0gZmFsc2VcbiAgICBlcnJfY2IgPSBlcnJfY2IgfHwgbm9vcFxuICAgIHByb3h5LmNvdW50ID0gY291bnRcblxuICAgIHJldHVybiAoY291bnQgPT09IDApID8gY2FsbGJhY2soKSA6IHByb3h5XG5cbiAgICBmdW5jdGlvbiBwcm94eShlcnIsIHJlc3VsdCkge1xuICAgICAgICBpZiAocHJveHkuY291bnQgPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZnRlciBjYWxsZWQgdG9vIG1hbnkgdGltZXMnKVxuICAgICAgICB9XG4gICAgICAgIC0tcHJveHkuY291bnRcblxuICAgICAgICAvLyBhZnRlciBmaXJzdCBlcnJvciwgcmVzdCBhcmUgcGFzc2VkIHRvIGVycl9jYlxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBiYWlsID0gdHJ1ZVxuICAgICAgICAgICAgY2FsbGJhY2soZXJyKVxuICAgICAgICAgICAgLy8gZnV0dXJlIGVycm9yIGNhbGxiYWNrcyB3aWxsIGdvIHRvIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZXJyX2NiXG4gICAgICAgIH0gZWxzZSBpZiAocHJveHkuY291bnQgPT09IDAgJiYgIWJhaWwpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4iXX0=
