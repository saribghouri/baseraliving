export type CategoryKey = 'living' | 'dining' | 'bedroom' | 'study' | 'kids' | 'gifts';
export type ArtKey =
  | 'sofa' | 'chair' | 'table' | 'bed'
  | 'wardrobe' | 'desk' | 'shelf' | 'ottoman' | 'console'
  | 'bunk' | 'playtable' | 'toybox'
  | 'board' | 'box' | 'clock' | 'pen';

export interface Category {
  key: CategoryKey;
  name: string;
  art: ArtKey;
  note: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategoryKey;
  art: ArtKey;
  price: number;
  featured?: boolean;
  description: string;
  story: string;
  specs: Record<string, string>;
  /** slug from lib/woods.ts — links a piece to the timber it is built from */
  wood?: string;
}

export interface Finish {
  name: string;
  hex: string;
}

export const categories: Category[] = [
  { key: 'living',  name: 'Living',  art: 'sofa',  note: 'Sofas, chairs, tables' },
  { key: 'dining',  name: 'Dining',  art: 'table', note: 'Tables & seating' },
  { key: 'bedroom', name: 'Bedroom', art: 'bed',   note: 'Beds & storage' },
  { key: 'study',   name: 'Study',   art: 'desk',  note: 'Desks & shelving' },
  { key: 'kids',    name: 'Kids',    art: 'bunk',  note: 'Beds & play furniture' },
  { key: 'gifts',   name: 'Gifts',   art: 'board', note: 'Small wooden objects' },
];

export const finishes: Finish[] = [
  { name: 'Natural Oil', hex: '#C8A87C' },
  { name: 'Walnut',      hex: '#7A5C3E' },
  { name: 'Espresso',    hex: '#3E2E22' },
  { name: 'Smoked Ash',  hex: '#9A9188' },
];

