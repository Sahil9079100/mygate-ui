# MyGate — frontend-only UI concept

A frontend-only, high-fidelity concept of the **MyGate** app (gated-community
management), rebuilt from the reference screenshots in `mygate-app-images/`.

It keeps MyGate's **structure and UX** (five sections, society header, quick
actions, community feed, property search, marketplace, services store) but
restyles the interface: one deep-teal accent, a warm paper ground, real
society content, and none of the ad clutter from the original screens.

**Everything is dummy data and frontend only — no backend, no network calls,
no payments.**

---

## Run it

Open `index.html` in any browser (double-click works — no build step, no server).

- On a desktop it appears inside a phone frame, centred.
- On a phone width (< 480px) it becomes a full-screen app.
- Each tab is deep-linkable: `index.html#home`, `#homes`, `#community`,
  `#market`, `#stores`.

## What's inside

| File | Purpose |
| --- | --- |
| `index.html` | App shell, phone frame, bottom-sheet + toast containers |
| `styles.css` | Design system (tokens), all components, responsive rules |
| `data.js` | All dummy content — society, posts, listings, services, cart |
| `app.js` | Icon set, screen renderers, tab navigation, sheets |

```
data.js  ─┐
          ├─► app.js renders 5 screens ─► styles.css
index.html┘
```

## The five screens

| Tab | The question it answers | Anchored by |
| --- | --- | --- |
| **Home** | What's happening in my society? | Quick Actions · Society pulse · Community Posts |
| **Homes** | What can I rent or buy here? | Rent/Buy search · nearby listings · testimonials |
| **Community** | Who's in my society, and what can I do? | Society stats · Community Actions · Announcements · Classes |
| **Buy & Sell** | What's for sale nearby? | Categories · recent listings · free listings |
| **Stores** | What services can I trust? | Mygate Promise · popular services · Help & Support · cart |

## Design decisions

- **One accent hue.** Deep emerald-teal (`#0E8C6E`) carries every primary
  action, the active tab and every highlighted figure. Nothing else competes.
- **Warm paper ground, flat surfaces.** Cards separate from the ground by a
  subtle tone step and a 1px edge — no gradient walls, no glow.
- **Realistic content, honest placeholders.** Society names, resident roles,
  listing details and INR figures read like the real product. Image slots are
  flat tinted panels with a line icon — deliberately *not* fake stock photos.
- **Ad clutter removed.** The original screens are dominated by ad banners;
  here that space carries the society's own information (pulse, announcements).
- **Type.** Plus Jakarta Sans (loaded from Google Fonts; falls back to the
  system sans stack offline), tight tracking on headings, tabular figures for
  amounts.

## Interactions (frontend only)

- Bottom-tab navigation (also `#hash` deep links).
- **Hamburger menu** opens a slide-in drawer (Payments, Helpdesk, Amenities, …).
- **Bell** opens notifications; "Mark all read" clears the badge.
- **Avatar** opens a profile sheet; **society name** switches societies (feed
  and community re-render with the new society).
- **Search (all tabs)** opens a live search sheet scoped to the current tab —
  results jump to and flash the matching card.
- **Compose / Post Property / New Listing** forms actually publish into the
  feed, Homes and Buy & Sell (dummy data, in-memory).
- **Posts**: like (toggles + count), comments (view & add), share, post menu,
  read more/show less, tap-to-open detail.
- **Homes**: Rent/Buy segment filters listings, search box live-filters,
  listing cards open a detail sheet with Contact / Request visit.
- **Community**: announcements & classes open detail sheets, "Join class"
  toggles joined state, "View More" expands the action grid.
- **Buy & Sell**: categories filter the listing strip (tap again to clear),
  product cards open detail sheets with Message / Add to cart, free items can
  be claimed.
- **Stores**: service cards open detail sheets with booking or add-to-cart,
  the cart bar opens a cart sheet with quantity steppers, remove and checkout
  that really update the cart state.
- **Quick Actions**: Payments (bill breakdown + processing pay flow),
  Helpdesk (ticket form), Amenities (facility + slot booking), "See all"
  expands the grid, "Customise" toggles which actions show.
- Every sheet/toast lives **inside the phone frame** — nothing escapes the
  mockup, on desktop or mobile.
- `Esc` closes any open sheet or drawer.

## Not built (wire these before shipping)

- No auth, no API, no persistence. `DATA` in `data.js` is the single source.
- Buttons route to a toast/sheet only; connect them to real flows.
- Replace every image placeholder (`.media-ph`) with real photography.
- The cart, payments, and amenity bookings are presentational.

## Previews

`preview/` holds rendered screenshots of all five screens and the compose sheet.
