#!/usr/bin/env node
'use strict';

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'public', 'assets', 'images');
const APP_JSX = path.join(ROOT, 'src', 'App.jsx');
const PORT = 3737;

fs.mkdirSync(IMG_DIR, { recursive: true });

// ─── Slot definitions ──────────────────────────────────────────────────────

const DISCOVER_CARDS = [
  { id: 'discover-1',  author: 'Sophie',  label: "Sophie — Summer '26",    type: 'outfit' },
  { id: 'discover-2',  author: 'Lina',    label: 'Lina — Butter Set',      type: 'item'   },
  { id: 'discover-3',  author: 'Mia',     label: 'Mia — Airport Knit',     type: 'item'   },
  { id: 'discover-4',  author: 'Jules',   label: 'Jules — Weekend Edit',   type: 'outfit' },
  { id: 'discover-5',  author: 'Noor',    label: 'Noor — Cloud Hoodie',    type: 'item'   },
  { id: 'discover-6',  author: 'Mia',     label: 'Mia — Airport Look',     type: 'outfit' },
  { id: 'discover-7',  author: 'Noor',    label: 'Noor — Monochrome',      type: 'outfit' },
  { id: 'discover-8',  author: 'Leah',    label: 'Leah — Denim Core',      type: 'outfit' },
  { id: 'discover-9',  author: 'Aya',     label: 'Aya — White Boots',      type: 'item'   },
  { id: 'discover-10', author: 'Leah',    label: 'Leah — Soft Knit',       type: 'item'   },
  { id: 'discover-11', author: 'Aya',     label: 'Aya — City Layers',      type: 'outfit' },
  { id: 'discover-12', author: 'Jules',   label: 'Jules — Street Tote',    type: 'item'   },
  { id: 'discover-13', author: 'Marcus',  label: 'Marcus — Casual Friday', type: 'outfit' },
  { id: 'discover-14', author: 'Riley',   label: 'Riley — Weekend Vibe',   type: 'outfit' },
  { id: 'discover-15', author: 'Jordan',  label: 'Jordan — Minimalist',    type: 'outfit' },
  { id: 'discover-16', author: 'Casey',   label: 'Casey — Vintage Mix',    type: 'outfit' },
  { id: 'discover-17', author: 'Sam',     label: 'Sam — Maximalist',       type: 'outfit' },
  { id: 'discover-18', author: 'Alex',    label: 'Alex — Tech Wear',       type: 'outfit' },
];

const UNIQUE_AUTHORS = [...new Set(DISCOVER_CARDS.map(c => c.author))];

const PROFILE_GRID = [
  { id: 'pg1', label: 'Profile Grid 1' },
  { id: 'pg2', label: 'Profile Grid 2' },
  { id: 'pg3', label: 'Profile Grid 3' },
  { id: 'pg4', label: 'Profile Grid 4' },
];

const PROFILE_MASONRY = [
  { id: 'profile-item-jacket',      label: 'Wardrobe — Jacket'      },
  { id: 'profile-outfit-gray',      label: 'Wardrobe — Gray Outfit' },
  { id: 'profile-item-placeholder', label: 'Wardrobe — Placeholder' },
  { id: 'profile-outfit-tee',       label: 'Wardrobe — Tee Outfit'  },
];

const STUDIO_ITEMS = [
  { id: 's1', label: 'Studio — Yellow Hoodie' },
  { id: 's2', label: 'Studio — Outerwear'      },
  { id: 's3', label: 'Studio — Top'            },
  { id: 's4', label: 'Studio — Footwear'       },
  { id: 's5', label: 'Studio — Bottoms'        },
  { id: 's6', label: 'Studio — Accessories'    },
];

const OUTFIT_DETAIL_ITEMS = [
  { id: 'detail-item-1', label: 'Outfit Detail — Yellow Hoodie' },
  { id: 'detail-item-2', label: 'Outfit Detail — Yellow Pants'  },
  { id: 'detail-item-3', label: 'Outfit Detail — Air Force 1'   },
];

function getImageTarget(slotId) {
  if (slotId.startsWith('avatar-')) return { width: 512, height: 512, fit: 'cover', quality: 0.92 };
  if (slotId.startsWith('discover-')) return { width: 960, height: 1200, fit: 'cover', quality: 0.9 };
  if (slotId.startsWith('pg')) return { width: 720, height: 900, fit: 'cover', quality: 0.9 };
  if (slotId.startsWith('profile-')) return { width: 720, height: 900, fit: 'cover', quality: 0.9 };
  if (slotId.startsWith('detail-')) return { width: 640, height: 800, fit: 'cover', quality: 0.9 };
  if (/^s\d/.test(slotId)) return { width: 640, height: 640, fit: 'cover', quality: 0.92 };
  return { width: 960, height: 1200, fit: 'cover', quality: 0.9 };
}

