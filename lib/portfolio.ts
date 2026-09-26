export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  scope: string;
  brief: string;
  outcome: string;
  pieces: string[];
  woods: string[];
  duration: string;
  art: import('./products').ArtKey;
}

export const projects: Project[] = [
  {
    slug: 'clifton-apartment', title: 'A whole apartment in eleven weeks',
    location: 'Clifton Block 4, Karachi', year: 2025,
    scope: 'Complete interior — living, dining, two bedrooms, study',
    brief: 'A family returning from Dubai handed us an empty 2,400 sq ft apartment and a shipping date. Everything had to be in place before they landed.',
    outcome: 'Delivered three days early. Twenty-two pieces, all built in our workshop, installed over a single weekend so the family walked into a finished home.',
    pieces: ['Kashmir Sofa', 'Sahn Dining Table', 'Six Mehrab Chairs', 'Two Sukoon Beds', 'Rivaaj Desk'],
    woods: ['Walnut', 'Ash'],
    duration: '11 weeks',
    art: 'sofa',
  },
  {
    slug: 'dha-master-bedroom', title: 'A bedroom built around a window',
    location: 'DHA Phase VI, Karachi', year: 2025,
    scope: 'Master bedroom — bed, wardrobe wall, seating',
    brief: 'The room had a beautiful corner window and a wardrobe that blocked half of it. The client wanted storage without losing the light.',
    outcome: 'We moved all storage to the opposite wall as a single 14-foot run, floor to ceiling, and put a low bench under the window. Storage went up by a third and the window is now the first thing you see.',
    pieces: ['Sukoon Bed', 'Fourteen-foot wardrobe run', 'Window bench', 'Two side tables'],
    woods: ['Walnut', 'Deodar'],
    duration: '8 weeks',
    art: 'bed',
  },
  {
    slug: 'kids-room-twins', title: 'One room, two children, no arguments',
    location: 'Bahria Town, Karachi', year: 2026,
    scope: 'Shared children\u2019s room — bunk, desks, storage',
    brief: 'Twin boys, one 11 by 13 room, and a mother who wanted each of them to have somewhere that was theirs.',
    outcome: 'A bunk along the short wall freed the whole floor. Two identical desks face the window, each with its own drawer tower, and the toy storage doubles as a step to the upper bunk.',
    pieces: ['Chhoti Bunk Bed', 'Two Parhai Desks', 'Sandooq Toy Chest', 'Step storage'],
    woods: ['Ash', 'Deodar'],
    duration: '6 weeks',
    art: 'bunk',
  },
  {
    slug: 'law-office', title: 'A law office that had to look older than it was',
    location: 'Shahrah-e-Faisal, Karachi', year: 2024,
    scope: 'Reception, partner office, conference room',
    brief: 'A new practice of three partners wanted the room to say the firm had been there for decades.',
    outcome: 'Dark walnut throughout, a ten-seat conference table in one book-matched slab, and bookcases running the full height of the partner office. Clients now assume the firm is older than it is, which was the point.',
    pieces: ['Ten-seat conference table', 'Reception desk', 'Four Zaat bookcases', 'Partner desk'],
    woods: ['Walnut'],
    duration: '9 weeks',
    art: 'desk',
  },
  {
    slug: 'corporate-gifts', title: 'Two hundred gifts, one deadline',
    location: 'Corporate client, Karachi', year: 2025,
    scope: 'Bulk gift order with engraved branding',
    brief: 'A bank needed two hundred year-end client gifts, engraved, boxed and delivered in five weeks.',
    outcome: 'Two hundred Qalam desk sets, each engraved with the client name rather than just the bank logo. Delivered in four weeks and repeated the following year.',
    pieces: ['200 × Qalam Desk Set', 'Custom presentation boxes'],
    woods: ['Walnut'],
    duration: '4 weeks',
    art: 'pen',
  },
  {
    slug: 'heritage-dining', title: 'Rebuilding a table that could not be replaced',
    location: 'PECHS, Karachi', year: 2024,
    scope: 'Restoration and matching extension',
    brief: 'A 1950s family dining table, cracked through the centre, that the client refused to part with.',
    outcome: 'We stabilised the crack with butterfly keys in contrasting walnut rather than hiding it, then built six new chairs to match the original two that survived. The repair is visible on purpose.',
    pieces: ['Table restoration', 'Six matched chairs'],
    woods: ['Sheesham', 'Walnut'],
    duration: '7 weeks',
    art: 'table',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
