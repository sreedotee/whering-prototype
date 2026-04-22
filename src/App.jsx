import { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import { CalendarPlus, Calendar } from 'lucide-react';
import { loadAnnotations } from 'agentation';
import { DialRoot, useDialKit } from 'dialkit';
import 'dialkit/styles.css';
import { initSwipeBack } from '../ux-foundation/mechanics.js';
import { IOSDevice, IOSNavBar, IOSGlassPill } from './design-system/ios-frame.jsx';
import { Icon, ICONS } from './design-system/icons.jsx';

const Agentation = lazy(() =>
  import('agentation').then((module) => ({ default: module.Agentation })),
);

const discoverCards = [
  {
    id: 'discover-1',
    column: 0,
    type: 'outfit',
    height: 286,
    imageUrl: '/assets/images/discover-1.png',
    imagePosition: 'center top',
    author: 'Sophie',
    authorAvatar: '/assets/images/avatar-Sophie.png',
    context: "in Summer '26",
    count: '1.2k',
  },
  {
    id: 'discover-2',
    column: 1,
    type: 'item',
    height: 196,
    imageUrl: '/assets/images/discover-2.png',
    imagePosition: '50% 22%',
    author: 'Lina',
    authorAvatar: '/assets/images/avatar-Lina.png',
    context: 'item inspo',
    title: 'Butter Set',
    subtitle: '2 pieces',
    count: '842',
  },
  {
    id: 'discover-3',
    column: 0,
    type: 'item',
    height: 172,
    imageUrl: '/assets/images/discover-3.png',
    imagePosition: '55% 14%',
    author: 'Mia',
    authorAvatar: '/assets/images/avatar-Mia.png',
    context: 'item inspo',
    title: 'Airport Knit',
    subtitle: 'saved by 986',
    count: '986',
  },
  {
    id: 'discover-4',
    column: 1,
    type: 'outfit',
    height: 258,
    imageUrl: '/assets/images/discover-4.png',
    imagePosition: '56% 10%',
    author: 'Jules',
    authorAvatar: '/assets/images/avatar-Jules.png',
    context: 'weekend edit',
    count: '1.4k',
  },
  {
    id: 'discover-5',
    column: 1,
    type: 'item',
    height: 164,
    imageUrl: '/assets/images/discover-5.png',
    imagePosition: '60% 8%',
    author: 'Noor',
    authorAvatar: '/assets/images/avatar-Noor.png',
    context: 'item inspo',
    title: 'Cloud Hoodie',
    subtitle: 'saved by 1.1k',
    count: '1.1k',
  },
  {
    id: 'discover-6',
    column: 0,
    type: 'outfit',
    height: 326,
    imageUrl: '/assets/images/discover-6.png',
    imagePosition: '52% center',
    author: 'Mia',
    authorAvatar: '/assets/images/avatar-Mia.png',
    context: 'airport look',
    count: '713',
  },
  {
    id: 'discover-7',
    column: 1,
    type: 'outfit',
    height: 314,
    imageUrl: '/assets/images/discover-7.png',
    imagePosition: '58% center',
    author: 'Noor',
    authorAvatar: '/assets/images/avatar-Noor.png',
    context: 'monochrome edit',
    count: '904',
  },
  {
    id: 'discover-8',
    column: 0,
    type: 'outfit',
    height: 238,
    imageUrl: '/assets/images/discover-8.png',
    imagePosition: '57% 6%',
    author: 'Leah',
    authorAvatar: '/assets/images/avatar-Leah.png',
    context: 'denim core',
    count: '1.6k',
  },
  {
    id: 'discover-9',
    column: 1,
    type: 'item',
    height: 188,
    imageUrl: '/assets/images/discover-9.png',
    imagePosition: '50% 12%',
    author: 'Aya',
    authorAvatar: '/assets/images/avatar-Aya.png',
    context: 'item inspo',
    title: 'White Boots',
    subtitle: 'saved by 2.1k',
    count: '2.1k',
  },
  {
    id: 'discover-10',
    column: 0,
    type: 'item',
    height: 206,
    imageUrl: '/assets/images/discover-10.png',
    imagePosition: '50% 12%',
    author: 'Leah',
    authorAvatar: '/assets/images/avatar-Leah.png',
    context: 'item inspo',
    title: 'Soft Knit',
    subtitle: 'saved by 632',
    count: '632',
  },
  {
    id: 'discover-11',
    column: 1,
    type: 'outfit',
    height: 248,
    imageUrl: '/assets/images/discover-11.png',
    imagePosition: '54% 8%',
    author: 'Aya',
    authorAvatar: '/assets/images/avatar-Aya.png',
    context: 'city layers',
    count: '488',
  },
  {
    id: 'discover-12',
    column: 0,
    type: 'item',
    height: 182,
    imageUrl: '/assets/images/discover-12.png',
    imagePosition: '52% 14%',
    author: 'Jules',
    authorAvatar: '/assets/images/avatar-Jules.png',
    context: 'item inspo',
    title: 'Street Tote',
    subtitle: 'saved by 1.3k',
    count: '1.3k',
  },
  {
    id: 'discover-13',
    column: 1,
    type: 'outfit',
    height: 272,
    imageUrl: '/assets/images/discover-13.png',
    imagePosition: '50% center',
    author: 'Marcus',
    authorAvatar: '/assets/images/avatar-Marcus.png',
    context: 'casual friday',
    count: '956',
  },
  {
    id: 'discover-14',
    column: 0,
    type: 'outfit',
    height: 298,
    imageUrl: '/assets/images/discover-14.png',
    imagePosition: '55% 12%',
    author: 'Riley',
    authorAvatar: '/assets/images/avatar-Riley.png',
    context: 'weekend vibe',
    count: '1.1k',
  },
  {
    id: 'discover-15',
    column: 1,
    type: 'outfit',
    height: 264,
    imageUrl: '/assets/images/discover-15.png',
    imagePosition: '52% 8%',
    author: 'Jordan',
    authorAvatar: '/assets/images/avatar-Jordan.png',
    context: 'minimalist',
    count: '842',
  },
  {
    id: 'discover-16',
    column: 0,
    type: 'outfit',
    height: 310,
    imageUrl: '/assets/images/discover-16.png',
    imagePosition: '54% center',
    author: 'Casey',
    authorAvatar: '/assets/images/avatar-Casey.png',
    context: 'vintage mix',
    count: '1.3k',
  },
  {
    id: 'discover-17',
    column: 1,
    type: 'outfit',
    height: 286,
    imageUrl: '/assets/images/discover-17.png',
    imagePosition: '56% 10%',
    author: 'Sam',
    authorAvatar: '/assets/images/avatar-Sam.png',
    context: 'maximalist',
    count: '1.5k',
  },
  {
    id: 'discover-18',
    column: 0,
    type: 'outfit',
    height: 294,
    imageUrl: '/assets/images/discover-18.png',
    imagePosition: '51% 6%',
    author: 'Alex',
    authorAvatar: '/assets/images/avatar-Alex.png',
    context: 'tech wear',
    count: '1.8k',
  },
];

const discoverOutfitDetails = {
  default: {
    title: 'Curated Look',
    includedCount: 3,
    ctaLabel: 'Save outfit',
    items: [
      {
        id: 'detail-item-1',
        brand: 'Stussy',
        name: 'Yellow Hoodie',
        imageUrl: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/090GKJ4QA8ZEV32K3FX9JN08ZY.jpg',
      },
      {
        id: 'detail-item-2',
        brand: 'Stussy',
        name: 'Yellow Pants',
        imageUrl: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/5F80RX5MY4RP33FT6SVAXJSVDE.jpg',
      },
      {
        id: 'detail-item-3',
        brand: 'Nike',
        name: 'Air Force 1 Low',
        imageUrl: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/7W1X36JM3KBAYG8NZEP7W1QGN5.jpg',
      },
    ],
  },
  'discover-1': {
    title: 'Yellow Co-Ord Fit',
    includedCount: 3,
    ctaLabel: 'Save outfit',
    items: [
      {
        id: 'detail-item-1',
        brand: 'Stussy',
        name: 'Yellow Hoodie',
        imageUrl: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/090GKJ4QA8ZEV32K3FX9JN08ZY.jpg',
      },
      {
        id: 'detail-item-2',
        brand: 'Stussy',
        name: 'Yellow Pants',
        imageUrl: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/5F80RX5MY4RP33FT6SVAXJSVDE.jpg',
      },
      {
        id: 'detail-item-3',
        brand: 'Nike',
        name: 'Air Force 1 Low',
        imageUrl: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/7W1X36JM3KBAYG8NZEP7W1QGN5.jpg',
      },
    ],
  },
};

const profileGridImages = [
    { id: 'pg1', url: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/7QRG0MDTVR6PD6ZQ0SKT1Z1KCJ.jpg', height: 260 },
    { id: 'pg2', url: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/07JKEK4CWG967CZF35K9XVGCAP.jpg', height: 210 },
    { id: 'pg3', url: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/71AR1PGS8T6ZPFJKKVC0ES4BT4.jpg', height: 210 },
    { id: 'pg4', url: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/665YP1TGMBQ3MGX5VMRNN1785H.jpg', height: 260 },
];

const profileMasonryCards = [
  [
    {
      id: 'profile-item-jacket',
      type: 'item',
      height: 248,
      imageUrl: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/7D1HHH5RCG8XVAA12V19WTGQTE.jpg',
      badgeTone: 'light',
    },
    {
      id: 'profile-outfit-gray',
      type: 'outfit',
      height: 186,
      imageUrl: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/23GBWP1NZP5PT3PPPHQ37MWSCC.jpg',
      badgeTone: 'dark',
    },
  ],
  [
    {
      id: 'profile-item-placeholder',
      type: 'item',
      height: 186,
      imageUrl: null,
      badgeTone: 'light',
    },
    {
      id: 'profile-outfit-tee',
      type: 'outfit',
      height: 248,
      imageUrl: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/49WJKK4F9RKFK2377ZXAAQ0WTY.jpg',
      badgeTone: 'dark',
    },
  ],
];

const studioItems = [
  { id: 's1', category: 'Tops', url: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/090GKJ4QA8ZEV32K3FX9JN08ZY.jpg' },
  { id: 's2', category: 'Outerwear', url: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/3R9W71BZ7KA9WN09R6HNA6PTGH.jpg' },
  { id: 's3', category: 'Tops', url: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/5DGAVH8PFY2FR0BPGF9K8VDTS8.jpg' },
  { id: 's4', category: 'Footwear', url: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/6T0PMEQDJ18KBJ4BEG6EF0JK4Z.jpg' },
  { id: 's5', category: 'Bottoms', url: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/7QWK2RNATR35Q4ZQ2XCA1Z1C96.jpg' },
  { id: 's6', category: 'Accessories', url: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/0P4Q226RN1C07JXQCWVCDDKY17.jpg' },
];



function StudioScreen({ activeScreen }) {
  const [activeCategory, setActiveCategory] = useState('Tops');
  const [selectedItems, setSelectedItems] = useState({});
  const visibleItems = studioItems.filter((item) => item.category === activeCategory);
  const checkmarkOffset = { right: 4, bottom: 4 };

  const handleItemSelect = (item) => {
    setSelectedItems((current) => ({
      ...current,
      [item.category]: item.id,
    }));
  };

  const handleCreateOutfit = () => {
    const chosen = Object.values(selectedItems);
    if (chosen.length === 0) return;
  };

  return (
    <main id="studio-screen" className={`screen hue-cyan${activeScreen === 'studio' ? ' active' : ''}`} data-tab="studio">
        <div className="studio-container">
            <header className="studio-header">
                <button className="studio-history-btn" style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', padding: 4, cursor: 'pointer' }}>
                    <Icon d={ICONS.history} size={24} stroke={1.8} />
                </button>
            </header>

            <div className="studio-canvas">
                <div className="studio-canvas-placeholder">
                    Tap items below to build your outfit
                </div>
            </div>

            <div className="studio-categories-bar">
                {['Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories'].map(cat => (
                    <button 
                        key={cat} 
                        className={`studio-cat-pill ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="studio-recent-filter">
                <button type="button" className="studio-sort-pill">
                    <span>Recently Added</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6" /></svg>
                </button>
            </div>

            <div className="studio-grid-scroll">
                <div className="studio-grid">
                    {visibleItems.map((item) => {
                        const isSelected = selectedItems[item.category] === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            className={`studio-item-card${isSelected ? ' is-selected' : ''}`}
                            style={{ backgroundImage: `url(${item.url})` }}
                            onClick={() => handleItemSelect(item)}
                            aria-pressed={isSelected}
                            aria-label={`${item.category} item`}
                          >
                            {isSelected && (
                              <span
                                className="studio-item-check"
                                aria-hidden="true"
                                style={{ right: checkmarkOffset.right, bottom: checkmarkOffset.bottom }}
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 6 9 17l-5-5" />
                                </svg>
                              </span>
                            )}
                          </button>
                        );
                    })}
                    {visibleItems.length === 0 && (
                      <div className="studio-empty-state">No items in this category yet.</div>
                    )}
                </div>
            </div>

            <div className="studio-footer-actions">
                <button className="studio-create-btn shadow-lg" onClick={handleCreateOutfit}>
                    Create outfit
                </button>
            </div>
        </div>
    </main>
  );
}

const plannerDays = [
  { day: 'MON', date: 12 },
  { day: 'TUE', date: 13 },
  { day: 'WED', date: 14 },
  { day: 'THU', date: 15 },
  { day: 'FRI', date: 16 },
  { day: 'SAT', date: 17 },
  { day: 'SUN', date: 18 },
  { day: 'MON', date: 19 },
  { day: 'TUE', date: 20 },
  { day: 'WED', date: 21 },
  { day: 'THU', date: 22 },
  { day: 'FRI', date: 23 },
  { day: 'SAT', date: 24 },
  { day: 'SUN', date: 25 },
  { day: 'MON', date: 26 },
  { day: 'TUE', date: 27 },
  { day: 'WED', date: 28 },
  { day: 'THU', date: 29 },
  { day: 'FRI', date: 30 },
];

const detectedOutfitItems = [
  {
    id: 'detected-1',
    title: 'Denim Jacket',
    imageUrl: profileGridImages[0].url,
    tags: ['Blue', 'Outerwear'],
  },
  {
    id: 'detected-2',
    title: 'White Tee',
    imageUrl: profileGridImages[2].url,
    tags: ['Cotton', 'Essentials'],
  },
];

function ProfileFabMenuOverlay({ open, onClose, onUpload }) {
  return (
    <div
      className={`profile-menu-overlay${open ? ' active' : ''}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="profile-menu-card">
        <button type="button" className="profile-menu-item" onClick={onUpload}>
          <span className="profile-menu-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <circle cx="8.5" cy="10" r="1.3" />
              <path d="M21 15l-5.2-5.2a1 1 0 0 0-1.4 0L8 16.2" />
            </svg>
          </span>
          <span className="profile-menu-label">Upload image</span>
        </button>
        <div className="profile-menu-divider" />
        <button type="button" className="profile-menu-item" onClick={onClose}>
          <span className="profile-menu-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 13a5 5 0 0 1 0-7l1.5-1.5a5 5 0 0 1 7 7L17 13" />
              <path d="M14 11a5 5 0 0 1 0 7L12.5 19.5a5 5 0 0 1-7-7L7 11" />
            </svg>
          </span>
          <span className="profile-menu-label">Paste link</span>
        </button>
      </div>

      <button type="button" className="profile-menu-close" onClick={onClose} aria-label="Close add menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" aria-hidden="true">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>
    </div>
  );
}

const OCCASION_OPTIONS = ['Casual', 'Work', 'Date Night', 'Party', 'Wedding', 'Sport', 'Travel', 'Formal'];

const SELECTABLE_OUTFITS = [
  { id: 'so-1', label: 'White Denim + Silk Top', image: profileGridImages[0].url },
  { id: 'so-2', label: 'Gallery Look', image: profileGridImages[1].url },
  { id: 'so-3', label: 'Street Edit', image: profileGridImages[2].url },
  { id: 'so-4', label: 'Monochrome Set', image: profileGridImages[3].url },
  { id: 'so-5', label: 'Linen Summer Edit', image: profileGridImages[0].url },
  { id: 'so-6', label: 'Evening Out', image: profileGridImages[1].url },
  { id: 'so-7', label: 'Airport Look', image: profileGridImages[2].url },
  { id: 'so-8', label: 'Casual Friday', image: profileGridImages[3].url },
  { id: 'so-9', label: 'Weekend Brunch', image: profileGridImages[0].url },
  { id: 'so-10', label: 'Studio Day', image: profileGridImages[1].url },
];

function OutfitPickerSheet({ onClose, onSelect }) {
  return (
    <div className="planner-modal-backdrop" onClick={onClose}>
      <div className="planner-modal" onClick={e => e.stopPropagation()}>
        <div className="planner-modal-header">
          <span className="planner-modal-title">Choose Outfit</span>
          <button type="button" className="planner-modal-close" onClick={onClose}>
            <Icon d={ICONS.close} size={20} stroke={2} />
          </button>
        </div>
        <div className="planner-outfit-grid">
          {SELECTABLE_OUTFITS.map(o => (
            <button key={o.id} type="button" className="planner-outfit-option" onClick={() => { onSelect(o); onClose(); }}>
              <div className="planner-outfit-option-img" style={{ backgroundImage: `url(${o.image})` }} />
              <span className="planner-outfit-option-label">{o.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventCreateScreen({ onClose, onSave }) {
  const { emptyTopPush } = useDialKit('Event Create', { emptyTopPush: 120 }); // locked
  const [name, setName] = useState('');
  const [occasion, setOccasion] = useState('');
  const [time, setTime] = useState('');
  const [outfits, setOutfits] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  function handleSave() {
    if (!name.trim()) return;
    onSave({ id: Date.now(), name: name.trim(), occasion, time, outfits });
    onClose();
  }

  return (
    <div className="event-create-panel">
      {showPicker && (
        <OutfitPickerSheet
          onClose={() => setShowPicker(false)}
          onSelect={o => setOutfits(prev => [...prev, { ...o, id: Date.now() }])}
        />
      )}

      {/* Mini toolbar */}
      <div className="event-create-toolbar">
        <button type="button" className="event-create-close" onClick={onClose}>
          <Icon d={ICONS.close} size={20} stroke={2} />
        </button>
        <button
          type="button"
          className="event-create-save-btn"
          disabled={!name.trim()}
          onClick={handleSave}
        >Save</button>
      </div>

      {/* Scrollable content */}
      <div className="event-create-scroll">
        <input
          className="event-create-name-input"
          placeholder="Event name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoFocus
        />

        <div className="planner-field">
          <label className="planner-field-label">Occasion</label>
          <div className="planner-occasion-grid">
            {OCCASION_OPTIONS.map(o => (
              <button
                key={o}
                type="button"
                className={`planner-occasion-chip ${occasion === o ? 'active' : ''}`}
                onClick={() => setOccasion(occasion === o ? '' : o)}
              >{o}</button>
            ))}
          </div>
        </div>

        <div className="planner-field">
          <label className="planner-field-label">Time</label>
          <input className="planner-field-input" type="time" value={time} onChange={e => setTime(e.target.value)} />
        </div>

        {outfits.length > 0 && (
          <div className="planner-field">
            <label className="planner-field-label">Outfits</label>
            <div className="event-create-outfit-row">
              {outfits.map(o => (
                <div key={o.id} className="planner-event-outfit-thumb" style={{ backgroundImage: `url(${o.image})` }}>
                  <span className="planner-event-outfit-label">{o.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {outfits.length === 0 && (
          <p className="event-create-empty" style={{ marginTop: emptyTopPush }}>Tap + to add outfits to this event.</p>
        )}
      </div>

      {/* Contextual FAB */}
      <button type="button" className="event-create-fab" onClick={() => setShowPicker(true)}>
        <Icon d={ICONS.plus} size={24} stroke={2} />
      </button>
    </div>
  );
}

function EventCard({ event, onAddOutfit }) {
  return (
    <div className="planner-event-card">
      <div className="planner-event-meta">
        <span className="planner-event-name">{event.name}</span>
        <div className="planner-event-tags">
          {event.occasion && <span className="planner-event-tag">{event.occasion}</span>}
          {event.time && <span className="planner-event-tag">{event.time}</span>}
        </div>
      </div>

      <div className="planner-event-outfits">
        {event.outfits.map(o => (
          <div key={o.id} className="planner-event-outfit-thumb" style={{ backgroundImage: `url(${o.image})` }}>
            <span className="planner-event-outfit-label">{o.label}</span>
          </div>
        ))}
        <button type="button" className="planner-event-add-outfit" onClick={() => onAddOutfit(event.id)}>
          <Icon d={ICONS.plus} size={20} stroke={2} />
          <span>{event.outfits.length === 0 ? 'Add Outfit' : ''}</span>
        </button>
      </div>
    </div>
  );
}

const APRIL_2026 = {
  month: 'April 2026',
  startDay: 3, // Wednesday
  days: 30,
};

function MonthGridOverlay({ selectedDay, onSelectDay, onClose }) {
  const blanks = Array(APRIL_2026.startDay).fill(null);
  const days = Array.from({ length: APRIL_2026.days }, (_, i) => i + 1);
  const todayDate = plannerDays[1]?.date; // TUE 13 = "today"

  return (
    <div className="month-grid-overlay" onClick={onClose}>
      <div className="month-grid-card" onClick={e => e.stopPropagation()}>
        <div className="month-grid-title">{APRIL_2026.month}</div>
        <div className="month-grid-weekdays">
          {['S','M','T','W','T','F','S'].map((d,i) => <span key={i}>{d}</span>)}
        </div>
        <div className="month-grid-days">
          {blanks.map((_, i) => <span key={`b${i}`} />)}
          {days.map(d => {
            const dayIdx = plannerDays.findIndex(p => p.date === d);
            const isSelected = plannerDays[selectedDay]?.date === d;
            const isToday = d === todayDate;
            return (
              <button
                key={d}
                type="button"
                className={`month-grid-day ${isSelected ? 'selected' : ''} ${isToday && !isSelected ? 'today' : ''} ${dayIdx === -1 ? 'disabled' : ''}`}
                onClick={() => { if (dayIdx !== -1) { onSelectDay(dayIdx); onClose(); } }}
              >{d}</button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProfilePlannerView({ onBack }) {
  const { fabRight, fabBottom } = useDialKit('Planner FAB', { fabRight: 24, fabBottom: 40 });
  const [selectedDay, setSelectedDay] = useState(1);
  const [eventsByDay, setEventsByDay] = useState({});
  const [showEventCreate, setShowEventCreate] = useState(false);
  const [showMonthGrid, setShowMonthGrid] = useState(false);
  const [outfitTargetId, setOutfitTargetId] = useState(null);
  const [showStandalonePicker, setShowStandalonePicker] = useState(false);
  const [standaloneByDay, setStandaloneByDay] = useState({});
  const touchStartX = useRef(null);

  const dayEvents = eventsByDay[selectedDay] || [];
  const isToday = selectedDay === 1;
  const currentDay = plannerDays[selectedDay];
  const dayLabel = isToday ? 'Today' : `${currentDay?.day}`;
  const dateLabel = `Apr ${currentDay?.date}, 2026`;

  function handleSaveEvent(evt) {
    setEventsByDay(prev => ({ ...prev, [selectedDay]: [...(prev[selectedDay] || []), evt] }));
  }

  function handleAddOutfit(eventId) { setOutfitTargetId(eventId); }

  function handleSelectOutfit(outfit) {
    setEventsByDay(prev => ({
      ...prev,
      [selectedDay]: (prev[selectedDay] || []).map(e =>
        e.id === outfitTargetId ? { ...e, outfits: [...e.outfits, { ...outfit, id: Date.now() }] } : e
      ),
    }));
    setOutfitTargetId(null);
  }

  function handleTouchStart(e) { touchStartX.current = e.touches[0].clientX; }
  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) setSelectedDay(d => Math.min(d + 1, plannerDays.length - 1));
      else setSelectedDay(d => Math.max(d - 1, 0));
    }
    touchStartX.current = null;
  }

  return (
    <div className="profile-planner-view">
      {outfitTargetId && <OutfitPickerSheet onClose={() => setOutfitTargetId(null)} onSelect={o => handleSelectOutfit(o)} />}
      {showMonthGrid && <MonthGridOverlay selectedDay={selectedDay} onSelectDay={setSelectedDay} onClose={() => setShowMonthGrid(false)} />}

      {/* Compact header */}
      <header className="planner-header">
        <button type="button" className="profile-back-button profile-back-button--ghost" onClick={onBack}>
          <Icon d={ICONS.chev_l} size={24} stroke={2.5} />
        </button>
        <div className="planner-day-center">
          <span className="planner-day-name">{dayLabel}</span>
          <span className="planner-day-full-date">{dateLabel} · 65°F Sunny</span>
        </div>
        <button type="button" className="planner-cal-icon-btn" onClick={() => setShowMonthGrid(true)}>
          <span className="planner-cal-icon-wrap">
            <Calendar size={24} strokeWidth={1.8} />
            <span className="planner-cal-icon-num">{currentDay?.date}</span>
          </span>
        </button>
      </header>

      <div className="planner-divider" />

      {showEventCreate ? (
        <EventCreateScreen onClose={() => setShowEventCreate(false)} onSave={handleSaveEvent} />
      ) : (
        <>
          {showStandalonePicker && (
            <OutfitPickerSheet
              onClose={() => setShowStandalonePicker(false)}
              onSelect={o => {
                setStandaloneByDay(prev => ({ ...prev, [selectedDay]: [...(prev[selectedDay] || []), { ...o, id: Date.now() }] }));
                setShowStandalonePicker(false);
              }}
            />
          )}
          <div className="planner-content-header">
            <button type="button" className="planner-add-event-btn" onClick={() => setShowEventCreate(true)} aria-label="Add event">
              <CalendarPlus size={20} strokeWidth={2} />
              <span className="planner-add-event-label">Add event</span>
            </button>
          </div>
          <div className="planner-day-content" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {dayEvents.length > 0 && (
              <div className="planner-events-list">
                {dayEvents.map(evt => (
                  <EventCard key={evt.id} event={evt} onAddOutfit={handleAddOutfit} />
                ))}
              </div>
            )}

            {(standaloneByDay[selectedDay] || []).length > 0 && (
              <div className="planner-standalone-outfits">
                {(standaloneByDay[selectedDay] || []).map(o => (
                  <div key={o.id} className="planner-event-outfit-thumb" style={{ backgroundImage: `url(${o.image})` }}>
                    <span className="planner-event-outfit-label">{o.label}</span>
                  </div>
                ))}
              </div>
            )}

            {isToday && (
              <section className="planner-section">
                <div className="planner-look-card">
                  <div className="planner-look-image" style={{ backgroundImage: `url(${profileGridImages[0].url})` }} />
                  <div className="planner-look-overlay" />
                  <button type="button" className="planner-look-edit-btn">
                    <Icon d={ICONS.edit} size={16} stroke={2} />
                  </button>
                </div>
              </section>
            )}

            {!isToday && dayEvents.length === 0 && (standaloneByDay[selectedDay] || []).length === 0 && (
              <div className="planner-empty-day">
                <span>Nothing planned. Tap + to add outfits or create an event.</span>
              </div>
            )}

            <button type="button" className="planner-fab" style={{ right: fabRight, bottom: fabBottom }} onClick={() => setShowStandalonePicker(true)}>
              <Icon d={ICONS.plus} size={24} stroke={2} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function ProfileStatsView({ onBack }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});
  const { navTitleSize } = useDialKit('Profile Stats', {
    navTitleSize: [24, 20, 40],
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="profile-subscreen profile-stats-view hue-violet">
      <IOSNavBar title="My Stats" onBack={onBack} titleSize={navTitleSize} />

      <div className="stats-tabs">
        {['overview', 'unpacked'].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`stats-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'overview' ? 'Overview' : 'Unpacked'}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="stats-overview">
          <div className="stats-top-row">
            <div className="stats-metric">
              <div className="stats-label">Wardrobe value</div>
              <div className="stats-value">₹0</div>
            </div>
            <div className="stats-metric">
              <div className="stats-label">Wardrobe Usage</div>
              <div className="stats-slider">
                <input type="range" min="0" max="100" value="100" disabled />
                <span className="stats-slider-value">100%</span>
              </div>
            </div>
          </div>

          <div className="stats-circular-metric">
            <div className="stats-circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" className="stats-circle-bg" />
                <circle cx="50" cy="50" r="45" className="stats-circle-fill" style={{ strokeDasharray: '282.74 282.74' }} />
                <text x="50" y="55" textAnchor="middle" className="stats-circle-text">
                  100%
                </text>
              </svg>
            </div>
            <div className="stats-circle-label">2/2 Outfits worn</div>
          </div>

          <div className="stats-expandable-sections">
            {[
              { id: 'wardrobe', title: "What's in my wardrobe?", color: 'blue' },
              { id: 'usage', title: 'My usage', color: 'orange' },
              { id: 'longevity', title: 'Wardrobe Longevity', color: 'purple' },
            ].map((section) => (
              <div key={section.id} className={`stats-expandable stats-expandable--${section.color}`}>
                <button
                  type="button"
                  className="stats-expandable-header"
                  onClick={() => toggleSection(section.id)}
                >
                  <span>{section.title}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points={expandedSections[section.id] ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
                  </svg>
                </button>

                {expandedSections[section.id] && (
                  <div className="stats-expandable-content">
                    {section.id === 'wardrobe' && (
                      <>
                        <div className="stats-breakdown-list">
                          {[
                            { label: 'New', value: '0%' },
                            { label: 'Preloved', value: '0%' },
                            { label: 'Rental', value: '0%' },
                            { label: 'Handmade', value: '0%' },
                            { label: 'Gifted', value: '0%' },
                          ].map((item) => (
                            <div key={item.label} className="stats-breakdown-item">
                              <span>{item.label}</span>
                              <span>{item.value}</span>
                            </div>
                          ))}
                        </div>
                        <div className="stats-pie-chart">
                          <svg viewBox="0 0 100 100" width="120" height="120">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#e0e0e0" strokeWidth="15" strokeDasharray="94.25 0 0 282.74" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#ffd700" strokeWidth="15" strokeDasharray="0 0 94.25 282.74" />
                            <text x="50" y="55" textAnchor="middle" fontSize="16" fontWeight="bold">
                              2
                            </text>
                            <text x="50" y="70" textAnchor="middle" fontSize="12" fill="#666">
                              Items
                            </text>
                          </svg>
                        </div>
                        <button type="button" className="stats-view-breakdown">View breakdown</button>
                      </>
                    )}

                    {section.id === 'usage' && (
                      <>
                        <div className="stats-usage-section">
                          <h3>Most worn items</h3>
                          <div className="stats-item-card">
                            <div className="stats-item-image" style={{ backgroundImage: `url(https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/0MQFX9J40QEVTKRGZ2G6WBYFMX.jpg)` }} />
                            <div className="stats-item-info">
                              <span className="stats-wear-badge">Worn 2 times</span>
                              <span className="stats-cost">₹0.00/wear</span>
                            </div>
                          </div>
                        </div>
                        <div className="stats-usage-section">
                          <h3>Least worn items</h3>
                          <div className="stats-item-card">
                            <div className="stats-item-image" style={{ backgroundImage: `url(https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/0MQFX9J40QEVTKRGZ2G6WBYFMX.jpg)` }} />
                            <div className="stats-item-info">
                              <span className="stats-wear-badge">Worn 2 times</span>
                              <span className="stats-cost">₹0.00/wear</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {section.id === 'longevity' && (
                      <div className="stats-longevity">
                        <p>Your wardrobe longevity data will appear here as you use Whering.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'unpacked' && (
        <div className="stats-unpacked">
          <p>Your unpacked season summaries will appear here.</p>
        </div>
      )}
    </div>
  );
}

function ProfileAiEnhancerView({ onBack, onComplete }) {
  const enhancerProgressWidth = 84;

  return (
    <div className="profile-subscreen profile-enhancer-view hue-lime">
      <header className="enhancer-header">
        <button type="button" className="profile-back-button profile-back-button--dark" onClick={onBack} aria-label="Back to profile">
          <Icon d={ICONS.chev_l} size={24} stroke={2.5} />
        </button>
        <button type="button" className="btn btn--ghost" onClick={onBack}>Skip</button>
      </header>

      <div className="enhancer-stage">
        <div className="enhancer-frame">
          <div className="enhancer-image" style={{ backgroundImage: `url(${profileGridImages[0].url})` }} />
          <span className="enhancer-corner enhancer-corner--tl" />
          <span className="enhancer-corner enhancer-corner--tr" />
          <span className="enhancer-corner enhancer-corner--bl" />
          <span className="enhancer-corner enhancer-corner--br" />
          <div className="enhancer-scan-line" />
        </div>
      </div>

      <footer className="enhancer-footer">
        <div className="enhancer-progress-copy">
          <span>Uploading</span>
          <span>{enhancerProgressWidth}%</span>
        </div>
        <div className="enhancer-progress-track" style={{ width: `${enhancerProgressWidth}%` }}>
          <div className="enhancer-progress-fill" style={{ width: '84%' }} />
        </div>
        <button type="button" className="btn btn--primary btn--lg btn--block" onClick={onComplete}>
          Complete Processing
        </button>
      </footer>
    </div>
  );
}

function ProfileOutfitBreakdownView({ onBack, onSave }) {
  return (
    <div className="profile-subscreen profile-breakdown-view hue-lime">
      <header className="profile-breakdown-header">
        <button type="button" className="profile-back-button profile-back-button--ghost" onClick={onBack} aria-label="Back to profile">
          <Icon d={ICONS.chev_l} size={24} stroke={2.5} />
        </button>
        <div className="profile-breakdown-spacer" />
      </header>

      <section className="profile-breakdown-hero">
        <div className="profile-breakdown-image" style={{ backgroundImage: `url(${profileGridImages[0].url})` }} />
      </section>

      <section className="profile-breakdown-summary">
        <h2>Denim Weekend</h2>
      </section>

      <section className="profile-breakdown-items">
        <div className="profile-breakdown-label">Items detected</div>
        <div className="profile-breakdown-cards">
          {detectedOutfitItems.map((item) => (
            <article key={item.id} className="profile-breakdown-card">
              <div className="profile-breakdown-card-image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
              <div className="profile-breakdown-card-title">{item.title}</div>
            </article>
          ))}
        </div>
      </section>

      <footer className="profile-breakdown-footer">
        <button type="button" className="btn btn--primary btn--lg btn--block" onClick={onSave}>
          Save to wardrobe
        </button>
      </footer>
    </div>
  );
}

function ProfileMainView({
  activeTab,
  activeFilter,
  isFabOpen,
  profileHue,
  onTabChange,
  onFilterChange,
  onCalendarOpen,
  onStatsOpen,
  onFabToggle,
  fabPosition,
}) {
  const allProfileCards = profileMasonryCards.flat();
  const boardProfileCards = allProfileCards.filter(c => c.type === 'outfit');
  const visibleColumns = profileMasonryCards.map((column) =>
    column.map((card) => {
      const isVisible = activeTab === 'Boards'
        ? card.type === 'outfit'
        : activeFilter === 'Items'
          ? card.type === 'item'
          : activeFilter === 'Outfits'
            ? card.type === 'outfit'
            : true;

      return { ...card, isVisible };
    }),
  );

  return (
    <>
      <div className={`profile-scroll-container hue-${profileHue}${isFabOpen ? ' is-dimmed' : ''}`}>
        <header className="profile-top-actions">
          <button type="button" className="icon-action-btn shadow-sm" aria-label="Share profile">
            <ShareIcon dark />
          </button>
          <div className="right-group">
            <button type="button" className="icon-action-btn shadow-sm" onClick={onCalendarOpen} aria-label="Open planner">
              <Icon d={ICONS.calendar} size={24} stroke={2.5} />
            </button>
            <button type="button" className="icon-action-btn shadow-sm" onClick={onStatsOpen} aria-label="Open stats">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>
            </button>
          </div>
        </header>

        <div className="profile-identity-section">
          <div className="profile-large-avatar shadow-lg">
            <img src="https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/7E4YC2J4MVNKPTCFTG47ND6175.jpg" alt="Profile" />
          </div>
          <div className="profile-info-stack">
            <h1 className="profile-name">sree</h1>
            <span className="profile-handle">@sreedotee</span>
          </div>
        </div>

        <section className="profile-bio-section" aria-label="Profile summary">
          <p className="profile-bio">attention is the interface</p>
          <div className="profile-social-proof">
            <div className="profile-follower-stack" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="profile-follower-copy">4 followers · 4 following</span>
          </div>
        </section>

        <div className="profile-action-row">
          <button type="button" className="profile-edit-btn">Edit Profile</button>
          <button type="button" className="icon-btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
          </button>
          <button type="button" className="icon-btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </button>
        </div>

        <div className="creator-subfilter-bar">
          {[['All', allProfileCards.length], ['Boards', boardProfileCards.length]].map(([label, count]) => (
            <button key={label} type="button" className={`creator-subfilter-btn ${activeTab === label ? 'active' : ''}`} onClick={() => { onTabChange(label); onFilterChange(null); }}>
              {label} <span className="profile-tab-count">{count}</span>
            </button>
          ))}
        </div>

        {activeTab === 'All' && (
          <div className="creator-pill-filters">
            {['Outfits', 'Items'].map(f => (
              <button key={f} type="button" className={`category-pill ${activeFilter === f ? 'active' : ''}`} style={{ padding: '8px 24px', minHeight: 0 }} onClick={() => onFilterChange(activeFilter === f ? null : f)}>{f}</button>
            ))}
          </div>
        )}

        <div className="profile-masonry-grid">
          {visibleColumns.map((column, columnIndex) => (
            <div key={`profile-column-${columnIndex}`} className="masonry-col">
              {column.map((card) => (
                <article
                  key={card.id}
                  className={`masonry-item profile-paper-card${card.imageUrl ? '' : ' profile-paper-card--placeholder'}${card.isVisible ? '' : ' is-filtered-out'}`}
                  style={{
                    height: `${card.height}px`,
                    ...(card.imageUrl ? { backgroundImage: `url(${card.imageUrl})` } : {}),
                  }}
                  aria-hidden={card.isVisible ? 'false' : 'true'}
                >
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        id="main-fab"
        className={`fab profile-fab shadow-xl ${isFabOpen ? 'fab-active' : ''}`}
        type="button"
        onClick={onFabToggle}
        aria-label="Add item"
        style={{ right: `${fabPosition.right}px`, bottom: `${fabPosition.bottom}px` }}
      >
        <span className="icon-plus">+</span>
      </button>
    </>
  );
}

function ProfileScreen({ activeScreen, profileView, onProfileViewChange }) {
  const [activeTab, setActiveTab] = useState('All');
  const [activeFilter, setActiveFilter] = useState(null);
  const [isFabOpen, setIsFabOpen] = useState(false);

  const dialValues = useDialKit('Profile', {
    profileColor: '#1DB5FF',
  });

  console.log('DialKit profileColor:', dialValues.profileColor);

  const colorMap = {
    '#1db5ff': 'cyan',
    '#9bc926': 'lime',
    '#8a6be0': 'violet',
    '#ff6b1a': 'orange',
    '#0a0a0a': 'oat',
  };
  const profileHue = colorMap[dialValues.profileColor?.toLowerCase()] || 'cyan';

  console.log('Mapped profileHue:', profileHue);
  const fabPosition = { right: 24, bottom: 120 };

  useEffect(() => {
    if (activeScreen !== 'profile') {
      setIsFabOpen(false);
      onProfileViewChange('main');
    }
  }, [activeScreen, onProfileViewChange]);

  return (
    <main id="profile-screen" className={`screen hue-${profileHue}${activeScreen === 'profile' ? ' active' : ''}`} data-tab="profile">
      {profileView === 'main' && (
        <>
          <ProfileMainView
            activeTab={activeTab}
            activeFilter={activeFilter}
            isFabOpen={isFabOpen}
            profileHue={profileHue}
            onTabChange={(tab) => {
              setActiveTab(tab);
              setActiveFilter(null);
            }}
            onFilterChange={setActiveFilter}
            onCalendarOpen={() => onProfileViewChange('planner')}
            onStatsOpen={() => onProfileViewChange('stats')}
            onFabToggle={() => setIsFabOpen((open) => !open)}
            fabPosition={fabPosition}
          />
          <ProfileFabMenuOverlay
            open={isFabOpen}
            onClose={() => setIsFabOpen(false)}
            onUpload={() => setIsFabOpen(false)}
          />
        </>
      )}

      {profileView === 'planner' && <ProfilePlannerView onBack={() => onProfileViewChange('main')} />}
      {profileView === 'stats' && <ProfileStatsView onBack={() => onProfileViewChange('main')} />}
      {profileView === 'ai-enhancer' && (
        <ProfileAiEnhancerView
          onBack={() => onProfileViewChange('main')}
          onComplete={() => onProfileViewChange('outfit-breakdown')}
        />
      )}
      {profileView === 'outfit-breakdown' && (
        <ProfileOutfitBreakdownView
          onBack={() => onProfileViewChange('main')}
          onSave={() => onProfileViewChange('main')}
        />
      )}
    </main>
  );
}


const SHOW_DISCOVER_FOLLOW_CHIP = false;
const SHOW_DISCOVER_SECONDARY_ACTION = false;
const AGENTATION_SYNC_URL = 'http://localhost:4747/annotations';

const screens = [
  { id: 'home', label: 'Discover' },
  { id: 'explore', label: 'Search' },
  { id: 'studio', label: 'Create' },
  { id: 'inbox', label: 'Notifications' },
  { id: 'profile', label: 'Profile' },
];


function AppBottomNav({ activeScreen, onScreenChange }) {
  const navIcons = [
    { key: 'home', label: 'Discover', icon: ICONS.globe },
    { key: 'explore', label: 'Search', icon: ICONS.search },
    { key: 'studio', label: 'Create', icon: ICONS.sparkle },
    { key: 'inbox', label: 'Notifications', icon: ICONS.bell },
    { key: 'profile', label: 'Profile', icon: ICONS.user },
  ];

  return (
    <div className="app-bottom-nav" aria-label="Primary">
      {navIcons.map(({ key, label, icon }) => (
        <button
          key={key}
          className={`discover-nav-button${activeScreen === key ? ' discover-nav-active' : ''}`}
          type="button"
          aria-label={label}
          onClick={() => onScreenChange(key)}
          style={{ color: activeScreen === key ? '#0D0D0D' : '#828282' }}
        >
          <Icon d={icon} size={24} stroke={2} />
        </button>
      ))}
    </div>
  );
}

function DialKitCopyButton() {
  const copyDialKitSnapshot = async () => {
    const panels = DialStore.getPanels();
    const payload = panels.reduce((accumulator, panel) => {
      accumulator[panel.name] = DialStore.getValues(panel.id);
      return accumulator;
    }, {});

    try {
      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
      window.__dialkitSnapshot = payload;
    } catch (error) {
      console.warn('Failed to copy DialKit values', error);
    }
  };

  return (
    <button type="button" className="btn btn--surface btn--sm" onClick={copyDialKitSnapshot}>
      Copy Dial
    </button>
  );
}

// Prevents DialKit slider drags from bubbling up and moving the panel
function DialKitDragFix() {
  useEffect(() => {
    const INTERACTIVE = 'input, [role="slider"], button, select, textarea';
    const stop = (e) => e.stopPropagation();

    function attach(root) {
      root.querySelectorAll(INTERACTIVE).forEach((el) => {
        el.removeEventListener('pointerdown', stop);
        el.addEventListener('pointerdown', stop);
      });
    }

    // Attach to any existing DialKit panels
    document.querySelectorAll('[data-dialkit], [class*="dialkit"]').forEach(attach);

    // Watch for DialKit panels added dynamically
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType === 1) {
            const el = /** @type {Element} */ (node);
            if (el.className && typeof el.className === 'string' && el.className.includes('dialkit')) {
              attach(el);
            }
            el.querySelectorAll('[class*="dialkit"]').forEach(attach);
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Re-attach every 500ms as a fallback for late-mounting panels
    const interval = setInterval(() => {
      document.querySelectorAll('[class*="dialkit"]').forEach(attach);
    }, 500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return null;
}

function ShareIcon({ dark = false }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={dark ? '#0D0D0D' : '#FAFAFA'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51 15.42 17.49" />
      <path d="M15.41 6.51 8.59 10.49" />
    </svg>
  );
}
function DiscoverCard({ card, onOpen, dials }) {
  const { avatarSize, nameFontSize, nameLineHeight, contextFontSize, contextLineHeight, rowGap, authorTextGap, top, left, right, isBottom } = dials;

  const cardClassName = [
    'discover-card',
    `discover-card--${card.type}`,
    onOpen ? 'discover-card--interactive' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const authorSection = (
    <div className="discover-author" style={{ gap: rowGap }}>
      <div className="discover-author-avatar" style={{ width: avatarSize, height: avatarSize, flexShrink: 0, ...(card.authorAvatar ? { backgroundImage: `url(${card.authorAvatar})` } : {}) }} />
      <div className="discover-author-text">
        <div className="discover-author-name" style={{ fontSize: nameFontSize, lineHeight: nameLineHeight, color: isBottom ? '#FAFAFA' : '#0D0D0D' }}>{card.author}</div>
        <div className="discover-author-context" style={{ fontSize: contextFontSize, lineHeight: contextLineHeight, color: isBottom ? 'rgba(250, 250, 250, 0.8)' : '#8C8C8C' }}>{card.context}</div>
      </div>
    </div>
  );

  return (
    <article
      className={cardClassName}
      aria-label={`${card.type} inspiration card`}
      onClick={onOpen}
    >
        <div
          className="discover-card-media"
          style={{
            '--discover-card-height': `${card.height}px`,
          }}
        >
          {card.type === 'outfit' ? (
            <>
              <img
                className="discover-card-image"
                src={card.imageUrl}
                alt=""
                aria-hidden="true"
                style={{
                  objectFit: 'cover',
                  objectPosition: card.imagePosition,
                }}
              />
              <div className="discover-card-image-tint" aria-hidden="true" />
            </>
          ) : null}
          {!isBottom && (
            <div className="discover-card-top" style={{ top, left, right }}>
              {authorSection}
              {SHOW_DISCOVER_FOLLOW_CHIP ? (
                <button className="btn btn--surface btn--sm" type="button">Follow</button>
            ) : null}
          </div>
        )}
        {/* Removed redundant item meta for unified layout */}
        <div className="discover-card-actions discover-card-actions-overlay" style={{ justifyContent: 'space-between', alignItems: 'flex-end', left, right, bottom: top }}>
          {isBottom ? authorSection : <div />}
          <button
            className="discover-save-pill"
            type="button"
            aria-label="Save count"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <Icon d={ICONS.heart} size={32} stroke={2} />
            <span>{card.count}</span>
          </button>
        </div>
      </div>
      {SHOW_DISCOVER_SECONDARY_ACTION ? (
        <div className="discover-card-actions">
          <button className="discover-save-icon" type="button" aria-label="Save outfit">
            <ShareIcon />
          </button>
        </div>
      ) : null}
    </article>
  );
}

function DiscoverOutfitOverlay({ card, onClose, onSetActiveCard, feedDials, onCreatorOpen }) {
  const [footerOpacity, setFooterOpacity] = useState(1);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const cardRef = useRef(null);
  const detail = discoverOutfitDetails[card.id] ?? discoverOutfitDetails.default;
  const { overlayRadius, authorGap, authorPad, itemsGap, itemRadius, authorAvatarSize, itemsTitleGap, itemCardGap, itemCardWidth, heroHeight, bodyPad, footerPadTop, footerPadBottom, sectionsGap, followBtn, ctaBtn, itemSaveIcon, text, moreItemsGap, shareIconSize } = useDialKit('Discover Overlay', {
    overlayRadius: [0, 0, 48],
    authorGap:     [8,  0, 32],
    authorPad:     [8,  0, 24],
    itemsGap:      [12,  0, 32],
    itemRadius:    [4,  0, 32],
    itemCardGap:   [2,  0, 16],
    authorAvatarSize: [36, 24, 64],
    itemsTitleGap: [12, 0, 32],
    itemCardWidth: [80, 48, 120],
    heroHeight:    [450, 150, 500],
    bodyPad:       [8, 0, 32],
    footerPadTop:  [16, 0, 32],
    footerPadBottom: [16, 0, 48],
    sectionsGap:   [12, 0, 32],
    moreItemsGap:  [12, 0, 32],
    shareIconSize: [24, 16, 32],
    followBtn: {
      _collapsed: true,
      radius: [4, 0, 32],
      fontSize: [12, 4, 20],
    },
    ctaBtn: {
      _collapsed: true,
      radius: [12, 0, 32],
      fontSize: [14, 8, 20],
    },
    itemSaveIcon: {
      _collapsed: true,
      bottom: [4, 0, 24],
      right: [4, 0, 24],
    },
    text: {
      _collapsed: true,
      authorName:    [14, 8, 24],
      authorNameLineHeight: [1.4, 0.8, 2],
      authorContext: [14, 8, 20],
      authorContextLineHeight: [1.2, 0.8, 2],
      authorTextGap: [0, 0, 16],
      itemsHeader:   [14, 8, 24],
      itemBrand:     [12, 8, 20],
      itemBrandLineHeight: [1.1, 0.8, 2],
      itemName:      [12, 8, 18],
      itemNameLineHeight: [1.1, 0.8, 2],
      footerCount:   [12, 8, 18],
      footerCta:     [14, 8, 24],
      moreItemsHeader: [14, 8, 24],
    },
  });

  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.scrollTop = 0;
    }
    setFooterOpacity(1);
    setLastScrollTop(0);
  }, [card.id]);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const handleScroll = () => {
      const scrollTop = cardElement.scrollTop;
      const itemsSection = cardElement.querySelector('.discover-overlay-items-section');
      const itemsSectionBottom = itemsSection ? itemsSection.offsetTop + itemsSection.offsetHeight : 0;
      const hideStartPoint = itemsSectionBottom - 100;

      if (scrollTop < hideStartPoint) {
        setFooterOpacity(1);
      } else {
        const hideDistance = scrollTop - hideStartPoint;
        const maxHideDistance = 200;
        const opacity = Math.max(0, 1 - hideDistance / maxHideDistance);
        setFooterOpacity(opacity);
      }

      setLastScrollTop(scrollTop);
    };

    cardElement.addEventListener('scroll', handleScroll);
    return () => cardElement.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className="discover-overlay">
      <div className="discover-overlay-card" ref={cardRef}>
        <div
            className="discover-overlay-hero"
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.15) 100%), url(${card.imageUrl})`,
              backgroundPosition: `center, ${card.imagePosition}`,
              backgroundSize: 'auto, cover',
              height: heroHeight,
              position: 'relative',
              flexShrink: 0,
            }}
          >
          <button type="button" className="discover-overlay-back" onClick={onClose} aria-label="Back">
            <Icon d={ICONS.chev_l} size={24} stroke={2.5} />
          </button>
          <button type="button" className="discover-overlay-share" aria-label="Share outfit" style={{ position: 'absolute', bottom: 14, right: 14, background: 'none', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
            <Icon d={ICONS.share} size={32} stroke={2} />
          </button>
        </div>

        <div className="discover-overlay-body" style={{ paddingTop: 16, paddingLeft: 16, paddingRight: 16, gap: sectionsGap }}>
          <div className="discover-overlay-author-row" style={{ gap: authorGap, marginBottom: authorPad, alignItems: 'flex-start' }}>
            <div className="discover-author" style={{ cursor: 'pointer' }} onClick={() => onCreatorOpen && onCreatorOpen(card)}>
              <div className="discover-author-avatar" style={{ width: authorAvatarSize, height: authorAvatarSize, flexShrink: 0, ...(card.authorAvatar ? { backgroundImage: `url(${card.authorAvatar})` } : {}) }} />
              <div className="discover-author-text" style={{ gap: text.authorTextGap }}>
                <div className="discover-author-name" style={{ fontSize: text.authorName, lineHeight: text.authorNameLineHeight }}>{card.author}</div>
                <div className="discover-author-context" style={{ fontSize: text.authorContext, lineHeight: text.authorContextLineHeight }}>{card.context}</div>
              </div>
            </div>
            <button type="button" className="btn btn--sm" style={{ background: '#1DB5FF', color: '#fff', flexShrink: 0 }}>Follow</button>
          </div>


          {card.type === 'outfit' && (
            <>
              <div className="discover-overlay-items-section" style={{ display: 'flex', flexDirection: 'column', gap: itemsTitleGap }}>
                <div className="discover-overlay-items-header" style={{ fontSize: text.itemsHeader }}>Items used</div>
                <div className="discover-overlay-items" style={{ gap: itemsGap }}>
                  {detail.items.map((item) => (
                    <div key={item.id} className="discover-overlay-item-card" style={{ gap: itemCardGap, width: itemCardWidth, minWidth: itemCardWidth }}>
                        <div className="discover-overlay-item-image" style={{ backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.12) 100%), url(${item.imageUrl})`, backgroundSize: 'auto, cover', borderRadius: itemRadius }}>
                        <button type="button" className="discover-overlay-item-plus" aria-label={`Save ${item.name}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: itemSaveIcon.bottom, right: itemSaveIcon.right }}>
                          <Icon d={ICONS.bookmark} size={20} stroke={2} />
                        </button>
                      </div>
                      <div className="discover-overlay-item-brand" style={{ fontSize: text.itemBrand, lineHeight: text.itemBrandLineHeight }}>{item.brand}</div>
                      <div className="discover-overlay-item-name" style={{ fontSize: text.itemName, lineHeight: text.itemNameLineHeight }}>{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="discover-overlay-more-section" style={{ display: 'flex', flexDirection: 'column', gap: moreItemsGap }}>
                <div className="discover-overlay-items-header" style={{ fontSize: text.moreItemsHeader }}>More like this</div>
                <div className="discover-grid">
                  <div className="discover-column">
                    {(() => {
                      const outfitCards = discoverCards.filter(c => c.id !== card.id && c.type === 'outfit');
                      return outfitCards.filter((_, i) => i % 2 === 0).map((recCard) => (
                        <DiscoverCard
                          key={recCard.id}
                          card={recCard}
                          onOpen={() => onSetActiveCard(recCard)}
                          dials={feedDials}
                        />
                      ));
                    })()}
                  </div>
                  <div className="discover-column discover-column-offset">
                    {(() => {
                      const outfitCards = discoverCards.filter(c => c.id !== card.id && c.type === 'outfit');
                      return outfitCards.filter((_, i) => i % 2 === 1).map((recCard) => (
                        <DiscoverCard
                          key={recCard.id}
                          card={recCard}
                          onOpen={() => onSetActiveCard(recCard)}
                          dials={feedDials}
                        />
                      ));
                    })()}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="discover-overlay-footer" style={{ paddingTop: footerPadTop, paddingBottom: footerPadBottom, position: 'sticky', bottom: 0, zIndex: 100, opacity: footerOpacity, transform: `translateY(${(1 - footerOpacity) * 12}px)`, transition: 'opacity 0ms, transform 0ms' }}>
          <div className="discover-overlay-footer-copy">
            {card.type === 'outfit' && (
              <div className="discover-overlay-footer-copy-stack">
                <span style={{ fontSize: text.footerCount }}>{detail.includedCount} Items</span>
                <strong style={{ fontSize: text.footerCta }}>Included</strong>
              </div>
            )}
          </div>
          <button type="button" className="discover-overlay-cta" style={{ fontSize: ctaBtn.fontSize, borderRadius: ctaBtn.radius }}>
            <Icon d={ICONS.bookmark} size={24} stroke={2} />
            {card.type === 'outfit' ? 'Save outfit' : 'save item'}
          </button>
        </div>
      </div>
    </div>
  );
}

function CreatorProfileOverlay({ card, onClose }) {
  const [activeTab, setActiveTab] = useState('All');
  const [activeFilter, setActiveFilter] = useState(null);
  const allCards = discoverCards.filter(c => c.author === card.author);
  const boardCards = allCards.filter(c => c.type === 'outfit');
  const baseCards = activeTab === 'Boards' ? boardCards : allCards;
  const visibleCards = activeFilter === 'Outfits' ? baseCards.filter(c => c.type === 'outfit')
    : activeFilter === 'Items' ? baseCards.filter(c => c.type === 'item')
    : baseCards; // null = no filter
  const leftCol = visibleCards.filter((_, i) => i % 2 === 0);
  const rightCol = visibleCards.filter((_, i) => i % 2 === 1);
  const handle = '@' + card.author.toLowerCase().replace(/\s/g, '');

  return (
    <div className="discover-overlay" style={{ zIndex: 200 }}>
      <div className="discover-overlay-card" style={{ borderRadius: 0 }}>
        <div className="profile-scroll-container hue-cyan" style={{ overflow: 'auto', height: '100%' }}>

          {/* Top actions — mirrors own profile */}
          <header className="profile-top-actions">
            <button type="button" className="icon-action-btn shadow-sm" onClick={onClose} aria-label="Back">
              <Icon d={ICONS.chev_l} size={24} stroke={2.5} />
            </button>
            <div className="right-group">
              <button type="button" className="icon-action-btn shadow-sm" aria-label="Search">
                <Icon d={ICONS.search} size={24} stroke={2.5} />
              </button>
              <button type="button" className="icon-action-btn shadow-sm" aria-label="More">
                <Icon d={ICONS.dots} size={24} stroke={2.5} />
              </button>
            </div>
          </header>

          {/* Identity */}
          <div className="profile-identity-section">
            <div className="profile-large-avatar shadow-lg">
              {card.authorAvatar
                ? <img src={card.authorAvatar} alt={card.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#EAF0F4,#1DB5FF33)' }} />
              }
            </div>
            <div className="profile-info-stack">
              <h1 className="profile-name">{card.author}</h1>
              <span className="profile-handle">{handle}</span>
            </div>
          </div>

          {/* Bio */}
          <section className="profile-bio-section">
            <p className="profile-bio">{card.context}</p>
            <div className="profile-social-proof">
              <div className="profile-follower-stack" aria-hidden="true">
                <span /><span /><span />
              </div>
              <span className="profile-follower-copy">{card.count} followers</span>
            </div>
          </section>

          {/* Action row — Follow only, no settings/X */}
          <div className="profile-action-row">
            <button type="button" className="profile-edit-btn" style={{ background: '#1DB5FF', color: '#fff', border: 'none' }}>Follow</button>
          </div>

          {/* Global tabs: All / Boards — half-width each */}
          <div className="creator-subfilter-bar">
            {[['All', allCards.length], ['Boards', boardCards.length]].map(([label, count]) => (
              <button key={label} type="button" className={`creator-subfilter-btn ${activeTab === label ? 'active' : ''}`} onClick={() => { setActiveTab(label); setActiveFilter(null); }}>
                {label} <span className="profile-tab-count">{count}</span>
              </button>
            ))}
          </div>

          {/* Outfits / Items pills — only inside All */}
          {activeTab === 'All' && (
            <div className="creator-pill-filters">
              {['Outfits', 'Items'].map(f => (
                <button key={f} type="button" className={`category-pill ${activeFilter === f ? 'active' : ''}`} style={{ padding: '8px 24px', minHeight: 0 }} onClick={() => setActiveFilter(activeFilter === f ? null : f)}>{f}</button>
              ))}
            </div>
          )}

          {/* Grid */}
          <div className="profile-masonry-grid">
            <div className="masonry-col">
              {leftCol.map(c => (
                <article key={c.id} className="masonry-item profile-paper-card" style={{ height: c.height, backgroundImage: `url(${c.imageUrl})`, backgroundSize: 'cover', backgroundPosition: c.imagePosition }} />
              ))}
            </div>
            <div className="masonry-col">
              {rightCol.map(c => (
                <article key={c.id} className="masonry-item profile-paper-card" style={{ height: c.height, backgroundImage: `url(${c.imageUrl})`, backgroundSize: 'cover', backgroundPosition: c.imagePosition }} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function DiscoverScreen({ activeDiscoverTab, onDiscoverTabChange, activeScreen }) {
  const [activeOutfitCard, setActiveOutfitCard] = useState(null);
  const [activeCreator, setActiveCreator] = useState(null);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });
  const tabsRef = useRef(null);
  const leftColumnCards = discoverCards.filter((card) => card.column === 0);
  const rightColumnCards = discoverCards.filter((card) => card.column === 1);
  const { tabsTopOffset } = useDialKit('Discover Tabs', {
    tabsTopOffset: [-6, -24, 24],
  });

  useEffect(() => {
    const measureTab = () => {
      const tabsContainer = tabsRef.current;
      if (!tabsContainer) return;
      const activeButton = tabsContainer.querySelector('.discover-tab.is-active');
      if (activeButton) {
        const { offsetWidth, offsetLeft } = activeButton;
        setSliderStyle({ width: offsetWidth, left: offsetLeft });
      }
    };

    measureTab();
    const timer = setTimeout(measureTab, 50);
    return () => clearTimeout(timer);
  }, [activeDiscoverTab]);
  const feedDials = {
    avatarSize: 22,
    nameFontSize: 10,
    nameLineHeight: 1.2,
    contextFontSize: 10,
    contextLineHeight: 1.2,
    rowGap: 4,
    authorTextGap: 0,
    top: 8,
    left: 7,
    right: 8,
    isBottom: true,
  };

  useEffect(() => {
    if (activeScreen !== 'home') {
      setActiveOutfitCard(null);
    }
  }, [activeScreen]);

  return (
    <main id="home-screen" className={`screen hue-cyan${activeScreen === 'home' ? ' active' : ''}`} data-tab="home" aria-label="Discover feed">
      <div className="discover-top-nav" style={{ top: `calc(var(--app-status-bar-height) + ${tabsTopOffset}px)` }}>
        <div className="discover-tabs" ref={tabsRef} role="tablist" aria-label="Discover tabs">
          <div className="discover-tabs-slider" style={{ width: `${sliderStyle.width}px`, left: `${sliderStyle.left}px` }} />
          <button className={`discover-tab${activeDiscoverTab === 'featured' ? ' is-active' : ''}`} type="button" onClick={() => onDiscoverTabChange('featured')}>
            For You
          </button>
          <button className={`discover-tab${activeDiscoverTab === 'following' ? ' is-active' : ''}`} type="button" onClick={() => onDiscoverTabChange('following')}>
            Following
          </button>
        </div>
      </div>

      <div className="discover-feed" style={{ top: `calc(var(--app-status-bar-height) + 48px + ${tabsTopOffset}px)` }}>
      <div className="discover-grid" key={activeDiscoverTab} data-direction={activeDiscoverTab === 'following' ? 'right' : 'left'}>
        <div className="discover-column">
          {leftColumnCards.map((card) => (
            <DiscoverCard
              key={card.id}
              card={card}
              onOpen={() => setActiveOutfitCard(card)}
              dials={feedDials}
            />
          ))}
        </div>

        <div className="discover-column discover-column-offset">
          {rightColumnCards.map((card) => (
            <DiscoverCard
              key={card.id}
              card={card}
              onOpen={() => setActiveOutfitCard(card)}
              dials={feedDials}
            />
          ))}
        </div>
      </div>
      </div>

      {activeOutfitCard ? <DiscoverOutfitOverlay card={activeOutfitCard} onClose={() => setActiveOutfitCard(null)} onSetActiveCard={setActiveOutfitCard} feedDials={feedDials} onCreatorOpen={setActiveCreator} /> : null}
      {activeCreator ? <CreatorProfileOverlay card={activeCreator} onClose={() => setActiveCreator(null)} /> : null}
    </main>
  );
}

const exploreCategories = ['All', 'Streetwear', 'Archive', 'Y2K', 'Office'];
const exploreHeroByCategory = {
  All: {
    tag: 'Trending Edit',
    title: "Summer '26 Minimalism",
    image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/665YP1TGMBQ3MGX5VMRNN1785H.jpg',
  },
  Streetwear: {
    tag: 'Streetwear Radar',
    title: 'Utility Layers & Sport Codes',
    image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/3EM6C87RG55K3MCP8G3CD9V95Z.jpg',
  },
  Archive: {
    tag: 'Archive Focus',
    title: 'Collectors Saving Sharp Classics',
    image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/63AKWZN3SG6NK7PV7HABKPGKBY.jpg',
  },
  Y2K: {
    tag: 'Y2K Selects',
    title: 'Gloss, Contrast, and Throwback Shapes',
    image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/3EM6C87RG55K3MCP8G3CD9V95Z.jpg',
  },
  Office: {
    tag: 'Office Edit',
    title: 'Tailored Uniforms for the Week',
    image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/63AKWZN3SG6NK7PV7HABKPGKBY.jpg',
  },
};

const topBrands = [
  { name: 'Nike', image: 'https://www.nike.com/favicon.ico', category: 'Streetwear', style: { backgroundColor: '#FFFFFF' } },
  { name: 'Balenciaga', image: 'https://www.balenciaga.com/favicon.ico', category: 'Archive', style: { backgroundColor: '#FFFFFF' } },
  { name: 'Carhartt', image: 'https://www.carhartt-wip.com/favicon.ico', category: 'Streetwear', style: { backgroundColor: '#FFFFFF' } },
  { name: 'Miu Miu', image: 'https://www.miumiu.com/favicon.ico', category: 'Y2K', style: { backgroundColor: '#FFFFFF' } },
  { name: 'Acne', letter: 'A', category: 'Office', style: { backgroundColor: '#FFFFFF', color: '#0D0D0D', fontWeight: 700, fontSize: '24px' } }
];

const featuredCurators = [
  { name: 'Elena R.', category: 'Streetwear', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/0TK6E061QN92FS4WCMBFZ6T84Q.jpg' },
  { name: 'Sam T.', category: 'All', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/464X8926HVCK2WWBTR75HE6K0D.jpg' },
  { name: 'Marcus V.', category: 'Office', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/6AFQP7ZDH931DK59DMCZFB3033.jpg' },
  { name: 'Sofia D.', category: 'Archive', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/3JW400Y7PDBHDZMA98TXK3BH13.jpg' },
  { name: 'David L.', category: 'Streetwear', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/28AFFD2V1Q4A2G0TXPD524ZYHX.jpg' },
  { name: 'Maya P.', category: 'Y2K', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/0TK6E061QN92FS4WCMBFZ6T84Q.jpg' },
  { name: 'Theo K.', category: 'Office', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/464X8926HVCK2WWBTR75HE6K0D.jpg' }
];

const trendingOutfits = [
  { title: 'Street Style', category: 'Streetwear', bg: 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%), #888888' },
  { title: 'Office Core', category: 'Office', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/63AKWZN3SG6NK7PV7HABKPGKBY.jpg' },
  { title: 'Evening Wear', category: 'Y2K', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/3EM6C87RG55K3MCP8G3CD9V95Z.jpg' }
];

const inboxItems = [
  {
    id: 1,
    title: 'New today',
    items: [
      { id: 'n1', type: 'follow', name: 'Emma Rose', action: 'started following you.', time: '2h', avatar: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/464X8926HVCK2WWBTR75HE6K0D.jpg', hasButton: true },
      { id: 'n2', type: 'save', name: 'Liam_O and 4 others', action: 'saved your Utility Jacket to their Wardrobe.', time: '5h', avatar: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/6AFQP7ZDH931DK59DMCZFB3033.jpg', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/665YP1TGMBQ3MGX5VMRNN1785H.jpg' },
      { id: 'n3', type: 'stat', name: 'System', action: 'Your curated cluster "Autumn Core" reached 1k saves!', time: '1d', avatar: 'star', image: null }
    ]
  },
  {
    id: 2,
    title: 'This week',
    items: [
      { id: 'n4', type: 'cluster', name: 'Sarah Chen', action: 'curated a new cluster "Minimalist Essentials" matching your style profile.', time: '5d', avatar: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/0TK6E061QN92FS4WCMBFZ6T84Q.jpg', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/63AKWZN3SG6NK7PV7HABKPGKBY.jpg' },
      { id: 'n5', type: 'wishlist', name: 'David Mills', action: 'added your item to his cluster Wishlist 2026.', time: '1w', avatar: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/28AFFD2V1Q4A2G0TXPD524ZYHX.jpg', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/3EM6C87RG55K3MCP8G3CD9V95Z.jpg' }
    ]
  }
];

const inboxTabContent = {
  All: inboxItems,
  Saves: [
    {
      id: 'saves-1',
      title: 'New today',
      items: [
        { id: 'save-1', type: 'save', name: 'Liam_O and 4 others', action: 'saved your Utility Jacket to their Wardrobe.', time: '5h', avatar: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/6AFQP7ZDH931DK59DMCZFB3033.jpg', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/665YP1TGMBQ3MGX5VMRNN1785H.jpg' },
        { id: 'save-2', type: 'save', name: 'Avery Chen', action: 'saved your Linen Shirt to their Wardrobe.', time: '7h', avatar: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/0TK6E061QN92FS4WCMBFZ6T84Q.jpg', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/63AKWZN3SG6NK7PV7HABKPGKBY.jpg' },
        { id: 'save-3', type: 'stat', name: 'System', action: 'Your Summer Edit reached 2.4k saves this week.', time: '1d', avatar: 'star', image: null }
      ]
    },
    {
      id: 'saves-2',
      title: 'Earlier',
      items: [
        { id: 'save-4', type: 'save', name: 'Mina Park', action: 'saved your White Tee to their Wardrobe.', time: '2d', avatar: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/28AFFD2V1Q4A2G0TXPD524ZYHX.jpg', image: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/3EM6C87RG55K3MCP8G3CD9V95Z.jpg' }
      ]
    }
  ],
  Follows: [
    {
      id: 'follows-1',
      title: 'New today',
      items: [
        { id: 'follow-1', type: 'follow', name: 'Emma Rose', action: 'started following you.', time: '2h', avatar: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/464X8926HVCK2WWBTR75HE6K0D.jpg', hasButton: true },
        { id: 'follow-2', type: 'follow', name: 'Noah Kim', action: 'started following you.', time: '4h', avatar: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/0TK6E061QN92FS4WCMBFZ6T84Q.jpg', hasButton: true },
        { id: 'follow-3', type: 'follow', name: 'Julia Stone', action: 'followed your profile.', time: '1d', avatar: 'https://app.paper.design/file-assets/01KPAP3TXNQJ89SHJ3P0WDMA3F/3JW400Y7PDBHDZMA98TXK3BH13.jpg', hasButton: true }
      ]
    }
  ]
};

function InboxScreen({ activeScreen }) {
  const [activeTab, setActiveTab] = useState('All');
  // const { knob } = useDialKit();

  // const followPaddingX = knob('Follow Btn Padding X', 10, { min: 4, max: 24 });
  // const followPaddingY = knob('Follow Btn Padding Y', 5, { min: 2, max: 16 });
  // const followRadius = knob('Follow Btn Radius', 6, { min: 0, max: 24 });
  // const followBg = knob('Follow Btn Bg', '#F5F5F5');
  // const followColor = knob('Follow Btn Text', '#0D0D0D');
  // const followFontSize = knob('Follow Btn Font Size', 10, { min: 8, max: 16 });

  const visibleSections = inboxTabContent[activeTab] ?? inboxItems;

  return (
    <main id="inbox-screen" className={`screen hue-cyan${activeScreen === 'inbox' ? ' active' : ''}`} data-tab="inbox">
      <div className="inbox-container">
        <header className="inbox-header">
          <h1 className="inbox-title">Updates</h1>
          <div className="inbox-tabs">
            {['All', 'Saves', 'Follows'].map(tab => (
              <button key={tab} className={`inbox-tab-chip ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
        </header>

        <section className="inbox-scroll">
          {visibleSections.map(section => (
            <div key={section.id} className="inbox-section">
              <h2 className="inbox-section-title">{section.title}</h2>
              <div className="inbox-list">
                {section.items.map(item => (
                  <div key={item.id} className="inbox-row">
                    <div className={`inbox-avatar ${item.avatar === 'star' ? 'star-avatar' : ''}`}>
                      {item.avatar === 'star' ? <span className="icon">★</span> : <img src={item.avatar} alt="" />}
                    </div>
                    <div className="inbox-content-text">
                      <div className="inbox-action-wrapper">
                        <div className="inbox-action-line">
                          <span className="name">{item.name}</span> {item.action} 
                          {(item.name.length + item.action.length) <= 75 && (
                            <span className="inbox-time-code"> {item.time}</span>
                          )}
                        </div>
                        {(item.name.length + item.action.length) > 75 && (
                          <span className="inbox-time-overlay">... {item.time}</span>
                        )}
                      </div>
                    </div>
                    <div className="inbox-meta-col">
                      {item.hasButton && (
                        <button className="inbox-follow-btn">
                          <span className="inbox-follow-btn-text">Follow</span>
                        </button>
                      )}
                      {item.image && <div className="inbox-thumbnail" style={{ backgroundImage: `url(${item.image})` }}></div>}
                      {!item.hasButton && !item.image && <div className="inbox-placeholder-meta"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}


function ExploreScreen({ activeScreen }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const heroContent = exploreHeroByCategory[activeCategory] ?? exploreHeroByCategory.All;
  const search = { height: 40, fontSize: 14, padding: 16 };
  const hero = { height: 160, titleSize: 16, tagSize: 10.4, padding: 16 };
  const category = { gap: 8, paddingV: 6, paddingH: 14, fontSize: 13 };
  const section = { gap: 24, titleSize: 16, actionSize: 12 };
  const avatar = { size: 60, nameSize: 11, gap: 10, labelGap: 2 };

  const filteredBrands = activeCategory === 'All'
    ? topBrands
    : topBrands.filter((brand) => brand.category === activeCategory);
  const filteredCurators = activeCategory === 'All'
    ? featuredCurators
    : featuredCurators.filter((curator) => curator.category === activeCategory);
  const filteredOutfitsBase = activeCategory === 'All'
    ? trendingOutfits
    : trendingOutfits.filter((outfit) => outfit.category === activeCategory);
  const filteredOutfits = filteredOutfitsBase.length > 0 ? filteredOutfitsBase : trendingOutfits;

  return (
    <main id="explore-screen" className={`screen hue-cyan${activeScreen === 'explore' ? ' active' : ''}`} data-tab="explore">
      <div className="explore-container">
        
        <div className="explore-top-search" style={{ paddingInline: search.padding }}>
          <div className="search-input-pill" style={{ height: search.height }}>
            <svg style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className="search-input-placeholder" style={{ fontSize: search.fontSize }}>Search styles, creators, brands...</span>

          </div>
        </div>

        <div className="explore-content" style={{ paddingInline: hero.padding, gap: section.gap }}>
          <div className="explore-hero" style={{ 
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%), url(${heroContent.image})`,
            height: hero.height,
            padding: hero.padding,
          }}>
            <div className="explore-hero-title" style={{ fontSize: hero.titleSize }}>{heroContent.title}</div>
          </div>

          <div className="horizontal-scroll-container" style={{ gap: category.gap }}>
            {exploreCategories.map((cat) => (
              <button key={cat} type="button" className={`category-pill ${activeCategory === cat ? 'active' : ''}`} aria-pressed={activeCategory === cat} onClick={() => setActiveCategory(cat)} style={{ fontSize: category.fontSize, padding: `${category.paddingV}px ${category.paddingH}px` }}>
                {cat}
              </button>
            ))}
          </div>

          <div className="explore-section">
            <div className="explore-section-header">
              <div className="explore-section-title" style={{ fontSize: section.titleSize }}>Top Brands</div>
              <div className="explore-section-action" style={{ fontSize: section.actionSize }}>See All</div>
            </div>
            <div className="horizontal-scroll-container" style={{ gap: avatar.gap }}>
              {filteredBrands.map((brand, idx) => (
                <div key={idx} className="circle-item">
                  <div className="circle-avatar" style={{ ...brand.style, width: avatar.size, height: avatar.size, borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {brand.image ? (
                      <img src={brand.image} alt={brand.name} style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
                    ) : (
                      <span style={{ fontSize: brand.style.fontSize, fontWeight: brand.style.fontWeight, fontStyle: brand.style.fontStyle }}>{brand.letter}</span>
                    )}
                  </div>
                  <div className="circle-name" style={{ fontSize: avatar.nameSize, width: avatar.size, marginTop: avatar.labelGap }}>{brand.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="explore-section">
            <div className="explore-section-header">
              <div className="explore-section-title" style={{ fontSize: section.titleSize }}>Featured Curators</div>
              <div className="explore-section-action" style={{ fontSize: section.actionSize }}>See All</div>
            </div>
            <div className="horizontal-scroll-container" style={{ gap: avatar.gap }}>
              {filteredCurators.map((curator, idx) => (
                <div key={idx} className="circle-item">
                  <div className="circle-avatar" style={{ backgroundImage: `url(${curator.image})`, width: avatar.size, height: avatar.size }}></div>
                  <div className="circle-name" style={{ fontSize: avatar.nameSize, width: avatar.size, marginTop: avatar.labelGap }}>{curator.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="explore-section">
            <div className="explore-section-header">
              <div className="explore-section-title" style={{ fontSize: section.titleSize }}>Trending Outfits</div>
              <div className="explore-section-action" style={{ fontSize: section.actionSize }}>See All</div>
            </div>
            <div className="horizontal-scroll-container" style={{ gap: avatar.gap }}>
              {filteredOutfits.map((outfit, idx) => (
                <div key={idx} className="trending-outfit-card" style={ outfit.image ? { backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%), url(${outfit.image})` } : { background: outfit.bg } }>
                  <div className="trending-outfit-title">{outfit.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [activeDiscoverTab, setActiveDiscoverTab] = useState('featured');
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [globalDial, setGlobalDial] = useState({ radius: 20, gutter: 16, appScale: 1 });
  const [profileView, setProfileView] = useState('main');
  const screenHistoryRef = useRef(['home']);

  useEffect(() => {
    const handleFiles = (files, event) => {
      const file = files[0];
      if (file && file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        const target = event.target;
        const imgTarget = target.closest('.discover-card-image, .discover-overlay-hero, .profile-large-avatar, .discover-author-avatar, .masonry-item, .trending-outfit-card, img, .discover-overlay-item-image');
        
        if (imgTarget) {
          if (imgTarget.tagName === 'IMG') {
            imgTarget.src = url;
          } else {
            const currentBg = imgTarget.style.backgroundImage || window.getComputedStyle(imgTarget).backgroundImage;
            if (currentBg && currentBg.includes('linear-gradient')) {
              const newBg = currentBg.replace(/url\(['"]?[^'"]+['"]?\)/g, `url(${url})`);
              if (newBg !== currentBg) {
                imgTarget.style.backgroundImage = newBg;
                return;
              }
            }
            imgTarget.style.backgroundImage = `url(${url})`;
            imgTarget.style.backgroundSize = 'cover';
          }
        }
      }
    };

    const handleDrop = (e) => {
      e.preventDefault();
      if (e.dataTransfer?.files?.length > 0) {
        handleFiles(e.dataTransfer.files, e);
      }
    };
    const handlePaste = (e) => {
      if (e.clipboardData?.files?.length > 0) {
        e.preventDefault();
        // Since paste occurs globally, try to guess the hovered element using recent mouse coords, 
        // or just apply to the active card. But document.elementFromPoint can be used if we tracked mouse.
        // For simplicity, document.activeElement might just be body.
        // Let's just use the current document's active or hovered element if possible, or fallback.
        const hoveredElements = document.querySelectorAll(':hover');
        const targetElement = hoveredElements.length ? hoveredElements[hoveredElements.length - 1] : e.target;
        handleFiles(e.clipboardData.files, { target: targetElement });
      }
    };
    const handleDragOver = (e) => e.preventDefault();

    window.addEventListener('drop', handleDrop);
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('paste', handlePaste);
    return () => {
      window.removeEventListener('drop', handleDrop);
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('paste', handlePaste);
    };
  }, []);

  const syncAnnotations = (annotations) => {
    fetch(AGENTATION_SYNC_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(annotations),
    }).catch(() => {});
  };

  const activeScreenMeta = useMemo(
    () => screens.find((screen) => screen.id === activeScreen) ?? screens[0],
    [activeScreen],
  );

  const handleScreenChange = (nextScreen) => {
    if (nextScreen === activeScreen) return;
    screenHistoryRef.current.push(nextScreen);
    setActiveScreen(nextScreen);
  };

  return (
    <>
      <IOSDevice width={402} height={874}>
        <div id="app-container" data-active-screen={activeScreenMeta.id}>
          <DiscoverScreen
            activeDiscoverTab={activeDiscoverTab}
            onDiscoverTabChange={setActiveDiscoverTab}
            activeScreen={activeScreen}
          />

          <ExploreScreen activeScreen={activeScreen} />

          <StudioScreen activeScreen={activeScreen} />

          <InboxScreen activeScreen={activeScreen} />

          <ProfileScreen activeScreen={activeScreen} profileView={profileView} onProfileViewChange={setProfileView} />

          {!(activeScreen === 'profile' && (profileView === 'ai-enhancer' || profileView === 'planner')) ? <AppBottomNav activeScreen={activeScreen} onScreenChange={handleScreenChange} /> : null}
        </div>
      </IOSDevice>

      <div id="agentation-root">
        <Suspense fallback={null}>
          <Agentation
            webhookUrl={AGENTATION_SYNC_URL}
            onAnnotationAdd={() => syncAnnotations(loadAnnotations(window.location.pathname))}
            onAnnotationUpdate={() => syncAnnotations(loadAnnotations(window.location.pathname))}
            onAnnotationDelete={() => syncAnnotations(loadAnnotations(window.location.pathname))}
            onAnnotationsClear={() => syncAnnotations([])}
          />
        </Suspense>
      </div>
      <DialRoot position="bottom-left" defaultOpen={false} />
      <DialKitDragFix />
    </>
  );
}

export default App;
