import Reveal from './Reveal';
import Ornament from './Ornament';

export default function SectionHead({
  eyebrow, title, lead, dark = false,
}: { eyebrow: string; title: string; lead?: string; dark?: boolean }) {
  return (
    <Reveal className="mb-14 text-center">
      <div className="eyebrow" style={dark ? { color: '#B08E6B' } : undefined}>{eyebrow}</div>
      <h2 className="my-4 text-[clamp(32px,4.8vw,54px)] tracking-[0.04em]" style={dark ? { color: '#F3EFE6' } : undefined}>
        {title}
      </h2>
      <Ornament dark={dark} />
      {lead && (
        <p className={`mx-auto mt-5 max-w-xl ${dark ? 'text-[#AFA79B]' : 'muted'}`}>{lead}</p>
      )}
    </Reveal>
  );
}
