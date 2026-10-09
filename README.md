# BULLLOCKS — Locks, Doors, Windows & Fencing

Launch-ready HTML base for the BULLLOCKS online shop and trade services: locks and door hardware, carpentry of doors and windows, and fencing and surveys.

## Open locally

Open `index.html` in a browser, or serve the folder with any static server, for example:

```bash
npx serve .
```

## Folder map

| Path | Purpose |
|------|---------|
| `index.html` | Landing page (hero, three service tiles, about, contact) |
| `css/styles.css` | Site styles (service grid: stacked on mobile, 3 columns on desktop) |
| `js/config.js` | Shop name (`BULLLOCKS`), currency, feature flags |
| `js/cart.js` | Client-side basket (localStorage stub) |
| `js/main.js` | Nav and page init |
| `data/catalog.json` | Product catalogue skeleton — categories and lock subcategories; add products here later |
| `assets/` | Images and media |

## Service categories

| Tile | `data-category` | Subcategories |
|------|-----------------|---------------|
| Locks | `locks` | `latch`, `mortice`, `magnetic`, `hinges`, `handles`, `post-boxes`, `alarm-sensors` |
| Carpentry of Doors & Windows | `carpentry-doors-windows` | — |
| Fencing & Surveys | `fencing-surveys` | — |

The lock subcategories are also marked up in `index.html` with `data-subcategory` hooks, ready for buttons and product listings later.

## Ecommerce note

The basket is a client-side stub (`js/cart.js`) wired for a real backend later. Cart UI is present but buying is off (`cartEnabled: false` in config). Service cards are placeholders with `data-category` hooks — no product buttons yet.

## Next steps

1. Add category pages and product buttons from `data/catalog.json`
2. Fill contact placeholders (phone, email, hours)
3. Connect payments and a server-side shop API
