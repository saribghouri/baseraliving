import Reveal from './Reveal';
import SectionHead from './SectionHead';

const QUOTES = [
  ['They rebuilt our dining table twice until the height was right for my mother\u2019s chair. That is not something you get from a showroom floor.', 'A. Rehman · DHA Phase VI'],
  ['Four years in and the joints are still tight. The finish has aged beautifully rather than worn out.', 'S. Kazmi · Clifton'],
  ['We handed them an empty apartment and a budget. They handled the whole interior, on schedule.', 'F. Ahmed · Bahria Town'],
];

export default function Quotes() {
  return (
    <section className="sandbg py-24">
      <div className="wrap">
        <SectionHead eyebrow="Clients" title="What people say" />
        <div className="grid gap-6 md:grid-cols-3">
          {QUOTES.map(([text, who], i) => (
            <Reveal key={who} delay={((i % 4) + 1) as 1 | 2 | 3}>
              <div className="surface h-full border p-8 transition-all duration-500 ease-brand hover:-translate-y-1.5 hover:border-walnut"
                style={{ borderColor: 'rgb(var(--rule))' }}>
                <p className="mb-4 font-serif text-xl leading-snug">&ldquo;{text}&rdquo;</p>
                <span className="text-[10px] uppercase tracking-[0.24em] text-walnut">{who}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
