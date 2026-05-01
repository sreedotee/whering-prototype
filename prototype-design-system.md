# Whering Prototype — Design System Documentation

> For the redesign agent. This documents every token, component, screen, and pattern in the current prototype (`src/App.jsx` + `index.css` + `src/design-system/`). The prototype renders inside an iOS 26 device frame at 402×874px.

---

## 1. Device Frame

The entire app is wrapped in `IOSDevice` (402×874px):

| Property | Value |
|---|---|
| Width | 402px |
| Height | 874px |
| Border radius | 48px |
| Background (light) | `#F2F2F7` |
| Box shadow | `0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)` |
| Dynamic Island | 126×37px, centered, top 11px, `#000`, radius 24px |
| Home indicator | 139×5px pill, `rgba(0,0,0,0.25)`, bottom 8px |
| Status bar height | 64px (`--app-status-bar-height`) |
| Bottom nav height | 82px (`--app-bottom-nav-height`) |
| Page margin | 8px (`--app-page-margin`) |

### iOS Status Bar
- Time: SF Pro 590wt, 17px, color matches theme (dark/light)
- Signal bars, wifi, battery icons rendered as inline SVG
- Padding: 21px top, 24px inline, 19px bottom

---

## 2. Design Tokens

### 2.1 Typography

**Font families:**
- `--font-sans`: `'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`
- `--font-display`: `"DM Serif Display", serif` — used for `h1` and `.display` only

**Type scale (6 steps):**

| Token | Size | Line height | Letter spacing | Usage |
|---|---|---|---|---|
| `--fs-12` / `.t-12` | 12px | 16px | — | Captions, micro labels |
| `--fs-14` / `.t-14` | 14px | 20px | — | Nav, secondary text, buttons |
| `--fs-16` / `.t-16` | 16px | 22px | — | Body default |
| `--fs-20` / `.t-20` | 20px | 26px | −0.005em | Sub-headings |
| `--fs-24` / `.t-24` | 24px | 30px | −0.01em | Sheet titles |
| `--fs-32` / `.t-32` | 32px | 38px | −0.02em | Display/large headings |

**Weights:**
- `--fw-regular: 400`
- `--fw-medium: 500`
- `--fw-semibold: 600`
- `--fw-bold: 700`

