export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.18} viewBox="0 0 160 190" fill="none" aria-hidden="true">
      <path d="M14 178 V78 C14 40 44 12 80 12 C116 12 146 40 146 78 V178" stroke="#7A5C3E" strokeWidth="7" fill="none" />
      <path d="M6 178 H154" stroke="#7A5C3E" strokeWidth="7" />
      <text x="80" y="147" fontFamily="var(--font-serif), Georgia, serif" fontSize="118" fill="currentColor" textAnchor="middle">B</text>
    </svg>
  );
}
