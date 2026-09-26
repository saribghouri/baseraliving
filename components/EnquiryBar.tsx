'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { site, waLink, mailLink } from '@/lib/site';

const KEY = 'bl_shortlist';

/** A shortlist, not a cart — nothing is bought here, it just collects what to ask about. */
export function useShortlist() {
  const [items, setItems] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw) || []);
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items, ready]);

  const toggle = (slug: string) =>
    setItems((l) => (l.includes(slug) ? l.filter((s) => s !== slug) : [...l, slug]));
  const remove = (slug: string) => setItems((l) => l.filter((s) => s !== slug));
  const clear = () => setItems([]);

  return { items, toggle, remove, clear, ready };
}

export default function EnquiryButtons({
  name, price, compact = false,
}: { name: string; price?: string; compact?: boolean }) {
  const line = price ? `${name} (${price})` : name;
  const msg = `Assalam o Alaikum, I am interested in the ${line} from ${site.name}. Could you share availability, custom size options and delivery?`;

  if (compact) {
    return (
      <a href={waLink(msg)} target="_blank" rel="noopener"
        className="border px-4 py-2.5 text-[10px] uppercase tracking-[0.22em] transition-colors hover:border-ink hover:bg-ink hover:text-bone"
        style={{ borderColor: 'rgb(var(--rule))' }}>
        Enquire
      </a>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      <a href={waLink(msg)} target="_blank" rel="noopener" className="btn w-full">
        <span>Enquire on WhatsApp</span>
      </a>
      <a href={mailLink(`Enquiry — ${name}`, msg)} className="btn btn-ghost w-full">
        <span>Email us</span>
      </a>
      <Link href="/bespoke" className="btn btn-ghost w-full">
        <span>Ask for a custom size</span>
      </Link>
      <p className="muted mt-1 text-center text-[11px]">
        Or call {site.phone} — showroom open {site.hours.toLowerCase()}
      </p>
    </div>
  );
}
