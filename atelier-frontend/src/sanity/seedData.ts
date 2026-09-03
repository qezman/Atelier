import type { Project } from '@/types/project';
import type { StudioMember } from '@/types/studioMember';

// Single source of truth for fallback editorial content
// Ensures site functions gracefully before Sanity credentials are provided.

export const FALLBACK_PROJECTS: Project[] = [
  {
    _id: 'project-komorebi-house',
    title: 'Komorebi House',
    slug: { current: 'komorebi-house' },
    category: 'Residential',
    location: 'Kyoto, Japan',
    year: 2024,
    coverImage: {
      alt: 'Board-formed concrete pavilion with floor-to-ceiling glass framing a traditional Kyoto moss garden at dusk',
      asset: {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
      },
    },
    gallery: [
      {
        alt: 'Interior living volume featuring low-slung hinoki wood furnishings and soft diffused tatami lighting',
        asset: {
          url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
        },
      },
      {
        alt: 'Architectural junction where exposed aggregate concrete meets precision-milled cedar rafters',
        asset: {
          url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        },
      },
      {
        alt: 'Linear stone pathway leading through cedar forest to the sheltered northern tea terrace',
        asset: {
          url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
        },
      },
    ],
    summary:
      "A private sanctuary crafted from board-formed concrete, weathered cedar, and deep architectural shadows, built in reverence to Kyoto's shifting seasons.",
    body: [
      {
        _key: 'p1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 't1',
            _type: 'span',
            text: "Nestled into the quiet wooded foothills of northern Kyoto, Komorebi House was conceived as a meditation on the Japanese concept of dappled sunlight filtering through tree canopies. Rather than imposing an alien geometry onto the slope, the residence steps down across three terraced volumes, each calibrated to frame specific botanical vignettes.",
          },
        ],
      },
      {
        _key: 'p2',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 't2',
            _type: 'span',
            text: 'The structural skeleton employs board-formed concrete tinted with local river silt, producing an earthy tone that patinas gracefully with moisture. Deep overhanging eaves crafted from charred yakisugi cedar protect the interior from summer sun while allowing low winter light to penetrate deep into the living spaces.',
          },
        ],
      },
      {
        _key: 'p3',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 't3',
            _type: 'span',
            text: 'Inside, boundaries dissolve through pocketed shoji screens and uninterrupted limestone floors that flow from hearth to exterior reflection pool. Every joint and shadow gap speaks to the tactile dialogue between traditional Japanese joinery and contemporary minimalist engineering.',
          },
        ],
      },
    ],
    featured: true,
    orderRank: 1,
  },
  {
    _id: 'project-ochre-pavilion',
    title: 'The Ochre Pavilion',
    slug: { current: 'ochre-pavilion' },
    category: 'Residential',
    location: 'Alentejo, Portugal',
    year: 2023,
    coverImage: {
      alt: 'Rammed-earth monolithic courtyard home surrounded by ancient olive trees under the intense Iberian sun',
      asset: {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
      },
    },
    gallery: [
      {
        alt: 'Sunken courtyard basin carved from local terracotta-tinted lime plaster with gentle water reflections',
        asset: {
          url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
        },
      },
      {
        alt: 'Deep recessed portal with raw timber pivoting door opening into a high-ceilinged cooling corridor',
        asset: {
          url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
        },
      },
    ],
    summary:
      'Monolithic rammed-earth walls rise from the dry Alentejo plains, offering deep thermal refuge, shadowed courtyards, and silent horizons.',
    body: [
      {
        _key: 'p1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 't1',
            _type: 'span',
            text: 'Rising from the golden plains of southern Portugal, The Ochre Pavilion embraces the harsh, radiant climate of the Alentejo through massive monolithic construction. Utilizing earth excavated directly from the building footprint, 500mm-thick rammed earth walls establish an immense thermal flywheel that regulates indoor temperatures without mechanical cooling.',
          },
        ],
      },
    ],
    featured: true,
    orderRank: 2,
  },
  {
    _id: 'project-atelier-saint-germain',
    title: 'Atelier Saint-Germain',
    slug: { current: 'atelier-saint-germain' },
    category: 'Interior',
    location: 'Paris, France',
    year: 2024,
    coverImage: {
      alt: 'Grand Haussmannian salon restoration featuring restored cornicing, fluted limestone hearth, and warm travertine floor',
      asset: {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
      },
    },
    gallery: [
      {
        alt: 'Custom bronze library shelving with integrated concealed lighting against muted chalk plaster walls',
        asset: {
          url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
        },
      },
      {
        alt: 'Dining enclave centered around a monolithic honed Calacatta Viola marble table and tailored linen seating',
        asset: {
          url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
        },
      },
    ],
    summary:
      'A 19th-century Left Bank apartment stripped back to its historic bones and re-imagined with sculptural stone, blackened steel, and natural linen.',
    body: [
      {
        _key: 'p1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 't1',
            _type: 'span',
            text: 'Located in an 1880s Haussmann building on Boulevard Saint-Germain, this comprehensive interior intervention strips away decades of accumulated partitions to rediscover the noble proportions of the original bourgeois apartment.',
          },
        ],
      },
    ],
    featured: true,
    orderRank: 3,
  },
  {
    _id: 'project-maison-blanche',
    title: 'Maison Blanche',
    slug: { current: 'maison-blanche' },
    category: 'Commercial',
    location: 'Basel, Switzerland',
    year: 2023,
    coverImage: {
      alt: 'Minimalist white concrete cultural pavilion with rhythmic geometric openings and crisp alpine shadows',
      asset: {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
      },
    },
    gallery: [
      {
        alt: 'Double-height central gallery illuminated by rhythmic sawtooth skylights and polished terrazzo floor',
        asset: {
          url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
        },
      },
      {
        alt: 'Sculptural spiral staircase in cast white concrete ascending toward a circular skylight oculus',
        asset: {
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
        },
      },
    ],
    summary:
      'An austere contemporary art foundation where white aggregate concrete, shadow gaps, and indirect northern light form a serene backdrop for sculpture.',
    body: [
      {
        _key: 'p1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 't1',
            _type: 'span',
            text: 'Maison Blanche is a private foundation building designed to exhibit contemporary sculpture alongside the Rhine river in Basel. The building envelope is poured from custom white Portland cement with marble dust aggregate.',
          },
        ],
      },
    ],
    featured: true,
    orderRank: 4,
  },
  {
    _id: 'project-casa-mirador',
    title: 'Casa Mirador',
    slug: { current: 'casa-mirador' },
    category: 'Residential',
    location: 'Mallorca, Spain',
    year: 2022,
    coverImage: {
      alt: 'Dry-stacked sandstone cliffside residence with stepped terraces overlooking the Balearic Sea',
      asset: {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
      },
    },
    gallery: [
      {
        alt: 'Shaded colonnade pergola made from peeled eucalyptus trunks casting long linear shadows on terracotta pavers',
        asset: {
          url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
        },
      },
    ],
    summary:
      'Perched on the rugged cliffs of Deià, Casa Mirador is an organic stone retreat carved into coastal topography with panoramic ocean vistas.',
    featured: false,
    orderRank: 5,
  },
  {
    _id: 'project-vessel-void',
    title: 'Vessel & Void',
    slug: { current: 'vessel-void' },
    category: 'Interior',
    location: 'Milan, Italy',
    year: 2024,
    coverImage: {
      alt: 'Minimalist interior featuring blackened bronze cabinetry, raw plaster walls, and sculptural oak furnishings',
      asset: {
        url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=85',
      },
    },
    summary:
      'An industrial loft in Milan transformed into a tactile residential laboratory through dark bronze, textured gypsum, and smoked oak.',
    featured: false,
    orderRank: 6,
  },
  {
    _id: 'project-nordic-light',
    title: 'Nordic Light Pavilion',
    slug: { current: 'nordic-light' },
    category: 'Commercial',
    location: 'Oslo, Norway',
    year: 2023,
    coverImage: {
      alt: 'Mass timber pavilion with soaring glass curtain wall set against a winter pine forest near Oslo',
      asset: {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85',
      },
    },
    summary:
      'A mass timber research pavilion celebrating Scandinavian forestry craftsmanship, low carbon design, and crystalline natural light.',
    featured: false,
    orderRank: 7,
  },
  {
    _id: 'project-fjord-retreat',
    title: 'Fjord Retreat',
    slug: { current: 'fjord-retreat' },
    category: 'Landscape',
    location: 'Bergen, Norway',
    year: 2022,
    coverImage: {
      alt: 'Low-slung blackened timber cabin embedded into granite shoreline overlooking a tranquil Norwegian fjord',
      asset: {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=85',
      },
    },
    summary:
      'A landscape and architectural intervention along the western Norwegian fjords, connecting upland trails to shoreline bathing terraces.',
    featured: false,
    orderRank: 8,
  },
];

