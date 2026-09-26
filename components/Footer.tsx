import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-ink px-0 pb-7 pt-20 text-[13px] text-[#B4ACA0]">
      <div className="wrap">
        <div className="mb-12 grid gap-11 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <div className="font-serif text-[32px] tracking-[0.2em] text-bone">BASERA</div>
            <div className="my-2 text-[8.5px] tracking-[0.44em] text-brass">LIVING · FURNITURE &amp; INTERIORS</div>
            <p className="max-w-[300px]">Solid wood furniture and complete interiors, built in our own workshop since {site.established}.</p>
          </div>
          <div>
            <h4 className="mb-4 font-sans text-[10px] font-normal uppercase tracking-[0.28em] text-bone">Shop</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/collection" className="hover:text-brass">All pieces</Link></li>
              <li><Link href="/bedroom" className="hover:text-brass">Bedroom</Link></li>
              <li><Link href="/kids" className="hover:text-brass">Kids &amp; play rooms</Link></li>
              <li><Link href="/gifts" className="hover:text-brass">Wooden gifts</Link></li>
              <li><Link href="/bespoke" className="hover:text-brass">Bespoke</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-sans text-[10px] font-normal uppercase tracking-[0.28em] text-bone">Company</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/story" className="hover:text-brass">Our story</Link></li>
              <li><Link href="/craft" className="hover:text-brass">The craft</Link></li>
              <li><Link href="/wood" className="hover:text-brass">The wood</Link></li>
              <li><Link href="/portfolio" className="hover:text-brass">Portfolio</Link></li>
              <li><Link href="/visit" className="hover:text-brass">Showroom</Link></li>
              <li><a href={site.instagram} className="hover:text-brass">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-sans text-[10px] font-normal uppercase tracking-[0.28em] text-bone">Showroom</h4>
            <ul className="flex flex-col gap-2.5">
              <li>{site.address}</li>
              <li>{site.area}</li>
              <li><a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-brass">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-brass">{site.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-[#312C25] pt-6 text-[10.5px] tracking-[0.14em]">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Est. {site.established} · Crafted in Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
