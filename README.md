# Locksmith — Doors, Locks & Fences

Launch-ready HTML base for an online locksmith and trade shop (locksmithing, locks, carpentry, doors and fences).

## Open locally

Open `index.html` in a browser, or serve the folder with any static server, for example:

```bash
npx serve .
```

## Folder map

| Path | Purpose |
|------|---------|
| `index.html` | Landing page |
| `css/styles.css` | Site styles |
| `js/config.js` | Shop name, currency, feature flags |
| `js/cart.js` | Client-side basket (localStorage stub) |
| `js/panel-toggle.js` | One hide / show pattern for every panel (top bar, phone menu); open state kept in `localStorage` under `locksmith_panels` |
| `js/main.js` | Panels (top bar, phone menu) and page init |
| `data/catalog.json` | Product catalogue skeleton — add products here later |
| `assets/` | Images and media |

## Ecommerce note

The basket is a client-side stub (`js/cart.js`) wired for a real backend later. Cart UI is present but buying is off (`cartEnabled: false` in config). Service cards are placeholders with `data-category` hooks — no product buttons yet.

## Next steps

1. Add category pages and product buttons from `data/catalog.json`
2. Fill contact placeholders (phone, email, hours)
3. Connect payments and a server-side shop API
