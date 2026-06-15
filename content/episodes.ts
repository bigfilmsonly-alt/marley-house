export interface Episode {
  slug: string;
  num: string;
  title: string;
  description: string;
  duration: string;
  tier: 'free' | 'inner_circle';
  image: string;
  learnings: string[];
}

export const episodes: Episode[] = [
  {
    slug: 'blue-mountain',
    num: '01',
    title: 'From Blue Mountain to Global Impact',
    description:
      'Rohan Marley traces Marley Coffee from a single hillside in Jamaica to shelves on six continents. Learn how he built a vertically integrated supply chain, earned Fairtrade certification, and turned an origin story into a global consumer brand — without sacrificing quality or heritage.',
    duration: '42 min',
    tier: 'free',
    image: '/lion-order/field-sunset.jpg',
    learnings: [
      'Build a vertically integrated supply chain from farm to shelf',
      'Earn certifications that reinforce brand authenticity',
      'Scale an origin story into a global consumer brand',
      'Protect quality at every stage of growth',
    ],
  },
  {
    slug: 'cannabis-playbook',
    num: '02',
    title: "The Cannabis Entrepreneur's Playbook",
    description:
      'Navigate the legal cannabis landscape with Rohan as your guide. From regulatory hurdles and licensing to luxury positioning and the Lion Order brand, this episode is the blueprint for building a cannabis company rooted in culture, compliance, and craft.',
    duration: '38 min',
    tier: 'inner_circle',
    image: '/lion-order/crest-gold.jpg',
    learnings: [
      'Navigate cannabis licensing and regulatory frameworks',
      'Position a cannabis brand in the luxury tier',
      'Build cultivation partnerships that prioritize craft',
      'Advocate for equity in an industry shaped by prohibition',
    ],
  },
  {
    slug: 'family-business',
    num: '03',
    title: 'Multi-Generational Family Business',
    description:
      'The Marley name is both a gift and a weight. Rohan reveals how the family governs brand decisions, resolves disagreements at the table, and builds infrastructure that lets each generation find its own lane while preserving collective equity.',
    duration: '45 min',
    tier: 'inner_circle',
    image: '/lion-order/community-table.jpg',
    learnings: [
      'Structure governance for a multi-generational family enterprise',
      'Balance individual ambition with collective brand equity',
      'Resolve family business conflicts without breaking trust',
      'Prepare the next generation to lead on their own terms',
    ],
  },
  {
    slug: 'hospitality',
    num: '04',
    title: 'Hospitality as Heritage',
    description:
      'Ro Marley Beach House is not a hotel — it is an invitation into the culture. Rohan breaks down how he designed a hospitality experience that feels like home, why immersive detail matters more than star ratings, and the economics of boutique hospitality.',
    duration: '36 min',
    tier: 'inner_circle',
    image: '/lion-order/rainforest.jpg',
    learnings: [
      'Design a hospitality experience rooted in cultural identity',
      'Differentiate through atmosphere and narrative, not amenities',
      'Manage boutique property economics and seasonal cash flow',
      'Turn guests into long-term brand ambassadors',
    ],
  },
  {
    slug: 'storytelling',
    num: '05',
    title: 'Storytelling as Business Strategy',
    description:
      'Rohan argues that narrative is the most powerful tool in brand building — more valuable than any ad spend. Learn how he crafts brand stories that transcend products, create cultural movements, and give customers a reason to stay loyal for decades.',
    duration: '40 min',
    tier: 'inner_circle',
    image: '/lion-order/heritage.jpg',
    learnings: [
      'Craft a brand narrative that outlasts any single product',
      'Use storytelling to create cultural movements, not campaigns',
      'Identify the authentic origin story inside your business',
      'Turn your founder journey into a competitive moat',
    ],
  },
  {
    slug: 'athlete-to-entrepreneur',
    num: '06',
    title: 'From Athlete to Entrepreneur',
    description:
      'Rohan played linebacker at the University of Miami during one of the program\'s most dominant eras. He draws direct lines from the football field to the boardroom — discipline, preparation, absorbing hits, and building a second act that surpasses the first.',
    duration: '35 min',
    tier: 'inner_circle',
    image: '/lion-order/rohan-portrait.jpg',
    learnings: [
      'Transfer athletic discipline to entrepreneurial execution',
      'Build a meaningful second act after a competitive career',
      'Apply game-film analysis to business strategy and pivots',
      'Develop the mental resilience required to build from scratch',
    ],
  },
  {
    slug: 'rastafari-principles',
    num: '07',
    title: 'Rastafari Business Principles',
    description:
      'Rastafari is not a marketing angle — it is the operating system. Rohan explains how Ital living informs sourcing, how collective uplift shapes partnerships, and why One Love Economics is a serious framework for building businesses that serve people and planet.',
    duration: '44 min',
    tier: 'inner_circle',
    image: '/lion-order/rastafari-principles.jpg',
    learnings: [
      'Apply Rastafari principles of Ital living to ethical sourcing',
      'Build partnerships rooted in collective uplift, not extraction',
      'Integrate spiritual values into commercial decision-making',
      'Understand One Love Economics as a business framework',
    ],
  },
  {
    slug: 'revenue-streams',
    num: '08',
    title: 'Building Revenue Streams',
    description:
      'Coffee, cannabis, hospitality, media, music — the Marley portfolio is deliberately diversified. Rohan walks through the architecture of a multi-vertical empire, explains how each brand creates synergy with the others, and shares the playbook for turning one name into multiple income streams.',
    duration: '48 min',
    tier: 'inner_circle',
    image: '/lion-order/culture.jpg',
    learnings: [
      'Architect a diversified portfolio across multiple industries',
      'Create synergy between brands without diluting any single one',
      'Know when to launch a new vertical and when to deepen an existing one',
      'Build a holding structure that protects family equity long-term',
    ],
  },
];

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find((ep) => ep.slug === slug);
}

export function getAllEpisodeSlugs(): { episode: string }[] {
  return episodes.map((ep) => ({ episode: ep.slug }));
}
