import { Suspense } from 'react';
import type { Metadata } from 'next';
import CollectionGrid from '@/components/CollectionGrid';
import CtaBand from '@/components/CtaBand';
import SectionHead from '@/components/SectionHead';
import { getProducts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Collection',
  description: 'Solid wood sofas, dining tables, beds, wardrobes, kids furniture and wooden gifts — every piece made to order in custom sizes and finishes.',
};

export const revalidate = 60;

export default async function CollectionPage() {
  const items = await getProducts();

  return (
    <>
      <section className="py-20">
        <div className="wrap">
          <SectionHead
            eyebrow="The collection"
            title="Pieces ready to order"
            lead="Every piece here can be changed — size, timber, finish, fabric. What you see is the starting point, not the limit."
          />
          <Suspense fallback={<div className="muted py-16 text-center">Loading…</div>}>
            <CollectionGrid items={items} />
          </Suspense>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