// ─── Regex helpers ─────────────────────────────────────────────────────────

function escRx(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ─── App.jsx patching ──────────────────────────────────────────────────────

function patchDiscoverCardImage(content, cardId, newPath) {
  const rx = new RegExp(
    `(id:\\s*'${escRx(cardId)}'[\\s\\S]{0,500}?imageUrl:\\s*')[^']+(')`
  );
  if (!rx.test(content)) return null;
  return content.replace(rx, `$1${newPath}$2`);
}

function patchAuthorAvatar(content, authorName, newPath) {
  // \r?\n handles both CRLF (Windows) and LF line endings
  const removeRx = new RegExp(
    `([ \\t]*author:\\s*'${escRx(authorName)}',\\r?\\n)([ \\t]*authorAvatar:\\s*'[^']*',\\r?\\n)`,
    'g'
  );
  let patched = content.replace(removeRx, '$1');

  const insertRx = new RegExp(
    `([ \\t]*)(author:\\s*'${escRx(authorName)}',)(\\r?\\n)`,
    'g'
  );
  patched = patched.replace(insertRx, `$1$2$3$1authorAvatar: '${newPath}',$3`);
  return patched;
}

function patchProfileGrid(content, pgId, newPath) {
  const rx = new RegExp(
    `(id:\\s*'${escRx(pgId)}'[\\s\\S]{0,150}?url:\\s*')[^']+(')`
  );
  if (!rx.test(content)) return null;
  return content.replace(rx, `$1${newPath}$2`);
}

function patchProfileMasonry(content, itemId, newPath) {
  if (itemId === 'profile-item-placeholder') {
    // imageUrl is null, need to replace null with the new string
    const rx = new RegExp(
      `(id:\\s*'${escRx(itemId)}'[\\s\\S]{0,300}?imageUrl:\\s*)null`
    );
    if (!rx.test(content)) return null;
    return content.replace(rx, `$1'${newPath}'`);
  }
  const rx = new RegExp(
    `(id:\\s*'${escRx(itemId)}'[\\s\\S]{0,300}?imageUrl:\\s*')[^']+(')`
  );
  if (!rx.test(content)) return null;
  return content.replace(rx, `$1${newPath}$2`);
}

function patchStudioItem(content, itemId, newPath) {
  const rx = new RegExp(
    `(id:\\s*'${escRx(itemId)}'[\\s\\S]{0,150}?url:\\s*')[^']+(')`
  );
  if (!rx.test(content)) return null;
  return content.replace(rx, `$1${newPath}$2`);
}

function patchOutfitDetail(content, itemId, newPath) {
  // discoverOutfitDetails has two sections (default + discover-1) with same item ids
  // Replace all occurrences
  const rx = new RegExp(
    `(id:\\s*'${escRx(itemId)}'[\\s\\S]{0,150}?imageUrl:\\s*')[^']+(')`
  , 'g');
  if (!rx.test(content)) return null;
  return content.replace(
    new RegExp(
      `(id:\\s*'${escRx(itemId)}'[\\s\\S]{0,150}?imageUrl:\\s*')[^']+(')`
    , 'g'),
    `$1${newPath}$2`
  );
}

function patchAppJsxSync(slotId, newPath) {
  let content = fs.readFileSync(APP_JSX, 'utf8');
  let patched;

  if (slotId.startsWith('avatar-')) {
    const authorName = slotId.replace('avatar-', '');
    patched = patchAuthorAvatar(content, authorName, newPath);
    // authorAvatar always returns a string; check it actually changed
    if (patched === content) { console.error(`[patch] no match for avatar-${authorName}`); return false; }
  } else if (slotId.startsWith('discover-')) {
    patched = patchDiscoverCardImage(content, slotId, newPath);
    if (!patched) { console.error(`[patch] no match for ${slotId}`); return false; }
  } else if (slotId.startsWith('pg')) {
    patched = patchProfileGrid(content, slotId, newPath);
    if (!patched) { console.error(`[patch] no match for ${slotId}`); return false; }
  } else if (slotId.startsWith('profile-')) {
    patched = patchProfileMasonry(content, slotId, newPath);
    if (!patched) { console.error(`[patch] no match for ${slotId}`); return false; }
  } else if (slotId.startsWith('detail-')) {
    patched = patchOutfitDetail(content, slotId, newPath);
    if (!patched) { console.error(`[patch] no match for ${slotId}`); return false; }
  } else if (/^s\d/.test(slotId)) {
    patched = patchStudioItem(content, slotId, newPath);
    if (!patched) { console.error(`[patch] no match for ${slotId}`); return false; }
  } else {
    return false;
  }

  fs.writeFileSync(APP_JSX, patched, 'utf8');
  console.log(`[patch] ✓ ${slotId} → ${newPath}`);
  return true;
}

// Serialise all App.jsx writes so concurrent drops don't clobber each other
let writeQueue = Promise.resolve();
function patchAppJsx(slotId, newPath) {
  return new Promise((resolve) => {
    writeQueue = writeQueue.then(() => {
      try { resolve(patchAppJsxSync(slotId, newPath)); }
      catch (e) { console.error('[patch] exception', e.message); resolve(false); }
    });
  });
}

// ─── Current image extraction ──────────────────────────────────────────────

function getCurrentImages() {
  const content = fs.readFileSync(APP_JSX, 'utf8');
  const result = {};

  for (const card of DISCOVER_CARDS) {
    const rx = new RegExp(
      `id:\\s*'${escRx(card.id)}'[\\s\\S]{0,500}?imageUrl:\\s*'([^']+)'`
    );
    const m = content.match(rx);
    result[card.id] = m ? m[1] : null;
  }

  for (const author of UNIQUE_AUTHORS) {
    const rx = new RegExp(
      `author:\\s*'${escRx(author)}'[\\s\\S]{0,300}?authorAvatar:\\s*'([^']+)'`
    );
    const m = content.match(rx);
    result[`avatar-${author}`] = m ? m[1] : null;
  }

  for (const pg of PROFILE_GRID) {
    const rx = new RegExp(`id:\\s*'${escRx(pg.id)}'[\\s\\S]{0,150}?url:\\s*'([^']+)'`);
    const m = content.match(rx);
    result[pg.id] = m ? m[1] : null;
  }

  for (const item of PROFILE_MASONRY) {
    const rx = new RegExp(`id:\\s*'${escRx(item.id)}'[\\s\\S]{0,300}?imageUrl:\\s*'([^']+)'`);
    const m = content.match(rx);
    result[item.id] = m ? m[1] : null;
  }

  for (const item of STUDIO_ITEMS) {
    const rx = new RegExp(`id:\\s*'${escRx(item.id)}'[\\s\\S]{0,150}?url:\\s*'([^']+)'`);
    const m = content.match(rx);
    result[item.id] = m ? m[1] : null;
  }

  for (const item of OUTFIT_DETAIL_ITEMS) {
    const rx = new RegExp(`id:\\s*'${escRx(item.id)}'[\\s\\S]{0,150}?imageUrl:\\s*'([^']+)'`);
    const m = content.match(rx);
    result[item.id] = m ? m[1] : null;
  }

  return result;
}

// ─── Static file server ────────────────────────────────────────────────────

const MIME = {
  jpg: 'image/jpeg', jpeg: 'image/jpeg',
  png: 'image/png', gif: 'image/gif', webp: 'image/webp',
};

function serveFile(res, filepath) {
  try {
    const data = fs.readFileSync(filepath);
    const ext = path.extname(filepath).slice(1).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
}

function exportImages() {
  const result = {};
  const entries = fs.readdirSync(IMG_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile()) continue;

    const ext = path.extname(entry.name).slice(1).toLowerCase();
    const mimeType = MIME[ext];
    if (!mimeType) continue;

    const slotId = path.basename(entry.name, path.extname(entry.name));
    const fullPath = path.join(IMG_DIR, entry.name);

    result[slotId] = {
      base64: fs.readFileSync(fullPath).toString('base64'),
      mimeType,
      path: `/assets/images/${entry.name}`,
    };
  }

  return result;
}

function proxyImage(req, res, targetUrl) {
  const parsed = new URL(targetUrl);
  const mod = parsed.protocol === 'https:' ? https : http;
  const options = {
    hostname: parsed.hostname,
    path: parsed.pathname + parsed.search,
    headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': parsed.origin },
  };
  const proxyReq = mod.get(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, {
      'Content-Type': proxyRes.headers['content-type'] || 'image/jpeg',
      'Cache-Control': 'public, max-age=86400',
    });
    proxyRes.pipe(res);
  });
  proxyReq.on('error', () => { res.writeHead(502); res.end(); });
}

