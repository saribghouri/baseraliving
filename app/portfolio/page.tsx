import type { Metadata } from 'next';
import Link from 'next/link';
import { getProjects } from '@/lib/content';
import Illustration from '@/components/Illustration';
import RoomHero from '@/components/RoomHero';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected work — complete apartments, master bedrooms, children\u2019s rooms, offices and restorations, with what was asked for and what was delivered.',
};

export const revalidate = 60;

export default async function PortfolioPage() {
  const projects = await getProjects();
  return (
    <>
      <RoomHero
        eyebrow="Selected work"
        art="sofa"
        title="Rooms we have finished, and what they asked for"
        lead="Six projects from the last three years. Each one starts with the problem the client brought us, because that is the part that decides everything else."
      />

      <div className="grid grid-cols-3 border-b" style={{ borderColor: 'rgb(var(--rule))' }}>
        {([[2400, '+', 'Pieces delivered'], [30, '', 'Years'], [96, '%', 'On or before date']] as [number, string, string][]).map(([n, s, l]) => (
          <div key={l} className="border-r px-4 py-9 text-center last:border-r-0" style={{ borderColor: 'rgb(var(--rule))' }}>
            <b className="block font-serif text-[clamp(28px,4vw,42px)] font-normal text-walnut"><Counter to={n} suffix={s} /></b>
            <span className="muted text-[9.5px] uppercase tracking-[0.26em]">{l}</span>
          </div>
        ))}
      </div>

      <section className="py-20">
        <div className="wrap flex flex-col gap-20">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <article className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 ? 'lg:[direction:rtl]' : ''}`}>
                <div className="sandbg aspect-[4/3] border p-8 lg:[direction:ltr]" style={{ borderColor: 'rgb(var(--rule))' }}>
                  <Illustration art={p.art} id={`pf-${p.slug}`} />
                </div>

                <div className="lg:[direction:ltr]">
                  <div className="muted flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.24em]">
                    <span>{p.year}</span>
                    <span className="h-1 w-1 rotate-45 bg-walnut" />
                    <span>{p.location}</span>
                    <span className="h-1 w-1 rotate-45 bg-walnut" />
                    <span>{p.duration}</span>
                  </div>

                  <h2 className="my-4 text-[clamp(26px,3.6vw,42px)]">{p.title}</h2>
                  <div className="eyebrow mb-4">{p.scope}</div>

                  <div className="mb-5 border-l-2 border-walnut pl-5">
                    <div className="muted mb-1.5 text-[10px] uppercase tracking-[0.22em]">The brief</div>
                    <p className="text-[15px]">{p.brief}</p>
                  </div>

                  <div className="mb-6 border-l-2 pl-5" style={{ borderColor: 'rgb(var(--rule))' }}>
                    <div className="muted mb-1.5 text-[10px] uppercase tracking-[0.22em]">What we did</div>
                    <p className="muted text-[15px]">{p.outcome}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.woods.map((w) => (
                      <span key={w} className="bg-walnut px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-bone">{w}</span>
                    ))}
                    {p.pieces.slice(0, 3).map((piece) => (
                      <span key={piece} className="border px-3 py-1.5 text-[11px]" style={{ borderColor: 'rgb(var(--rule))' }}>{piece}</span>
                    ))}
                    {p.pieces.length > 3 && (
                      <span className="muted px-1 py-1.5 text-[11px]">+{p.pieces.length - 3} more</span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sandbg py-20 text-center">
        <div className="wrap">
          <Reveal><div className="eyebrow">Your room next</div></Reveal>
          <Reveal delay={1}>
            <h2 className="my-5 text-[clamp(28px,4.2vw,46px)]">Tell us the problem, not the product</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="muted mx-auto mb-8 max-w-xl">
              Every project above started with somebody describing what was wrong with a room. That
              is the most useful thing you can send us.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Link href="/bespoke" className="btn"><span>Start a project</span></Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
