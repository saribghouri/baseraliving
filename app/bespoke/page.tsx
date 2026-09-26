import type { Metadata } from 'next';
import BespokeForm from '@/components/BespokeForm';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Bespoke',
  description: 'Commission furniture built to your room. Free drawing and fixed quotation within three working days.',
};

const TIMELINE = [
  ['Within 24 hours', 'We call to understand the room, the use and the budget.'],
  ['Within 3 days', 'A drawing and a fixed quotation, at no cost and no obligation.'],
  ['On approval', '50% advance, then 4–6 weeks in the workshop.'],
  ['On delivery', 'Balance on installation, once you have seen it in place.'],
];

export default function BespokePage() {
  return (
    <section className="py-20">
      <div className="wrap">
        <SectionHead
          eyebrow="Bespoke"
          title="Commission a piece"
          lead="Most of what leaves our workshop was drawn for one specific room. Tell us about yours."
        />
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="surface border p-9" style={{ borderColor: 'rgb(var(--rule))' }}>
              <div className="eyebrow mb-6">What happens next</div>
              {TIMELINE.map(([when, what]) => (
                <div key={when} className="flex flex-col gap-1.5 border-b py-3.5 last:border-b-0" style={{ borderColor: 'rgb(var(--rule))' }}>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-walnut">{when}</span>
                  <span className="text-sm">{what}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={1}><BespokeForm /></Reveal>
        </div>
      </div>
    </section>
  );
}
