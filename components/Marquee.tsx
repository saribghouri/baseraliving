const ITEMS = [
  'Complimentary consultation', '·', 'Custom sizes on every piece', '·',
  'Delivery across Pakistan', '·', 'Solid hardwood only', '·', 'Est. 1996', '·',
];

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-ink py-2 text-[10px] uppercase text-bone" style={{ letterSpacing: '0.26em' }}>
      <div className="marquee">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className="px-7">{t}</span>
        ))}
      </div>
    </div>
  );
}
