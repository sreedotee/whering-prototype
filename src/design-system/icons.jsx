import React from 'react';

// Shared icons + primitives for whering screens
// 24x24 stroke icons, stroke=2, round caps. Single source of truth.

export const Icon = ({ d, size = 24, stroke = 2, fill = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
       stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
       style={{ display: 'block' }}>
    {typeof d === 'string' ? <path d={d} /> : d}
  </svg>
);

export const ICONS = {
  search:   'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-5-5',
  plus:     'M12 5v14M5 12h14',
  close:    'M6 6l12 12M18 6 6 18',
  check:    'M5 12l5 5 9-11',
  chev_r:   'M9 6l6 6-6 6',
  chev_l:   'M15 6l-6 6 6 6',
  chev_d:   'M6 9l6 6 6-6',
  filter:   'M4 6h16M7 12h10M10 18h4',
  grid:     (<><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></>),
  heart:    'M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z',
  bag:      (<><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></>),
  sparkle:  (<><path d="M12 2l3 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7-5.5-4h7z"/></>),
  camera:   (<><path d="M4 8h3l2-3h6l2 3h3v12H4V8Z"/><circle cx="12" cy="13" r="4"/></>),
  hanger:   'M12 6a2 2 0 1 0-2-2M12 6v3l9 7H3l9-7',
  calendar: (<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></>),
  pin:      (<><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></>),
  list:     'M4 6h16M4 12h16M4 18h16',
  user:     (<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>),
  bell:     'M6 16V11a6 6 0 1 1 12 0v5l2 2H4l2-2ZM10 20a2 2 0 0 0 4 0',
  settings: (<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></>),
  shuffle:  'M3 6h4l11 12h3M21 6h-3L14 11M21 18l-3 3M21 18l-3-3M3 18h4l4-5',
  tag:      (<><path d="M3 12V4h8l10 10-8 8L3 12Z"/><circle cx="8" cy="8" r="1.5"/></>),
  cloud:    'M7 18a5 5 0 0 1-1-10 6 6 0 0 1 11 1 4 4 0 0 1 0 8',
  dots:     'M5 12h.01M12 12h.01M19 12h.01',
  arrow_r:  'M5 12h14M13 6l6 6-6 6',
  trash:    (<><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/></>),
  edit:     'M4 20h4l10-10-4-4L4 16v4Z',
  bookmark: (<><path d="M6 4h12v16l-6-4-6 4V4Z"/></>),
  share:    (<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.59 13.51l6.83 3.98M15.41 10.49l-6.83 3.98" /></>),
  globe:    (<><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>),
  history:  (<><path d="M3 12a9 9 0 1 0 2.6-6.4L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></>),
  cal_plus: (<><path d="M8 2v4M16 2v4M3 8h18M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5"/><rect x="3" y="6" width="18" height="16" rx="2"/><path d="M12 13v6M9 16h6"/></>),
};

// Swatches for placeholder garment thumbs — mimic real catalog colour range
export const SWATCHES = [
  'linear-gradient(135deg,#E8DDD2,#C9B9A6)', // cream
  'linear-gradient(135deg,#2A3340,#0E1116)', // charcoal
  'linear-gradient(135deg,#B8CBD9,#6C8FA8)', // sky
  'linear-gradient(135deg,#B1845E,#7C5A3B)', // tan
  'linear-gradient(135deg,#D7D2CB,#9D9589)', // stone
  'linear-gradient(135deg,#2B4A34,#0F2418)', // forest
  'linear-gradient(135deg,#EBE0D4,#D1BFA7)', // oat
  'linear-gradient(135deg,#6B1B1B,#3A0B0B)', // oxblood
  'linear-gradient(135deg,#F6F2EA,#E5DCC9)', // ivory
  'linear-gradient(135deg,#1E2B1E,#0A130A)', // moss
  'linear-gradient(135deg,#C8A17F,#8A6B4E)', // camel
  'linear-gradient(135deg,#DDE2E8,#A8B0B9)', // pale blue
];

export function Thumb({ i = 0, ratio = '3/4', br = 'var(--r-sm)', children }) {
  return (
    <div style={{
      aspectRatio: ratio, background: SWATCHES[i % SWATCHES.length],
      borderRadius: br, position: 'relative', overflow: 'hidden',
    }}>{children}</div>
  );
}

// Brand block — the vibrant full-bleed card
export function BrandBlock({ color = 'cyan', title, sub, icon, height = 140 }) {
  return (
    <div className={`card card--${color}`} style={{
      padding: 'var(--s-4)', minHeight: height,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div style={{ opacity: 0.7 }}>{icon && <Icon d={ICONS[icon]} size={22} />}</div>
      <div>
        <div className="t-20" style={{ fontWeight: 700 }}>{title}</div>
        {sub && <div className="t-14" style={{ opacity: 0.7, marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  );
}
