import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/content';
import ProductCard from '@/components/ProductCard';
import RoomHero from '@/components/RoomHero';
import RoomFeatures from '@/components/RoomFeatures';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import Image from 'next/image';
import { waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kitchens',
  description: 'Fitted kitchens in solid wood and veneer: cabinets, islands, pantries and breakfast counters, measured and built for your room.',
};

const FEATURES: [string, string][] = [
  ['Measured on site, twice', 'We measure before we draw and again before we cut. Pakistani walls are rarely square, and a kitchen that is drawn to the plan instead of the room never sits right.'],
  ['Carcasses that survive water', 'Marine ply or moisture-resistant board for every base unit, edge-sealed on all sides. The cabinet under the sink is the one that fails first, so it gets the most care.'],
  ['Hinges and runners that last', 'Soft-close hinges and full-extension runners rated for 30 kg, so a drawer full of pans still glides shut in year ten.'],
  ['Worktops for a real kitchen', 'Granite, quartz or solid wood, chosen for how you cook. Heavy daily cooking with a tawa and a pressure cooker needs a different top than a kitchen used for tea.'],
  ['Storage drawn to your cooking', 'Masala drawers, tall pull-out pantries, a corner carousel and space for the atta drum. We ask what you keep before we decide where it goes.'],
  ['Finishes you can wipe clean', 'Lacquer, laminate or oiled veneer that takes steam, turmeric and daily wiping without dulling or lifting at the edges.'],
];

const LAYOUTS: [string, string][] = [
  ['Straight', 'One wall, small spaces'],
  ['L-shape', 'Two walls, open corner'],
  ['U-shape', 'Three walls, most storage'],
  ['Island', 'Open plan, extra counter'],
];

export const revalidate = 60;

export default async function KitchenPage() {
  // pieces with photographs first, illustrated ones after
  const pieces = (await getProductsByCategory('kitchen'))
    .sort((a, b) => Number(!!b.photos?.length) - Number(!!a.photos?.length));

  return (
    <>
      <RoomHero
        eyebrow="Kitchen"
        art="kitchen"
        title="The hardest-working room in the house"
        lead="A kitchen is opened, slammed, steamed and scrubbed every day for twenty years. We build it for that, not for the showroom."
      />

      <div className="grid grid-cols-2 border-b md:grid-cols-4" style={{ borderColor: 'rgb(var(--rule))' }}>
        {LAYOUTS.map(([name, note]) => (
          <div key={name} className="border-b border-r px-4 py-8 text-center last:border-r-0 md:border-b-0"
            style={{ borderColor: 'rgb(var(--rule))' }}>
            <div className="font-serif text-[26px] text-walnut">{name}</div>
            <div className="muted text-[10px] uppercase tracking-[0.24em]">{note}</div>
          </div>
        ))}
      </div>

      <section className="py-20">
        <div className="wrap">
          <SectionHead eyebrow="Kitchen pieces" title="Cabinets, islands and everything in between" />
          {pieces.length ? (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {pieces.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
            </div>
          ) : (
            <Reveal>
              <div className="surface mx-auto max-w-xl border px-8 py-12 text-center" style={{ borderColor: 'rgb(var(--rule))' }}>
                <p className="muted mb-6">
                  Every kitchen we build is drawn for one room. Tell us the size of yours and how you cook,
                  and we will send a layout and photographs of similar kitchens we have made.
                </p>
                <a href={waLink('Assalam o Alaikum, I am planning a kitchen and would like to see some of your work.')}
                  target="_blank" rel="noopener" className="btn"><span>Ask on WhatsApp</span></a>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <RoomFeatures title="What we get right in a kitchen" items={FEATURES} />

      <section className="sandbg py-20">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="eyebrow">Full kitchen</div>
            <h2 className="my-5 text-[clamp(28px,4vw,44px)]">Planned as one room, not a row of boxes</h2>
            <p className="muted mb-4">
              Base and wall cabinets, a tall pantry, an island or breakfast counter, and the
              appliances built in, drawn together so the lines and the grain run through the whole room.
            </p>
            <p className="muted mb-7">
              We visit, measure, and send a drawing with a fixed quotation before anything is cut.
            </p>
            <Link href="/bespoke" className="btn"><span>Plan a kitchen</span></Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/kitchen/peninsula-marble-walnut.jpg" alt="Kitchen with a marble peninsula, walnut panels and pendant lights"
                fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
