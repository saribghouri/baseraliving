'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div className="relative grid min-h-[calc(100svh-74px)] place-items-center overflow-hidden bg-ink text-center text-bone">
      <div className="glow pointer-events-none absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle at 50% 45%, rgba(176,142,107,.20), transparent 58%)' }} />
      <div className="pointer-events-none absolute inset-0 opacity-50"
        style={{ background: 'repeating-linear-gradient(94deg, transparent 0 3px, rgba(176,142,107,.045) 3px 4px, transparent 4px 9px)' }} />

      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <svg viewBox="0 0 160 190" fill="none" className="arch-draw w-[min(66vmin,520px)] opacity-30">
          <path d="M14 178 V78 C14 40 44 12 80 12 C116 12 146 40 146 78 V178" stroke="#B08E6B" strokeWidth="1.4" fill="none" />
          <path d="M25 178 V80 C25 47 50 23 80 23 C110 23 135 47 135 80 V178" stroke="#B08E6B" strokeWidth=".7" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="eyebrow" style={{ color: '#B08E6B' }}>Furniture &amp; Interiors · Est. 1996</div>

        <h1 className="my-6 text-[clamp(46px,8.4vw,116px)] tracking-[0.02em]">
          <span className="clip" data-on={on}><span>Furniture made</span></span>
          <span className="clip" data-on={on} style={{ transitionDelay: '.13s' }}>
            <span>to be <em className="italic text-brass">lived</em> with</span>
          </span>
        </h1>

        <p className="mx-auto mb-9 max-w-[540px] text-base text-[#BDB5A7] transition-opacity duration-700"
          style={{ opacity: on ? 1 : 0, transitionDelay: '.5s' }}>
          Solid wood, cut and joined by hand in our own workshop. Every dimension, every finish,
          drawn for one room — yours.
        </p>

        <div className="flex flex-wrap justify-center gap-3 transition-opacity duration-700"
          style={{ opacity: on ? 1 : 0, transitionDelay: '.65s' }}>
          <Link href="/collection" className="btn"><span>Browse the collection</span></Link>
          <Link href="/bespoke" className="btn btn-light"><span>Commission a piece</span></Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[9.5px] uppercase tracking-[0.34em] text-[#8E877B]">
        <span>Scroll</span>
        <i className="scroll-hint block h-12 w-px" style={{ background: 'linear-gradient(#B08E6B, transparent)' }} />
      </div>
    </div>
  );
}
