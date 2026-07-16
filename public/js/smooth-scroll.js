document.addEventListener('click', function(e) {
  var a = e.target.closest('a[href^="#"]');
  if (!a) return;
  var r = a.getAttribute('href');
  if (!r || r === '#') return;
  var t = document.querySelector(r);
  if (!t) return;
  e.preventDefault();
  history.pushState(null, null, r);
  var n = t.getBoundingClientRect().top + window.pageYOffset - 100;
  window.scrollTo({ top: n, behavior: 'smooth' });
});

function getNavItems() {
  var navIds = ['block-hardwaremenuleft', 'block-featuresmenuleft'];
  var items = [];
  navIds.forEach(function(navId) {
    var nav = document.getElementById(navId);
    if (!nav) return;
    var links = nav.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      var id = link.getAttribute('href').slice(1);
      var section = document.getElementById(id);
      if (section) {
        items.push({ section: section, link: link });
      }
    });
  });
  return items;
}

function updateActive() {
  var trigger = 150;
  var current = null;
  var maxTop = -Infinity;
  var items = getNavItems();
  items.forEach(function(item) {
    var rect = item.section.getBoundingClientRect();
    if (rect.top <= trigger && rect.top > maxTop) {
      maxTop = rect.top;
      current = item;
    }
  });
  items.forEach(function(item) {
    item.link.classList.remove('active');
  });
  if (current) {
    current.link.classList.add('active');
  }
}

window.addEventListener('scroll', updateActive);
window.addEventListener('hashchange', updateActive);

function scrollToHash(hash) {
  var target = document.querySelector(hash);
  if (!target) return false;
  var top = target.getBoundingClientRect().top + window.pageYOffset - 100;
  if (Math.abs(window.scrollY - top) > 10) {
    window.scrollTo(0, top);
  }
  return true;
}

function init() {
  updateActive();
  
  if (window.location.hash) {
    var hash = window.location.hash;
    if (!scrollToHash(hash)) {
      var observer = new MutationObserver(function() {
        if (scrollToHash(hash)) {
          updateActive();
          setTimeout(updateActive, 300);
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      setTimeout(updateActive, 300);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
