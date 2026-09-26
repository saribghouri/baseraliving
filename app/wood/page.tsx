import type { Metadata } from 'next';
import Link from 'next/link';
import { getWoods, getProducts } from '@/lib/content';
import RoomHero from '@/components/RoomHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'The Wood',
  description: 'Walnut, sheesham, deodar, ash, mango and teak — the six timbers we work in, where they come from and what each one is good for.',
};

function Price({ n }: { n: number }) {
  return (
    <span className="tracking-[0.3em] text-walnut">
      {'\u25CF'.repeat(n)}<span className="opacity-25">{'\u25CF'.repeat(4 - n)}</span>
    </span>
  );
}

export const revalidate = 60;

export default async function WoodPage() {
  const woods = await getWoods();
  const all = await getProducts();
  const byWood = (slug: string) => all.filter((p) => p.wood === slug);
  return (
    <>
      <RoomHero
        eyebrow="Materials"
        art="shelf"
        title="Six timbers, and why we use each one"
        lead="Most of what goes wrong with furniture in this country is a timber problem, not a design problem. Here is everything we work in and what each is for."
      />

      <section className="py-20">
        <div className="wrap">
          <SectionHead
            eyebrow="The timber library"
            title="What we keep in the workshop"
            lead="All stock is kiln dried to 8–10% moisture before it is cut. This is the step that stops a table splitting in its second summer."
          />

          <div className="flex flex-col gap-6">
            {woods.map((w, i) => {
              const pieces = byWood(w.slug);
              return (
                <Reveal key={w.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <article className="surface grid gap-8 border p-8 lg:grid-cols-[200px_1fr] lg:p-10"
                    style={{ borderColor: 'rgb(var(--rule))' }}>
                    <div>
                      <div className="aspect-square w-full border"
                        style={{
                          borderColor: 'rgb(var(--rule))',
                          background: `repeating-linear-gradient(97deg, ${w.swatch[0]} 0 7px, ${w.swatch[1]} 7px 13px, ${w.swatch[0]} 13px 22px)`,
                        }} />
                      <div className="mt-4 flex items-baseline justify-between">
                        <span className="muted text-[10px] uppercase tracking-[0.22em]">Cost</span>
                        <Price n={w.priceIndex} />
                      </div>
                    </div>

                    <div>
                      <div className="eyebrow">{w.localName}</div>
                      <h3 className="my-2 text-[clamp(26px,3.2vw,36px)]">{w.name}</h3>
                      <p className="muted mb-6 max-w-2xl text-sm">{w.notes}</p>

                      <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
                        {([['Origin', w.origin], ['Hardness', w.hardness], ['Tone', w.tone], ['Grain', w.grain]] as [string, string][]).map(([k, v]) => (
                          <div key={k} className="flex justify-between gap-6 border-b py-3 text-[12.5px]"
                            style={{ borderColor: 'rgb(var(--rule))' }}>
                            <span className="muted shrink-0">{k}</span>
                            <span className="text-right">{v}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        <span className="muted mr-2 text-[10px] uppercase tracking-[0.22em]">Best for</span>
                        {w.bestFor.map((b) => (
                          <span key={b} className="border px-3 py-1.5 text-[11px]" style={{ borderColor: 'rgb(var(--rule))' }}>{b}</span>
                        ))}
                      </div>

                      {pieces.length > 0 && (
                        <div className="mt-6 flex flex-wrap items-center gap-2">
                          <span className="muted mr-2 text-[10px] uppercase tracking-[0.22em]">Pieces in {w.name}</span>
                          {pieces.slice(0, 4).map((p) => (
                            <Link key={p.slug} href={`/product/${p.slug}`}
                              className="text-[12px] underline underline-offset-4 hover:text-walnut">
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sandbg py-20">
        <div className="wrap">
          <SectionHead eyebrow="What we avoid" title="Three things we will not build with" />
          <div className="grid gap-6 md:grid-cols-3">
            {([
              ['Particle board', 'Sawdust and glue. It swells irreversibly the first time it meets water, and every Karachi kitchen meets water. We do not use it anywhere, including in places nobody sees.'],
              ['MDF in structure', 'Fine for a painted panel, useless as a load-bearing part. It holds a screw once. If we use MDF anywhere in a piece it is written on the spec sheet.'],
              ['Un-dried timber', 'Green wood is cheaper and is what most of the market runs on. It will cup, split and twist within eighteen months in this climate. No exceptions on this one.'],
            ] as [string, string][]).map(([h, b], i) => (
              <Reveal key={h} delay={((i % 4) + 1) as 1 | 2 | 3}>
                <div className="surface h-full border p-7" style={{ borderColor: 'rgb(var(--rule))' }}>
                  <h3 className="mb-3 text-[22px]">{h}</h3>
                  <p className="muted text-[13px]">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
