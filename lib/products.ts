export type CategoryKey = 'living' | 'dining' | 'bedroom' | 'kitchen' | 'study' | 'kids' | 'gifts';
export type ArtKey =
  | 'sofa' | 'chair' | 'table' | 'bed'
  | 'wardrobe' | 'desk' | 'shelf' | 'ottoman' | 'console' | 'kitchen'
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
  price?: number;
  featured?: boolean;
  description: string;
  story: string;
  specs: Record<string, string>;
  /** slug from lib/woods.ts — links a piece to the timber it is built from */
  wood?: string;
  /** photographs in /public, used when the CMS has no images for the piece */
  photos?: string[];
}

export interface Finish {
  name: string;
  hex: string;
}

export const categories: Category[] = [
  { key: 'living',  name: 'Living',  art: 'sofa',  note: 'Sofas, chairs, tables' },
  { key: 'dining',  name: 'Dining',  art: 'table', note: 'Tables & seating' },
  { key: 'bedroom', name: 'Bedroom', art: 'bed',   note: 'Beds & storage' },
  { key: 'kitchen', name: 'Kitchen', art: 'kitchen', note: 'Cabinets, islands, pantry' },
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
    photos: ['/living/kashmir-sofa-1.jpg', '/living/kashmir-sofa-2.jpg', '/living/kashmir-sofa-3.jpg'],
    description: 'Three seater on a solid walnut frame with a deep, feather-topped seat.',
    story: 'Drawn for a Clifton apartment where the client wanted something low enough to see over. We kept the arm slim and the back soft, and it has been our most ordered piece ever since.',
    specs: { Dimensions: '84 × 36 × 32 in', Timber: 'Solid walnut', Upholstery: 'Belgian linen, 14 colours', Cushion: 'Feather over foam core', Lead: '5–6 weeks' },
  },
  {
    slug: 'deodar-lounge-chair', wood: 'deodar', name: 'Deodar Lounge Chair', category: 'living', art: 'chair',
    price: 62000, featured: true,
    photos: ['/living/lounge-chair-1.jpg', '/living/lounge-chair-2.jpg', '/living/lounge-chair-3.jpg'],
    description: 'Low-slung reading chair with a hand-shaped arm and a cane back.',
    story: 'The arm on this chair is shaped by hand, not by machine. It takes an extra day, and it is the first thing everyone touches.',
    specs: { Dimensions: '30 × 32 × 34 in', Timber: 'Deodar cedar', Upholstery: 'Cotton weave or leather', Back: 'Hand-woven cane', Lead: '4 weeks' },
  },
  {
    slug: 'taak-coffee-table', wood: 'sheesham', name: 'Taak Coffee Table', category: 'living', art: 'table',
    price: 48000,
    photos: ['/living/coffee-table-1.jpg', '/living/coffee-table-2.jpg'],
    description: 'A single slab top with a hidden lower shelf, arch-cut at the base.',
    story: 'The arch cut at the base is the same shape as our mark. It started as a detail on one table and stayed.',
    specs: { Dimensions: '48 × 24 × 17 in', Timber: 'Solid sheesham', Finish: 'Matte oil, 6 tones', Lead: '3 weeks' },
  },
  {
    slug: 'sahn-dining-table', wood: 'walnut', name: 'Sahn Dining Table', category: 'dining', art: 'table',
    price: 225000, featured: true,
    photos: ['/dining/sahn-dining-1.jpg', '/dining/sahn-dining-2.jpg', '/dining/sahn-dining-3.jpg'],
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
    price: 265000, featured: true, photos: ['/bedroom/sukoon-bed.jpg'],
    description: 'King bed with an upholstered headboard and a solid slatted base.',
    story: 'No centre creak. The slat base is over-engineered on purpose, because a bed should stay silent for twenty years.',
    specs: { Dimensions: 'King, 78 × 84 in', Timber: 'Solid walnut', Headboard: 'Linen or velvet', Base: 'Solid slat', Lead: '6 weeks' },
  },
  {
    slug: 'dehleez-wardrobe', wood: 'deodar', name: 'Dehleez Wardrobe', category: 'bedroom', art: 'wardrobe',
    price: 310000, photos: ['/bedroom/dehleez-wardrobe.jpg'],
    description: 'Four door wardrobe with a lit dressing nook and open shelves, soft-close, fitted internals drawn to your clothes.',
    story: 'We ask what you actually hang. Saris, sherwanis and suits all need different drops, and a standard wardrobe serves none of them well.',
    specs: { Dimensions: '96 × 24 × 90 in', Timber: 'Veneered ply, solid frame', Fittings: 'Soft-close throughout', Lead: '7 weeks' },
  },
  {
    slug: 'aangan-platform-bed', wood: 'walnut', name: 'Aangan Platform Bed', category: 'bedroom', art: 'bed',
    photos: ['/bedroom/bed-walnut-frame.jpg'],
    description: 'Low walnut platform with a wide headboard that carries two built-in side tables.',
    story: 'The headboard runs past the mattress on both sides, so the side tables are part of the bed and never drift out of line.',
    specs: { Dimensions: 'King, 78 × 84 in', Timber: 'Solid walnut', 'Side tables': 'Built in, finger-pull drawers', Base: 'Solid slat platform', Lead: '6 weeks' },
  },
  {
    slug: 'noor-low-platform', wood: 'ash', name: 'Noor Low Platform', category: 'bedroom', art: 'bed',
    photos: ['/bedroom/bed-platform-light.jpg'],
    description: 'Deep, low platform in pale ash, with the headboard stretched into floating shelves.',
    story: 'Made for rooms that feel small. A low bed and a pale timber make the ceiling look higher than it is.',
    specs: { Dimensions: 'King, 78 × 84 in', Timber: 'Solid ash', Headboard: 'Full width, with back light', Base: 'Solid slat platform', Lead: '6 weeks' },
  },
  {
    slug: 'hawa-floating-bed', wood: 'teak', name: 'Hawa Floating Bed', category: 'bedroom', art: 'bed',
    photos: ['/bedroom/bed-floating.jpg'],
    description: 'Plank headboard in open grain, on a recessed base with soft light underneath.',
    story: 'The legs are set far back under the frame, so from the door the bed seems to hover above the floor.',
    specs: { Dimensions: 'Queen, 66 × 78 in', Timber: 'Solid teak', Lighting: 'Warm LED strip under the base', Base: 'Recessed plinth', Lead: '7 weeks' },
  },
  {
    slug: 'shaam-bed', wood: 'walnut', name: 'Shaam Bed', category: 'bedroom', art: 'bed',
    photos: ['/bedroom/bed-evening.jpg'],
    description: 'Plain panel headboard, clean square edges and matching side tables.',
    story: 'Nothing to catch dust and nothing to catch a knee in the dark. A bed for a calm, uncluttered room.',
    specs: { Dimensions: 'Queen, 66 × 78 in', Timber: 'Solid walnut', Headboard: 'Solid panel', Base: 'Solid slat', Lead: '5 weeks' },
  },
  {
    slug: 'deewar-panel-bed', wood: 'sheesham', name: 'Deewar Panel Bed', category: 'bedroom', art: 'bed',
    photos: ['/bedroom/bed-wall-panel.jpg'],
    description: 'Headboard that runs the full width of the wall and frames both side tables.',
    story: 'One long panel instead of a bed pushed against a wall. The room reads as finished the day it is installed.',
    specs: { Dimensions: 'King, 78 × 84 in', Timber: 'Solid sheesham', Headboard: 'Wall width, to your measurement', Base: 'Storage or slat', Lead: '7 weeks' },
  },
  {
    slug: 'chaand-bed', wood: 'walnut', name: 'Chaand Bed', category: 'bedroom', art: 'bed',
    photos: ['/bedroom/bed-rounded.jpg'],
    description: 'Softly curved headboard over a deep plinth base in dark walnut.',
    story: 'The curve is steam-bent, not cut from a slab, so the grain follows the shape all the way round.',
    specs: { Dimensions: 'Queen, 66 × 78 in', Timber: 'Solid walnut', Headboard: 'Curved, steam-bent', Base: 'Plinth, solid slat', Lead: '6 weeks' },
  },
  {
    slug: 'sehar-bedroom-suite', wood: 'ash', name: 'Sehar Bedroom Suite', category: 'bedroom', art: 'bed',
    photos: ['/bedroom/bed-oak-panel-wall.jpg'],
    description: 'Bed, side tables and a full wall of vertical panels, all in one matched timber.',
    story: 'Every panel is cut from the same batch of boards, so the grain and colour match across the whole wall.',
    specs: { Dimensions: 'King, 78 × 84 in', Timber: 'Solid ash', Includes: 'Bed, 2 side tables, wall panels', Lighting: 'Wall lights set into panels', Lead: '9 weeks' },
  },
  {
    slug: 'kamra-bed-and-study', wood: 'walnut', name: 'Kamra Bed & Study', category: 'bedroom', art: 'bed',
    photos: ['/bedroom/bed-built-in-desk.jpg'],
    description: 'Floating platform bed joined to a wall panel that runs into a study desk and shelves.',
    story: 'Drawn for a room that had to be a bedroom and an office. One continuous line of wood does both jobs.',
    specs: { Dimensions: 'Queen, 66 × 78 in', Timber: 'Solid walnut', Includes: 'Bed, wall panel, desk, shelves', Base: 'Floating platform', Lead: '9 weeks' },
  },
  {
    slug: 'mehfooz-wardrobe', wood: 'walnut', name: 'Mehfooz Six-Door Wardrobe', category: 'bedroom', art: 'wardrobe',
    photos: ['/bedroom/wardrobe-6-door.jpg'],
    description: 'Six tall doors with long bar handles, and three wide drawers along the base.',
    story: 'Built wall to wall and up to the ceiling, so it holds a whole family and looks like part of the room.',
    specs: { Dimensions: '108 × 24 × 96 in, or to your wall', Timber: 'Walnut veneer, solid frame', Fittings: 'Soft-close doors and drawers', Lead: '8 weeks' },
  },
  {
    slug: 'saada-wardrobe', wood: 'ash', name: 'Saada Four-Door Wardrobe', category: 'bedroom', art: 'wardrobe',
    photos: ['/bedroom/wardrobe-4-door-ash.jpg'],
    description: 'Flat, handle-less doors with long recessed pulls, built up to the cornice.',
    story: 'No gap on top, so there is nowhere for dust to settle and nothing to climb up and clean.',
    specs: { Dimensions: '84 × 24 × 96 in', Timber: 'Ash veneer, solid frame', Pulls: 'Recessed, full length', Lead: '7 weeks' },
  },
  {
    slug: 'roshan-sliding-wardrobe', wood: 'ash', name: 'Roshan Sliding Wardrobe', category: 'bedroom', art: 'wardrobe',
    photos: ['/bedroom/wardrobe-sliding-lit.jpg'],
    description: 'Two sliding doors for hanging, an open lit column for folded clothes, and drawers below.',
    story: 'Sliding doors need no room to swing open, which is what a tight Pakistani bedroom usually needs most.',
    specs: { Dimensions: '96 × 24 × 90 in', Timber: 'Solid ash frame', Doors: 'Sliding, soft-close', Lighting: 'LED in the open shelves', Lead: '8 weeks' },
  },
  {
    slug: 'aaina-dresser', wood: 'ash', name: 'Aaina Dresser & Wardrobe', category: 'bedroom', art: 'console',
    photos: ['/bedroom/dresser-mirror.jpg'],
    description: 'Low dresser with drawers and an open cubby, beside a tall wardrobe with a mirrored door.',
    story: 'A dressing corner in one piece: the drawers at hand height, the mirror at full height, nothing on the floor.',
    specs: { Dimensions: 'Dresser 54 × 18 × 30 in, wardrobe 36 × 24 × 84 in', Timber: 'Solid ash', Mirror: 'Full-length door', Lead: '6 weeks' },
  },
  {
    slug: 'naqsh-side-table', wood: 'sheesham', name: 'Naqsh Side Table', category: 'living', art: 'table',
    price: 32000,
    photos: ['/living/side-table-1.jpg', '/living/side-table-2.jpg'],
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
    price: 195000, featured: true, wood: 'ash', photos: ['/kids/pine-bunk-bed.jpg'],
    description: 'Solid ash bunk with a full-height guard rail and a ladder that cannot slide.',
    story: 'Built after a client showed us a bunk that had been bolted together with four screws. Ours is mortise and tenon throughout, and the top bunk is rated to 120 kg so an adult can sit up there reading a bedtime story.',
    specs: { Dimensions: '78 × 42 × 66 in', Timber: 'Solid ash', 'Guard rail': 'Full height, both sides', Ladder: 'Fixed, anti-slip treads', 'Weight rating': '120 kg upper bunk', Finish: 'Water-based, zero VOC', Lead: '5 weeks' },
  },
  {
    slug: 'nanha-single-bed', name: 'Nanha Single Bed', category: 'kids', art: 'bed',
    price: 88000, wood: 'ash', photos: ['/kids/toddler-bed-canopy.jpg'],
    description: 'Low single bed with rounded edges and an optional pull-out trundle.',
    story: 'Every edge on this bed is radiused to 8 mm. A toddler falling against a sharp arris is the single most common furniture injury we hear about.',
    specs: { Dimensions: '75 × 38 × 24 in', Timber: 'Solid ash', Edges: 'Fully radiused', Height: 'Low, easy to climb into', Trundle: 'Optional pull-out', Finish: 'Water-based, zero VOC', Lead: '4 weeks' },
  },
  {
    slug: 'khel-play-table', name: 'Khel Play Table & Chairs', category: 'kids', art: 'playtable',
    price: 46000, featured: true, wood: 'mango', photos: ['/kids/wall-desk-chair.jpg'],
    description: 'Play table with two chairs, sized for three to seven year olds.',
    story: 'The height is 20 inches, not the 24 most sellers use. We measured our own children before we drew it, and a table too tall is a table they stop using.',
    specs: { Dimensions: 'Table 32 × 22 × 20 in', Chairs: 'Two, 12 in seat height', 'Age range': '3 – 7 years', Timber: 'Solid mango', Finish: 'Water-based, zero VOC', Lead: '3 weeks' },
  },
  {
    slug: 'sandooq-toy-chest', name: 'Sandooq Toy Chest', category: 'kids', art: 'toybox',
    price: 38000, wood: 'deodar', photos: ['/kids/toy-chest-room.jpg'],
    description: 'Deep toy chest with a soft-close lid and ventilation slots.',
    story: 'The soft-close hinge is not a luxury here. A heavy lid dropping on small fingers is exactly the accident this piece is designed around, and the ventilation slots exist for the same reason.',
    specs: { Dimensions: '36 × 18 × 20 in', Timber: 'Solid deodar', Lid: 'Soft-close, finger-safe', Ventilation: 'Slotted, both ends', Finish: 'Water-based, zero VOC', Lead: '3 weeks' },
  },
  {
    slug: 'parhai-study-desk', name: 'Parhai Study Desk', category: 'kids', art: 'desk',
    price: 62000, wood: 'ash', photos: ['/kids/study-desk-chair.jpg'],
    description: 'Child\u2019s desk with an adjustable top and a book gallery at the back.',
    story: 'The top adjusts through three heights, so it follows a child from about six years to the end of school rather than being replaced twice.',
    specs: { Dimensions: '42 × 24 × 26–30 in', Timber: 'Solid ash', Adjustment: 'Three heights', Gallery: 'Book shelf at rear', Finish: 'Water-based, zero VOC', Lead: '4 weeks' },
  },
  {
    slug: 'almari-kids-wardrobe', name: 'Nanhi Almari', category: 'kids', art: 'wardrobe',
    price: 138000, wood: 'deodar', photos: ['/kids/house-wardrobe.jpg'],
    description: 'Child-height wardrobe with a low hanging rail they can reach themselves.',
    story: 'The rail sits at 38 inches instead of 60. A child who can hang their own uniform will, and that is worth more than the extra storage you lose.',
    specs: { Dimensions: '48 × 22 × 60 in', Timber: 'Deodar with solid frame', Rail: 'Low, child height', Anchoring: 'Wall anchor kit included', Finish: 'Water-based, zero VOC', Lead: '5 weeks' },
  },
  {
    slug: 'ghar-bunk-house', name: 'Ghar Bunk House', category: 'kids', art: 'bunk', wood: 'ash',
    photos: ['/kids/bunk-house-barn-doors.jpg'], featured: true,
    description: 'A two-storey bunk built as a little house, with sliding barn doors, window boxes and a stair of drawers.',
    story: 'Children do not want a bed, they want a place. The top bunk has its own doors to slide shut, and every stair is a drawer for toys.',
    specs: { Dimensions: '80 × 44 × 84 in', Timber: 'Solid ash, painted', Doors: 'Sliding barn doors, top bunk', Stairs: 'Storage drawers in every step', 'Weight rating': '120 kg upper bunk', Finish: 'Water-based, zero VOC', Lead: '8 weeks' },
  },
  {
    slug: 'billi-bunk-bed', name: 'Billi Bunk with Stair Drawers', category: 'kids', art: 'bunk', wood: 'ash',
    photos: ['/kids/bunk-stair-drawers.jpg'],
    description: 'Loft bed over a daybed, with cut-out circle rails, padded cat headboards and drawers in every stair.',
    story: 'The lower bed pulls double duty as a sofa in the day. The stair drawers hold more than a toy chest and are never in the way.',
    specs: { Dimensions: '82 × 44 × 72 in', Timber: 'Solid ash and painted ply', Stairs: 'Five storage drawers', Headboards: 'Padded, removable covers', 'Under bed': 'Two roll-out drawers', Finish: 'Water-based, zero VOC', Lead: '8 weeks' },
  },
  {
    slug: 'khel-loft-slide', name: 'Khel Loft with Slide', category: 'kids', art: 'bunk', wood: 'ash',
    photos: ['/kids/loft-slide-climb.jpg'],
    description: 'A play loft with arched openings, a climbing ramp on one side and a slide down the other.',
    story: 'Built for a family whose children had nowhere to run in a flat. The loft is a den, the ramp is the way up, and the slide is the only way they want to come down.',
    specs: { Dimensions: 'Built to the room', Timber: 'Ash veneer, solid frame', Includes: 'Loft, climbing ramp, slide, steps', Holds: 'Screw-fixed climbing grips', Finish: 'Water-based, zero VOC', Lead: '10 weeks' },
  },
  {
    slug: 'machaan-play-loft', name: 'Machaan Play Loft', category: 'kids', art: 'shelf', wood: 'ash',
    photos: ['/kids/play-loft-ladder.jpg'],
    description: 'A raised platform with a slatted rail and a ladder of solid treads, and a quiet play den underneath.',
    story: 'Uses the height of the room instead of its floor. Up top is a bed or a reading nest, below is a den with the ceiling at a child’s height.',
    specs: { Dimensions: 'Built to the room', Timber: 'Solid ash', Ladder: 'Solid treads, wall-fixed', Rail: 'Slatted, 36 in high', Finish: 'Water-based, zero VOC', Lead: '9 weeks' },
  },
  {
    slug: 'chhat-loft-bed', name: 'Chhat Loft Bed', category: 'kids', art: 'bunk', wood: 'ash',
    photos: ['/kids/house-loft-bed.jpg'],
    description: 'A full-width loft with a little house on top and a lit window, over a soft floor bed below.',
    story: 'Two places to sleep, one for nights and one for sleepovers. The lit window in the house doubles as a night light.',
    specs: { Dimensions: 'Built to the room', Timber: 'Ash veneer, solid frame', Ladder: 'Leaning, hook-fixed', Lighting: 'Night light in the house window', Finish: 'Water-based, zero VOC', Lead: '9 weeks' },
  },
  {
    slug: 'bagh-study-bedroom', name: 'Bagh Study Bedroom', category: 'kids', art: 'desk', wood: 'ash',
    photos: ['/kids/study-bedroom-sage.jpg'],
    description: 'Single storage bed, a long study desk with sage drawers, and open shelves and cabinets above.',
    story: 'Planned for a child moving from toys to homework. The shelves start low for picture books and climb with them as the books get thicker.',
    specs: { Includes: 'Bed, desk, side table, wall shelves', Bed: 'Single, with storage', Timber: 'Ash with painted fronts', Colour: 'Any shade for the fronts', Finish: 'Water-based, zero VOC', Lead: '8 weeks' },
  },
  {
    slug: 'bawarchi-play-kitchen', name: 'Chhota Bawarchi Play Kitchen', category: 'kids', art: 'playtable', wood: 'mango',
    photos: ['/kids/play-kitchen.jpg'],
    description: 'A child-height play kitchen with a sink, hob, oven door and a shelf for little pots.',
    story: 'Every child copies what happens in the real kitchen. This one is sturdy enough to be leaned on and low enough for a three-year-old.',
    specs: { Dimensions: '28 × 12 × 34 in', 'Age range': '2 – 6 years', Timber: 'Solid mango, painted', Details: 'Sink, hob, oven, shelf', Finish: 'Water-based, zero VOC', Lead: '3 weeks' },
  },
  {
    slug: 'kitab-reading-shelf', name: 'Kitab Reading Shelf', category: 'kids', art: 'shelf', wood: 'deodar',
    photos: ['/kids/pine-reading-shelf.jpg'],
    description: 'A long, low bookshelf under a sloping ceiling, so a reading corner fits where nothing else will.',
    story: 'Low enough for a child to choose their own book, and long enough to hold a whole childhood of them.',
    specs: { Dimensions: '72 × 12 × 30 in, or to your wall', Timber: 'Solid deodar', Shelves: 'Two fixed, solid', Finish: 'Water-based, zero VOC', Lead: '3 weeks' },
  },
  {
    slug: 'ghora-rocking-horse', name: 'Ghora Rocking Horse', category: 'kids', art: 'toybox', wood: 'mango',
    photos: ['/kids/rocking-horse.jpg'],
    description: 'A solid wood rocking horse with a painted head and a wide, stable base.',
    story: 'The rockers are long and the base is wide, so it rocks but will not tip, however hard it is ridden.',
    specs: { Dimensions: '36 × 14 × 24 in', 'Age range': '1 – 5 years', Timber: 'Solid mango', Paint: 'Toy-safe, zero VOC', Lead: '3 weeks' },
  },
  {
    slug: 'jungle-gym-frame', name: 'Jungle Gym Climbing Frame', category: 'kids', art: 'playtable', wood: 'ash',
    photos: ['/kids/climbing-frame-slide.jpg'],
    description: 'An indoor climbing frame with ladders on every side, a slide and a basketball hoop.',
    story: 'For the months when it is too hot to play outside. Every rung is solid ash, and the frame fixes to the wall so it never moves.',
    specs: { Dimensions: '60 × 48 × 84 in', Timber: 'Solid ash', Includes: 'Ladders, slide, hoop', Anchoring: 'Wall-fixed', 'Age range': '3 – 10 years', Finish: 'Water-based, zero VOC', Lead: '5 weeks' },
  },
  {
    slug: 'zafran-straight-kitchen', name: 'Zafran Straight Kitchen', category: 'kitchen', art: 'kitchen', wood: 'walnut',
    photos: ['/kitchen/straight-taupe-fluted.jpg'], featured: true,
    description: 'One-wall kitchen in taupe and cream, with a fluted walnut hood cabinet, brass pulls and lit open shelves.',
    story: 'Everything on one wall, so a narrow kitchen still feels open. The light under the wall cabinets is where you actually chop, not on the ceiling.',
    specs: { Layout: 'Straight, one wall', Fronts: 'Matte lacquer, fluted walnut veneer', Worktop: 'Quartz', Lighting: 'LED under cabinets and plinth', Hardware: 'Brass bar pulls, soft-close', Lead: '6 weeks' },
  },
  {
    slug: 'dastarkhwan-l-kitchen', name: 'Dastarkhwan L-Shape Kitchen', category: 'kitchen', art: 'kitchen', wood: 'walnut',
    photos: ['/kitchen/l-shape-walnut-gloss.jpg'],
    description: 'Walnut-grain base drawers with handle-less pulls, gloss cream wall cabinets and a black granite top.',
    story: 'Wide drawers instead of doors below the counter, so pots and pans come out to you rather than you kneeling to find them.',
    specs: { Layout: 'L-shape', Fronts: 'Walnut veneer base, gloss lacquer wall', Worktop: 'Black granite', Drawers: 'Full-extension, 30 kg rated', Lighting: 'LED under cabinets and plinth', Lead: '7 weeks' },
  },
  {
    slug: 'mehmaan-peninsula-kitchen', name: 'Mehmaan Peninsula Kitchen', category: 'kitchen', art: 'kitchen', wood: 'walnut',
    photos: ['/kitchen/peninsula-marble-walnut.jpg'], featured: true,
    description: 'Marble waterfall peninsula over fluted walnut, lit display niches and a tall larder beside the fridge.',
    story: 'The peninsula is where guests stand while you cook. It gives the counter space of an island without needing the floor space for one.',
    specs: { Layout: 'U-shape with peninsula', Fronts: 'Matte lacquer, walnut veneer, fluted panel', Worktop: 'Marble-look quartz, waterfall edge', Includes: 'Glass display units, tall larder', Lighting: 'Pendants, LED niches and plinth', Lead: '9 weeks' },
  },
  {
    slug: 'saleti-l-kitchen', name: 'Saleti L-Shape Kitchen', category: 'kitchen', art: 'kitchen', wood: 'ash',
    photos: ['/kitchen/l-shape-grey-gloss.jpg'],
    description: 'Grey high-gloss cabinets with black bar handles, a black granite top and a built-in hob and hood.',
    story: 'Gloss fronts wipe clean of steam and tadka in one pass, which is why they suit a kitchen that cooks every day.',
    specs: { Layout: 'L-shape', Fronts: 'High-gloss acrylic', Worktop: 'Black granite', Carcass: 'Moisture-resistant board, edge-sealed', Hardware: 'Black bar handles, soft-close', Lead: '6 weeks' },
  },
  {
    slug: 'koyla-shaker-kitchen', name: 'Koyla Shaker Kitchen', category: 'kitchen', art: 'kitchen', wood: 'ash',
    photos: ['/kitchen/u-shape-charcoal-shaker.jpg'],
    description: 'Charcoal shaker doors around three walls, with open ash shelves either side of the window.',
    story: 'Shaker doors are the one style that has not dated in a hundred years. The open shelves keep everyday cups within reach.',
    specs: { Layout: 'U-shape', Fronts: 'Painted shaker, solid ash frame', Worktop: 'Marble-look quartz', Shelves: 'Open, solid ash', Hardware: 'Brushed nickel pulls', Lead: '8 weeks' },
  },
  {
    slug: 'chai-counter-kitchen', name: 'Chai Counter Kitchen', category: 'kitchen', art: 'kitchen', wood: 'ash',
    photos: ['/kitchen/butcher-block-counter.jpg'],
    description: 'Raised-panel cabinets in warm taupe and a solid wood breakfast counter with room for three stools.',
    story: 'A counter you can sit at for morning chai while someone cooks. The solid top can be sanded back and re-oiled whenever it needs it.',
    specs: { Layout: 'L-shape with breakfast counter', Fronts: 'Painted raised panel', Worktop: 'Solid ash butcher block, oiled', Seating: 'Counter for 3 stools', Lead: '7 weeks' },
  },
  {
    slug: 'safaid-l-kitchen', name: 'Safaid L-Shape Kitchen', category: 'kitchen', art: 'kitchen', wood: 'ash',
    photos: ['/kitchen/l-shape-white-glass.jpg'],
    description: 'White cabinets with smoked glass panels, long steel handles and a marble splashback that runs full height.',
    story: 'White makes a small kitchen look bigger. The smoked glass breaks up the wall cabinets so they do not feel like a solid block overhead.',
    specs: { Layout: 'L-shape', Fronts: 'White lacquer with smoked glass inserts', Worktop: 'Quartz', Splashback: 'Marble-look porcelain, full height', Hardware: 'Long steel handles, soft-close', Lead: '6 weeks' },
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
