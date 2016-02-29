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

function translateIcon(i, val) {
  i.setAttribute('transform', 'translate(0,'+val+')');
}

var copies = Array.from( document.querySelectorAll('.icon-copy') );
var ts = ['-20', '-40', '-60'];

function animateIcon() {
  var iter = 0;

  function position(i, iter) {
    var j = iter - i;
    var pos = j >= 0 && j <= 2 ? ts[j] : '0';
    return pos;
  }

  var interval = setInterval(() => {
    copies.forEach((c, i) => {
      var pos = position(i, iter);
      console.log('element#', i, 'position:', pos);
      c.setAttribute('transform', 'translate(0,'+pos+')');
    });
    iter++;
    if (iter >= copies.length*2) clearInterval(interval);
  }, 200);
}

var e = document.getElementById('email');
e.addEventListener('click', (ev) => {
  ev.preventDefault();
  // ev.target.setAttribute('class', 'depressed');
  animateIcon();
  console.log('ham');
});



},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG52YXIgY2F0Y2hMaW5rcyA9IHJlcXVpcmUoJ2NhdGNoLWxpbmtzJyk7XG52YXIgc2luZ2xlUGFnZSA9IHJlcXVpcmUoJ3NpbmdsZS1wYWdlJyk7XG52YXIgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXMnKTtcbnZhciBwYWdlVG1wbCA9IHJlcXVpcmUoJy4vdmlld3MvcGFnZS5oYnMnKTtcblxudmFyIHNob3cgPSBzaW5nbGVQYWdlKGZ1bmN0aW9uKGhyZWYpIHtcbiAgdmFyIG0gPSByb3V0ZXIubWF0Y2goaHJlZik7XG4gIG0uZm4oZnVuY3Rpb24gdXBkYXRlRG9tKHBhZ2UpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9IHBhZ2VUbXBsKHtcbiAgICAgIGltZ1VybDogcGFnZSA/ICcvaW1nLycrcGFnZSsnLnBuZycgOiAnL2ltZy9yb290LnBuZycsXG4gICAgICBwYWdlczogT2JqZWN0LmtleXMocmVxdWlyZSgnLi9lbmRwb2ludHMnKSkubWFwKChrKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogayxcbiAgICAgICAgICBhY3RpdmVDbGFzczogcGFnZSA9PT0gayA/ICdhY3RpdmUnIDogJycsXG4gICAgICAgICAgaHJlZjogJy8nK2tcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmNhdGNoTGlua3MoZG9jdW1lbnQuYm9keSwgc2hvdyk7XG4qL1xuXG4vLyByZXF1aXJlKCcuL2FuaW1hdGUuanMnKTtcblxuZnVuY3Rpb24gdHJhbnNsYXRlSWNvbihpLCB2YWwpIHtcbiAgaS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwnK3ZhbCsnKScpO1xufVxuXG52YXIgY29waWVzID0gQXJyYXkuZnJvbSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24tY29weScpICk7XG52YXIgdHMgPSBbJy0yMCcsICctNDAnLCAnLTYwJ107XG5cbmZ1bmN0aW9uIGFuaW1hdGVJY29uKCkge1xuICB2YXIgaXRlciA9IDA7XG5cbiAgZnVuY3Rpb24gcG9zaXRpb24oaSwgaXRlcikge1xuICAgIHZhciBqID0gaXRlciAtIGk7XG4gICAgdmFyIHBvcyA9IGogPj0gMCAmJiBqIDw9IDIgPyB0c1tqXSA6ICcwJztcbiAgICByZXR1cm4gcG9zO1xuICB9XG5cbiAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvcGllcy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICB2YXIgcG9zID0gcG9zaXRpb24oaSwgaXRlcik7XG4gICAgICBjb25zb2xlLmxvZygnZWxlbWVudCMnLCBpLCAncG9zaXRpb246JywgcG9zKTtcbiAgICAgIGMuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsJytwb3MrJyknKTtcbiAgICB9KTtcbiAgICBpdGVyKys7XG4gICAgaWYgKGl0ZXIgPj0gY29waWVzLmxlbmd0aCoyKSBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgMjAwKTtcbn1cblxudmFyIGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgLy8gZXYudGFyZ2V0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVwcmVzc2VkJyk7XG4gIGFuaW1hdGVJY29uKCk7XG4gIGNvbnNvbGUubG9nKCdoYW0nKTtcbn0pO1xuXG5cbiJdfQ==
