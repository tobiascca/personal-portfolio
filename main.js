(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Figure videos play continuously by design; the caption control pauses them.
  // They also pause while off screen and resume when back, unless paused by hand.
  var figVideos = [];
  document.querySelectorAll('.fig').forEach(function (fig) {
    var video = fig.querySelector('video.js-always');
    var toggle = fig.querySelector('.js-toggle');
    if (!video || !toggle) return;
    var state = toggle.querySelector('.js-state');
    var action = toggle.querySelector('.js-action');
    video._userPaused = false;
    figVideos.push(video);

    function render() {
      var paused = video.paused;
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.classList.toggle('is-paused', paused);
      state.textContent = paused ? 'Paused' : 'Live, looping';
      action.textContent = paused ? 'Play' : 'Pause';
    }
    function play() { var p = video.play(); if (p && p.catch) p.catch(render); }

    toggle.addEventListener('click', function () {
      if (video.paused) { video._userPaused = false; play(); }
      else { video._userPaused = true; video.pause(); }
    });
    video.addEventListener('play', render);
    video.addEventListener('pause', render);
    play();
    render();
  });

  if ('IntersectionObserver' in window && figVideos.length) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) {
          if (!v._userPaused) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        } else if (!v.paused) {
          v.pause();
        }
      });
    }, { threshold: 0.2 });
    figVideos.forEach(function (v) { vio.observe(v); });
  }

  // Screenshot slider.
  document.querySelectorAll('.js-slider').forEach(function (slider) {
    var viewport = slider.querySelector('.slider__viewport');
    var slides = slider.querySelectorAll('.slider__slide');
    var prev = slider.querySelector('.js-prev');
    var next = slider.querySelector('.js-next');
    var count = slider.querySelector('.js-count');
    var caption = slider.querySelector('.js-caption');
    var index = -1;
    var ticking = false;

    function update() {
      ticking = false;
      var w = viewport.clientWidth || 1;
      var i = Math.max(0, Math.min(slides.length - 1, Math.round(viewport.scrollLeft / w)));
      if (i === index) return;
      index = i;
      count.textContent = (index + 1) + ' / ' + slides.length;
      if (caption) caption.textContent = slides[index].getAttribute('data-caption') || '';
      prev.disabled = index === 0;
      next.disabled = index === slides.length - 1;
    }
    function go(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      viewport.scrollTo({ left: i * viewport.clientWidth, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    }

    prev.addEventListener('click', function () { go(index - 1); });
    next.addEventListener('click', function () { go(index + 1); });
    viewport.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    viewport.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
      else if (e.key === 'Home') { e.preventDefault(); go(0); }
      else if (e.key === 'End') { e.preventDefault(); go(slides.length - 1); }
    });
    window.addEventListener('resize', function () {
      viewport.scrollLeft = Math.max(0, index) * viewport.clientWidth;
    });

    update();
  });

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
