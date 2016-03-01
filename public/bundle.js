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
    var dist = '45px';
    return Velocity(el, {translateY: dist, translateX: dist}, {
        duration: 500,
        // easing: 'linear'
      })
      .then(() => Velocity(el, { opacity: 0 }, 100))
      .then(() => Velocity(el, {
          translateY: '0px',
          translateX: '0px',
          opacity: '0.6'
        },
        {
          duration: 0,
          complete: next
        }
      ))
    ;
  }

  var time = 0;
  copies.forEach(function(c, i) {
    setTimeout(function (c) {
      animateEl(c);
    }, time+=70, c)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9hZnRlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG52YXIgY2F0Y2hMaW5rcyA9IHJlcXVpcmUoJ2NhdGNoLWxpbmtzJyk7XG52YXIgc2luZ2xlUGFnZSA9IHJlcXVpcmUoJ3NpbmdsZS1wYWdlJyk7XG52YXIgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXMnKTtcbnZhciBwYWdlVG1wbCA9IHJlcXVpcmUoJy4vdmlld3MvcGFnZS5oYnMnKTtcblxudmFyIHNob3cgPSBzaW5nbGVQYWdlKGZ1bmN0aW9uKGhyZWYpIHtcbiAgdmFyIG0gPSByb3V0ZXIubWF0Y2goaHJlZik7XG4gIG0uZm4oZnVuY3Rpb24gdXBkYXRlRG9tKHBhZ2UpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9IHBhZ2VUbXBsKHtcbiAgICAgIGltZ1VybDogcGFnZSA/ICcvaW1nLycrcGFnZSsnLnBuZycgOiAnL2ltZy9yb290LnBuZycsXG4gICAgICBwYWdlczogT2JqZWN0LmtleXMocmVxdWlyZSgnLi9lbmRwb2ludHMnKSkubWFwKChrKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogayxcbiAgICAgICAgICBhY3RpdmVDbGFzczogcGFnZSA9PT0gayA/ICdhY3RpdmUnIDogJycsXG4gICAgICAgICAgaHJlZjogJy8nK2tcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmNhdGNoTGlua3MoZG9jdW1lbnQuYm9keSwgc2hvdyk7XG4qL1xuXG5cbnZhciBhZnRlciA9IHJlcXVpcmUoJ2FmdGVyJyk7XG52YXIgY29waWVzID0gQXJyYXkuZnJvbSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24tY29weScpICk7XG5cbi8qXG5mdW5jdGlvbiBhbmltYXRlSWNvbigpIHtcbiAgdmFyIHRzID0gWyctMjAnLCAnLTQwJywgJy02MCddO1xuICB2YXIgaXRlciA9IDA7XG5cbiAgZnVuY3Rpb24gcG9zaXRpb24oaSwgaXRlcikge1xuICAgIHZhciBqID0gaXRlciAtIGk7XG4gICAgdmFyIHBvcyA9IGogPj0gMCAmJiBqIDw9IDIgPyB0c1tqXSA6ICcwJztcbiAgICByZXR1cm4gcG9zO1xuICB9XG5cbiAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvcGllcy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICB2YXIgcG9zID0gcG9zaXRpb24oaSwgaXRlcik7XG4gICAgICBjLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCcrcG9zKycpJyk7XG4gICAgfSk7XG4gICAgaXRlcisrO1xuICAgIGlmIChpdGVyID49IGNvcGllcy5sZW5ndGgqMikgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIDIwMCk7XG59XG4qL1xuXG5mdW5jdGlvbiB2QW5pbWF0ZShkb25lKSB7XG4gIHZhciBuZXh0ID0gYWZ0ZXIoY29waWVzLmxlbmd0aCwgZG9uZSk7XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZUVsKGVsKSB7XG4gICAgdmFyIGRpc3QgPSAnNDVweCc7XG4gICAgcmV0dXJuIFZlbG9jaXR5KGVsLCB7dHJhbnNsYXRlWTogZGlzdCwgdHJhbnNsYXRlWDogZGlzdH0sIHtcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgLy8gZWFzaW5nOiAnbGluZWFyJ1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IFZlbG9jaXR5KGVsLCB7IG9wYWNpdHk6IDAgfSwgMTAwKSlcbiAgICAgIC50aGVuKCgpID0+IFZlbG9jaXR5KGVsLCB7XG4gICAgICAgICAgdHJhbnNsYXRlWTogJzBweCcsXG4gICAgICAgICAgdHJhbnNsYXRlWDogJzBweCcsXG4gICAgICAgICAgb3BhY2l0eTogJzAuNidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgIGNvbXBsZXRlOiBuZXh0XG4gICAgICAgIH1cbiAgICAgICkpXG4gICAgO1xuICB9XG5cbiAgdmFyIHRpbWUgPSAwO1xuICBjb3BpZXMuZm9yRWFjaChmdW5jdGlvbihjLCBpKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoYykge1xuICAgICAgYW5pbWF0ZUVsKGMpO1xuICAgIH0sIHRpbWUrPTcwLCBjKVxuICB9KTtcbn1cblxudmFyIGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgdkFuaW1hdGUoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkb25lJywgZS5ocmVmKTtcbiAgfSk7XG59KTtcblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFmdGVyXG5cbmZ1bmN0aW9uIGFmdGVyKGNvdW50LCBjYWxsYmFjaywgZXJyX2NiKSB7XG4gICAgdmFyIGJhaWwgPSBmYWxzZVxuICAgIGVycl9jYiA9IGVycl9jYiB8fCBub29wXG4gICAgcHJveHkuY291bnQgPSBjb3VudFxuXG4gICAgcmV0dXJuIChjb3VudCA9PT0gMCkgPyBjYWxsYmFjaygpIDogcHJveHlcblxuICAgIGZ1bmN0aW9uIHByb3h5KGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChwcm94eS5jb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FmdGVyIGNhbGxlZCB0b28gbWFueSB0aW1lcycpXG4gICAgICAgIH1cbiAgICAgICAgLS1wcm94eS5jb3VudFxuXG4gICAgICAgIC8vIGFmdGVyIGZpcnN0IGVycm9yLCByZXN0IGFyZSBwYXNzZWQgdG8gZXJyX2NiXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGJhaWwgPSB0cnVlXG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpXG4gICAgICAgICAgICAvLyBmdXR1cmUgZXJyb3IgY2FsbGJhY2tzIHdpbGwgZ28gdG8gZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBlcnJfY2JcbiAgICAgICAgfSBlbHNlIGlmIChwcm94eS5jb3VudCA9PT0gMCAmJiAhYmFpbCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge31cbiJdfQ==
