import type { Metadata } from 'next';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import FurnitureArt from '@/components/FurnitureArt';
import { site, waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Visit',
  description: `Visit the ${site.name} showroom in ${site.area}. Open seven days a week.`,
};

export default function VisitPage() {
  const rows: [string, string][] = [
    ['Showroom', site.address],
    ['Area', site.area],
    ['Open', site.hours],
    ['Phone / WhatsApp', site.phone],
    ['Email', site.email],
    ['Workshop visits', 'By appointment'],
  ];

  return (
    <section className="py-20">
      <div className="wrap">
        <SectionHead
          eyebrow="Visit us"
          title="Come and sit on it first"
          lead="Photographs only take you so far. The showroom is open seven days a week and there is always chai."
        />
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="surface border p-9" style={{ borderColor: 'rgb(var(--rule))' }}>
              {rows.map(([k, v]) => (
                <div key={k} className="spec-row last:border-b-0">
                  <span className="muted">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
              <div className="mt-7 flex flex-wrap gap-2.5">
                <a className="btn" href={waLink(`Assalam o Alaikum, I would like to know more about ${site.name}.`)} target="_blank" rel="noopener">
                  <span>WhatsApp us</span>
                </a>
                <a className="btn btn-ghost" href={`mailto:${site.email}`}><span>Email</span></a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="surface relative grid aspect-square place-items-center overflow-hidden border p-11" style={{ borderColor: 'rgb(var(--rule))' }}>
              <div className="absolute inset-0 opacity-50"
                style={{ background: 'repeating-linear-gradient(0deg,transparent 0 38px,rgb(var(--rule)) 38px 39px),repeating-linear-gradient(90deg,transparent 0 38px,rgb(var(--rule)) 38px 39px)' }} />
              <div className="relative text-center">
                <FurnitureArt art="sofa" size={90} />
                <div className="eyebrow mt-4">Map goes here</div>
                <p className="muted mx-auto mt-2.5 max-w-[250px] text-xs">
                  Embed Google Maps at this spot once the showroom address is confirmed.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
