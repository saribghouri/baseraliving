import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getProductsByCategory } from '@/lib/content';
import ProductCard from '@/components/ProductCard';
import RoomHero from '@/components/RoomHero';
import RoomFeatures from '@/components/RoomFeatures';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';

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

// soft, wood-friendly colours for the playful touches
const PLAY = { sage: '#9DB5A0', sun: '#E3B95B', coral: '#E39A7B', sky: '#8FB3C9' };

const AGES: [string, string, string][] = [
  ['1 – 3 yrs', 'Low beds, toy storage, soft edges', PLAY.coral],
  ['3 – 7 yrs', 'Play tables, first desks, low wardrobes', PLAY.sun],
  ['7 – 12 yrs', 'Bunks, study desks, bookshelves', PLAY.sage],
  ['12+ yrs', 'Single beds, full desks, storage', PLAY.sky],
];

/** Floating shapes over the hero — circle, triangle, star, ring, dots. */
function PlayShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="bob absolute right-[8%] top-[16%] h-16 w-16 rounded-full opacity-70 sm:h-20 sm:w-20"
        style={{ background: PLAY.coral }} />
      <svg className="bob absolute right-[24%] top-[60%] hidden h-16 w-16 opacity-75 sm:block" viewBox="0 0 40 40"
        style={{ animationDelay: '-2s', ['--r' as string]: '-12deg' }}>
        <path d="M20 4 L37 34 H3 Z" fill={PLAY.sun} />
      </svg>
      <svg className="bob absolute right-[4%] top-[66%] h-12 w-12 opacity-80 sm:h-14 sm:w-14" viewBox="0 0 40 40"
        style={{ animationDelay: '-4s' }}>
        <path d="M20 3l4.9 10.6 11.6 1.3-8.6 7.9 2.4 11.4L20 28.4 9.7 34.2l2.4-11.4-8.6-7.9 11.6-1.3z" fill={PLAY.sage} />
      </svg>
      <span className="bob absolute right-[32%] top-[12%] hidden h-12 w-12 rounded-full border-[6px] opacity-70 md:block"
        style={{ borderColor: PLAY.sky, animationDelay: '-1s' }} />
      <span className="bob absolute right-[16%] top-[42%] h-3 w-3 rounded-full" style={{ background: PLAY.sun, animationDelay: '-3s' }} />
      <span className="bob absolute right-[40%] top-[78%] hidden h-2.5 w-2.5 rounded-full md:block" style={{ background: PLAY.coral, animationDelay: '-5s' }} />
    </div>
  );
}

export const revalidate = 60;

export default async function KidsPage() {
  // pieces with photographs first, illustrated ones after
  const pieces = (await getProductsByCategory('kids'))
    .sort((a, b) => Number(!!b.photos?.length) - Number(!!a.photos?.length));

  return (
    <div className="kids-page">
      <div className="relative">
        <RoomHero
          eyebrow="Kids & play rooms"
          art="bunk"
          title="Furniture that survives childhood, and outlives it"
          lead="Children's furniture gets climbed on, drawn on and stood on. We build it to be handed down, not thrown out in three years."
        />
        <PlayShapes />
      </div>

      <div className="wrap grid grid-cols-2 gap-3 py-8 md:grid-cols-4 md:gap-5">
        {AGES.map(([age, what, color]) => (
          <div key={age} className="surface flex flex-col items-center border px-4 py-6 text-center"
            style={{ borderColor: 'rgb(var(--rule))' }}>
            <span className="mb-3 h-3 w-10 rounded-full" style={{ background: color }} />
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
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/kids/house-loft-bed.jpg" alt="Play loft with a little house on top and a floor bed below"
                fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
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
    </div>
  );
}
