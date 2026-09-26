/**
 * Single source of truth for page data.
 *
 * If Sanity is configured (NEXT_PUBLIC_SANITY_PROJECT_ID is set) the content
 * comes from the Studio at /studio. If it is not, everything falls back to the
 * typed arrays in lib/products.ts, lib/woods.ts and lib/portfolio.ts — so the
 * site runs perfectly with no database at all.
 */
import { sanityFetch, sanityEnabled } from './sanity';
import { PRODUCTS_QUERY, PRODUCT_QUERY, PRODUCT_SLUGS_QUERY, WOODS_QUERY, PROJECTS_QUERY } from './queries';
import { products as localProducts, type Product, type CategoryKey } from './products';
import { woods as localWoods, type Wood } from './woods';
import { projects as localProjects, type Project } from './portfolio';

type SanitySpec = { label: string; value: string };
type SanityProduct = Omit<Product, 'specs'> & { specs?: SanitySpec[]; images?: unknown[]; inStock?: boolean };

const normaliseProduct = (p: SanityProduct): Product & { images?: unknown[]; inStock?: boolean } => ({
  ...p,
  specs: Object.fromEntries((p.specs ?? []).map((s) => [s.label, s.value])),
});

export async function getProducts(): Promise<(Product & { images?: unknown[] })[]> {
  const remote = await sanityFetch<SanityProduct[]>(PRODUCTS_QUERY);
  if (remote?.length) return remote.map(normaliseProduct);
  return localProducts;
}

export async function getProductBySlug(slug: string) {
  const remote = await sanityFetch<SanityProduct | null>(PRODUCT_QUERY, { slug });
  if (remote) return normaliseProduct(remote);
  return localProducts.find((p) => p.slug === slug) ?? null;
}

export async function getProductSlugs(): Promise<string[]> {
  const remote = await sanityFetch<string[]>(PRODUCT_SLUGS_QUERY);
  if (remote?.length) return remote;
  return localProducts.map((p) => p.slug);
}

export async function getProductsByCategory(category: CategoryKey) {
  const all = await getProducts();
  return all.filter((p) => p.category === category);
}

export async function getFeatured(limit = 4) {
  const all = await getProducts();
  return all.filter((p) => p.featured).slice(0, limit);
}

export async function getWoods(): Promise<Wood[]> {
  const remote = await sanityFetch<(Omit<Wood, 'swatch'> & { swatchFrom?: string; swatchTo?: string })[]>(WOODS_QUERY);
  if (remote?.length) {
    return remote.map((w) => ({
      ...w,
      swatch: [w.swatchFrom || '#4A3324', w.swatchTo || '#7A5C3E'] as [string, string],
    }));
  }
  return localWoods;
}

export async function getProjects(): Promise<Project[]> {
  const remote = await sanityFetch<Project[]>(PROJECTS_QUERY);
  if (remote?.length) return remote;
  return localProjects;
}

export const usingCms = sanityEnabled;