export const products: Product[] = [
  {
    slug: 'kashmir-sofa', wood: 'walnut', name: 'Kashmir Sofa', category: 'living', art: 'sofa',
    price: 185000, featured: true,
    description: 'Three seater on a solid walnut frame with a deep, feather-topped seat.',
    story: 'Drawn for a Clifton apartment where the client wanted something low enough to see over. We kept the arm slim and the back soft, and it has been our most ordered piece ever since.',
    specs: { Dimensions: '84 × 36 × 32 in', Timber: 'Solid walnut', Upholstery: 'Belgian linen, 14 colours', Cushion: 'Feather over foam core', Lead: '5–6 weeks' },
  },
  {
    slug: 'deodar-lounge-chair', wood: 'deodar', name: 'Deodar Lounge Chair', category: 'living', art: 'chair',
    price: 62000, featured: true,
    description: 'Low-slung reading chair with a hand-shaped arm and a cane back.',
    story: 'The arm on this chair is shaped by hand, not by machine. It takes an extra day, and it is the first thing everyone touches.',
    specs: { Dimensions: '30 × 32 × 34 in', Timber: 'Deodar cedar', Upholstery: 'Cotton weave or leather', Back: 'Hand-woven cane', Lead: '4 weeks' },
  },
  {
    slug: 'taak-coffee-table', wood: 'sheesham', name: 'Taak Coffee Table', category: 'living', art: 'table',
    price: 48000,
    description: 'A single slab top with a hidden lower shelf, arch-cut at the base.',
    story: 'The arch cut at the base is the same shape as our mark. It started as a detail on one table and stayed.',
    specs: { Dimensions: '48 × 24 × 17 in', Timber: 'Solid sheesham', Finish: 'Matte oil, 6 tones', Lead: '3 weeks' },
  },
  {
    slug: 'sahn-dining-table', wood: 'walnut', name: 'Sahn Dining Table', category: 'dining', art: 'table',
    price: 225000, featured: true,
    description: 'Six seater with a book-matched top and a tapered trestle base.',
    story: 'Book-matched means the top is cut from one board and opened like a book, so the grain mirrors across the centre. It only works if the timber is right.',
    specs: { Dimensions: '78 × 38 × 30 in', Timber: 'Solid walnut', Finish: 'Hand-rubbed oil', Seats: 'Six, eight on request', Lead: '6 weeks' },
  },
  {
    slug: 'mehrab-dining-chair', wood: 'ash', name: 'Mehrab Dining Chair', category: 'dining', art: 'chair',
    price: 28000,
    description: 'Arched back, woven seat, stackable and light enough to move daily.',
    story: 'Tested by our own families for a year before it went on sale. Three prototypes did not survive the children.',
    specs: { Dimensions: '19 × 21 × 33 in', Timber: 'Solid ash', Seat: 'Hand-woven cane or fabric', Lead: '3 weeks' },
  },
  {
    slug: 'sukoon-bed', wood: 'walnut', name: 'Sukoon Bed', category: 'bedroom', art: 'bed',
    price: 265000, featured: true,
    description: 'King bed with an upholstered headboard and a solid slatted base.',
    story: 'No centre creak. The slat base is over-engineered on purpose, because a bed should stay silent for twenty years.',
    specs: { Dimensions: 'King, 78 × 84 in', Timber: 'Solid walnut', Headboard: 'Linen or velvet', Base: 'Solid slat', Lead: '6 weeks' },
  },
  {
    slug: 'dehleez-wardrobe', wood: 'deodar', name: 'Dehleez Wardrobe', category: 'bedroom', art: 'wardrobe',
    price: 310000,
    description: 'Four door wardrobe, soft-close, fitted internals drawn to your clothes.',
    story: 'We ask what you actually hang. Saris, sherwanis and suits all need different drops, and a standard wardrobe serves none of them well.',
    specs: { Dimensions: '96 × 24 × 90 in', Timber: 'Veneered ply, solid frame', Fittings: 'Soft-close throughout', Lead: '7 weeks' },
  },
  {
    slug: 'naqsh-side-table', wood: 'sheesham', name: 'Naqsh Side Table', category: 'living', art: 'table',
    price: 32000,
    description: 'Small carved-edge table that works beside a bed or a chair.',
    story: 'The carved edge is done with a chisel, not a router. Look closely and no two are identical.',
    specs: { Dimensions: '18 × 18 × 22 in', Timber: 'Solid sheesham', Finish: 'Matte oil', Lead: '2 weeks' },
  },
  {
    slug: 'chaukhat-console', wood: 'ash', name: 'Chaukhat Console', category: 'living', art: 'console',
    price: 74000,
    description: 'Narrow entryway console with two drawers and an open shelf.',
    story: 'Fifteen inches deep, because most Karachi entryways cannot take more and everyone tries to sell you twenty.',
    specs: { Dimensions: '54 × 15 × 32 in', Timber: 'Solid ash', Drawers: 'Dovetailed, hand-fitted', Lead: '4 weeks' },
  },
  {
    slug: 'rivaaj-study-desk', wood: 'walnut', name: 'Rivaaj Study Desk', category: 'study', art: 'desk',
    price: 95000, featured: true,
    description: 'Writing desk with a leather inlay and cable management built in.',
    story: 'Built first for a client who works from home on three screens. The cable tray is invisible from every seated angle.',
    specs: { Dimensions: '60 × 28 × 30 in', Timber: 'Solid walnut', Top: 'Optional leather inlay', Lead: '4 weeks' },
  },
  {
    slug: 'baithak-ottoman', wood: 'mango', name: 'Baithak Ottoman', category: 'living', art: 'ottoman',
    price: 26000,
    description: 'Upholstered ottoman that doubles as extra seating or a footrest.',
    story: 'Every Pakistani living room needs two more seats on short notice. This is that, without looking like it.',
    specs: { Dimensions: '24 × 24 × 17 in', Frame: 'Solid hardwood', Upholstery: 'Linen or velvet', Lead: '2 weeks' },
  },
  {
    slug: 'zaat-bookshelf', wood: 'ash', name: 'Zaat Bookshelf', category: 'study', art: 'shelf',
    price: 118000,
    description: 'Floor to ceiling shelving with adjustable solid wood shelves.',
    story: 'Solid shelves, not ply. A loaded ply shelf sags within two years; this one will not.',
    specs: { Dimensions: '48 × 14 × 84 in', Timber: 'Solid ash', Shelves: 'Adjustable, 5 levels', Lead: '5 weeks' },
  },

  // ── kids ──────────────────────────────────────────────
  {
    slug: 'chhoti-bunk-bed', name: 'Chhoti Bunk Bed', category: 'kids', art: 'bunk',
    price: 195000, featured: true, wood: 'ash',
    description: 'Solid ash bunk with a full-height guard rail and a ladder that cannot slide.',
    story: 'Built after a client showed us a bunk that had been bolted together with four screws. Ours is mortise and tenon throughout, and the top bunk is rated to 120 kg so an adult can sit up there reading a bedtime story.',
    specs: { Dimensions: '78 × 42 × 66 in', Timber: 'Solid ash', 'Guard rail': 'Full height, both sides', Ladder: 'Fixed, anti-slip treads', 'Weight rating': '120 kg upper bunk', Finish: 'Water-based, zero VOC', Lead: '5 weeks' },
  },
  {
    slug: 'nanha-single-bed', name: 'Nanha Single Bed', category: 'kids', art: 'bed',
    price: 88000, wood: 'ash',
    description: 'Low single bed with rounded edges and an optional pull-out trundle.',
    story: 'Every edge on this bed is radiused to 8 mm. A toddler falling against a sharp arris is the single most common furniture injury we hear about.',
    specs: { Dimensions: '75 × 38 × 24 in', Timber: 'Solid ash', Edges: 'Fully radiused', Height: 'Low, easy to climb into', Trundle: 'Optional pull-out', Finish: 'Water-based, zero VOC', Lead: '4 weeks' },
  },
  {
    slug: 'khel-play-table', name: 'Khel Play Table & Chairs', category: 'kids', art: 'playtable',
    price: 46000, featured: true, wood: 'mango',
    description: 'Play table with two chairs, sized for three to seven year olds.',
    story: 'The height is 20 inches, not the 24 most sellers use. We measured our own children before we drew it, and a table too tall is a table they stop using.',
    specs: { Dimensions: 'Table 32 × 22 × 20 in', Chairs: 'Two, 12 in seat height', 'Age range': '3 – 7 years', Timber: 'Solid mango', Finish: 'Water-based, zero VOC', Lead: '3 weeks' },
  },
  {
    slug: 'sandooq-toy-chest', name: 'Sandooq Toy Chest', category: 'kids', art: 'toybox',
    price: 38000, wood: 'deodar',
    description: 'Deep toy chest with a soft-close lid and ventilation slots.',
    story: 'The soft-close hinge is not a luxury here. A heavy lid dropping on small fingers is exactly the accident this piece is designed around, and the ventilation slots exist for the same reason.',
    specs: { Dimensions: '36 × 18 × 20 in', Timber: 'Solid deodar', Lid: 'Soft-close, finger-safe', Ventilation: 'Slotted, both ends', Finish: 'Water-based, zero VOC', Lead: '3 weeks' },
  },
  {
    slug: 'parhai-study-desk', name: 'Parhai Study Desk', category: 'kids', art: 'desk',
    price: 62000, wood: 'ash',
    description: 'Child\u2019s desk with an adjustable top and a book gallery at the back.',
    story: 'The top adjusts through three heights, so it follows a child from about six years to the end of school rather than being replaced twice.',
    specs: { Dimensions: '42 × 24 × 26–30 in', Timber: 'Solid ash', Adjustment: 'Three heights', Gallery: 'Book shelf at rear', Finish: 'Water-based, zero VOC', Lead: '4 weeks' },
  },
  {
    slug: 'almari-kids-wardrobe', name: 'Nanhi Almari', category: 'kids', art: 'wardrobe',
    price: 138000, wood: 'deodar',
    description: 'Child-height wardrobe with a low hanging rail they can reach themselves.',
    story: 'The rail sits at 38 inches instead of 60. A child who can hang their own uniform will, and that is worth more than the extra storage you lose.',
    specs: { Dimensions: '48 × 22 × 60 in', Timber: 'Deodar with solid frame', Rail: 'Low, child height', Anchoring: 'Wall anchor kit included', Finish: 'Water-based, zero VOC', Lead: '5 weeks' },
  },

  // ── gifts ─────────────────────────────────────────────
  {
    slug: 'takhta-serving-board', name: 'Takhta Serving Board', category: 'gifts', art: 'board',
    price: 6500, featured: true, wood: 'mango',
    description: 'End-grain serving board in streaked mango with a walnut handle.',
    story: 'Made from offcuts of the larger pieces, which is why no two are the same colour. It is also why we can price it where we do.',
    specs: { Dimensions: '16 × 10 × 1 in', Timber: 'Mango with walnut handle', Finish: 'Food-safe mineral oil', Engraving: 'Name or date, no charge', Lead: '1 week' },
  },
  {
    slug: 'sandali-keepsake-box', name: 'Sandali Keepsake Box', category: 'gifts', art: 'box',
    price: 12500, wood: 'walnut',
    description: 'Dovetailed walnut box with a brass clasp and a fitted velvet tray.',
    story: 'Every corner is hand-cut dovetail. On a box this small, machine joints are faster and nobody would notice — which is precisely why we do not use them.',
    specs: { Dimensions: '10 × 7 × 4 in', Timber: 'Solid walnut', Joinery: 'Hand-cut dovetails', Interior: 'Fitted velvet tray', Hardware: 'Solid brass clasp', Lead: '2 weeks' },
  },
  {
    slug: 'waqt-wall-clock', name: 'Waqt Wall Clock', category: 'gifts', art: 'clock',
    price: 9800, featured: true, wood: 'sheesham',
    description: 'Turned sheesham wall clock with brass hands and a silent movement.',
    story: 'Turned from a single disc rather than glued up from staves, so the grain runs continuously around the face. The movement is silent because a ticking clock in a Pakistani drawing room is nobody\u2019s friend.',
    specs: { Diameter: '14 in', Timber: 'Solid sheesham', Movement: 'Silent sweep, AA battery', Hands: 'Solid brass', Engraving: 'Rear plate, no charge', Lead: '2 weeks' },
  },
  {
    slug: 'qalam-desk-set', name: 'Qalam Desk Set', category: 'gifts', art: 'pen',
    price: 8200, wood: 'walnut',
    description: 'Turned walnut pen with a matching stand and brass fittings.',
    story: 'A corporate gift that does not end up in a drawer. We have made these in batches of two hundred with a company mark on the stand.',
    specs: { Pen: 'Turned walnut, brass trim', Stand: 'Solid walnut base', Refill: 'Standard, widely available', 'Bulk orders': 'From 25 pieces, logo engraved', Lead: '2 weeks' },
  },
  {
    slug: 'chai-coaster-set', name: 'Chai Coaster Set', category: 'gifts', art: 'board',
    price: 3800, wood: 'mango',
    description: 'Six mango wood coasters in a matching holder.',
    story: 'The cheapest thing we make and the one we give away most often. Six coasters, one holder, cut from a single board so the grain matches across the set.',
    specs: { Dimensions: '4 in diameter, set of six', Timber: 'Solid mango', Holder: 'Matching, included', Finish: 'Food-safe oil', Lead: '1 week' },
  },
  {
    slug: 'tohfa-jewellery-chest', name: 'Tohfa Jewellery Chest', category: 'gifts', art: 'box',
    price: 26000, wood: 'walnut',
    description: 'Three-drawer jewellery chest with a lift-top mirror and ring rolls.',
    story: 'Drawn as a wedding gift for a client\u2019s daughter and now one of the pieces we make most often in December and in wedding season.',
    specs: { Dimensions: '12 × 9 × 10 in', Timber: 'Solid walnut', Drawers: 'Three, velvet lined', Mirror: 'Lift-top', Extras: 'Ring rolls, necklace hooks', Lead: '3 weeks' },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const categoryName = (key: CategoryKey) =>
  categories.find((c) => c.key === key)?.name ?? '';

export const byCategory = (key: CategoryKey) => products.filter((p) => p.category === key);
export const byWood = (woodSlug: string) => products.filter((p) => p.wood === woodSlug);
