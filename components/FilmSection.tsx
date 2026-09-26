'use client';

import { useRef, useState } from 'react';
import { site } from '@/lib/site';
import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function FilmSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    if (!site.craftVideo) return;
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <section className="bg-ink py-24 text-bone">
      <div className="wrap">
        <SectionHead dark eyebrow="Inside the workshop" title="Watch a piece take shape" />

        <Reveal>
          <div onClick={play}
            className="relative grid aspect-video cursor-pointer place-items-center overflow-hidden border border-[#332E26] bg-[#0E0D0B]">
            {site.craftVideo && (
              <video ref={videoRef} src={site.craftVideo} controls playsInline preload="none"
                className={`h-full w-full object-cover ${playing ? 'block' : 'hidden'}`} />
            )}

            {!playing && (
              <>
                <div className="absolute inset-0 grid place-items-center"
                  style={{ background: 'radial-gradient(circle at 50% 60%, #241F19, #0E0D0B 70%)' }}>
                  <div className="absolute inset-x-[8%] top-[58%] h-3 rounded-sm"
                    style={{ background: 'linear-gradient(90deg,#3A2F23,#54432F,#3A2F23)' }} />
                  <svg className="plane absolute top-[46%] w-[120px]" viewBox="0 0 120 50" fill="none" stroke="#B08E6B" strokeWidth="1.4">
                    <path d="M14 34h86l-6-16H24l-10 16Z" />
                    <path d="M34 18l-6-8h26l4 8" />
                    <path d="M14 34h86v5H14z" />
                  </svg>
                </div>

                <div className="relative z-10 grid place-items-center gap-5 text-center">
                  <div className="group grid h-[92px] w-[92px] place-items-center rounded-full border border-brass bg-[rgba(14,13,11,.5)] transition-all duration-500 ease-brand hover:scale-105 hover:bg-brass">
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="#B08E6B" className="transition-colors group-hover:fill-ink">
                      <path d="M2 1.5 20 12 2 22.5Z" />
                    </svg>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#8E877B]">
                    {site.craftVideo ? 'Play film' : 'Add your workshop film'}
                  </div>
                </div>
              </>
            )}
          </div>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-7 max-w-xl text-center text-[#9D958A]">
            Four to six weeks from timber to your living room. Nothing is subcontracted, and nothing
            leaves until it has been sat on, opened and closed by the person who built it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
