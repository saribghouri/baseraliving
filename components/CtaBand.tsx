import Link from 'next/link';
import Reveal from './Reveal';

export default function CtaBand() {
  return (
    <section className="bg-ink py-24 text-center text-bone">
      <div className="wrap">
        <Reveal><div className="eyebrow" style={{ color: '#B08E6B' }}>Bespoke</div></Reveal>
        <Reveal delay={1}>
          <h2 className="my-5 text-[clamp(30px,4.6vw,50px)] text-bone">Nothing quite fits? Then we build it.</h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mb-9 max-w-xl text-[#AFA79B]">
            Send the dimensions and a reference. A drawing and a fixed quotation come back within
            three working days, at no cost.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <Link href="/bespoke" className="btn btn-light"><span>Start a commission</span></Link>
        </Reveal>
      </div>
    </section>
  );
}
