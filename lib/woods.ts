export interface Wood {
  slug: string;
  name: string;
  localName: string;
  origin: string;
  hardness: string;
  tone: string;
  grain: string;
  bestFor: string[];
  notes: string;
  priceIndex: 1 | 2 | 3 | 4;
  swatch: [string, string];
  /** photographs in /public, first one is shown large */
  photos?: string[];
}

export const woods: Wood[] = [
  {
    slug: 'walnut', name: 'Walnut', localName: 'Akhrot',
    origin: 'Swat & Chitral, northern Pakistan',
    hardness: 'Janka 1010 lbf — medium hard',
    tone: 'Deep chocolate brown with purple undertones',
    grain: 'Straight, occasionally wavy, with dramatic figure near the crotch',
    bestFor: ['Dining tables', 'Beds', 'Statement sofas', 'Desks'],
    notes: 'The most expensive timber we stock and the one we recommend for a piece you intend to keep. It machines beautifully, takes oil without blotching, and darkens slowly into a richer brown over about ten years.',
    priceIndex: 4,
    swatch: ['#4A3324', '#7A5C3E'],
    photos: ['/wood/walnut-logs.jpg'],
  },
  {
    slug: 'sheesham', name: 'Sheesham', localName: 'Tali',
    origin: 'Punjab, Pakistan',
    hardness: 'Janka 1660 lbf — very hard',
    tone: 'Golden brown to deep reddish brown, often in the same board',
    grain: 'Interlocked, strongly figured, highly variable',
    bestFor: ['Coffee tables', 'Side tables', 'Carved pieces', 'Doors'],
    notes: 'The traditional furniture timber of the subcontinent and the hardest thing in our workshop. Extremely resistant to termites and rot. Colour varies considerably board to board, which is either the appeal or the problem depending on your taste.',
    priceIndex: 3,
    swatch: ['#5C3A26', '#9A6B42'],
    photos: ['/wood/sheesham-log.jpg'],
  },
  {
    slug: 'deodar', name: 'Deodar Cedar', localName: 'Diyar',
    origin: 'Himalayan foothills, Kashmir & Kaghan',
    hardness: 'Janka 560 lbf — soft',
    tone: 'Pale honey to light amber',
    grain: 'Very straight and even, with a distinct cedar scent',
    bestFor: ['Wardrobe internals', 'Lightweight chairs', 'Storage chests', 'Panelling'],
    notes: 'Naturally repels moths and insects, which is why every old wardrobe in the country is lined with it. Light enough to move, soft enough to dent. We use it where weight and smell matter more than hardness.',
    priceIndex: 2,
    swatch: ['#B08E6B', '#D8BE97' ],
    photos: ['/wood/deodar-slab.jpg', '/wood/deodar-plank.jpg'],
  },
  {
    slug: 'ash', name: 'Ash', localName: 'Ash',
    origin: 'Imported, Europe & North America',
    hardness: 'Janka 1320 lbf — hard',
    tone: 'Pale cream to light blonde',
    grain: 'Bold, open, very consistent',
    bestFor: ['Dining chairs', 'Shelving', 'Steam-bent parts', 'Scandinavian styles'],
    notes: 'The best timber we know for chairs — it bends under steam and takes shock without splitting. Its pale colour suits lighter interiors and it accepts stain evenly if you want it darker.',
    priceIndex: 3,
    swatch: ['#C9BCA0', '#E6DCC6'],
    photos: ['/wood/ash-boards.jpg'],
  },
  {
    slug: 'mango', name: 'Mango', localName: 'Aam',
    origin: 'Sindh & Punjab orchards',
    hardness: 'Janka 1070 lbf — medium hard',
    tone: 'Golden with green and dark streaks',
    grain: 'Open and interlocked, often with spalting',
    bestFor: ['Gift items', 'Serving boards', 'Small storage', 'Accent pieces'],
    notes: 'Comes from orchard trees at the end of their fruiting life, so it is the most sustainable timber we use and one of the least expensive. The streaking makes every piece different, which suits gifts and small objects.',
    priceIndex: 1,
    swatch: ['#8A6A3A', '#C2A15C'],
    photos: ['/wood/mango-slabs.jpg'],
  },
  {
    slug: 'teak', name: 'Burma Teak', localName: 'Sagwan',
    origin: 'Imported, Myanmar & plantation Africa',
    hardness: 'Janka 1070 lbf — medium hard',
    tone: 'Warm golden brown, weathers to silver-grey outdoors',
    grain: 'Straight and even with a slightly oily feel',
    bestFor: ['Outdoor furniture', 'Bathroom fittings', 'Boat-style joinery'],
    notes: 'Its natural oil makes it the only timber we will use outdoors or anywhere near water. Expensive and getting more so, so we reserve it for places where nothing else will survive.',
    priceIndex: 4,
    swatch: ['#8B6A32', '#BF9A57'],
    photos: ['/wood/teak-slab.jpg'],
  },
];

export const getWood = (slug: string) => woods.find((w) => w.slug === slug);
