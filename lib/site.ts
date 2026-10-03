export const site = {
  name: 'Basera Living',
  tagline: 'Furniture & Interiors',
  established: 1996,
  url: 'https://baseraliving.com',
  description:
    'Solid wood furniture and complete interiors, built by hand in our own workshop since 1996. Custom sizes, finishes and fabrics on every piece.',

  // ─── your details ────────────────────────────────────
  whatsapp: '923172296946',            // country code, no + or spaces
  phone: '0317 2296946',
  email: 'sarib.ghouri92@gmail.com',
  craftVideo: '',                      // e.g. '/craft.mp4' placed in /public
  // ─────────────────────────────────────────────────────

  address: '[Showroom address]',
  area: 'DHA, Karachi',
  hours: 'Mon – Sun, 11am – 9pm',
  instagram: 'https://instagram.com/baseraliving',
  facebook: 'https://facebook.com/baseraliving',
};

export const nav = [
  { href: '/collection', label: 'Collection' },
  { href: '/bedroom', label: 'Bedroom' },
  { href: '/kitchen', label: 'Kitchen' },
  { href: '/study', label: 'Study' },
  { href: '/kids', label: 'Kids' },
  { href: '/gifts', label: 'Gifts' },
  { href: '/wood', label: 'Wood' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/bespoke', label: 'Bespoke' },
];

export const navMore = [
  { href: '/craft', label: 'The Craft' },
  { href: '/story', label: 'Our Story' },
  { href: '/visit', label: 'Visit' },
];

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const mailLink = (subject: string, body = '') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
