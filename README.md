# VELOOP Rewards — Feature Banner Suite

Five responsive, production-grade marketing banners for the **VELOOP Rewards** platform, built to a
strict responsive height specification.

> **Tech:** React 19 · Vite 8 · CSS Modules · Bootstrap 5 grid · lucide-react icons

---

## Project Overview

VELOOP Rewards drives user engagement through gamified reward mechanics. This project implements the
five banners that make up that rewards surface:

| #  | Banner            | Accent  | Anchor ID           | Primary action        |
| -- | ----------------- | ------- | ------------------- | --------------------- |
| 01 | Leaderboard       | Gold    | `leaderboard-card`  | Check rankings        |
| 02 | Watch & Earn      | Sky     | `watch-earn-card`   | Watch & Earn          |
| 03 | Contact Us        | Mint    | `support-card`      | Contact Support       |
| 04 | Follow & Earn     | Rose    | `social-card`       | Explore Our Channels  |
| 05 | Daily Bonus       | Violet  | `daily-bonus-card`  | Claim Bonus           |

Each banner is an independently themed feature block on a shared shell, so they read as one cohesive
product surface while each keeping a distinct visual identity.

**Design direction:** Modern fintech meets premium SaaS with gamification. Gradients are used
restrainedly, accent colors are muted rather than neon, and every banner pairs a bespoke hand-built
SVG scene with a data panel — no stock imagery.

---

## Banner List & Features

### 01 · Leaderboard — `gold`

- Count-up prize pool animation (50,000 VEs over 1,600 ms) driven by `useCountUp`
- Trophy above a gold / silver / bronze ranked podium with a rising chart, top three players
- Each podium entry staggers in on its own `--vx-delay`
- "12,480 users competing this week" live social-proof note
- CTA: **Check rankings** → `onViewLeaderboard`

### 02 · Watch & Earn — `sky`

- Animated video-player scene with a large play button beside a VE wallet of coins
- Meta pills for "Instant credits" and "Eligible ads"
- Note clarifying that the reward amount varies by campaign
- CTA: **Watch & Earn** → `onWatchAndEarn`

### 03 · Contact Us — `mint`

- Copy-to-clipboard support email with visible confirmation state
- **Help Center** and **Submit Ticket** shortcut rows
- Support-agent scene: agent with headset at a laptop, animated chat bubbles
- Live support status pill ("Open")
- CTA: **Contact Support** → `onContactSupport` (plus `onHelpCenter`, `onSubmitTicket`)

### 04 · Follow & Earn — `rose`

- Six official social channels rendered as brand tiles
- Campaign reward callout (+500 SVEs, "Demo campaign")
- Phone showing the VELOOP Rewards profile, ringed by orbiting social channel icons
- CTA: **Explore Our Channels** → `onFollowEarn`

### 05 · Daily Bonus — `violet`

- 7-day streak calendar with completed/locked day states
- Open gift box spilling gold VE coins, with sparkles
- Claim CTA and a "Resets 6h" countdown tag
- CTA: **Claim Bonus** → `onClaimBonus`

### Shared capabilities

- **Pointer tilt** — 3D card tilt on hover, pointer-position driven, rAF-throttled (`useTilt`)
- **Scroll reveal** — staggered entrance via `IntersectionObserver` at 20 % visibility (`useInView`)
- **Accent theming** — five themes (`gold`, `sky`, `mint`, `rose`, `violet`) injected as CSS custom
  properties, so banners are themed by prop with no duplicated CSS
- **Responsive density pass** — paddings, gutters, icon sizes and copy spacing all step down on mobile

---

## Technology Stack

| Layer      | Choice                                                |
| ---------- | ----------------------------------------------------- |
| Framework  | React 19 (`react-dom` 19)                              |
| Build tool | Vite 8 (`@vitejs/plugin-react`)                        |
| Styling    | CSS Modules (scoped) + Bootstrap 5 grid & utilities    |
| Icons      | `lucide-react`                                          |
| Fonts      | `bootstrap-icons`                                       |
| Lint       | ESLint 10 (`react-hooks`, `react-refresh`)             |
| Type       | JavaScript (JSX) with JSDoc-style prop contracts       |

All styling lives in `*.module.css` files. Global design tokens are CSS custom properties in
`src/styles/tokens.css`; no CSS-in-JS and no utility-class dependency beyond the Bootstrap grid.

---

## Installation

Requires **Node.js `^20.19.0` or `>=22.12.0`** (per Vite 8) and **npm 10+**.

```bash
git clone <your-repository-url>
cd <project-directory>
npm install
```

---

## Development Commands

| Command             | Description                                    |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with HMR             |
| `npm run build`     | Production build to `dist/`                    |
| `npm run preview`   | Serve the production build locally            |
| `npm run lint`      | Run ESLint across the project                  |

To preview the production bundle on a specific port:

```bash
npm run dev -- --port 5199
```

---

## Folder Structure

