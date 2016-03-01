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
  ev.preventDefault();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9hZnRlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbnZhciBjYXRjaExpbmtzID0gcmVxdWlyZSgnY2F0Y2gtbGlua3MnKTtcbnZhciBzaW5nbGVQYWdlID0gcmVxdWlyZSgnc2luZ2xlLXBhZ2UnKTtcbnZhciByb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcycpO1xudmFyIHBhZ2VUbXBsID0gcmVxdWlyZSgnLi92aWV3cy9wYWdlLmhicycpO1xuXG52YXIgc2hvdyA9IHNpbmdsZVBhZ2UoZnVuY3Rpb24oaHJlZikge1xuICB2YXIgbSA9IHJvdXRlci5tYXRjaChocmVmKTtcbiAgbS5mbihmdW5jdGlvbiB1cGRhdGVEb20ocGFnZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuaW5uZXJIVE1MID0gcGFnZVRtcGwoe1xuICAgICAgaW1nVXJsOiBwYWdlID8gJy9pbWcvJytwYWdlKycucG5nJyA6ICcvaW1nL3Jvb3QucG5nJyxcbiAgICAgIHBhZ2VzOiBPYmplY3Qua2V5cyhyZXF1aXJlKCcuL2VuZHBvaW50cycpKS5tYXAoKGspID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiBrLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiBwYWdlID09PSBrID8gJ2FjdGl2ZScgOiAnJyxcbiAgICAgICAgICBocmVmOiAnLycra1xuICAgICAgICB9O1xuICAgICAgfSlcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuY2F0Y2hMaW5rcyhkb2N1bWVudC5ib2R5LCBzaG93KTtcbiovXG5cblxudmFyIGFmdGVyID0gcmVxdWlyZSgnYWZ0ZXInKTtcbnZhciBjb3BpZXMgPSBBcnJheS5mcm9tKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbi1jb3B5JykgKTtcblxuLypcbmZ1bmN0aW9uIGFuaW1hdGVJY29uKCkge1xuICB2YXIgdHMgPSBbJy0yMCcsICctNDAnLCAnLTYwJ107XG4gIHZhciBpdGVyID0gMDtcblxuICBmdW5jdGlvbiBwb3NpdGlvbihpLCBpdGVyKSB7XG4gICAgdmFyIGogPSBpdGVyIC0gaTtcbiAgICB2YXIgcG9zID0gaiA+PSAwICYmIGogPD0gMiA/IHRzW2pdIDogJzAnO1xuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29waWVzLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgIHZhciBwb3MgPSBwb3NpdGlvbihpLCBpdGVyKTtcbiAgICAgIGMuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsJytwb3MrJyknKTtcbiAgICB9KTtcbiAgICBpdGVyKys7XG4gICAgaWYgKGl0ZXIgPj0gY29waWVzLmxlbmd0aCoyKSBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgMjAwKTtcbn1cbiovXG5cbmZ1bmN0aW9uIHZBbmltYXRlKGRvbmUpIHtcbiAgdmFyIG5leHQgPSBhZnRlcihjb3BpZXMubGVuZ3RoLCBkb25lKTtcblxuICBmdW5jdGlvbiBhbmltYXRlRWwoZWwpIHtcbiAgICB2YXIgZGlzdCA9ICc0NXB4JztcbiAgICByZXR1cm4gVmVsb2NpdHkoZWwsIHt0cmFuc2xhdGVZOiBkaXN0LCB0cmFuc2xhdGVYOiBkaXN0fSwge1xuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAvLyBlYXNpbmc6ICdsaW5lYXInXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gVmVsb2NpdHkoZWwsIHsgb3BhY2l0eTogMCB9LCAxMDApKVxuICAgICAgLnRoZW4oKCkgPT4gVmVsb2NpdHkoZWwsIHtcbiAgICAgICAgICB0cmFuc2xhdGVZOiAnMHB4JyxcbiAgICAgICAgICB0cmFuc2xhdGVYOiAnMHB4JyxcbiAgICAgICAgICBvcGFjaXR5OiAnMC42J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgY29tcGxldGU6IG5leHRcbiAgICAgICAgfVxuICAgICAgKSlcbiAgICA7XG4gIH1cblxuICB2YXIgdGltZSA9IDA7XG4gIGNvcGllcy5mb3JFYWNoKGZ1bmN0aW9uKGMsIGkpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChjKSB7XG4gICAgICBhbmltYXRlRWwoYyk7XG4gICAgfSwgdGltZSs9NzAsIGMpXG4gIH0pO1xufVxuXG52YXIgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICB2QW5pbWF0ZSgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RvbmUnLCBlLmhyZWYpO1xuICB9KTtcbn0pO1xuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gYWZ0ZXJcblxuZnVuY3Rpb24gYWZ0ZXIoY291bnQsIGNhbGxiYWNrLCBlcnJfY2IpIHtcbiAgICB2YXIgYmFpbCA9IGZhbHNlXG4gICAgZXJyX2NiID0gZXJyX2NiIHx8IG5vb3BcbiAgICBwcm94eS5jb3VudCA9IGNvdW50XG5cbiAgICByZXR1cm4gKGNvdW50ID09PSAwKSA/IGNhbGxiYWNrKCkgOiBwcm94eVxuXG4gICAgZnVuY3Rpb24gcHJveHkoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgaWYgKHByb3h5LmNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYWZ0ZXIgY2FsbGVkIHRvbyBtYW55IHRpbWVzJylcbiAgICAgICAgfVxuICAgICAgICAtLXByb3h5LmNvdW50XG5cbiAgICAgICAgLy8gYWZ0ZXIgZmlyc3QgZXJyb3IsIHJlc3QgYXJlIHBhc3NlZCB0byBlcnJfY2JcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgYmFpbCA9IHRydWVcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycilcbiAgICAgICAgICAgIC8vIGZ1dHVyZSBlcnJvciBjYWxsYmFja3Mgd2lsbCBnbyB0byBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGVycl9jYlxuICAgICAgICB9IGVsc2UgaWYgKHByb3h5LmNvdW50ID09PSAwICYmICFiYWlsKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuIl19
