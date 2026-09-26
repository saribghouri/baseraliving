import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/content';
import ProductCard from '@/components/ProductCard';
import RoomHero from '@/components/RoomHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import { site, waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Wooden Gifts',
  description: 'Hand-made wooden gifts — serving boards, keepsake boxes, wall clocks, desk sets and jewellery chests. Engraving included, bulk corporate orders welcome.',
};

const OCCASIONS = [
  ['Weddings', 'Jewellery chests, keepsake boxes, engraved serving boards'],
  ['Corporate', 'Desk sets and clocks with your mark, from 25 pieces'],
  ['Eid & housewarming', 'Serving boards, coaster sets, small storage'],
  ['Anniversaries', 'Engraved boxes and clocks with the date on the back'],
];

export const revalidate = 60;

export default async function GiftsPage() {
  const pieces = await getProductsByCategory('gifts');

  return (
    <>
      <RoomHero
        eyebrow="Gifts"
        art="box"
        title="Small things, made the same way as the large ones"
        lead="Offcuts from our furniture become boards, boxes and clocks. Same timber, same joinery, at a price you can give away."
      />

      <section className="py-20">
        <div className="wrap">
          <SectionHead
            eyebrow="The gift range"
            title="Ready to order, engraved free"
            lead="Every piece can be engraved with a name, a date or a company mark at no extra charge."
          />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {pieces.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        </div>
      </section>

      <section className="sandbg py-20">
        <div className="wrap">
          <SectionHead eyebrow="Occasions" title="What people usually order" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {OCCASIONS.map(([o, what], i) => (
              <Reveal key={o} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="surface h-full border p-7" style={{ borderColor: 'rgb(var(--rule))' }}>
                  <h3 className="mb-3 text-[22px]">{o}</h3>
                  <p className="muted text-[13px]">{what}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-bone">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="eyebrow" style={{ color: '#B08E6B' }}>Bulk &amp; corporate</div>
            <h2 className="my-5 text-[clamp(28px,4vw,44px)] text-bone">Twenty-five pieces or two hundred</h2>
            <p className="mb-4 text-[#AFA79B]">
              We take corporate gift orders from 25 pieces upward, engraved with your logo or with
              each recipient&rsquo;s name. Presentation boxes are made in the same workshop, so the
              packaging matches the gift.
            </p>
            <p className="mb-7 text-[#AFA79B]">
              Lead time is four to six weeks depending on quantity. Tell us the number and the date
              you need them by, and we will tell you straight away whether it is possible.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-light" href={waLink(`Assalam o Alaikum, I would like a quote for a bulk gift order from ${site.name}.`)} target="_blank" rel="noopener">
                <span>Ask for a bulk quote</span>
              </a>
              <Link href="/bespoke" className="btn btn-light"><span>Custom gift</span></Link>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="grid grid-cols-2 gap-4">
              {[['25+', 'Minimum order'], ['Free', 'Logo engraving'], ['4–6 wk', 'Lead time'], ['Boxed', 'Presentation ready']].map(([a, b]) => (
                <div key={b} className="border border-[#332E26] p-7 text-center">
                  <div className="font-serif text-[34px] text-brass">{a}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#8E877B]">{b}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
