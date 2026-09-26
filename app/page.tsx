import Link from 'next/link';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import CategoryGrid from '@/components/CategoryGrid';
import ProductCard from '@/components/ProductCard';
import FilmSection from '@/components/FilmSection';
import Steps from '@/components/Steps';
import Quotes from '@/components/Quotes';
import CtaBand from '@/components/CtaBand';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import { getFeatured } from '@/lib/content';
import Illustration from '@/components/Illustration';

export const revalidate = 60;

export default async function HomePage() {
  const featured = await getFeatured(4);

  return (
    <>
      <Hero />
      <StatsBar />
      <CategoryGrid />

      <section className="sandbg py-24">
        <div className="wrap">
          <SectionHead eyebrow="Selected" title="Signature pieces" />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
          <Reveal className="mt-12 text-center">
            <Link href="/collection" className="btn btn-ghost"><span>See the full collection</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="wrap">
          <SectionHead eyebrow="Explore" title="Where would you like to start?" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {([
              ['/bedroom', 'Bedroom', 'Beds, wardrobes, side tables', 'bed'],
              ['/kids', 'Kids & play rooms', 'Bunks, desks, toy storage', 'bunk'],
              ['/gifts', 'Wooden gifts', 'Boards, boxes, clocks', 'box'],
              ['/wood', 'The wood', 'Six timbers we work in', 'shelf'],
            ] as [string, string, string, 'bed' | 'bunk' | 'box' | 'shelf'][]).map(([href, title, note, art], i) => (
              <Reveal key={href} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link href={href}
                  className="surface group flex h-full flex-col border transition-all duration-500 ease-brand hover:-translate-y-2 hover:border-walnut hover:shadow-[0_20px_44px_rgba(22,20,15,.09)]"
                  style={{ borderColor: 'rgb(var(--rule))' }}>
                  <div className="sandbg aspect-[4/3] overflow-hidden border-b p-4" style={{ borderColor: 'rgb(var(--rule))' }}>
                    <div className="h-full w-full transition-transform duration-700 ease-brand group-hover:scale-105">
                      <Illustration art={art} id={`nav-${art}`} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-[23px]">{title}</h3>
                    <span className="muted text-[10.5px] uppercase tracking-[0.2em]">{note}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FilmSection />
      <Steps />
      <Quotes />
      <CtaBand />
    </>
  );
}
