'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Illustration from './Illustration';
import type { ArtKey } from '@/lib/products';

const SHOWCASE: { art: ArtKey; name: string; href: string }[] = [
  { art: 'sofa', name: 'Sofas', href: '/collection' },
  { art: 'bed', name: 'Beds', href: '/bedroom' },
  { art: 'chair', name: 'Chairs', href: '/collection' },
  { art: 'wardrobe', name: 'Wardrobes', href: '/bedroom' },
  { art: 'table', name: 'Dining tables', href: '/collection' },
];

export default function Hero() {
  const [on, setOn] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % SHOWCASE.length), 3200);
    return () => clearInterval(t);
  }, []);

  const current = SHOWCASE[i];

  return (
    <div className="hero relative min-h-[calc(100svh-74px)] overflow-hidden">
      <div className="glow pointer-events-none absolute left-[70%] top-1/2 h-[100vmax] w-[100vmax] -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(176,142,107,.22), transparent 55%)' }} />
      <div className="pointer-events-none absolute inset-0 opacity-50"
        style={{ background: 'repeating-linear-gradient(94deg, transparent 0 3px, rgba(176,142,107,.045) 3px 4px, transparent 4px 9px)' }} />

      <div className="wrap relative z-10 grid min-h-[calc(100svh-74px)] items-center gap-10 py-16 lg:grid-cols-[1fr_1.15fr]">
        {/* text */}
        <div className="text-center lg:text-left">
          <div className="eyebrow transition-opacity duration-700" style={{ color: '#B08E6B', opacity: on ? 1 : 0 }}>
            Handmade in solid wood
          </div>

          <h1 className="my-5 text-[clamp(42px,6.4vw,92px)] leading-[1.02] tracking-[0.01em]">
            <span className="clip" data-on={on}><span>Made for</span></span>
            <span className="clip" data-on={on} style={{ transitionDelay: '.13s' }}>
              <span>your <em className="italic text-brass">home</em></span>
            </span>
          </h1>

          <div className="mb-9 flex flex-wrap justify-center gap-3 transition-opacity duration-700 lg:justify-start"
            style={{ opacity: on ? 1 : 0, transitionDelay: '.5s' }}>
            <Link href="/collection" className="btn"><span>Shop now</span></Link>
            <Link href="/bespoke" className="btn btn-ghost"><span>Custom order</span></Link>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 muted text-[10.5px] uppercase tracking-[0.24em] transition-opacity duration-700 lg:justify-start"
            style={{ opacity: on ? 1 : 0, transitionDelay: '.7s' }}>
            <li>Solid wood</li>
            <li className="text-brass">·</li>
            <li>Made to size</li>
            <li className="text-brass">·</li>
            <li>Since 1996</li>
          </ul>
        </div>

        {/* furniture showcase */}
        <div className="relative mx-auto w-full max-w-[640px] transition-all duration-1000 ease-brand"
          style={{ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(24px)', transitionDelay: '.3s' }}>
          <div className="relative aspect-[4/3]">
            <svg viewBox="0 0 160 190" fill="none"
              className="arch-draw pointer-events-none absolute left-1/2 top-[46%] w-[min(66vmin,470px)] -translate-x-1/2 -translate-y-1/2 opacity-40">
              <path d="M14 178 V78 C14 40 44 12 80 12 C116 12 146 40 146 78 V178" stroke="#B08E6B" strokeWidth="1.4" fill="none" />
              <path d="M25 178 V80 C25 47 50 23 80 23 C110 23 135 47 135 80 V178" stroke="#B08E6B" strokeWidth=".7" fill="none" />
            </svg>
            {SHOWCASE.map((s, n) => (
              <div key={s.art}
                className="absolute inset-[8%] transition-all duration-1000 ease-brand"
                style={{
                  opacity: n === i ? 1 : 0,
                  transform: n === i ? 'none' : 'translateX(30px) scale(.96)',
                }}>
                <Illustration art={s.art} id={`hero-${s.art}`} />
              </div>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-between gap-4 rule border-t pt-4">
            <Link href={current.href} className="group flex items-baseline gap-3">
              <span className="muted text-[10px] tracking-[0.3em]">0{i + 1}</span>
              <span className="font-serif text-2xl transition-colors group-hover:text-brass">{current.name}</span>
              <span className="text-brass transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <div className="flex gap-2">
              {SHOWCASE.map((s, n) => (
                <button key={s.art} type="button" aria-label={`Show ${s.name}`} onClick={() => setI(n)}
                  className="h-[3px] w-6 transition-colors duration-500"
                  style={{ background: n === i ? '#B08E6B' : 'rgb(var(--rule))' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
