import Reveal from './Reveal';
import SectionHead from './SectionHead';

const STEPS = [
  ['01', 'Consultation', 'We measure the room, talk through how you actually use it, and agree the proportions before a single board is cut.'],
  ['02', 'Selection', 'Choose the timber, finish and upholstery from physical samples. You see exactly what your piece is made from, never a rendering.'],
  ['03', 'The build', 'Cut, joined and finished in our workshop over four to six weeks by the same two people, start to finish.'],
  ['04', 'Delivery', 'Delivered and installed by our own team, anywhere in Pakistan. We take the packaging away with us.'],
];

export default function Steps() {
  return (
    <section className="py-24">
      <div className="wrap">
        <SectionHead eyebrow="How we work" title="From timber to your home" />
        <div className="grid border sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: 'rgb(var(--rule))' }}>
          {STEPS.map(([n, title, body], i) => (
            <Reveal key={n} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className="border-b p-8 transition-colors last:border-b-0 hover:bg-[rgb(var(--card))] lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="font-serif text-[44px] leading-none text-walnut">{n}</div>
              <h3 className="mb-2 mt-3 text-[21px]">{title}</h3>
              <p className="muted text-[13px]">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
