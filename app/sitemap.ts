import type { MetadataRoute } from 'next';
import { getProductSlugs } from '@/lib/content';
import { site } from '@/lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['', '/collection', '/bedroom', '/kitchen', '/kids', '/gifts', '/wood', '/portfolio', '/craft', '/bespoke', '/story', '/visit'];

  const pages = routes.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.8,
  }));

  const slugs = await getProductSlugs();
  const items = slugs.map((slug) => ({
    url: `${site.url}/product/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...pages, ...items];
}
