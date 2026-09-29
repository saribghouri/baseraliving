'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useShortlist } from './EnquiryBar';
import { site, waLink } from '@/lib/site';
import Illustration from './Illustration';
import type { Product } from '@/lib/products';

export default function ShortlistDrawer({
  open, onClose, catalogue,
}: { open: boolean; onClose: () => void; catalogue: Product[] }) {
  const { items, remove, clear } = useShortlist();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const chosen = items
    .map((slug) => catalogue.find((p) => p.slug === slug))
    .filter(Boolean) as Product[];

  const send = () => {
    if (!chosen.length) return;
    const rows = chosen.map((p, i) => `${i + 1}. ${p.name}`);
    const msg = `Assalam o Alaikum, I am interested in these pieces from ${site.name}:\n\n${rows.join('\n')}\n\nCould you share availability, custom options and delivery?`;
    window.open(waLink(msg), '_blank', 'noopener');
  };

  if (!mounted) return null;

  return (
    <>
      <div onClick={onClose}
        className={`fixed inset-0 z-[150] bg-[rgba(18,17,16,.6)] backdrop-blur-[2px] transition-opacity duration-300 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`} />

      <aside
        className={`fixed right-0 top-0 z-[160] flex h-full w-full max-w-[420px] flex-col border-l transition-transform duration-500 ease-brand ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'rgb(var(--bg))', borderColor: 'rgb(var(--rule))', paddingTop: 'env(safe-area-inset-top,0px)', paddingBottom: 'env(safe-area-inset-bottom,0px)' }}>

        <div className="flex items-center justify-between border-b px-6 py-6" style={{ borderColor: 'rgb(var(--rule))' }}>
          <div>
            <h3 className="text-2xl">Your shortlist</h3>
            <p className="muted text-[11px]">Pieces to ask us about</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="grid h-10 w-10 place-items-center border border-transparent hover:border-[rgb(var(--rule))]">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          {!chosen.length ? (
            <div className="muted py-20 text-center text-sm">
              Nothing shortlisted yet.
              <br /><br />
              <Link href="/collection" onClick={onClose} className="text-[10.5px] uppercase tracking-[0.18em] underline underline-offset-4">
                Browse the collection
              </Link>
            </div>
          ) : chosen.map((p) => (
            <div key={p.slug} className="grid grid-cols-[62px_1fr_auto] items-center gap-4 border-b py-5" style={{ borderColor: 'rgb(var(--rule))' }}>
              <div className="sandbg grid h-[62px] w-[62px] place-items-center overflow-hidden border p-1" style={{ borderColor: 'rgb(var(--rule))' }}>
                <Illustration art={p.art} id={`sl-${p.slug}`} />
              </div>
              <div>
                <Link href={`/product/${p.slug}`} onClick={onClose} className="font-serif text-[17px]">{p.name}</Link>
              </div>
              <button onClick={() => remove(p.slug)} className="muted text-[9.5px] uppercase tracking-[0.18em] underline underline-offset-4">Remove</button>
            </div>
          ))}
        </div>

        {chosen.length > 0 && (
          <div className="flex flex-col gap-3 border-t px-6 py-6" style={{ borderColor: 'rgb(var(--rule))' }}>
            <p className="muted text-[11.5px]">
              Send the list and we will reply with availability, custom options and a delivery date.
              Nothing is charged here.
            </p>
            <button onClick={send} className="btn w-full"><span>Send enquiry on WhatsApp</span></button>
            <button onClick={clear} className="muted text-[10.5px] uppercase tracking-[0.18em] underline underline-offset-4">Clear list</button>
          </div>
        )}
      </aside>
    </>
  );
}
