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
  title: 'Bedroom Furniture',
  description: 'Solid wood beds, wardrobes, side tables and dressing furniture, built to your room in custom sizes and finishes.',
};

const FEATURES: [string, string][] = [
  ['Mattress sizes, measured properly', 'Pakistani mattress sizes are not standard. We measure the mattress you already own, or the one you intend to buy, before we cut the frame. A bed that is an inch out is a bed you notice every night.'],
  ['Slat bases that stay silent', 'Solid slats at 70 mm centres on a centre rail, not the four-plank base most local beds use. This is the reason a Basera bed does not develop a creak in year three.'],
  ['Wardrobes drawn to your clothes', 'Before a wardrobe is designed we ask what actually goes in it. Saris, sherwanis, suits and abayas all need different hanging drops, and a standard 60-inch rail serves none of them well.'],
  ['Headboards you can lean on', 'Upholstered in linen or velvet over a solid frame, at a rake you can actually sit back and read against — not the vertical panel that looks right in photographs and is useless in life.'],
  ['Storage where the room allows it', 'Under-bed drawers, hydraulic lift bases or a plain platform, depending on floor space and how often you need to get to what is stored. We will tell you which one suits the room.'],
  ['Finishes safe for a bedroom', 'Low-VOC water-based lacquer or hand-rubbed oil. Nothing that continues to off-gas in a room where you spend eight hours a night with the door closed.'],
];

const SIZES: [string, string][] = [
  ['King', '78 × 84 in'],
  ['Queen', '66 × 78 in'],
  ['Single', '42 × 78 in'],
  ['Custom', 'Any dimension'],
];

export const revalidate = 60;

export default async function BedroomPage() {
  const pieces = await getProductsByCategory('bedroom');

  return (
    <>
      <RoomHero
        eyebrow="Bedroom"
        art="bed"
        title="The room nobody sees, and the one that matters most"
        lead="Bedroom furniture is judged in the dark, half asleep, for twenty years. It should be quiet, solid and exactly the right height."
      />

      <div className="grid grid-cols-2 border-b md:grid-cols-4" style={{ borderColor: 'rgb(var(--rule))' }}>
        {SIZES.map(([name, dim]) => (
          <div key={name} className="border-b border-r px-4 py-8 text-center last:border-r-0 md:border-b-0"
            style={{ borderColor: 'rgb(var(--rule))' }}>
            <div className="font-serif text-[26px] text-walnut">{name}</div>
            <div className="muted text-[10px] uppercase tracking-[0.24em]">{dim}</div>
          </div>
        ))}
      </div>

      <section className="py-20">
        <div className="wrap">
          <SectionHead eyebrow="Bedroom pieces" title="Beds, storage and everything beside them" />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {pieces.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        </div>
      </section>

      <RoomFeatures title="What we get right in a bedroom" items={FEATURES} />

      <section className="sandbg py-20">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="eyebrow">Full room</div>
            <h2 className="my-5 text-[clamp(28px,4vw,44px)]">Or let us do the whole room</h2>
            <p className="muted mb-4">
              Bed, wardrobe wall, side tables, dressing unit and a bench, drawn together so the
              proportions and the grain match across every piece. This is most of what we do.
            </p>
            <p className="muted mb-7">
              A full master bedroom in solid walnut typically runs between Rs 600,000 and
              Rs 1,200,000 depending on the wardrobe run. We will give you a fixed number before
              anything is built.
            </p>
            <Link href="/bespoke" className="btn"><span>Plan a bedroom</span></Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="surface aspect-[4/3] border p-6" style={{ borderColor: 'rgb(var(--rule))' }}>
              <Illustration art="wardrobe" id="bedroom-room" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
