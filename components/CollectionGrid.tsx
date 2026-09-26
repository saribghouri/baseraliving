'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { categories, type Product } from '@/lib/products';
import ProductCard from './ProductCard';

export default function CollectionGrid({ items }: { items: (Product & { images?: unknown[] })[] }) {
  const params = useSearchParams();
  const active = params.get('c') ?? 'all';
  const list = items.filter((p) => active === 'all' || p.category === active);
  const chips = [{ key: 'all', name: 'Everything' }, ...categories];

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {chips.map((c) => (
          <Link key={c.key} href={c.key === 'all' ? '/collection' : `/collection?c=${c.key}`}
            aria-pressed={active === c.key}
            className={`border px-5 py-2.5 text-[10.5px] uppercase tracking-[0.22em] transition-colors ${active === c.key ? 'border-ink bg-ink text-bone' : 'hover:border-walnut'}`}
            style={active === c.key ? undefined : { borderColor: 'rgb(var(--rule))' }}>
            {c.name}
          </Link>
        ))}
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {list.length
          ? list.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)
          : <div className="muted col-span-full py-16 text-center">Nothing in this room yet.</div>}
      </div>
    </>
  );
}
