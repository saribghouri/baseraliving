import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2024-10-01';

/** The whole site works without Sanity. This flag decides which source is used. */
export const sanityEnabled = Boolean(projectId);

export const client: SanityClient | null = sanityEnabled
  ? createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: 'published' })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export const urlFor = (source: any) =>
  builder && source ? builder.image(source) : null;

/** Revalidate every 60s so edits in the Studio appear without a redeploy. */
export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!client) return null;
  try {
    // Pages set their own `export const revalidate`, so the fetch itself stays plain.
    return await client.fetch<T>(query, params);
  } catch (err) {
    console.error('Sanity fetch failed, falling back to local data:', err);
    return null;
  }
}
