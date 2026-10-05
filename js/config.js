/**
 * Site configuration — swap values and feature flags as the shop grows.
 * Future: point apiBaseUrl at a real ecommerce backend.
 */
window.ShopConfig = Object.freeze({
  shopName: 'Locksmith',
  currency: 'GBP',
  locale: 'en-GB',
  apiBaseUrl: '', // e.g. 'https://api.example.com' when ready
  featureFlags: Object.freeze({
    cartEnabled: false,
  }),
});
