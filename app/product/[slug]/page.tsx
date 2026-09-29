import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categoryName } from '@/lib/products';
import { site } from '@/lib/site';
import { getProductBySlug, getProductSlugs, getProducts } from '@/lib/content';
import ProductDetail from '@/components/ProductDetail';
import ProductCard from '@/components/ProductCard';
import SectionHead from '@/components/SectionHead';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProductBySlug(slug);
  if (!p) return { title: 'Not found' };
  return {
    title: p.name,
    description: `${p.description} Made to order by ${site.name}.`,
    openGraph: { title: `${p.name} — ${site.name}`, description: p.description },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const all = await getProducts();
  const related = all.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetail product={product} />
      {related.length > 0 && (
        <section className="sandbg py-24">
          <div className="wrap">
            <SectionHead eyebrow="Goes well with" title={`More from ${categoryName(product.category)}`} />
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