**Utility classes:**
- `.t-regular`, `.t-medium`, `.t-semibold`, `.t-bold`
- `.t-muted` → `color: var(--ink-2)` (#5C5C5C)
- `.t-faint` → `color: var(--ink-3)` (#9A9A9A)
- `.t-display` → 32px, semibold, −0.02em tracking

**Heading elements:**
- `h1` / `.display` → DM Serif Display, 64px, lh 78px, weight 400
- `h2` / `.heading` → Inter, 36px, lh 44px, weight 400

---

### 2.2 Color System

#### Ink (text/icon on any surface)
| Token | Hex | Usage |
|---|---|---|
| `--ink-0` | `#0A0A0A` | Primary text, icons, CTA backgrounds |
| `--ink-1` | `#2E2E2E` | Slightly lifted text |
| `--ink-2` | `#5C5C5C` | Secondary/muted text |
| `--ink-3` | `#9A9A9A` | Tertiary/faint text |
| `--ink-4` | `#CFCBC3` | Sheet grab handles, hairlines |
| `--ink-white` | `#FFFFFF` | Text/icons on dark surfaces |

#### Hue System — Per-Screen Color Scopes
Each screen applies a `.hue-*` class that sets `--bg`, `--surface`, `--edge`, `--accent` locally.

| Hue | Screen(s) | `--bg` | `--surface` | `--edge` | `--accent` |
|---|---|---|---|---|---|
| `cyan` | Discover, Explore, Studio, Inbox | `#F6FAFC` | `#FCFDFE` | `#EAF0F4` | `#1DB5FF` |
| `lime` | Profile upload / AI enhancer | `#F6F9EE` | `#FBFCF5` | `#ECF0DD` | `#9BC926` |
| `violet` | Profile stats | `#F5F2FB` | `#FAF8FD` | `#E8E2F3` | `#8A6BE0` |
| `orange` | Warm/rare moments | `#FBF3EC` | `#FDF8F3` | `#F3E3D2` | `#FF6B1A` |
| `oat` | Neutral | `#F6F4EE` | `#FBFAF5` | `#E8E3D6` | `#0A0A0A` |

The **accent color** `#1DB5FF` (cyan) is the dominant brand color used across active states (tab slider, pills, follow buttons, CTAs).

#### Other Colors In Use
| Value | Usage |
|---|---|
| `#0D0D0D` | Near-black primary used on cards and text (alternate ink-0) |
| `#828282` | Inactive nav icons, secondary text |
| `#8C8C8C` | Author context text, secondary labels |
| `#A0A0A0` | Placeholder text, inactive states |
| `#999999` | Inactive category pills |
| `#F8F8F8` | Search pill background |
| `#EAEAEA` | Search pill border, item image border |
| `#C9FF00` | Follow button (legacy) — bright lime |
| `#FFFFFF` | All overlay/card backgrounds |

---

### 2.3 Spacing

4pt grid system:

| Token | Value |
|---|---|
| `--s-1` | 4px |
| `--s-2` | 8px |
| `--s-3` | 12px |
| `--s-4` | 16px |
| `--s-5` | 20px |
| `--s-6` | 24px |
| `--s-8` | 32px |
| `--s-10` | 40px |
| `--s-12` | 48px |

---

### 2.4 Border Radius

| Token | Value | Usage |
|---|---|---|
| `--r-sm` | 8px | Item thumbs, small cards, discover card media |
| `--r-nav` | 14px | Internal nav elements |
| `--r-card` | 20px | Standard cards |
| `--r-sheet` | 28px | Bottom sheets, bottom nav pill |
| `--r-pill` | 999px | Buttons, chips, search bars, avatars |

Additional radii used directly in components:
- Bottom nav: `40px` (slightly looser than sheet)
- iOS device frame: `48px`
- Month grid card, creator overlay: `26px` (IOSList)
- Discover card media: `8px` (same as `--r-sm`)
- Item overlay images: `16px`
- Outfit picker modal: `32px` top corners

---

### 2.5 Elevation

| Token | Shadow | Usage |
|---|---|---|
| `--e1` | `0 1px 2px rgba(10,10,10,0.04)` | Subtle lift, cards at rest |
| `--e2` | `0 6px 20px -6px rgba(10,10,10,0.10), 0 2px 6px rgba(10,10,10,0.04)` | Raised cards |
| `--e3` | `0 24px 60px -20px rgba(10,10,10,0.25), 0 8px 24px rgba(10,10,10,0.08)` | Modals, sheets |

Bottom nav uses a custom shadow: `0 14px 32px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.78)`

---

### 2.6 Motion

| Token | Value |
|---|---|
| `--ease-out` | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `--dur-fast` | 140ms |
| `--dur-base` | 220ms |

Tab slider animation: `260ms cubic-bezier(0.32, 0.72, 0, 1)`  
Category pill transitions: `200ms cubic-bezier(0.23, 1, 0.32, 1)`  
Grid slide-in: `0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94)`  
Screen fade: `200ms ease-out`

---

## 3. Base Component Library

### 3.1 Button (`.btn`)

Height: 44px | Radius: `--r-pill` | Font: 14px medium | Gap: 8px

| Variant | Class | Background | Color |
|---|---|---|---|
| Primary | `.btn--primary` | `var(--ink-0)` → hover `var(--ink-1)` | white |
| Surface | `.btn--surface` | `var(--surface)` → hover white | `var(--ink-0)` |
| Ghost | `.btn--ghost` | transparent → hover `rgba(0,0,0,0.04)` | `var(--ink-0)` |

Sizes:
- `.btn--sm` → height 34px, padding `0 16px`, font 14px
- `.btn--lg` → height 52px, padding `0 24px`, font 16px
- `.btn--block` → width 100%

Active state: `scale(0.97)` | Focus: 2px outline `var(--ink-0)`, 2px offset

---

### 3.2 Icon Button (`.iconbtn`)

40×40px | Round | Background: `var(--surface)` | Active: `scale(0.94)`

| Variant | Background |
|---|---|
| Default | `var(--surface)` |
| Ghost `.iconbtn--ghost` | transparent |
| Primary `.iconbtn--primary` | `var(--ink-0)`, color white |

---

### 3.3 Chip (`.chip`)

Height: 32px | Padding: `0 16px` | Radius: pill | Font: 14px medium

- Default: `background: var(--surface)`, `color: var(--ink-1)`
- Active `[aria-pressed="true"]` or `.is-active`: `background: var(--ink-0)`, `color: white`
- Small `.chip--sm`: height 28px, padding `0 12px`, font 12px

---

### 3.4 Category Pill (`.category-pill`)

Height: 36px min | Padding: `0 14px` | Radius: 999px | Font: 12px regular

- Default: `background: #EEEEEE`, `color: #828282`
- Active `.active`: `background: #0D0D0D`, `color: #FAFAFA`
- Active state on Discover tab bar specifically: `background: #1DB5FF`, `color: white`
- Active state on Studio cat pills: `background: #1DB5FF` (uses `var(--accent)`)
- Active scale on press: `scale(0.96)`
- Transition: `150ms ease-out` (scale + bg + color)

---

### 3.5 Card (`.card`)

Radius: `--r-card` (20px) | Overflow: hidden | Active: `scale(0.985)`

| Variant | Description |
|---|---|
| `.card--paper` | White background |
| `.card--image` | Cover background + bottom gradient overlay (`transparent 55%` → `rgba(0,0,0,0.4)`) |

---

### 3.6 Row (`.row`)

Flex row, padding `16px 20px`, radius `--r-card`, background `var(--surface)` | Hover: white

- `.row__icon` — 48×48px circle, background `var(--bg)`
- `.row__body` — flex 1, min-width 0
- `.row__title` — 16px semibold
- `.row__sub` — 14px, `var(--ink-2)`
- `.row__chev` — `var(--ink-3)` chevron

---

### 3.7 Sheet (`.sheet`)

Background: white | Top radius: 28px | Padding: `24px 20px 20px` | Shadow: `--e3`

- `.sheet__grab` — 36×4px pill, `var(--ink-4)`, centered, margin -8px top
- `.sheet__title` — 24px semibold, centered, letter-spacing −0.01em

---

### 3.8 Hairline (`.hr`)

1px height | `background: var(--edge)` | No border

---

## 4. Icon System

All icons live in `src/design-system/icons.jsx`. They are 24×24 stroke icons, stroke-width 2, round caps/joins.

| Icon key | Usage |
|---|---|
| `search` | Explore screen, search bar, profile action |
| `plus` | FAB, event create FAB, planner FAB |
| `close` | Dismiss overlays, event create toolbar |
| `check` | Confirmation state |
| `chev_r / chev_l / chev_d` | Navigation, accordions |
| `filter` | Sort/filter actions |
| `grid` | Grid view toggle |
| `heart` | Save/like — Discover feed save pill |
| `bag` | Shopping bag (unused in current build) |
| `sparkle` | Highlight/AI moments |
| `camera` | Upload image (profile FAB menu) |
| `hanger` | Studio/Create tab in bottom nav |
| `calendar` | Planner access from profile |
| `pin` | Location (unused in current build) |
| `list` | List view toggle |
| `user` | Profile tab in bottom nav |
| `bell` | Inbox/Notifications tab |
| `settings` | Profile settings |
| `shuffle` | Randomize |
| `tag` | Item tagging |
| `cloud` | Sync/upload |
| `dots` | More options (3-dot menu) |
| `arrow_r` | Forward navigation |
| `trash` | Delete |
| `edit` | Edit action — planner look card |
| `bookmark` | Save item in overlay |
| `share` | Share outfit/profile |
| `globe` | Discover tab in bottom nav |
| `history` | Studio history button |
| `cal_plus` | Add event (Planner — from Lucide React) |

`SWATCHES` array: 12 garment placeholder gradient colors (cream, charcoal, sky, tan, stone, forest, oat, oxblood, ivory, moss, camel, pale blue).

---

## 5. Screen-by-Screen Breakdown

### 5.1 Discover Screen (`#home-screen`, `.hue-cyan`)

**Layout:**
- Full-screen absolute-positioned content area
- Top nav bar: absolute, top = `--app-status-bar-height` (64px), height 48px, transparent bg, centered
- Feed: absolute, top = status bar + 48px, bottom = nav height, overflow-y scroll

**Tab bar (`.discover-tabs`):**
- Two tabs: "For You" and "Following"
- Animated sliding pill underneath active tab
- Pill: height 32px, `background: #1DB5FF`, border-radius 999px
- Pill transitions on width + left: 260ms spring
- Inactive tabs: 14px regular, `#999999`
- Active tabs: 14px regular, `#FFFFFF` (because pill sits under them)

**Feed grid (`.discover-grid`):**
- Two equal columns with 8px gutter (`--discover-gutter`)
- Left column, right column — each `calc((100% - 8px) / 2)` wide
- Columns flex vertically with 8px gap between cards
- Tab switching: slide left/right animation (48px translateX, 320ms)

**Discover Card (`.discover-card`):**
- Media container: height varies per card (164–326px), border-radius 8px, overflow clip
- Background: `#e8eef2` placeholder
- Shadow: `0 1px 0 rgba(13,13,13,0.04)`
- Image tint: two gradients: `transparent 55% → rgba(0,0,0,0.15)` top and `rgba(0,0,0,0.38) 0% → transparent 42%` bottom
- Author overlay (bottom left by default in feed, `isBottom: true`):
  - Avatar: 22px circle
  - Name: 10px, `#FAFAFA`
  - Context: 10px, `rgba(250,250,250,0.8)`
- Save pill (`.discover-save-pill`): bottom right, height 24px, padding 12px inline, `rgba(13,13,13,0.4)` bg, blur(10px), white text, 9px font, heart icon 10px
- Interactive: cursor pointer, `card--interactive` class

**Discover Outfit Overlay:**
- Full-screen white overlay, z-index 20, fade-in animation
- Hero image: configurable height (default 450px), cover bg + gradient
- Back button: absolute top (status bar - 2px), left 16px, 32×32px transparent
- Share icon: absolute bottom 14px, right 14px
- Body section: flex column, 16px padding, 12px gap between sections
- Author row: avatar (36px), name+context stacked, "Follow" button (cyan bg)
- Items section header: 16px regular
- Items horizontal scroll: 80×80px square cards with 16px radius, brand/name labels below
- Item save icon: bookmark, 20px, absolute bottom-right of image
- "More like this": full masonry grid repeated
- Sticky footer: white bg, border-top `1px solid rgba(13,13,13,0.08)`, flex row
  - Left: count (12px muted) + "Included" label (16px bold)
  - CTA button: `#0D0D0D`, 42px height, 999px radius, 152px min-width, bookmark icon + label
  - Fades/translates out as user scrolls past items section

**Creator Profile Overlay:**
- Same structure as profile main view, layered at z-index 200
- Mirrors own-profile layout but with "Follow" button instead of "Edit Profile"
- Hue locked to cyan

---

### 5.2 Explore Screen (`#explore-screen`, `.hue-cyan`)

**Layout:**
- `overflow-y: auto`, padding-bottom = nav height + 8px
- Container: flex column, padding-top = status bar + 12px

**Search bar (`.search-input-pill`):**
- Height: 40px | Background: `#F8F8F8` | Border: `1px solid #EAEAEA` | Radius: 999px
- Padding: `0 13px` | Gap: 9px
- Search icon: 18×18px, stroke `#A0A0A0`
- Placeholder text: 14px regular, `#A0A0A0`
- Sticky at top with transparent background

**Hero card:**
- Height: 160px | Full width
- Background: image + `linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)`
- Border radius: 20px (`.card` default)
- Title: 16px regular, white
- Category tag (above title): 12px uppercase, 0.7px letter-spacing, white

**Category pills (horizontal scroll):**
- Pills: see category pill spec above
- 8px gap between pills
- Active = `#1DB5FF` fill

**Section layout:**
- Section gap: 24px (`section.gap`)
- Section header: title (16px regular, `#0D0D0D`) + "See All" link (12px regular, `#828282`)

**Circular avatar items (Brands / Curators):**
- Size: 60px circle | Gap: 10px
- Label: 11px, centered, max-width = avatar size
- Brand avatars: white background, 70% logo width

**Trending outfit cards:**
- Width: 116px | Height auto (aspect-ratio based)
- Background: cover image + `rgba(0,0,0,0.5)` bottom gradient
- Title: white text, bottom-left positioned

---

### 5.3 Studio Screen (`#studio-screen`, `.hue-cyan`)

**Layout:**
- Full screen flex column container
- Header: history button (24px icon, stroke 1.8)
- Canvas area: placeholder text ("Tap items below to build your outfit")
- Categories bar: horizontal scroll pills — Tops, Bottoms, Outerwear, Footwear, Accessories
- Sort pill: "Recently Added" with chevron
- Item grid: 2-column, scrollable
- Footer actions: "Create outfit" button

**Studio item card (`.studio-item-card`):**
- Square, background-image cover
- Selected state: checkmark badge (bottom-right), `aria-pressed`
- Checkmark: 12×12px, white stroke, `rgba` background circle

**Category pill (active state):**
- Same cyan accent `#1DB5FF`

---

### 5.4 Inbox Screen (`#inbox-screen`, `.hue-cyan`)

**Layout:**
- Container with header + scrollable section
- Header: "Activity" h1 (large display type) + filter chips

**Filter chips (`.inbox-tab-chip`):**
- Tabs: All / Saves / Follows
- Active = cyan accent

**Notification row (`.inbox-row`):**
- Avatar: 40px circle
- Special avatar "star": star icon on accent-colored background
- Content text: `<name>` bold + action text regular
- Time code: inline or overflow suffix ("... 2h" pattern)
- Meta col: either Follow button, thumbnail image, or empty

**Follow button (`.inbox-follow-btn`):**
- Small secondary button, rounded, outline style

**Thumbnail (`.inbox-thumbnail`):**
- 48×48px, rounded 8px, background-image cover

**Section groups:**
- Section title: 12px uppercase, muted
- Items in a `.inbox-list` flex column

---

### 5.5 Profile Screen (`#profile-screen`, dynamic hue)

Profile hue is controlled dynamically via DialKit. Color map:
- `#1DB5FF` → `hue-cyan`
- `#9BC926` → `hue-lime`
- `#8A6BE0` → `hue-violet`
- `#FF6B1A` → `hue-orange`
- `#0A0A0A` → `hue-oat`

Default: cyan.

#### Profile Main View

**Top action bar (`.profile-top-actions`):**
- Left: Share icon button (dark icon variant)
- Right: Calendar icon button + Stats icon button (bar chart)
- All use `.icon-action-btn` class with `shadow-sm`

**Identity section (`.profile-identity-section`):**
- Large avatar: **56px circle** (58px in creator overlay context), `#F0F0F0` placeholder bg
- Image: fills circle, `object-fit: cover`
- Name `h1.profile-name`: **16px bold**, `#0D0D0D`, letter-spacing 0
- Handle `.profile-handle`: **14px medium**, `#828282`

**Bio section:**
- Bio paragraph: **12px semibold**, `#0D0D0D` (stronger than expected — not muted)
- Follower stack: 3 overlapping 18px circles (white border 1.5px, gradient fills), negative margin -5px stacking
  - Circle 1: `linear-gradient(135deg, #D2E4FF, #8E7A64)`
  - Circle 2: `linear-gradient(135deg, #1E1E1E, #C7AA82)`
  - Circle 3: `linear-gradient(135deg, #ECE0D1, #80736A)`
- Follower copy: 12px regular, `#0D0D0D`

**Action row (`.profile-action-row`):**
- "Edit Profile" button: height 36px, `#FAFAFA` bg, `1px solid #E9E9E9` border, pill radius, 14px medium
- Secondary icon btn: 32×32px, `#F8F8F8` bg, pill radius
- Settings gear icon SVG (20px)
- X/Twitter filled brand icon SVG (20px)

**Tab bar (`.creator-subfilter-bar`):**
- Two half-width (`flex: 1`) buttons: "All N" and "Collections N"
- Default: 14px medium, `#999`
- Active `.active`: 14px semibold, `#0D0D0D`, 2px `#0D0D0D` underline indicator (`:after`, left/right 10%)
- Border-bottom on bar: `1px solid #F0F0F0`
- `.profile-tab-count` badge: 12px medium, `#828282` on `#F0F0F0` bg (inactive) → cyan `#1DB5FF` on `#E8F7FF` bg (active)

**Filter pills row (`.creator-pill-filters`):**
- Category pills: "Outfits" and "Items" (or collection type tabs in Collections mode)
- Horizontal flex, no scroll

**Masonry grid (`.profile-masonry-grid`):**
- Two columns (`.masonry-col`), `padding: 0 8px 24px`, **8px gap**
- Cards: `.masonry-item.profile-paper-card`
  - **Border radius: 8px** (`.masonry-item` rule)
  - Height explicit per card (186–260px)
  - `background-image: cover`, `#F8F8F8` placeholder
  - `.is-filtered-out` → `display: none`
  - `.profile-card-badge`: absolute bottom-left 8px, 8px radius, 12px bold
    - `--light`: `rgba(255,255,255,0.9)` bg, `#0D0D0D` text
    - `--dark`: `#0D0D0D` bg, `#FFFFFF` text

**Collections grid (`.profile-collections-grid`):**
- 2-column CSS grid, `padding: 0 8px 24px`, row-gap 18px, col-gap 10px
- `.profile-collection-image`: **1:1 aspect-ratio**, **16px border-radius**, cover bg
- `.profile-collection-title`: 16px regular, `#0D0D0D`
- `.profile-collection-stats`: 14px, `#8E8E8E`, bullet separator between items

**FAB (`.profile-fab`):**
- Position: absolute, right 24px, bottom 120px
- **48×48px**, 24px border-radius
- Background: **`#FFFFFF`** (white, not dark), `#0D0D0D` icon color
- Shadow: `0 10px 24px rgba(0,0,0,0.16)`
- Font size: 30px (for "+" character), weight 300
- Active `.fab-active`: `rotate(45deg)`, transition `0.3s cubic-bezier(0.4, 0, 0.2, 1)`

**FAB Menu Overlay (`.profile-menu-overlay`):**
- Full-screen: `rgba(255,255,255,0.7)` + `backdrop-filter: blur(16px)`
- Transition: `opacity 0.22s ease`
- Content blurred behind: `filter: blur(16px) saturate(0.92)` on `.profile-scroll-container.is-dimmed`
- `.profile-menu-card`: **196px wide**, right 16px, bottom 184px, 18px radius, white, `2px solid #EAEAEA`, shadow `0 20px 60px rgba(0,0,0,0.1)`, slides up 18px on open
- Menu items: 12px 14px padding, icon (28×28px, `#F8F8F8` bg, 14px radius) + label (16px regular, −0.02em tracking)
- `.profile-menu-close`: **54×54px**, pill, `#F8F8F8` bg, `2px solid #EAEAEA`, bottom-right at (20px, 20px), z-160

---

#### Profile Sub-screen: Planner View

**Header:**
- Back button (ghost, chev_l icon)
- Center: day name (large) + full date + weather ("65°F Sunny")
- Right: calendar icon with date number overlay

**Day strip (implied horizontal scroll of days):**
- Days: MON–SUN cycle, dates 12–30
- Selected day highlighted
- Touch gesture: swipe left/right to change day

**Month Grid Overlay:**
- Full screen backdrop, dismiss on backdrop tap
- Card: white, rounded, centered
- Month title, weekday headers (S M T W T F S)
- Day buttons: selected (cyan bg), today (outlined), disabled (muted)

**Event Card (`.planner-event-card`):**
- Event name + occasion tag + time tag
- Outfit thumbnails row with "Add Outfit" button

**Event Create Panel:**
- Covers full screen above nav
- Toolbar: close + "Save" button (disabled without name)
- Name input: large text input, auto-focus
- Occasion grid: 8 chips (Casual, Work, Date Night, Party, Wedding, Sport, Travel, Formal)
- Time picker: `<input type="time">`
- Outfits section: appears after adding outfits
- FAB: plus icon, bottom-right

**Outfit Picker Sheet:**
- Modal backdrop + card
- Header: "Choose Outfit" + close button
- Grid of 8 selectable outfit thumbnails with labels

**Planner Look Card:**
- Full-width background image card
- Edit button (pencil icon) in corner

---

#### Profile Sub-screen: Stats View (`.hue-violet`)

**IOSNavBar** with title "My Stats"

**Tabs:** Overview / Unpacked (pill-style tabs)

**Overview content:**
- Top row: two stat metrics
  - Wardrobe value: label + value
  - Wardrobe usage: label + range slider + %
- Circular metric: SVG donut chart with text center, label below
- Expandable sections (3):
  - "What's in my wardrobe?" — color: blue
  - "My usage" — color: orange
  - "Wardrobe Longevity" — color: purple
  - Each has chevron toggle
  - Expanded: breakdown list / pie chart / item cards

**Stats item card (`.stats-item-card`):**
- Image thumbnail + wear badge + cost-per-wear

---

#### Profile Sub-screen: AI Enhancer View (`.hue-lime`)

**Header:** Back button (dark) + "Skip" ghost button

**Stage (center):**
- Image framed in a bordered box with corner indicators (4 absolute corner spans)
- Animated scan line running across image

**Footer:**
- Progress bar: label + percentage + visual track fill
- CTA: "Complete Processing" primary large block button

---

#### Profile Sub-screen: Outfit Breakdown View (`.hue-lime`)

**Header:** Back button only

**Hero image:** Full-width, tall

**Summary:** Outfit name ("Denim Weekend")

**Detected items section:**
- Label: "Items detected"
- Cards grid: each card has image (square) + title
- Cards from `detectedOutfitItems` array

**Footer:** "Save to wardrobe" primary large block button

---

### 5.3 Studio Screen — Corrected Specs

**Canvas:** 172px height, `0 8px` margin, 16px radius, centered placeholder text

**Category pills (studio context):**
- Height: 29px | Padding: `5px 14px` | No border
- Default: transparent, `#999999`
- Active: `#1DB5FF` fill, white text

**Sort pill:** 22px height, `6.25px 12px` padding, 11px radius, `#F8F8F8` bg, 12px medium text, 8px chevron

**Item grid:** 3 columns, 11px gap, items are 1:1 aspect-ratio, 8px radius, 2px transparent border
- Selected state: `#0D0D0D` border, shadow `0 0 0 2px rgba(13,13,13,0.08)`, `scale(0.98)`
- Check badge: 22×22px circle, `#0D0D0D` bg, white stroke, bottom-right 8px

**Footer actions:** absolute, above nav, white gradient fade `rgba(255,255,255,1) → rgba(255,255,255,0)` over 27px
**Create btn:** 45px height, 999px radius, `#0D0D0D` bg, white text, 14px bold, `0 7px 13px rgba(0,0,0,0.2)` shadow

---

### 5.4 Inbox Screen — Corrected Specs

**Title:** 24px semibold, `#0D0D0D`, centered
**Tab chips:** `#F8F8F8` bg, `#828282` text, active = `#0D0D0D` / `#FAFAFA`, 999px radius, 14px regular
**Section title:** 14px regular, `#828282`, capitalized
**Avatar:** 44×44px circle
- Star avatar: `#FFF5E6` bg, `1px solid #FFE4BC`, `#F39C12` star icon
**Action line:** 14px, `#333333`, 2-line clamp; name = semibold `#000000`
**Time code:** 14px, `#8E8E8E`
**Follow button:** 6px radius, `#F8F8F8` bg, 12px, padding `5px 10px`
**Thumbnail:** 44×44px, 6px radius, cover bg

---

### 5.5 Profile Planner — Corrected Specs

**Planner day chip:** 48×48px circle, `#F8F8F8` bg, active = `#0D0D0D` bg white text
- Day label: 12px, 0.08em letter-spacing
- Date num: 16px regular

**Event card (`.planner-event-card`):**
- Border: `1.5px dashed #B8DFF5` | Background: `#EDF7FD` | Radius: 16px
- Event tag: 12px medium, `#1D8EB5` text, `#D0EDFA` bg, pill

**Outfit thumbs:** 72×90px, 10px radius, cover bg
- Label overlay: 9px medium, `rgba(0,0,0,0.45)` bg, white text
**Add outfit button:** 72×90px, `1.5px dashed #7EC8E8`, cyan `#1DB5FF` icon/text

**Planner FAB:** 56×56px circle, `#0D0D0D` bg, white icon, `0 4px 16px rgba(0,0,0,0.18)` shadow
**Event create FAB:** same spec, bottom 32px, right 24px

**Event create name input:** 20px semibold, transparent bg, placeholder `#C8C8C8`
**Event create save btn:** 32px height, 999px radius, `#0D0D0D`, 14px semibold; disabled = opacity 0.3
**Field label:** 12px semibold, `#828282`, uppercase, 0.06em tracking
**Field input:** 44px height, `1px solid #EAEAEA`, 10px radius, focus border `#1DB5FF`
**Occasion chips:** active = `#0D0D0D` bg + border

**Planner look card:** 312px min-height, **28px radius**, cover image + gradient overlay
- Edit button: 34×34px circle, `rgba(255,255,255,0.18)` + `blur(6px)`

**Month grid overlay:** `rgba(0,0,0,0.3)` backdrop
- Card: full width, white, `0 8px 24px rgba(0,0,0,0.12)`
- Selected day: `#1DB5FF` fill, white text, semibold
- Today day: `#1DB5FF` text only, semibold
- Disabled: `#D0D0D0`

**Outfit picker modal:**
- Backdrop: `rgba(0,0,0,0.4)`, bottom-anchored
- Sheet: white, `24px` top radius (`var(--radius-lg)`), max-height 85vh
- Grid: 2 cols, 10px gap, 3:4 aspect ratio cards, 12px radius
- Selected highlight: `#1DB5FF` border on hover/active

---

## 6. Bottom Navigation (`.app-bottom-nav`)

| Property | Value |
|---|---|
| Position | Absolute, left/right 12px, bottom 12px |
| Height | 82px (`--app-bottom-nav-height`) |
| Padding inline | 18px |
| Border radius | 40px |
| Background | `linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(247,247,247,0.78) 100%)` |
| Border | `1px solid rgba(255,255,255,0.72)` |
| Backdrop filter | `blur(22px) saturate(1.08)` |
| Box shadow | `0 14px 32px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.78)` |
| z-index | 12 |
| Transition | `opacity 200ms ease-out` |

**Nav buttons (`.discover-nav-button`):**
- 40×40px, transparent bg, centered icon
- Inactive: `#828282` (or `#A0A0A0`)
- Active `.discover-nav-active`: `#0D0D0D`
- Icon size: 24×24px, stroke 2

**Tabs:** Discover (globe), Search (search), Create (hanger), Notifications (bell), Profile (user)

**Visibility:** Hidden when profile screen is in ai-enhancer or planner sub-view.

---

## 7. iOS Component Library (`src/design-system/ios-frame.jsx`)

### IOSGlassPill
Full liquid-glass effect: blur(12px) saturate(180%), shine insets, 44px height, pill radius.
- Light: `rgba(255,255,255,0.5)` tint, white inset shine
- Dark: `rgba(120,120,128,0.28)` tint, muted white shine

### IOSNavBar
- Glass pill back button (left) + optional trailing icon
- Large title: 32px (configurable `titleSize`), 700wt, Inter
- Positioned below status bar (paddingTop: 62px)

### IOSList / IOSListRow
- List container: 26px radius, `0 16px` margin, overflow hidden
- Row: 52px min-height, SF Pro −0.43 letter-spacing
- Icon chip: 30×30px, 7px radius, solid color background
- Separator: 0.5px absolute bottom line
- Chevron: 8×14px inline SVG

### IOSKeyboard
- Liquid glass background: same recipe as pill
- 3-bar autocorrect suggestion bar
- Standard QWERTY layout, 42px key height, 8.5px radius
- Special keys: shift, delete, return (blue `#08f`)
- Bottom spacer: 56px (emoji/mic area)

---

## 8. Animation Patterns

### Keyframes

| Name | Effect |
|---|---|
| `fadeIn` | opacity 0→1, 300ms ease-out |
| `slideUp` | opacity 0→1 + translateY(8px→0) |
| `slideUpStaggered` | opacity 0→1 + translateY(12px→0) |
| `discoverGridSlideLeft` | translateX(−48px→0), 320ms |
| `discoverGridSlideRight` | translateX(48px→0), 320ms |
| `discoverGridFade` | opacity 0→1, 480ms |

### Screen transitions
- Screens fade in/out via `opacity` and `display` toggle
- Screen appears: 200ms ease-out opacity transition

### Interactive states
- All buttons/cards: `scale(0.97–0.985)` on `:active`
- Buttons: background color transition fast (140ms)
- Category pills: all-property transition 200ms spring

---

## 9. Data / Content Structure

### Discover Feed Cards
Each card has: `id`, `column` (0 or 1), `type` ("outfit" | "item"), `height` (px), `imageUrl`, `imagePosition`, `author`, `authorAvatar`, `context`, `count`, optional `title`/`subtitle`.

18 cards total. Heights range from 164px to 326px.

### Profile Content
- Masonry grid: 2 columns × 2 cards each (4 total). Heights: 186–260px.
- Collections: 3 tabs (Wishlists, Lookbooks, Moodboards), 4 items each. Each has `title`, `imageUrl`, `itemCount`, `outfitCount`.

### Planner
- Days: 19 items (MON Apr 12 – FRI Apr 30)
- "Today" = index 1 (TUE Apr 13)
- Events created locally with: name, occasion, time, outfits array
- 8 selectable outfits for planner

### Explore
- 5 category filters: All, Streetwear, Archive, Y2K, Office
- Hero content switches per category (title, tag, image)
- 5 brands, 7 curators, 3 trending outfits — all filterable by category

### Inbox
- 3 tabs: All, Saves, Follows
- Sections grouped by time ("New today", "This week", "Earlier")
- Row types: `follow` (has follow button), `save` (has thumbnail), `stat` (star avatar, no image)

### Studio
- 6 items across 5 categories: Tops (2), Outerwear (1), Bottoms (1), Footwear (1), Accessories (1)
- Selection state: one selected per category

---

## 10. Special Patterns

### Glassmorphism (Bottom Nav + iOS Nav Pills)
Recipe: `backdrop-filter: blur(22px) saturate(1.08)` + semi-transparent gradient background + top inset white highlight + outer shadow.

### Image Drop/Paste
App-wide drag-and-drop and paste-to-replace for image slots. Targets: `discover-card-image`, `discover-overlay-hero`, `profile-large-avatar`, `masonry-item`, `trending-outfit-card`, `discover-overlay-item-image`.

### Garment Thumbnail Swatches
12 CSS gradients used as placeholder backgrounds for unloaded garment images. Colors: cream, charcoal, sky, tan, stone, forest, oat, oxblood, ivory, moss, camel, pale blue.

### DialKit
Real-time design knob system (bottom-left panel). Used to tune spacing, font sizes, radii across Discover Overlay, Discover Tabs, Profile, Stats NavBar, Planner FAB, Event Create panel. Values accessible via `useDialKit(panelName, defaults)`.

### Agentation
Annotation overlay synced to a local webhook (port 4747). Persists annotations per route. Used for design notes/markup during prototyping.

---

## 11. Key Design Decisions & Patterns

1. **Hue-per-section**: Each major context (Discover=cyan, Profile=lime/violet, Stats=violet) uses a warm or cool wash rather than a stark white background. Creates contextual mood without heavy color.

2. **Ink-first**: All text and icons use the `ink-*` token ladder (absolute grays) rather than hue-relative colors, so contrast stays consistent across all screen hues.

3. **Floating pill nav**: The bottom navigation floats above content on a glass pill rather than sitting flush — gives a sense of depth and allows content to scroll under it.

4. **Masonry with explicit heights**: Card heights are hardcoded per card (not auto) to prevent layout shift. Right column has a 40px offset for visual interest.

5. **Discover card author position**: Author info renders at the bottom of the card in the feed (`isBottom: true` in feed dials) but at the top in the outfit overlay. This surfaces critical info at the optimal position given context.

6. **Active-state tab slider**: The "For You / Following" tabs use an absolutely-positioned background pill that animates its width and left position via JS measurement — not a CSS-only approach — to handle variable tab widths.

7. **Sticky overlay footer**: The Discover Outfit overlay footer fades and slides out as the user scrolls past the items section, reducing visual noise when exploring "More like this."

8. **Profile hue is user-driven**: The profile screen hue responds to the user's accent color preference (mapped from 5 brand colors). This makes the profile feel personalized.
