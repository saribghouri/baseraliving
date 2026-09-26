'use client';

import Link from 'next/link';
import type { Product } from '@/lib/products';
import { categoryName } from '@/lib/products';
import { pkr } from '@/lib/format';
import ProductImage from './ProductImage';
import Reveal from './Reveal';
import { useShortlist } from './EnquiryBar';
import { site, waLink } from '@/lib/site';

export default function ProductCard({
  product, index = 0,
}: { product: Product & { images?: unknown[] }; index?: number }) {
  const { items, toggle, ready } = useShortlist();
  const saved = ready && items.includes(product.slug);

  const msg = `Assalam o Alaikum, I am interested in the ${product.name} (${pkr(product.price)}) from ${site.name}. Could you share availability and custom options?`;

  return (
    <Reveal delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
      <article className="surface group flex h-full flex-col border transition-all duration-500 ease-brand hover:-translate-y-2 hover:border-walnut hover:shadow-[0_22px_50px_rgba(22,20,15,.1)]"
        style={{ borderColor: 'rgb(var(--rule))' }}>

        <div className="relative">
          <Link href={`/product/${product.slug}`}
            className="sandbg relative block aspect-[4/3] overflow-hidden border-b"
            style={{ borderColor: 'rgb(var(--rule))' }}>
            <ProductImage images={product.images} art={product.art} id={`c-${product.slug}`} alt={product.name} />
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink py-2.5 text-center text-[9.5px] uppercase tracking-[0.26em] text-bone transition-transform duration-500 ease-brand group-hover:translate-y-0">
              View piece
            </div>
          </Link>

          <button onClick={() => toggle(product.slug)}
            aria-label={saved ? 'Remove from shortlist' : 'Add to shortlist'} aria-pressed={saved}
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center border backdrop-blur-sm transition-colors"
            style={{
              borderColor: saved ? '#7A5C3E' : 'rgb(var(--rule))',
              background: saved ? '#7A5C3E' : 'rgb(var(--bg) / .8)',
              color: saved ? '#F3EFE6' : 'inherit',
            }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1Z" />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5">
          <div className="text-[9px] uppercase tracking-[0.28em] text-walnut">{categoryName(product.category)}</div>
          <Link href={`/product/${product.slug}`} className="font-serif text-2xl">{product.name}</Link>
          <p className="muted flex-1 text-[12.5px]">{product.description}</p>
          <div className="flex items-center justify-between gap-3 border-t pt-3" style={{ borderColor: 'rgb(var(--rule))' }}>
            <div className="font-serif text-xl">{pkr(product.price)}</div>
            <a href={waLink(msg)} target="_blank" rel="noopener"
              className="border px-4 py-2.5 text-[10px] uppercase tracking-[0.22em] transition-colors hover:border-ink hover:bg-ink hover:text-bone"
              style={{ borderColor: 'rgb(var(--rule))' }}>
              Enquire
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
