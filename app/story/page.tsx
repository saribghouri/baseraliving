import type { Metadata } from 'next';
import StatsBar from '@/components/StatsBar';
import Quotes from '@/components/Quotes';
import Reveal from '@/components/Reveal';
import Ornament from '@/components/Ornament';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Basera Living began in 1996 with two carpenters and a rented shed. The workshop has grown; the method has not moved.',
};

export default function StoryPage() {
  return (
    <>
      <section className="bg-ink py-28 text-center text-bone">
        <div className="wrap">
          <Reveal><div className="eyebrow" style={{ color: '#B08E6B' }}>Our story</div></Reveal>
          <Reveal delay={1}>
            <h1 className="my-5 text-[clamp(38px,6.2vw,78px)]">It started with<br />one workshop</h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto max-w-xl text-[#AFA79B]">And it is still the same workshop.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-[760px] px-6">
          <Reveal>
            <p className="font-serif text-[clamp(21px,2.6vw,28px)] leading-relaxed">
              Basera means the place you live. Not a house, not a building — the place that holds a
              life. That is what we set out to furnish.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p className="muted mt-7">
              We began in 1996 with two carpenters, a rented shed and a single order for a dining
              table. There was no showroom and no catalogue. Work came from people who had seen
              something we made in a friend&rsquo;s house, which is still where most of our work comes from.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="muted mt-5">
              Thirty years later the workshop is larger and the tools are better, but the method has
              not moved. Timber is chosen by hand. Joints are cut, not stapled. The person who builds
              your piece is the person who checks it. We have never made furniture for stock, and we
              have never made a piece we would not put in our own homes.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="muted mt-5">
              What changed is who we build for. Where we once made one table at a time, we now take
              on entire homes — living rooms, bedrooms, studies, kitchens — and see them through from
              the first measurement to the last cushion.
            </p>
          </Reveal>
          <Reveal delay={4}><div className="mt-10"><Ornament align="left" /></div></Reveal>
        </div>
      </section>

      <StatsBar />
      <Quotes />
    </>
  );
}
