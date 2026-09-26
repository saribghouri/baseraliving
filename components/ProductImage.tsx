import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import Illustration from './Illustration';
import type { ArtKey } from '@/lib/products';

/** Real photograph when one has been uploaded, illustration until then. */
export default function ProductImage({
  images, art, id, alt, sizes = '(max-width: 768px) 100vw, 33vw', priority = false,
}: {
  images?: unknown[];
  art: ArtKey;
  id: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) {
  const first = images?.[0];
  const url = first ? urlFor(first)?.width(1200).quality(82).url() : null;

  if (url) {
    return (
      <Image src={url} alt={alt} fill sizes={sizes} priority={priority}
        className="object-cover transition-transform duration-700 ease-brand group-hover:scale-105" />
    );
  }

  return (
    <div className="h-full w-full p-4 transition-transform duration-700 ease-brand group-hover:scale-105">
      <Illustration art={art} id={id} />
    </div>
  );
}
