import Link from 'next/link';
import { site } from '@/lib/site';

function Social() {
  return (
    <div className="flex gap-3">
      <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
        className="grid h-10 w-10 place-items-center rounded-full border border-[#3A342B] transition-colors hover:border-brass hover:text-brass">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.5V21h3z" />
        </svg>
      </a>
      <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
        className="grid h-10 w-10 place-items-center rounded-full border border-[#3A342B] transition-colors hover:border-brass hover:text-brass">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}

const tel = `tel:${site.phone.replace(/\s/g, '')}`;

export default function Footer() {
  return (
    <footer className="bg-ink px-0 pb-6 pt-14 text-[13px] text-[#B4ACA0] lg:pb-7 lg:pt-20">
      <div className="wrap">
        <div className="mb-10 grid gap-10 md:grid-cols-2 md:gap-16 lg:mb-12 lg:grid-cols-[2fr_1fr_1fr_1.4fr] lg:gap-11">
          {/* brand */}
          <div>
            <div className="font-serif text-[30px] tracking-[0.2em] text-bone lg:text-[32px]">BASERA</div>
            <div className="my-2 text-[8.5px] tracking-[0.44em] text-brass">LIVING · FURNITURE &amp; INTERIORS</div>
            <p className="max-w-[340px] lg:max-w-[300px]">Solid wood furniture and complete interiors, built in our own workshop since {site.established}.</p>
          </div>

          {/* links — side by side on small screens, own grid columns on desktop */}
          <div className="grid grid-cols-2 gap-8 md:justify-self-end md:gap-16 lg:contents">
            <div>
              <h4 className="mb-4 font-sans text-[10px] font-normal uppercase tracking-[0.28em] text-bone">Shop</h4>
              <ul className="flex flex-col gap-2 lg:gap-2.5">
                <li><Link href="/collection" className="hover:text-brass">All pieces</Link></li>
                <li><Link href="/bedroom" className="hover:text-brass">Bedroom</Link></li>
                <li><Link href="/kitchen" className="hover:text-brass">Kitchen</Link></li>
                <li><Link href="/kids" className="hover:text-brass">Kids &amp; play rooms</Link></li>
                <li><Link href="/gifts" className="hover:text-brass">Wooden gifts</Link></li>
                <li><Link href="/bespoke" className="hover:text-brass">Bespoke</Link></li>
              </ul>
            </div>
            <div className="order-first md:order-none">
              <h4 className="mb-4 font-sans text-[10px] font-normal uppercase tracking-[0.28em] text-bone">Company</h4>
              <ul className="flex flex-col gap-2 lg:gap-2.5">
                <li><Link href="/story" className="hover:text-brass">Our story</Link></li>
                <li><Link href="/craft" className="hover:text-brass">The craft</Link></li>
                <li><Link href="/wood" className="hover:text-brass">The wood</Link></li>
                <li><Link href="/portfolio" className="hover:text-brass">Portfolio</Link></li>
                <li><Link href="/visit" className="hover:text-brass">Showroom</Link></li>
              </ul>
            </div>
          </div>

          {/* showroom — desktop only */}
          <div className="hidden lg:block">
            <h4 className="mb-4 font-sans text-[10px] font-normal uppercase tracking-[0.28em] text-bone">Showroom</h4>
            <ul className="mb-6 flex flex-col gap-2.5">
              <li>{site.address}</li>
              <li>{site.area}</li>
              <li><a href={tel} className="hover:text-brass">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-brass">{site.email}</a></li>
            </ul>
            <Social />
          </div>
        </div>

        {/* contact + social — below desktop */}
        <div className="mb-6 flex flex-col-reverse items-center justify-between gap-5 text-center md:flex-row md:text-left lg:hidden">
          <div className="flex flex-col gap-1.5">
            <span>{site.address}, {site.area}</span>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 md:justify-start">
              <a href={tel} className="hover:text-brass">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="hover:text-brass">{site.email}</a>
            </div>
          </div>
          <Social />
        </div>

        <div className="flex flex-wrap justify-center gap-x-1.5 border-t border-[#312C25] pt-6 text-center text-[9.5px] tracking-[0.06em] sm:text-[10.5px] sm:tracking-[0.14em] md:justify-start lg:justify-between lg:gap-4">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span className="lg:hidden">·</span>
          <span>Est. {site.established} · Crafted in Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
