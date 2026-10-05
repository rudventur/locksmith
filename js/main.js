/**
 * Page bootstrap — nav, cart badge, year stamp.
 * No product buy buttons yet; those arrive with the catalogue.
 */
(function () {
  'use strict';

  function updateCartBadge() {
    var countEl = document.getElementById('cart-count');
    var badge = document.querySelector('.cart-badge');
    if (!countEl || !window.ShopCart) return;

    var totals = window.ShopCart.getTotals();
    var count = totals.itemCount || 0;
    countEl.textContent = String(count);

    if (badge) {
      badge.setAttribute(
        'aria-label',
        'Basket, ' + count + (count === 1 ? ' item' : ' items')
      );
    }
  }

  function initNavToggle() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  function setYear() {
    var yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNavToggle();
    updateCartBadge();
    setYear();
  });
})();
