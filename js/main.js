/**
 * Page bootstrap — panels (top bar, menu), cart badge, year stamp.
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

  /**
   * Every panel uses the same hide / show pattern (js/panel-toggle.js):
   *  - the top bar has a "hide" button; a small tab brings it back, and the
   *    choice is remembered on this device
   *  - the phone menu opens and closes through the same toggle (never
   *    remembered, it is a drop-down)
   */
  function initPanels() {
    var panels = window.sfPanels;
    if (!panels) return;

    panels.register({
      id: 'header',
      el: '#site-header',
      label: 'the top bar',
      side: 'top',
      read: function () {
        return !document.body.classList.contains('sf-hidden-header');
      },
      apply: function (open) {
        document.body.classList.toggle('sf-hidden-header', !open);
        if (!open) panels.set('nav', false);
      },
    });
    panels.set('header', panels.saved('header', true), { noSave: true });

    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    panels.register({
      id: 'nav',
      el: nav,
      label: 'the menu',
      side: 'top',
      remember: false,
      read: function () {
        return nav.classList.contains('is-open');
      },
      apply: function (open) {
        nav.classList.toggle('is-open', open);
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      },
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        panels.set('nav', false);
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
    initPanels();
    updateCartBadge();
    setYear();
  });
})();
