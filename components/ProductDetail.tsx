'use client';

import { useState } from 'react';
import type { Product } from '@/lib/products';
import { categoryName, finishes } from '@/lib/products';
import { pkr } from '@/lib/format';
import ProductImage from './ProductImage';
import Illustration from './Illustration';
import Reveal from './Reveal';
import EnquiryButtons, { useShortlist } from './EnquiryBar';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

export default function ProductDetail({
  product,
}: { product: Product & { images?: unknown[] } }) {
  const [finish, setFinish] = useState(0);
  const [shot, setShot] = useState(0);
  const { items, toggle, ready } = useShortlist();
  const saved = ready && items.includes(product.slug);

  const photos = product.images ?? [];
  const hasPhotos = photos.length > 0;
  const active = photos[shot] ?? photos[0];
  const activeUrl = active ? urlFor(active)?.width(1400).quality(85).url() : null;

  return (
    <section className="py-16">
      <div className="wrap">
        <nav className="muted mb-8 text-[11px] uppercase tracking-[0.2em]">
          <a href="/collection">Collection</a>
          <span className="px-2">/</span>
          <a href={`/collection?c=${product.category}`}>{categoryName(product.category)}</a>
          <span className="px-2">/</span>
          <span>{product.name}</span>
        </nav>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div>
            <div className="sandbg relative aspect-square overflow-hidden border lg:sticky lg:top-28"
              style={{ borderColor: 'rgb(var(--rule))' }}>
              {activeUrl ? (
                <Image src={activeUrl} alt={product.name} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
              ) : (
                <div className="h-full w-full p-8"
                  style={{ filter: `hue-rotate(${finish * 6}deg) saturate(${1 + finish * 0.08})` }}>
                  <Illustration art={product.art} id={`d-${product.slug}`} />
                </div>
              )}
            </div>

            {hasPhotos && photos.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2.5">
                {photos.slice(0, 4).map((img, i) => {
                  const t = urlFor(img)?.width(300).quality(70).url();
                  return (
                    <button key={i} onClick={() => setShot(i)}
                      className={`sandbg relative aspect-square overflow-hidden border transition-colors ${shot === i ? 'border-walnut' : ''}`}
                      style={shot === i ? undefined : { borderColor: 'rgb(var(--rule))' }}>
                      {t && <Image src={t} alt="" fill sizes="120px" className="object-cover" />}
                    </button>
                  );
                })}
              </div>
            )}

            {!hasPhotos && (
              <p className="muted mt-3.5 text-[11px]">
                Illustration shown. Upload photographs in the Studio and they replace this automatically.
              </p>
            )}
          </div>

          <Reveal delay={1}>
            <div className="text-[9px] uppercase tracking-[0.28em] text-walnut">{categoryName(product.category)}</div>
            <h1 className="my-3.5 text-[clamp(32px,4.4vw,52px)]">{product.name}</h1>
            <p className="muted">{product.description}</p>
            <div className="my-6 flex flex-wrap items-baseline gap-4">
              <span className="font-serif text-3xl">{pkr(product.price)}</span>
              <span className="muted text-[11px] uppercase tracking-[0.2em]">Made to order</span>
            </div>

            <div className="mb-8">
              <span className="field-label">Finish</span>
              <div className="flex flex-wrap gap-2.5">
                {finishes.map((f, i) => (
                  <button key={f.name} title={f.name} onClick={() => setFinish(i)} aria-pressed={i === finish}
                    className={`h-9 w-9 border transition-all ${i === finish ? 'outline outline-1 outline-offset-[3px] outline-walnut' : ''}`}
                    style={{ background: f.hex, borderColor: 'rgb(var(--rule))' }} />
                ))}
              </div>
              <div className="muted mt-2.5 text-[11px]">{finishes[finish].name} — all four available on this piece</div>
            </div>

            <EnquiryButtons name={product.name} price={pkr(product.price)} />

            <button onClick={() => toggle(product.slug)}
              className="muted mt-4 w-full text-[10.5px] uppercase tracking-[0.18em] underline underline-offset-4">
              {saved ? 'Remove from shortlist' : 'Save to shortlist'}
            </button>

            <div className="mt-10">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="spec-row">
                  <span className="muted">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>

            {product.story && (
              <div className="mt-9 border-l-2 border-walnut pl-5">
                <div className="eyebrow">Why we made it</div>
                <p className="mt-3 font-serif text-[19px] leading-snug">{product.story}</p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