export const FALLBACK_MEMBERS: StudioMember[] = [
  {
    _id: 'member-elena-vance',
    name: 'Elena Vance',
    role: 'Founding Partner & Principal',
    photo: {
      alt: 'Portrait of Elena Vance, architect and founding partner of Atelier Studio, in natural daylight',
      asset: {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
      },
    },
    bio: 'Elena founded Atelier in 2014 following a decade practicing in Basel and Tokyo. Her work investigates the emotional resonance of raw materials and tectonic restraint.',
    orderRank: 1,
  },
  {
    _id: 'member-julian-thorne',
    name: 'Julian Thorne',
    role: 'Partner, Interior Architecture',
    photo: {
      alt: 'Portrait of Julian Thorne, partner of interior architecture, in his studio workshop',
      asset: {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
      },
    },
    bio: "Julian directs Atelier's interior practice, bringing a craftsman's precision to bespoke joinery, custom stone carving, and tactile atmospheric lighting.",
    orderRank: 2,
  },
  {
    _id: 'member-sofia-lin',
    name: 'Sofia Lin',
    role: 'Design Director, Landscape',
    photo: {
      alt: 'Portrait of Sofia Lin, design director of landscape architecture, overlooking botanical grounds',
      asset: {
        url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
      },
    },
    bio: 'Sofia integrates native ecological systems with built form, shaping terrains that blur the boundary between indoor sanctuary and surrounding wilderness.',
    orderRank: 3,
  },
  {
    _id: 'member-marcus-weber',
    name: 'Marcus Weber',
    role: 'Technical Director',
    photo: {
      alt: 'Portrait of Marcus Weber, technical director, reviewing architectural blueprints',
      asset: {
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
      },
    },
    bio: 'Marcus oversees structural engineering, passive building science, and construction detailing, ensuring rigorous execution from envelope to joint.',
    orderRank: 4,
  },
];
