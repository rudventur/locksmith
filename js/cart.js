/**
 * Lightweight cart module (localStorage stub).
 * Ready to replace persistence with a real ecommerce API later —
 * keep the same public methods and item shape.
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'bulllocks_cart_v1';

  function readStore() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { items: [] };
      var parsed = JSON.parse(raw);
      return parsed && Array.isArray(parsed.items) ? parsed : { items: [] };
    } catch (err) {
      return { items: [] };
    }
  }

  function writeStore(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }

  /**
   * @returns {{ items: Array<{ id: string, name: string, price: number, quantity: number, category: string }> }}
   */
  function getCart() {
    return readStore();
  }

  /**
   * @param {{ id: string, name: string, price: number, quantity?: number, category: string }} item
   */
  function addItem(item) {
    if (!item || !item.id) return getCart();
    var cart = readStore();
    var qty = item.quantity && item.quantity > 0 ? item.quantity : 1;
    var existing = cart.items.find(function (entry) {
      return entry.id === item.id;
    });
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.items.push({
        id: String(item.id),
        name: String(item.name || ''),
        price: Number(item.price) || 0,
        quantity: qty,
        category: String(item.category || ''),
      });
    }
    writeStore(cart);
    return cart;
  }

  function removeItem(id) {
    var cart = readStore();
    cart.items = cart.items.filter(function (entry) {
      return entry.id !== id;
    });
    writeStore(cart);
    return cart;
  }

  function clearCart() {
    var cart = { items: [] };
    writeStore(cart);
    return cart;
  }

  /**
   * @returns {{ itemCount: number, subtotal: number, currency: string }}
   */
  function getTotals() {
    var cart = readStore();
    var currency =
      (global.ShopConfig && global.ShopConfig.currency) || 'GBP';
    var itemCount = 0;
    var subtotal = 0;
    cart.items.forEach(function (entry) {
      itemCount += entry.quantity;
      subtotal += entry.price * entry.quantity;
    });
    return {
      itemCount: itemCount,
      subtotal: Math.round(subtotal * 100) / 100,
      currency: currency,
    };
  }

  global.ShopCart = {
    getCart: getCart,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart,
    getTotals: getTotals,
  };
})(window);
