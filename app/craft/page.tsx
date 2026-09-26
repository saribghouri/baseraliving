import type { Metadata } from 'next';
import FilmSection from '@/components/FilmSection';
import Steps from '@/components/Steps';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import Ornament from '@/components/Ornament';
import FurnitureArt from '@/components/FurnitureArt';

export const metadata: Metadata = {
  title: 'The Craft',
  description: 'Kiln-dried solid hardwood, mortise and tenon joinery, dovetailed drawers. How Basera Living builds furniture that lasts.',
};

export default function CraftPage() {
  return (
    <>
      <section className="bg-ink py-28 text-center text-bone">
        <div className="wrap">
          <Reveal><div className="eyebrow" style={{ color: '#B08E6B' }}>The craft</div></Reveal>
          <Reveal delay={1}>
            <h1 className="my-5 text-[clamp(40px,6.6vw,84px)]">Thirty years<br />of one thing</h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto max-w-xl text-[#AFA79B]">
              We have never made anything but furniture, and we have never made it anywhere but here.
            </p>
          </Reveal>
        </div>
      </section>

      <FilmSection />
      <Steps />

      <section className="py-24">
        <div className="wrap grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="eyebrow">Materials</div>
            <h2 className="my-5 text-[clamp(30px,4.2vw,46px)]">Timber we will use, and timber we won&rsquo;t</h2>
            <p className="muted mb-5">
              We work in solid walnut, sheesham, ash and deodar, all kiln dried to 8–10% moisture
              before a board is touched. Kiln drying is the boring step everyone skips; it is also
              the reason a table does not split in its second summer.
            </p>
            <p className="muted mb-5">
              We do not use MDF in structure, particle board anywhere, or veneer pretending to be
              solid. Where ply is the right answer — wardrobe carcasses, for instance — we say so on
              the spec sheet.
            </p>
            <Ornament align="left" />
          </Reveal>
          <Reveal delay={1}>
            <div className="surface grid aspect-square place-items-center border p-11" style={{ borderColor: 'rgb(var(--rule))' }}>
              <FurnitureArt art="shelf" size={220} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sandbg py-24">
        <div className="wrap grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="surface grid aspect-square place-items-center border p-11" style={{ borderColor: 'rgb(var(--rule))' }}>
              <FurnitureArt art="chair" size={220} />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="eyebrow">Joinery</div>
            <h2 className="my-5 text-[clamp(30px,4.2vw,46px)]">Joints that outlive the fashion</h2>
            <p className="muted mb-5">
              Mortise and tenon where it carries load, dovetails in every drawer, and screws only
              where a piece is meant to come apart for delivery. No staples in a frame, ever.
            </p>
            <p className="muted mb-5">
              It costs more and takes longer. It is also the only reason a chair survives twenty
              years of a Pakistani dining room.
            </p>
            <Ornament align="left" />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
