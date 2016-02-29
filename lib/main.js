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


