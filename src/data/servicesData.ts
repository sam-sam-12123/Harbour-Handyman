import { HandymanService } from '../types';

export const SERVICES_DATA: HandymanService[] = [
  {
    id: 'flyscreens',
    title: 'Flyscreen & Security Screen Repairs',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    category: 'repairs',
    categoryLabel: 'Repairs & Screen Maintenance',
    iconName: 'Grid',
    typicalTime: '45 mins – 2 hours',
    priceGuide: 'From $45 per window / $85 per door',
    popular: true,
    seniorFavorite: true,
    commonTasks: [
      'Lorem ipsum dolor sit amet consectetur',
      'Adipiscing elit sed do eiusmod tempor',
      'Incididunt ut labore et dolore magna',
      'Ut enim ad minim veniam quis nostrud',
      'Duis aute irure dolor in reprehenderit'
    ],
    materialsUsed: ['Lorem ipsum dolor', 'Consectetur adipiscing', 'Integer nec odio', 'Duis sagittis'],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tv-mounting',
    title: 'TV Wall Mounting & Cable Management',
    shortDesc: 'Vestibulum lacinia arcu eget nulla class aptent taciti sociosqu ad litora torquent per conubia nostra himenaeos.',
    fullDesc: 'Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.',
    category: 'installations',
    categoryLabel: 'Installations & Mounting',
    iconName: 'Tv',
    typicalTime: '1 – 2 hours',
    priceGuide: 'From $120 (bracket supplied or provided)',
    popular: true,
    commonTasks: [
      'Pellentesque nibh aenean quam in scelerisque',
      'Maecenas mattis sed convallis tristique',
      'Proin ut ligula vel nunc egestas porttitor',
      'Morbi lectus risus iaculis vel suscipit',
      'Fusce nec tellus sed augue semper porta'
    ],
    materialsUsed: ['Standard bracket fittings', 'Solid wall anchors', 'Heavy toggle bolts', 'Cable conduits'],
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'grab-rails',
    title: 'Bathroom Grab Rails & Aged Care Safety',
    shortDesc: 'Curabitur sodales ligula in libero sed dignissim lacinia nunc curabitur tortor pellentesque nibh aenean quam.',
    fullDesc: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc.',
    category: 'agedcare',
    categoryLabel: 'Aged Care & NDIS Modifications',
    iconName: 'ShieldCheck',
    typicalTime: '1 – 3 hours',
    priceGuide: 'From $95 (NDIS compliant)',
    popular: true,
    ndisApproved: true,
    seniorFavorite: true,
    commonTasks: [
      'Lorem ipsum grab rail mounting',
      'Consectetur safety threshold adjustments',
      'Adipiscing elit shower seat installation',
      'Sed do eiusmod step safety enhancements',
      'Tempor incididunt lever tap fittings'
    ],
    materialsUsed: ['32mm Stainless Steel', 'Knurled textured grips', 'Structural anchors', 'Sanitary silicone'],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'shower-screens',
    title: 'Shower Screens, Seals & Silicone Restorations',
    shortDesc: 'Duis sagittis ipsum praesent mauris fusce nec tellus sed augue semper porta mauris massa vestibulum lacinia.',
    fullDesc: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    category: 'bathroom',
    categoryLabel: 'Bathrooms & Showers',
    iconName: 'Droplets',
    typicalTime: '1 – 2.5 hours',
    priceGuide: 'From $110',
    seniorFavorite: true,
    commonTasks: [
      'Lorem ipsum bottom sweep replacement',
      'Mould resistant silicone re-beading',
      'Door alignment and roller replacement',
      'Tile grout checking and maintenance',
      'Vanity splashback silicone resealing'
    ],
    materialsUsed: ['Anti-fungal silicone', 'Silicone sweeps', 'Brass & stainless hardware'],
    imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'door-repairs',
    title: 'Door Replacements, Locks & Adjustments',
    shortDesc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas proin pharetra.',
    fullDesc: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus.',
    category: 'repairs',
    categoryLabel: 'Doors & Locks',
    iconName: 'DoorOpen',
    typicalTime: '1 – 3 hours',
    priceGuide: 'From $85 adjustment / $175 door hang',
    popular: true,
    commonTasks: [
      'Lorem ipsum door planing & alignment',
      'Locksets, latches & handle fitting',
      'Hinges replacement and reinforcement',
      'Sliding cavity door track maintenance',
      'Weather seal & draft protection'
    ],
    materialsUsed: ['Solid brass hinges', 'Door hardware sets', 'Neoprene weather seals'],
    imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'plastering',
    title: 'Plastering, Gyprock & Hole Patching',
    shortDesc: 'Aenean nec lorem in porttitor donec laoreet nonummy augue suspendisse dui purus scelerisque at vulputate vitae.',
    fullDesc: 'Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
    category: 'repairs',
    categoryLabel: 'Plastering & Drywall',
    iconName: 'Layers',
    typicalTime: '1.5 – 3 hours',
    priceGuide: 'From $110 per patch',
    popular: true,
    commonTasks: [
      'Impact and doorknob hole patching',
      'Ceiling cutout and plaster repair',
      'Joint taping and basecoat compound',
      'Smooth finish feather sanding',
      'Spot undercoat primer preparation'
    ],
    materialsUsed: ['Plasterboard', 'Basecoat compound', 'Topcoat compound', 'Fiberglass joint tape'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tiling-plumbing',
    title: 'Basic Tiling, Grouting & Minor Plumbing',
    shortDesc: 'Mauris eget neque at sem venenatis eleifend ut nonummy fusce aliquet pede non pede phasellus adipiscing lorem.',
    fullDesc: 'Mauris eget neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede. Phasellus adipiscing semper elit. Proin fermentum massa ac quam. Sed diam turpis, molestie vitae, placerat a, molestie nec.',
    category: 'bathroom',
    categoryLabel: 'Plumbing & Tiling Maintenance',
    iconName: 'Wrench',
    typicalTime: '1 – 2 hours',
    priceGuide: 'From $90',
    seniorFavorite: true,
    commonTasks: [
      'Tap washer replacement and reseating',
      'Ceramic quarter-turn tap upgrade',
      'Cistern inlet and outlet valve service',
      'Tile re-gluing and fresh grouting',
      'Appliance water line connection'
    ],
    materialsUsed: ['Tap valves', 'Cistern repair kits', 'Polymer grout'],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'deck-repairs',
    title: 'Timber Deck Repairs, Sanding & Oiling',
    shortDesc: 'Sed diam turpis molestie vitae placerat a molestie nec leo vestibulum ante ipsum primis in faucibus orci luctus.',
    fullDesc: 'Sed diam turpis, molestie vitae, placerat a, molestie nec, leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu.',
    category: 'outdoor',
    categoryLabel: 'Outdoor & Decks',
    iconName: 'Hammer',
    typicalTime: 'Half day – 2 days',
    priceGuide: 'From $190 minor / $35 sqm stain',
    popular: true,
    commonTasks: [
      'Board replacement and securing',
      'Screw replacement and countersinking',
      'High-pressure wash and timber clean',
      'Balustrade and handrail tightening',
      'Protective deck oil application'
    ],
    materialsUsed: ['Stainless steel deck screws', 'Quality decking oil', 'Treated hardwood & pine'],
    imageUrl: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rental-repairs',
    title: 'Commercial & Rental Property Maintenance',
    shortDesc: 'Duis arcu tortor suscipit eget imperdiet nec imperdiet iaculis ipsum sed aliquam ultrices mauris integer ante arcu.',
    fullDesc: 'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper.',
    category: 'commercial',
    categoryLabel: 'Commercial & Real Estate',
    iconName: 'Building2',
    typicalTime: '24-48h scheduling',
    priceGuide: 'Itemised quotes / Hourly rates',
    commonTasks: [
      'End-of-lease repair checklists',
      'Wall defect patching and touch-up',
      'Fixtures and dispenser mounting',
      'Furniture assembly and installations',
      'Fast turnaround maintenance'
    ],
    materialsUsed: ['Commercial fixtures', 'Heavy-duty wall anchors', 'Touch-up materials'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  }
];

