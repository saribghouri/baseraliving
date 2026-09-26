import type { ArtKey } from '@/lib/products';

const PATHS: Partial<Record<ArtKey, string>> = {
  sofa: 'M14 54h72v20H14z M20 54V34a6 6 0 0 1 6-6h48a6 6 0 0 1 6 6v20 M14 54a6 6 0 0 1 6-6h60a6 6 0 0 1 6 6 M22 74v8 M78 74v8',
  chair: 'M32 46h36v10H32z M36 46V16a6 6 0 0 1 6-6h16a6 6 0 0 1 6 6v30 M34 56l-4 30 M66 56l4 30 M38 70h24',
  table: 'M10 38h80v8H10z M20 46v40 M80 46v40 M20 60h60',
  bed: 'M10 52h80v22H10z M18 52V24a6 6 0 0 1 6-6h52a6 6 0 0 1 6 6v28 M14 74v8 M86 74v8 M30 44h18v8H30z M52 44h18v8H52z',
  wardrobe: 'M20 10h60v78H20z M50 10v78 M44 46h2 M54 46h2',
  desk: 'M8 34h84v7H8z M14 41v46 M86 41v46 M14 52h32v22H14z M22 62h16',
  shelf: 'M22 8h56v84H22z M22 32h56 M22 54h56 M22 74h56 M32 14v14 M38 16v12 M44 14v14',
  ottoman: 'M20 50h60v26H20z M20 50a10 10 0 0 1 10-10h40a10 10 0 0 1 10 10 M26 76v8 M74 76v8',
  console: 'M8 34h84v7H8z M16 41v44 M84 41v44 M16 66h68 M30 50h40v12H30z',
};

export default function FurnitureArt({
  art, size = 190, opacity = 0.85, color = 'var(--art-stroke, #7A5C3E)', className = '',
}: { art: ArtKey; size?: number; opacity?: number; color?: string; className?: string }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 100 100" fill="none"
      stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      opacity={opacity} aria-hidden="true" className={className}
    >
      <path d={PATHS[art] ?? PATHS.chair} />
    </svg>
  );
}
