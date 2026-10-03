'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, navMore } from '@/lib/site';
import { useShortlist } from './EnquiryBar';
import ShortlistDrawer from './ShortlistDrawer';
import { products } from '@/lib/products';
import Logo from './Logo';

export default function Header() {
  const path = usePathname();
  const { items, ready } = useShortlist();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => { setMenu(false); setOpen(false); }, [path]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setStuck(h.scrollTop > 10);
      setProgress(h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1));
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const dark = cur ? cur === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('bl_theme', next); } catch {}
  };

  const count = ready ? items.length : 0;

  return (
    <>
      <header
        className={`sticky top-0 z-[90] border-b backdrop-blur-xl transition-shadow ${stuck ? 'shadow-[0_8px_26px_rgba(22,20,15,.07)]' : ''}`}
        style={{ background: 'rgb(var(--bg) / 0.88)', borderColor: 'rgb(var(--rule))', paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <div className="wrap relative">
          <div className="flex h-[74px] items-center justify-between gap-5">
            <Link href="/" className="flex items-center gap-3">
              <Logo />
              <span>
                <span className="block font-serif text-[22px] leading-none tracking-[0.2em] indent-[0.2em]">BASERA</span>
                <span className="mt-1 block text-[7.5px] tracking-[0.42em] indent-[0.42em] text-walnut">LIVING</span>
              </span>
            </Link>

            <nav className="hidden gap-4 text-[11px] uppercase tracking-[0.14em] lg:flex xl:gap-6 xl:tracking-[0.16em]">
              {nav.map((n) => {
                const active = path === n.href || path.startsWith(n.href + '/');
                return (
                  <Link key={n.href} href={n.href} className="group relative py-1.5">
                    {n.label}
                    <span className={`absolute bottom-0 left-0 h-px bg-walnut transition-[width] duration-500 ease-brand ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-1.5">
              <button onClick={toggleTheme} aria-label="Switch theme"
                className="grid h-10 w-10 place-items-center border border-transparent transition-colors hover:border-[rgb(var(--rule))]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <circle cx="12" cy="12" r="4.4" />
                  <path d="M12 2.2v2M12 19.8v2M2.2 12h2M19.8 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19" />
                </svg>
              </button>

              <button onClick={() => setOpen(true)} aria-label="Open shortlist"
                className="relative grid h-10 w-10 place-items-center border border-transparent transition-colors hover:border-[rgb(var(--rule))]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1Z" />
                </svg>
                {count > 0 && (
                  <b className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-walnut px-1 text-[9.5px] text-white">{count}</b>
                )}
              </button>

              <button onClick={() => setMenu((m) => !m)} aria-label="Menu"
                className="grid h-10 w-10 place-items-center border border-transparent transition-colors hover:border-[rgb(var(--rule))] lg:hidden">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>

          {menu && (
            <nav className="flex flex-col border-t lg:hidden" style={{ borderColor: 'rgb(var(--rule))' }}>
              {[...nav, ...navMore].map((n) => (
                <Link key={n.href} href={n.href} className="border-b py-3.5 text-xs uppercase tracking-[0.22em]"
                  style={{ borderColor: 'rgb(var(--rule))' }}>
                  {n.label}
                </Link>
              ))}
            </nav>
          )}

          <div className="absolute -bottom-px left-0 h-0.5 bg-walnut transition-[width]" style={{ width: `${progress * 100}%` }} />
        </div>
      </header>

      <ShortlistDrawer open={open} onClose={() => setOpen(false)} catalogue={products} />
    </>
  );
}
