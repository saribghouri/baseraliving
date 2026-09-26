import Reveal from './Reveal';
import Ornament from './Ornament';
import Illustration from './Illustration';
import type { ArtKey } from '@/lib/products';

export default function RoomHero({
  eyebrow, title, lead, art,
}: { eyebrow: string; title: string; lead: string; art: ArtKey }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-bone">
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div className="absolute -right-24 top-1/2 h-[520px] w-[720px] -translate-y-1/2">
          <Illustration art={art} id={`hero-${title.replace(/\s/g, '')}`} />
        </div>
      </div>
      <div className="glow pointer-events-none absolute left-0 top-1/2 h-[80vmax] w-[80vmax] -translate-y-1/2"
        style={{ background: 'radial-gradient(circle,rgba(176,142,107,.18),transparent 60%)' }} />
      <div className="wrap relative">
        <Reveal><div className="eyebrow" style={{ color: '#B08E6B' }}>{eyebrow}</div></Reveal>
        <Reveal delay={1}>
          <h1 className="my-5 max-w-3xl text-[clamp(38px,6.2vw,76px)] leading-[1.05]">{title}</h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="max-w-xl text-[#AFA79B]">{lead}</p>
        </Reveal>
        <Reveal delay={3}><div className="mt-8"><Ornament align="left" dark /></div></Reveal>
      </div>
    </section>
  );
}
