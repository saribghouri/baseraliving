import Reveal from './Reveal';
import Counter from './Counter';

const DATA: { to: number; suffix?: string; label: string }[] = [
  { to: 30, label: 'Years of craft' },
  { to: 100, suffix: '%', label: 'Solid hardwood' },
  { to: 2400, suffix: '+', label: 'Pieces delivered' },
  { to: 5, suffix: ' yr', label: 'Structural warranty' },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 border-y md:grid-cols-4" style={{ borderColor: 'rgb(var(--rule))' }}>
      {DATA.map((d, i) => (
        <Reveal key={d.label} delay={(i % 4) as 0 | 1 | 2 | 3} className="border-b px-4 py-9 text-center md:border-b-0 md:border-r md:last:border-r-0"
        >
          <b className="block font-serif text-[42px] font-normal text-walnut">
            <Counter to={d.to} suffix={d.suffix} />
          </b>
          <span className="muted text-[9.5px] uppercase tracking-[0.26em]">{d.label}</span>
        </Reveal>
      ))}
    </div>
  );
}