// ─── Upload handler ────────────────────────────────────────────────────────

function handleUpload(req, res) {
  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', async () => {
    try {
      const { slotId, base64, mimeType } = JSON.parse(body);
      if (!slotId || !base64 || !mimeType) throw new Error('Missing fields');

      const rawExt = mimeType.split('/')[1] || 'jpg';
      const ext = rawExt === 'jpeg' ? 'jpg' : rawExt;
      const filename = `${slotId}.${ext}`;
      const filepath = path.join(IMG_DIR, filename);
      const newPath = `/assets/images/${filename}`;

      fs.writeFileSync(filepath, Buffer.from(base64, 'base64'));
      const ok = await patchAppJsx(slotId, newPath);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok, newPath }));
    } catch (err) {
      console.error('[upload] error', err.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: err.message }));
    }
  });
}

// ─── HTML ──────────────────────────────────────────────────────────────────

function slotDataJson() {
  return JSON.stringify({
    discoverCards: DISCOVER_CARDS,
    uniqueAuthors: UNIQUE_AUTHORS,
    profileGrid: PROFILE_GRID,
    profileMasonry: PROFILE_MASONRY,
    studioItems: STUDIO_ITEMS,
    outfitDetailItems: OUTFIT_DETAIL_ITEMS,
  });
}

