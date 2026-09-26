import Link from 'next/link';
import { categories } from '@/lib/products';
import FurnitureArt from './FurnitureArt';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function CategoryGrid() {
  return (
    <section className="py-24">
      <div className="wrap">
        <SectionHead eyebrow="Shop by room" title="Every room, considered" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.key} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <Link href={`/collection?c=${c.key}`}
                className="surface group block border p-9 text-center transition-all duration-500 ease-brand hover:-translate-y-2 hover:border-walnut hover:shadow-[0_20px_44px_rgba(22,20,15,.09)]"
                style={{ borderColor: 'rgb(var(--rule))' }}>
                <div className="grid place-items-center transition-transform duration-500 ease-brand group-hover:-rotate-2 group-hover:scale-110">
                  <FurnitureArt art={c.art} size={80} />
                </div>
                <h3 className="mb-1 mt-4 text-[23px]">{c.name}</h3>
                <span className="muted text-[10.5px] uppercase tracking-[0.2em]">{c.note}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
