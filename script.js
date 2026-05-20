/* Battle at the Ranch — minimal client script.
   Two jobs only:
     1. Reveal elements as they scroll into view.
     2. Make sure hero video tries hard to autoplay on mobile,
        and falls back to the poster image if anything fails. */

(function () {
  'use strict';

  /* ---------- 1. Scroll-triggered reveal ---------- */
  var els = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { io.observe(el); });
  } else {
    // Old browser — just show everything.
    els.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Always reveal the hero copy immediately on load (no scroll needed).
  window.addEventListener('load', function () {
    document.querySelectorAll('.hero .reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  });

  /* ---------- 2. Hero video resilience + audio ---------- */
  var hero  = document.getElementById('hero');
  var video = hero ? hero.querySelector('.hero__video') : null;
  if (!video) return;

  var TARGET_VOLUME = 0.8;
  var unmuted = false;

  // Keep the video playing (some mobile browsers stall).
  var tryPlay = function () {
    var p = video.play();
    if (p && typeof p.catch === 'function') {
      p.catch(function () { /* poster image will show */ });
    }
  };

  // Smoothly fade the volume in from 0 so audio never blasts.
  var fadeIn = function () {
    video.volume = 0;
    var step = 0;
    var id = setInterval(function () {
      step += 1;
      var v = Math.min(TARGET_VOLUME, step * 0.04);
      video.volume = v;
      if (v >= TARGET_VOLUME) clearInterval(id);
    }, 50);
  };

  // Try to unmute. Browsers block autoplay-with-sound unless the
  // user has interacted, so this will usually fail on first load.
  // When it fails, we fall back to unmuting on first interaction.
  var tryUnmute = function () {
    if (unmuted) return;
    video.muted = false;
    var p = video.play();
    if (p && typeof p.then === 'function') {
      p.then(function () {
        unmuted = true;
        fadeIn();
      }).catch(function () {
        // Blocked — re-mute so video keeps playing visually.
        video.muted = true;
        tryPlay();
      });
    } else {
      // No promise returned — assume success and fade in.
      unmuted = true;
      fadeIn();
    }
  };

  // Initial start (muted, so it always plays visually).
  tryPlay();
  // Immediate optimistic attempt at sound (works on desktop with
  // sufficient media engagement; harmless when it fails).
  tryUnmute();

  // First-interaction fallback — fires once on any user gesture.
  var onFirstGesture = function () {
    if (!unmuted) tryUnmute();
    if (unmuted) {
      ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach(function (ev) {
        window.removeEventListener(ev, onFirstGesture, true);
      });
    }
  };
  ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach(function (ev) {
    window.addEventListener(ev, onFirstGesture, { capture: true, passive: true });
  });

  // Resume playback if the tab was backgrounded.
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) tryPlay();
  });

  // If the video file can't load, hide the element so the CSS
  // poster (invitation image) shows through cleanly.
  video.addEventListener('error', function () {
    video.style.display = 'none';
  });
  video.addEventListener('stalled', function () { tryPlay(); });
})();