```
.
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── src
    ├── main.jsx                 # App entry; global CSS + token imports
    ├── App.jsx                  # Page composition; anchor-ID section wrappers
    ├── index.css                # Global resets
    ├── components
    │   └── banners
    │       ├── shared           # Reusable banner shell + primitives
    │       │   ├── RewardFeatureBanner.jsx / .module.css   # Card shell, id, entrance
    │       │   ├── BannerHeader.jsx / .module.css          # Index, icon, eyebrow, status
    │       │   ├── BannerCopy.jsx / .module.css            # Title, description, pills, note
    │       │   ├── BannerCTA.jsx / .module.css             # Primary / outline buttons
    │       │   ├── BannerVisual.jsx / .module.css          # Tiltable SVG stage
    │       │   ├── BannerSidePanel.jsx / .module.css       # Data panel container
    │       │   ├── RewardBox.jsx / .module.css             # Reward metric tile
    │       │   ├── BannerMetaPill.jsx / .module.css        # Small meta pill
    │       │   ├── scenePalette.module.css                 # Per-banner scene gradients
    │       │   └── theme.js                                # Accent themes → CSS variables
    │       ├── LeaderboardBanner/    # 01 gold    — podium, count-up pool
    │       ├── WatchAdsBanner/       # 02 sky     — ad player scene
    │       ├── ContactBanner/        # 03 mint    — support panel, clipboard
    │       ├── FollowEarnBanner/     # 04 rose    — social orbit, brand tiles
    │       └── DailyBonusBanner/     # 05 violet  — streak calendar, chest
    ├── hooks
    │   ├── useInView.js           # IntersectionObserver reveal
    │   ├── useCountUp.js          # Animated number tween
    │   └── useTilt.js             # Pointer-driven 3D tilt
    ├── styles
    │   ├── tokens.css             # Global design tokens
    │   ├── motion.css             # Keyframes + reduced-motion guards
    │   └── page.module.css        # Page shell layout
    └── utils
        └── format.js              # Number / currency formatting
```

### Architecture notes

- `RewardFeatureBanner` is the single shell every banner renders through. It owns the `<section>`
  element, the scroll-reveal ref, the theme wiring, and the Bootstrap row that positions
  copy / visual / panel.
- Section IDs are namespaced `*-card` to stay unique. The `App.jsx` wrapper elements keep the plain
  anchor IDs (`#leaderboard`, `#watch-earn`, …) for deep linking.
- Banner components accept only a small set of callback props, so they are trivially host-agnostic.

---

## Responsive Breakpoints

Banners are fluid at **100 % of available width**. Heights are pinned to the spec ranges using `em`
units, which resolve exactly at the 16 px baseline while still scaling if a user enlarges their font
size — this prevents content clipping under browser text zoom.

| Range        | Breakpoints  | Card height (min → max) | Target  |
| ------------ | ------------ | ----------------------- | ------- |
| Mobile       | `< 576px`    | `20.625em` → `32.5em`   | 330–520 |
| Tablet       | `576–991px`  | `23.75em` → `33.75em`   | 380–540 |
| Laptop/Desk  | `≥ 992px`    | `26.875em` (min `25.625em`, max `28.125em`) | 430 (410–450) |

Additional density steps:

- `≥ 576px` — padding grows to 26 px / 24 px
- `≥ 768px` — Bootstrap grid columns activate
- `≥ 992px` — desktop padding (40 px / 30 px) and fixed desktop height
- `< 380px` — compact visual stage (112 px) so the narrowest devices stay in range

Because heights are `em`-based, the values above hold exactly at the default 16 px root size while
remaining fluid at larger text sizes.

---

## Animation Details

Defined in `src/styles/motion.css`, driven by the hooks in `src/hooks/`.

| Animation   | Trigger                       | Detail                                              |
| ----------- | ----------------------------- | --------------------------------------------------- |
| `vx-rise`   | Section enters viewport       | `translateY(14px)` → `0`, opacity 0 → 1, 0.6 s      |
| `vx-pop`    | Section enters viewport       | `scale(0.88)` → `1.03` → `1`, 0.5 s, slight overshoot |
| Count-up    | Leaderboard mount             | 0 → 50,000 VEs over 1,600 ms, ease-out               |
| Tilt        | Pointer over visual stage     | `perspective(900px)` rotateX/Y, max 5°, rAF-throttled |

- Scroll reveal is driven by `useInView` (`IntersectionObserver`, 20 % threshold) which sets
  `data-inview`; animations below the fold are **paused** rather than played early.
- Staggering uses a per-element `--vx-delay` custom property.
- Shared easing: `cubic-bezier(0.22, 0.61, 0.36, 1)`.
- **Reduced motion:** `prefers-reduced-motion: reduce` disables all animation and forces
  `opacity: 1` / `transform: none`, so no content is ever left hidden.

---

## Accessibility

- All text meets **WCAG AA** contrast (0 low-contrast nodes across all five banners).
- Every interactive control has a visible focus outline.
- Decorative SVG/icon elements are `aria-hidden`; each banner is labelled via `aria-labelledby`.
- Copy-email button exposes state through an accessible label change on success.
- Status is conveyed by text, not colour alone.

---

## Screenshots

<!-- TODO: add desktop / tablet / mobile screenshots before submission -->

| Desktop (1440px) | Tablet (768px) | Mobile (390px) |
| ---------------- | -------------- | -------------- |
| _TBD_            | _TBD_          | _TBD_          |

---

## Live Demo

<!-- TODO: replace with the Vercel or Netlify deployment link -->

_Live demo link pending deployment._

## GitHub Repository

<!-- TODO: replace with the public repository URL -->

_Repository link pending._

## Author

<!-- TODO: replace with your name and contact details -->

_Author details pending._

---

## License

Proprietary — internal VELOOP Rewards project. All rights reserved.
