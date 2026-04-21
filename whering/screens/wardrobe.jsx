// Wardrobe tab — masonry of garment thumbs with brand-block category tiles
function WardrobeScreen() {
  const filters = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Shoes', 'Accessories'];
  const [active, setActive] = React.useState('All');

  // masonry data: heights vary for rhythm
  const items = [
    { i: 0, h: 220, label: 'Linen shirt' },
    { i: 2, h: 180, label: 'Striped tee' },
    { i: 4, h: 240, label: 'Wool trousers' },
    { i: 6, h: 200, label: 'Cream knit' },
    { i: 1, h: 260, label: 'Black coat' },
    { i: 8, h: 180, label: 'Ivory blouse' },
    { i: 3, h: 220, label: 'Denim jacket' },
    { i: 5, h: 200, label: 'Field jacket' },
  ];
  const col1 = items.filter((_, i) => i % 2 === 0);
  const col2 = items.filter((_, i) => i % 2 === 1);

  return (
    <div style={{ background: '#fff', minHeight: '100%', paddingBottom: 100 }}>
      {/* Top bar */}
      <div style={{ padding: '56px var(--s-5) var(--s-3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="t-32">Wardrobe</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="iconbtn"><Icon d={ICONS.search} size={20} /></button>
          <button className="iconbtn" style={{ background: 'var(--ink-0)', color: 'var(--ink-white)' }}><Icon d={ICONS.plus} size={20} /></button>
        </div>
      </div>

      {/* Stats / summary — two vibrant blocks */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 12, padding: '0 var(--s-5) var(--s-5)' }}>
        <BrandBlock color="lime" title="247 items" sub="32 not worn this season" icon="hanger" height={116} />
        <BrandBlock color="violet" title="14 outfits" sub="logged this week" icon="sparkle" height={116} />
      </div>

      {/* Filter pills */}
      <div style={{ display: 'flex', gap: 8, padding: '0 var(--s-5) var(--s-4)', overflowX: 'auto' }}>
        {filters.map(f => (
          <button key={f} className="chip" aria-pressed={active === f}
            onClick={() => setActive(f)}>{f}</button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="grid-masonry">
        <div className="grid-masonry__col">
          {col1.map((it, idx) => <GarmentCard key={idx} {...it} />)}
          {/* brand tile slotted into the flow */}
          <div className="card card--cyan" style={{ padding: 'var(--s-4)', minHeight: 160, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Icon d={ICONS.sparkle} size={22} />
            <div>
              <div className="t-20" style={{ fontWeight: 700 }}>Rediscover</div>
              <div className="t-14" style={{ opacity: 0.75, marginTop: 2 }}>12 items unworn in 6 mo</div>
            </div>
          </div>
        </div>
        <div className="grid-masonry__col">
          {col2.map((it, idx) => <GarmentCard key={idx} {...it} />)}
        </div>
      </div>
    </div>
  );
}

function GarmentCard({ i, h, label }) {
  return (
    <div className="card card--image" style={{ height: h, background: SWATCHES[i % SWATCHES.length] }}>
      <div className="card__meta" style={{ position: 'absolute', left: 10, right: 10, bottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 2 }}>
        <div className="t-12" style={{ color: '#fff', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,.3)' }}>{label}</div>
        <button className="iconbtn iconbtn--on-dark" style={{ width: 28, height: 28, background: 'rgba(255,255,255,.2)', backdropFilter: 'blur(8px)' }}>
          <Icon d={ICONS.heart} size={14} />
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { WardrobeScreen });