function getHTML() {
  return /* html */`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Whering — Image Manager</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0f0f0f;
    color: #e5e5e5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    min-height: 100vh;
    padding: 80px 24px 64px;
  }
  #status-bar {
    position: fixed;
    top: 0; left: 0; right: 0;
    padding: 0 24px;
    height: 52px;
    display: flex; align-items: center; gap: 10px;
    font-size: 14px; font-weight: 500;
    z-index: 9999;
    border-bottom: 1px solid #1e1e1e;
    background: #111;
    color: #444;
  }
  #status-bar .dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #2a2a2a; flex-shrink: 0;
  }
  #status-bar.ok { background: #0d2b1a; border-color: #166534; color: #4ade80; }
  #status-bar.ok .dot { background: #4ade80; }
  #status-bar.err { background: #2b0d0d; border-color: #7f1d1d; color: #f87171; }
  #status-bar.err .dot { background: #f87171; }
  #status-bar.busy { background: #0d1a2b; border-color: #1e3a5f; color: #60a5fa; }
  #status-bar.busy .dot { background: #60a5fa; animation: pulse 0.8s ease-in-out infinite alternate; }
  @keyframes pulse { to { opacity: 0.3; } }
  #log {
    font-size: 11px; color: #444; margin-left: auto;
  }
  #export-btn {
    margin-left: 16px;
    border: 1px solid #2a2a2a;
    background: #171717;
    color: #ddd;
    border-radius: 999px;
    padding: 8px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
  #export-btn:hover { border-color: #444; background: #1d1d1d; }
  h1 { font-size: 20px; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
  .subtitle { font-size: 13px; color: #666; margin-bottom: 24px; }
  .intro {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
    gap: 14px;
    margin-bottom: 28px;
  }
  .intro-card {
    border: 1px solid #1f1f1f;
    background: #141414;
    border-radius: 18px;
    padding: 16px 18px;
  }
  .intro-kicker {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #7c9cff;
    margin-bottom: 8px;
  }
  .intro-card h2 {
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 6px;
  }
  .intro-card p {
    font-size: 13px;
    line-height: 1.5;
    color: #8a8a8a;
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  }
  .legend-chip {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border-radius: 999px;
    border: 1px solid #262626;
    background: #171717;
    padding: 7px 10px;
    font-size: 12px;
    color: #bdbdbd;
  }
  .legend-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .legend-dot.item { background: #f5d565; }
  .legend-dot.outfit { background: #8fb8ff; }
  .legend-dot.empty { background: #737373; }
  .legend-dot.filled { background: #4ade80; }
  .section { margin-bottom: 48px; }
  .section.featured {
    padding: 18px;
    border-radius: 20px;
    border: 1px solid #1f2d44;
    background: linear-gradient(180deg, rgba(22, 35, 57, 0.78), rgba(15, 15, 15, 0.98));
  }
  .section-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
  }
  .section-copy {
    min-width: 0;
  }
  .section-kicker {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #7c9cff;
    margin-bottom: 6px;
  }
  .section-title {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #ececec;
    margin-bottom: 4px;
  }
  .section-meta {
    font-size: 12px;
    line-height: 1.45;
    color: #767676;
    max-width: 720px;
  }
  .section-count {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    border: 1px solid #2b2b2b;
    background: #171717;
    padding: 7px 10px;
    font-size: 11px;
    font-weight: 600;
    color: #9c9c9c;
  }
  .slot-meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 10px;
    font-size: 11px;
    color: #7a7a7a;
  }
  .slot-type-chip {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 4px 8px;
    border: 1px solid #262626;
    background: #171717;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
    font-weight: 700;
  }
  .slot-type-chip.item { color: #86bfff; }
  .slot-type-chip.outfit { color: #b5a2ff; }
  .slot-state-text {
    font-size: 11px;
    color: #8d8d8d;
  }
  .grid {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
  .grid.avatars { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }
  .slot-card {
    display: flex;
    flex-direction: column;
  }
  .slot {
    position: relative;
    border-radius: 12px;
    border: 1.5px dashed #2a2a2a;
    background: #141414;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    overflow: hidden;
    aspect-ratio: 3/4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .slot.avatar-slot { aspect-ratio: 1/1; border-radius: 50%; }
  .slot.wide { aspect-ratio: 4/3; }
  .slot:hover { border-color: #444; background: #1a1a1a; }
  .slot.drag-over { outline: 2px solid #4f8cff; background: #0d1a2e; border-style: solid; }
  .slot.success { outline: 3px solid #4ade80; border-color: #4ade80; }
  .slot.error { outline: 3px solid #f87171; border-color: #f87171; }
  .slot-img {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
    border-radius: inherit;
  }
  .slot-empty {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
  }
  .slot-empty.hidden { display: none; }
  .slot-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slot:hover .slot-overlay, .slot.drag-over .slot-overlay { opacity: 1; }
  .slot-overlay-icon {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
  }
  .slot-label {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 20px 8px 8px;
    font-size: 10px;
    font-weight: 500;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0,0,0,0.9);
    line-height: 1.3;
    z-index: 1;
    background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%);
    pointer-events: none;
    border-radius: 0 0 inherit inherit;
  }
  .slot-label.no-image {
    color: #555; text-shadow: none; background: none;
    text-align: center; bottom: auto; top: 50%;
    transform: translateY(-50%); padding: 0 8px;
  }
  .slot-badge {
    position: absolute;
    top: 6px; right: 6px;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 2px 6px;
    border-radius: 99px;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(6px);
    color: #aaa;
    z-index: 1;
  }
  .slot-badge.outfit { color: #8fb8ff; }
  .slot-badge.item { color: #60a5fa; }
  .slot-badge.example { color: #8fb8ff; }
  .slot-badge.empty {
    left: 6px;
    right: auto;
    color: #f5d565;
  }
  .spinner {
    position: absolute;
    inset: 0; border-radius: inherit;
    background: rgba(0,0,0,0.5);
    display: none; align-items: center; justify-content: center;
    z-index: 2;
  }
  .spinner.show { display: flex; }
  .spinner::after {
    content: '';
    width: 20px; height: 20px;
    border-radius: 50%;
    border: 2px solid #555;
    border-top-color: #fff;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .paste-hint {
    font-size: 11px; color: #444; margin-top: 10px;
    text-align: center;
  }
  @media (max-width: 860px) {
    body { padding-left: 16px; padding-right: 16px; }
    #status-bar { padding: 0 16px; }
    .intro { grid-template-columns: 1fr; gap: 12px; }
    .section-head { flex-direction: column; gap: 10px; }
  }
</style>
</head>
<body>

<div id="status-bar"><div class="dot"></div><span id="status-msg">Ready — drop images onto slots</span><span id="log"></span></div>

<h1>Whering — Image Manager</h1>
<p class="subtitle">Drop an image onto any slot, click to pick a file, or hover a slot then Ctrl+V to paste.</p>

<div class="intro">
  <div class="intro-card">
    <div class="intro-kicker">Best Place To Start</div>
    <h2>Item slots are broken out separately</h2>
    <p>Use the dedicated item section first. Those slots map to the Discover cards tagged as items, so you can drop the item images there directly and ignore the rest.</p>
  </div>
  <div class="intro-card">
    <div class="intro-kicker">Legend</div>
    <div class="legend">
      <div class="legend-chip"><span class="legend-dot item"></span>Item image slot</div>
      <div class="legend-chip"><span class="legend-dot outfit"></span>Outfit/example card</div>
      <div class="legend-chip"><span class="legend-dot empty"></span>Needs image</div>
      <div class="legend-chip"><span class="legend-dot filled"></span>Already filled</div>
    </div>
  </div>
</div>

<div id="sections"></div>

<input type="file" id="file-input" accept="image/*" style="display:none">

<script>
const DATA = ${slotDataJson()};
let currentImages = {};
let focusedSlotId = null;

async function loadCurrentImages() {
  const res = await fetch('/current-data');
  currentImages = await res.json();
  render();
}

function imgSrc(url, bust) {
  if (!url) return null;
  if (url.startsWith('/assets/')) return url + (bust ? '?t=' + Date.now() : '');
  // Proxy external URLs through the server to avoid CORS / auth issues
  return '/proxy?url=' + encodeURIComponent(url);
}

function makeSlot(slotId, label, badge, isAvatar, isWide) {
  const wrapper = document.createElement('div');
  wrapper.className = 'slot-card';

  const div = document.createElement('div');
  div.className = 'slot' + (isAvatar ? ' avatar-slot' : '') + (isWide ? ' wide' : '');
  div.dataset.slotId = slotId;
  wrapper.appendChild(div);

  const url = imgSrc(currentImages[slotId]);
  const isDiscoverSlot = slotId.startsWith('discover-');

  // Image element (visible when loaded)
  const img = document.createElement('img');
  img.className = 'slot-img';
  img.alt = '';
  img.dataset.slotImg = slotId;
  if (url) {
    img.src = url;
    img.onerror = () => { img.style.display = 'none'; lbl.classList.add('no-image'); };
  } else {
    img.style.display = 'none';
  }
  div.appendChild(img);

  // Empty state icon
  const empty = document.createElement('div');
  empty.className = 'slot-empty' + (url ? ' hidden' : '');
  empty.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>';
  div.appendChild(empty);

  const overlay = document.createElement('div');
  overlay.className = 'slot-overlay';
  overlay.innerHTML = '<div class="slot-overlay-icon">+</div>';
  div.appendChild(overlay);

  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  div.appendChild(spinner);

  if (badge && !isDiscoverSlot) {
    const b = document.createElement('div');
    b.className = \`slot-badge \${badge}\`;
    b.textContent = badge;
    div.appendChild(b);
  }

  if (!url) {
    const missing = document.createElement('div');
    missing.className = 'slot-badge empty';
    missing.textContent = 'empty';
    div.appendChild(missing);
  }

  var lbl = document.createElement('div');
  lbl.className = 'slot-label' + (!url ? ' no-image' : '');
  lbl.textContent = label;
  div.appendChild(lbl);

  // Events
  div.addEventListener('dragover', e => { e.preventDefault(); div.classList.add('drag-over'); });
  div.addEventListener('dragleave', () => div.classList.remove('drag-over'));
  div.addEventListener('drop', e => {
    e.preventDefault();
    div.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) uploadFile(slotId, file, div);
  });
  div.addEventListener('mouseenter', () => { focusedSlotId = slotId; });
  div.addEventListener('mouseleave', () => { if (focusedSlotId === slotId) focusedSlotId = null; });
  div.addEventListener('click', () => {
    const input = document.getElementById('file-input');
    input.onchange = () => { if (input.files[0]) uploadFile(slotId, input.files[0], div); input.value = ''; };
    input.click();
  });

  if (isDiscoverSlot) {
    const meta = document.createElement('div');
    meta.className = 'slot-meta-row';

    const typeChip = document.createElement('div');
    typeChip.className = 'slot-type-chip ' + (badge || 'item');
    typeChip.textContent = badge || 'item';
    meta.appendChild(typeChip);

    const state = document.createElement('div');
    state.className = 'slot-state-text';
    state.textContent = url ? 'filled' : 'empty';
    meta.appendChild(state);

    wrapper.appendChild(meta);
  }

  return wrapper;
}

function makeSection(options) {
  const {
    title,
    description = '',
    slots = [],
    isAvatar = false,
    isWide = false,
    kicker = '',
    featured = false,
    prioritizeMissing = false,
  } = options;

  const section = document.createElement('div');
  section.className = 'section' + (featured ? ' featured' : '');

  const head = document.createElement('div');
  head.className = 'section-head';

  const copy = document.createElement('div');
  copy.className = 'section-copy';

  if (kicker) {
    const eyebrow = document.createElement('div');
    eyebrow.className = 'section-kicker';
    eyebrow.textContent = kicker;
    copy.appendChild(eyebrow);
  }

  const h = document.createElement('div');
  h.className = 'section-title';
  h.textContent = title;
  copy.appendChild(h);

  if (description) {
    const meta = document.createElement('div');
    meta.className = 'section-meta';
    meta.textContent = description;
    copy.appendChild(meta);
  }

  head.appendChild(copy);

  const count = document.createElement('div');
  count.className = 'section-count';
  count.textContent = slots.length + ' slots';
  head.appendChild(count);

  section.appendChild(head);

  const grid = document.createElement('div');
  grid.className = 'grid' + (isAvatar ? ' avatars' : '');

  const displaySlots = [...slots];
  if (prioritizeMissing) {
    displaySlots.sort((a, b) => {
      const aFilled = Boolean(currentImages[a.id]);
      const bFilled = Boolean(currentImages[b.id]);
      if (aFilled !== bFilled) return aFilled ? 1 : -1;
      return a.label.localeCompare(b.label);
    });
  }

  for (const s of displaySlots) {
    grid.appendChild(makeSlot(s.id, s.label, s.badge || null, isAvatar, isWide));
  }
  section.appendChild(grid);
  return section;
}

function render() {
  const container = document.getElementById('sections');
  container.innerHTML = '';

  const discoverItemSlots = DATA.discoverCards
    .filter((c) => c.type === 'item')
    .map((c) => ({
      id: c.id,
      label: c.label,
      badge: 'item',
    }));

  const discoverOutfitSlots = DATA.discoverCards
    .filter((c) => c.type === 'outfit')
    .map((c) => ({
      id: c.id,
      label: c.label,
      badge: 'outfit',
    }));

  container.appendChild(makeSection({
    kicker: 'Main Feed',
    title: 'Item Image Slots',
    description: 'Drop your item images here. These slots map to the Discover cards that are logically tagged as items.',
    slots: discoverItemSlots,
    featured: true,
    prioritizeMissing: true,
  }));

  container.appendChild(makeSection({
    kicker: 'Main Feed',
    title: 'Outfit / Example Cards',
    description: 'These are the Discover cards currently being used as outfit examples. You can leave these alone unless you want to replace one.',
    slots: discoverOutfitSlots,
    featured: true,
    prioritizeMissing: true,
  }));

  container.appendChild(makeSection({
    kicker: 'People',
    title: 'Author Avatars',
    description: 'Profile photos used across Discover cards and overlays.',
    slots: DATA.uniqueAuthors.map(a => ({ id: \`avatar-\${a}\`, label: a })),
    isAvatar: true,
    prioritizeMissing: true,
  }));

  container.appendChild(makeSection({
    kicker: 'Profile',
    title: 'Profile Grid',
    description: 'Top-level profile gallery cards.',
    slots: DATA.profileGrid,
    isWide: true,
    prioritizeMissing: true,
  }));

  container.appendChild(makeSection({
    kicker: 'Profile',
    title: 'Profile Wardrobe',
    description: 'Wardrobe and outfit images used on your profile surfaces.',
    slots: DATA.profileMasonry,
    prioritizeMissing: true,
  }));

  container.appendChild(makeSection({
    kicker: 'Overlay',
    title: 'Outfit Detail Items',
    description: 'The item tiles inside the expanded outfit detail view.',
    slots: DATA.outfitDetailItems,
    prioritizeMissing: true,
  }));

  container.appendChild(makeSection({
    kicker: 'Style',
    title: 'Studio Items',
    description: 'Slots used in the Style/Studio composition flow.',
    slots: DATA.studioItems,
    prioritizeMissing: true,
  }));
}

// ─── Upload ──────────────────────────────────────────────────────────────

async function uploadFile(slotId, file, slotEl) {
  if (!file.type.startsWith('image/')) { setStatus('Not an image file', 'err'); return; }

  const spinner = slotEl.querySelector('.spinner');
  spinner.classList.add('show');
  setStatus('Saving ' + slotId + '...', 'busy');

  try {
    const resized = await resizeImageFile(file, {
      width: slotId.startsWith('avatar-') ? 512
        : slotId.startsWith('discover-') ? 960
        : slotId.startsWith('pg') ? 720
        : slotId.startsWith('profile-') ? 720
        : slotId.startsWith('detail-') ? 640
        : /^s\\d/.test(slotId) ? 640
        : 960,
      height: slotId.startsWith('avatar-') ? 512
        : slotId.startsWith('discover-') ? 1200
        : slotId.startsWith('pg') ? 900
        : slotId.startsWith('profile-') ? 900
        : slotId.startsWith('detail-') ? 800
        : /^s\\d/.test(slotId) ? 640
        : 1200,
      quality: slotId.startsWith('avatar-') ? 0.92
        : slotId.startsWith('discover-') ? 0.9
        : slotId.startsWith('pg') ? 0.9
        : slotId.startsWith('profile-') ? 0.9
        : slotId.startsWith('detail-') ? 0.9
        : /^s\\d/.test(slotId) ? 0.92
        : 0.9,
    });
    const base64 = await toBase64(resized);
    const res = await fetch('/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slotId, base64, mimeType: resized.type || file.type }),
    });
    const data = await res.json();
    spinner.classList.remove('show');

    if (data.ok) {
      currentImages[slotId] = data.newPath;

      const img = slotEl.querySelector('.slot-img');
      img.onerror = null;
      img.src = data.newPath + '?t=' + Date.now();
      img.style.display = '';

      const empty = slotEl.querySelector('.slot-empty');
      if (empty) empty.classList.add('hidden');

      const lbl = slotEl.querySelector('.slot-label');
      if (lbl) lbl.classList.remove('no-image');

      slotEl.classList.remove('error');
      slotEl.classList.add('success');
      setTimeout(() => slotEl.classList.remove('success'), 2000);

      setStatus('Saved ' + slotId, 'ok');
      addLog(slotId);
    } else {
      slotEl.classList.add('error');
      setTimeout(() => slotEl.classList.remove('error'), 2000);
      setStatus(data.error || 'Patch failed for ' + slotId, 'err');
    }
  } catch (err) {
    spinner.classList.remove('show');
    setStatus('Network error: ' + err.message, 'err');
  }
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function resizeImageFile(file, target) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const image = await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = dataUrl;
  });

  const canvas = document.createElement('canvas');
  canvas.width = target.width;
  canvas.height = target.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas unavailable');

  const scale = Math.max(target.width / image.width, target.height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const dx = (target.width - drawWidth) / 2;
  const dy = (target.height - drawHeight) / 2;

  ctx.clearRect(0, 0, target.width, target.height);
  ctx.drawImage(image, dx, dy, drawWidth, drawHeight);

  const outputType = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
  const blob = await new Promise((resolve) => {
    canvas.toBlob((result) => resolve(result), outputType, target.quality);
  });
  return new File([blob], file.name.replace(/\.[^.]+$/, outputType === 'image/png' ? '.png' : '.jpg'), { type: outputType });
}

// ─── Paste support ────────────────────────────────────────────────────────

async function exportForAgent() {
  try {
    setStatus('Building export...', 'busy');
    const res = await fetch('/export');
    if (!res.ok) throw new Error('Export failed');
    const data = await res.json();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'whering-images.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    setStatus('Export downloaded as whering-images.json', 'ok');
  } catch (err) {
    setStatus(err.message || 'Export failed', 'err');
  }
}

document.addEventListener('paste', (e) => {
  if (!focusedSlotId) { setStatus('Hover a slot first, then paste', 'err'); return; }
  const items = [...e.clipboardData.items];
  const imgItem = items.find(i => i.type.startsWith('image/'));
  if (!imgItem) { setStatus('No image found in clipboard', 'err'); return; }
  const file = imgItem.getAsFile();
  const slotEl = document.querySelector(\`[data-slot-id="\${focusedSlotId}"]\`);
  if (slotEl && file) uploadFile(focusedSlotId, file, slotEl);
});

// ─── Status bar ──────────────────────────────────────────────────────────

const saved = [];
function setStatus(msg, type) {
  const bar = document.getElementById('status-bar');
  const msgEl = document.getElementById('status-msg');
  bar.className = type || '';
  msgEl.textContent = msg;
}
function addLog(slotId) {
  saved.push(slotId);
  document.getElementById('log').textContent = saved.length + ' saved';
}
function showToast(msg, ok) { setStatus(msg, ok ? 'ok' : 'err'); }

// ─── Init ─────────────────────────────────────────────────────────────────

const exportBtn = document.createElement('button');
exportBtn.id = 'export-btn';
exportBtn.type = 'button';
exportBtn.textContent = 'Export for agent';
exportBtn.addEventListener('click', exportForAgent);
document.getElementById('status-bar').appendChild(exportBtn);

loadCurrentImages();
</script>
</body>
</html>`;
}

// ─── HTTP server ──────────────────────────────────────────────────────────

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { method, url: reqUrl } = req;

  if (method === 'POST' && reqUrl === '/upload') return handleUpload(req, res);

  if (method === 'GET' && reqUrl === '/current-data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(getCurrentImages()));
  }

  if (method === 'GET' && reqUrl === '/export') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(exportImages()));
  }

  if (method === 'GET' && reqUrl.startsWith('/assets/')) {
    return serveFile(res, path.join(ROOT, 'public', reqUrl));
  }

  if (method === 'GET' && reqUrl.startsWith('/proxy?')) {
    try {
      const targetUrl = new URL('http://x' + reqUrl).searchParams.get('url');
      if (!targetUrl) { res.writeHead(400); return res.end(); }
      return proxyImage(req, res, targetUrl);
    } catch { res.writeHead(400); return res.end(); }
  }

  if (method === 'GET' && reqUrl === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(getHTML());
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`\n  Whering Image Manager\n`);
  console.log(`  http://localhost:${PORT}\n`);
  console.log(`  Drop images onto slots to update them.\n`);
  console.log(`  Ctrl+C to stop.\n`);
});
