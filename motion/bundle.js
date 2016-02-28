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


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG52YXIgY2F0Y2hMaW5rcyA9IHJlcXVpcmUoJ2NhdGNoLWxpbmtzJyk7XG52YXIgc2luZ2xlUGFnZSA9IHJlcXVpcmUoJ3NpbmdsZS1wYWdlJyk7XG52YXIgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXMnKTtcbnZhciBwYWdlVG1wbCA9IHJlcXVpcmUoJy4vdmlld3MvcGFnZS5oYnMnKTtcblxudmFyIHNob3cgPSBzaW5nbGVQYWdlKGZ1bmN0aW9uKGhyZWYpIHtcbiAgdmFyIG0gPSByb3V0ZXIubWF0Y2goaHJlZik7XG4gIG0uZm4oZnVuY3Rpb24gdXBkYXRlRG9tKHBhZ2UpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmlubmVySFRNTCA9IHBhZ2VUbXBsKHtcbiAgICAgIGltZ1VybDogcGFnZSA/ICcvaW1nLycrcGFnZSsnLnBuZycgOiAnL2ltZy9yb290LnBuZycsXG4gICAgICBwYWdlczogT2JqZWN0LmtleXMocmVxdWlyZSgnLi9lbmRwb2ludHMnKSkubWFwKChrKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogayxcbiAgICAgICAgICBhY3RpdmVDbGFzczogcGFnZSA9PT0gayA/ICdhY3RpdmUnIDogJycsXG4gICAgICAgICAgaHJlZjogJy8nK2tcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmNhdGNoTGlua3MoZG9jdW1lbnQuYm9keSwgc2hvdyk7XG4qL1xuXG4vLyByZXF1aXJlKCcuL2FuaW1hdGUuanMnKTtcblxuIl19
