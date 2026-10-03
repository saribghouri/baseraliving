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
  title: 'Study & Home Office',
  description: 'Study desks, bookshelves and built-in home offices in solid wood, made to the size of your room and the way you work.',
};

const FEATURES: [string, string][] = [
  ['Desk height that fits you', 'Standard desks are 30 inches. We ask your height and your chair before we fix ours, because an inch too high is a sore shoulder by evening.'],
  ['Cables that disappear', 'Grommets, a hidden tray and a channel down the back leg. Every screen, charger and router lead goes somewhere you cannot see from the chair.'],
  ['Shelves that do not sag', 'Solid shelves, not ply, at spans we have tested with a full load of books. A shelf that bows in year two was cut too long.'],
  ['Drawers on proper runners', 'Full-extension, soft-close runners rated for files and laptops, so the back of the drawer is as easy to reach as the front.'],
  ['Light where you write', 'Warm LED under the shelves and over the desk, wired in during installation so there is no lamp taking up the work surface.'],
  ['Built for small rooms', 'Alcove desks, wall-hung hutches and fold-down tops for the spare bedroom or the corner of a lounge.'],
];

const TYPES: [string, string][] = [
  ['Writing desk', 'Freestanding, clean top'],
  ['Hutch desk', 'Shelves and cupboard above'],
  ['Study nook', 'Built into an alcove'],
  ['Study wall', 'Desk, storage and books'],
];

export const revalidate = 60;

export default async function StudyPage() {
  // pieces with photographs first, illustrated ones after
  const pieces = (await getProductsByCategory('study'))
    .sort((a, b) => Number(!!b.photos?.length) - Number(!!a.photos?.length));

  return (
    <>
      <RoomHero
        eyebrow="Study & home office"
        art="desk"
        title="A place to think, built around the way you work"
        lead="A good desk disappears while you use it. The right height, the cables gone, the books in reach, and nothing wobbling under your elbows."
      />

      <div className="grid grid-cols-2 border-b md:grid-cols-4" style={{ borderColor: 'rgb(var(--rule))' }}>
        {TYPES.map(([name, note]) => (
          <div key={name} className="border-b border-r px-4 py-8 text-center last:border-r-0 md:border-b-0"
            style={{ borderColor: 'rgb(var(--rule))' }}>
            <div className="font-serif text-[26px] text-walnut">{name}</div>
            <div className="muted text-[10px] uppercase tracking-[0.24em]">{note}</div>
          </div>
        ))}
      </div>

      <section className="py-20">
        <div className="wrap">
          <SectionHead eyebrow="Study pieces" title="Desks, shelves and whole study walls" />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {pieces.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        </div>
      </section>

      <RoomFeatures title="What we get right in a study" items={FEATURES} />

      <section className="sandbg py-20">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="eyebrow">Home office</div>
            <h2 className="my-5 text-[clamp(28px,4vw,44px)]">Or let us build the whole room</h2>
            <p className="muted mb-4">
              Desk, shelving, filing and a reading chair, drawn together for one wall or the whole
              room, so the screens, the books and the light all sit where they should.
            </p>
            <p className="muted mb-7">
              We visit, measure, and send a drawing with a fixed quotation before anything is cut.
            </p>
            <Link href="/bespoke" className="btn"><span>Plan a study</span></Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/study/curved-walnut-desk-1.jpg" alt="Walnut desk wrapped in a curved bookcase"
                fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[center_60%]" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
