import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/content';
import ProductCard from '@/components/ProductCard';
import RoomHero from '@/components/RoomHero';
import RoomFeatures from '@/components/RoomFeatures';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import Illustration from '@/components/Illustration';

export const metadata: Metadata = {
  title: 'Kids Furniture & Play Rooms',
  description: 'Children\u2019s beds, bunk beds, play tables, toy storage and study desks in solid wood with zero-VOC finishes.',
};

const SAFETY: [string, string][] = [
  ['Every edge radiused', 'No sharp arris anywhere a child can reach. Every exposed edge is rounded to 8 mm, which is the difference between a bump and a cut.'],
  ['Zero-VOC finishes only', 'Water-based lacquer, certified safe for toys. Children put furniture in their mouths, and solvent-based finishes have no place in their room.'],
  ['Anti-tip anchors included', 'Every tall piece ships with a wall anchor kit and we fit it during installation. A climbing toddler can pull over a wardrobe that is not anchored.'],
  ['Soft-close on every lid', 'Toy chests and storage benches use soft-close hinges as standard. A falling lid is the most common furniture injury to small hands.'],
  ['Built to be sat on by adults', 'Bunk beds rated to 120 kg on the upper bunk, because you will end up up there reading a bedtime story whether you planned to or not.'],
  ['Sized to the child, not the catalogue', 'Play tables at 20 inches, not 24. Wardrobe rails at 38 inches, not 60. A child who can reach their own things will use them.'],
];

const AGES: [string, string][] = [
  ['1 – 3 yrs', 'Low beds, toy storage, soft edges'],
  ['3 – 7 yrs', 'Play tables, first desks, low wardrobes'],
  ['7 – 12 yrs', 'Bunks, study desks, bookshelves'],
  ['12+ yrs', 'Single beds, full desks, storage'],
];

export const revalidate = 60;

export default async function KidsPage() {
  const pieces = await getProductsByCategory('kids');

  return (
    <>
      <RoomHero
        eyebrow="Kids & play rooms"
        art="bunk"
        title="Furniture that survives childhood, and outlives it"
        lead="Children's furniture gets climbed on, drawn on and stood on. We build it to be handed down, not thrown out in three years."
      />

      <div className="grid grid-cols-2 border-b md:grid-cols-4" style={{ borderColor: 'rgb(var(--rule))' }}>
        {AGES.map(([age, what]) => (
          <div key={age} className="border-b border-r px-4 py-8 text-center last:border-r-0 md:border-b-0"
            style={{ borderColor: 'rgb(var(--rule))' }}>
            <div className="font-serif text-[24px] text-walnut">{age}</div>
            <div className="muted mt-1 text-[10.5px]">{what}</div>
          </div>
        ))}
      </div>

      <section className="py-20">
        <div className="wrap">
          <SectionHead
            eyebrow="Kids pieces"
            title="Beds, desks and play furniture"
            lead="All finished in zero-VOC water-based lacquer and available in any size."
          />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {pieces.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-bone">
        <div className="wrap">
          <SectionHead dark eyebrow="Safety" title="Six things we do not compromise on" />
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {SAFETY.map(([head, body], i) => (
              <Reveal key={head} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="border-t border-[#332E26] pt-5">
                  <h3 className="mb-2 text-[21px] text-bone">{head}</h3>
                  <p className="text-sm text-[#A79F92]">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="surface aspect-[4/3] border p-6" style={{ borderColor: 'rgb(var(--rule))' }}>
              <Illustration art="playtable" id="kids-playroom" />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="eyebrow">Play rooms</div>
            <h2 className="my-5 text-[clamp(28px,4vw,44px)]">A whole play room, planned as one</h2>
            <p className="muted mb-4">
              Reading corner, art table, toy storage that a four-year-old can actually put things
              back into, and a bench that becomes a step. We plan the floor so there is still
              somewhere to sit on the ground, which is where children play anyway.
            </p>
            <p className="muted mb-7">
              A complete play room starts around Rs 180,000. We will send a floor plan and a fixed
              quotation before anything is cut.
            </p>
            <Link href="/bespoke" className="btn"><span>Plan a play room</span></Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
