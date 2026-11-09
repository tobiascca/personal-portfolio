(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Fig. 1 plays continuously by design; the caption control pauses it.
  document.querySelectorAll('.fig').forEach(function (fig) {
    var video = fig.querySelector('video.js-always');
    var toggle = fig.querySelector('.js-toggle');
    if (!video || !toggle) return;
    var state = toggle.querySelector('.js-state');
    var action = toggle.querySelector('.js-action');

    function render() {
      var paused = video.paused;
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.classList.toggle('is-paused', paused);
      state.textContent = paused ? 'Paused' : 'Live, looping';
      action.textContent = paused ? 'Play' : 'Pause';
    }

    toggle.addEventListener('click', function () {
      if (video.paused) { var p = video.play(); if (p && p.catch) p.catch(render); }
      else video.pause();
    });
    video.addEventListener('play', render);
    video.addEventListener('pause', render);
    var start = video.play();
    if (start && start.catch) start.catch(render);
    render();
  });

  // Other videos play only while on screen.
  var inviewVideos = document.querySelectorAll('video.js-inview');
  if ('IntersectionObserver' in window && inviewVideos.length) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting && !reduceMotion.matches) {
          v.preload = 'auto';
          var p = v.play(); if (p && p.catch) p.catch(function () {});
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.35 });
    inviewVideos.forEach(function (v) {
      if (reduceMotion.matches) v.controls = true;
      vio.observe(v);
    });
  }

  // Fig. 2 draws its line once it is on screen.
  var chart = document.querySelector('.js-chart');
  if (chart) {
    if (!('IntersectionObserver' in window) || reduceMotion.matches) {
      chart.classList.add('is-drawn');
    } else {
      chart.classList.add('will-draw');
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { chart.classList.add('is-drawn'); cio.disconnect(); }
        });
      }, { threshold: 0.45 });
      cio.observe(chart);
    }
  }

  // Copy email.
  document.querySelectorAll('.js-copy').forEach(function (btn) {
    var note = btn.parentElement.querySelector('.js-copy-note');
    var timer;
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      function done(ok) {
        btn.textContent = ok ? 'Copied' : 'Copy';
        if (note) note.textContent = ok ? 'Email address copied.' : 'Copy failed. Select the address instead.';
        clearTimeout(timer);
        timer = setTimeout(function () { btn.textContent = 'Copy'; if (note) note.textContent = ''; }, 2400);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  });

  // Current section in the masthead.
  var links = Array.prototype.slice.call(document.querySelectorAll('.masthead__nav a'));
  if ('IntersectionObserver' in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var a = byId[e.target.id];
        if (a) a.setAttribute('aria-current', 'location');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) sio.observe(el);
    });
  }
})();
