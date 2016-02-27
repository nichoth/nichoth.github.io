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


var Particles = require('canvas-particles');
var randColor = require('randomcolor');

var canvas = document.querySelector('canvas');
canvas.getContext("2d").fillRect(0, 0, canvas.width, canvas.height);

// falling particles with random x velocity and random origin
var range = 50;
var xMax = ((canvas.width / 2) + range+20);
var xMin = ((canvas.width/2) - range-20);
var yMax = ((canvas.height / 2) + range);
var yMin = ((canvas.height/2) - range);

var particles = Particles({
  maxParticles: 50,
  density: 0,
  gravity: 0.04,
  vx: 0,
  vy: 3,
  origin: function() {
    return {
      x: Math.random() * (xMax - xMin) + xMin,
      y: Math.random() * (yMax - yMin) + yMin
    };
  },
  color: randColor,
  wobble: function() {
    return Math.random() + 1 - 1.5;
  }
}).loop(canvas, redrawFn);

function redrawFn(ctx) {
  ctx.fillStyle = "white";
  ctx.fillRect(0,0, canvas.width, canvas.height);
}
