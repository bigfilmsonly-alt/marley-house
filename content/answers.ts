export interface Answer {
  slug: string;
  question: string;
  answer: string;
  topic: 'rohan-marley' | 'marley-coffee' | 'lion-order' | 'yg-marley' | 'beach-house' | 'business' | 'family';
  relatedSlugs: string[];
}

export const answers: Answer[] = [
  {
    slug: 'who-is-rohan-marley',
    question: 'Who is Rohan Marley?',
    answer:
      'Rohan Marley is a Jamaican-American entrepreneur, son of Bob Marley and Janet Hunt, born May 19, 1972. He played football at the University of Miami before founding Marley Coffee, Lion Order cannabis, RoMarley Beach House, and The Marley Group — building a family enterprise rooted in heritage, craft, and legacy.',
    topic: 'rohan-marley',
    relatedSlugs: ['who-is-bob-marleys-son-rohan', 'what-is-the-marley-group', 'how-many-children-does-rohan-marley-have'],
  },
  {
    slug: 'what-is-marley-coffee',
    question: 'What is Marley Coffee?',
    answer:
      'Marley Coffee is a single-origin, ethically sourced coffee brand founded by Rohan Marley in 2009. Fairtrade certified and grown in the Blue Mountains of Jamaica, it carries the Marley family legacy into every cup. Popular blends include One Love, Buffalo Soldier, and Simmer Down decaf.',
    topic: 'marley-coffee',
    relatedSlugs: ['what-is-jamaican-blue-mountain-coffee', 'how-did-rohan-marley-start-marley-coffee', 'who-is-rohan-marley'],
  },
  {
    slug: 'what-is-lion-order',
    question: 'What is Lion Order?',
    answer:
      'Lion Order is a Rastafari-rooted luxury cannabis brand founded by Rohan Marley. It blends traditional herb culture with modern craft, offering premium flower, pre-rolls, and edibles. The brand also extends into manga storytelling and cultural media, making it a lifestyle movement beyond cannabis.',
    topic: 'lion-order',
    relatedSlugs: ['is-lion-order-cannabis-legal', 'what-is-king-clementine-strain', 'who-is-rohan-marley'],
  },
  {
    slug: 'who-is-yg-marley',
    question: 'Who is YG Marley?',
    answer:
      'YG Marley is a rising reggae and hip-hop artist, the son of Lauryn Hill and Rohan Marley. His breakout single "Praise Jah in the Moonlight" went viral in 2024, introducing a new generation to the Marley musical lineage. He blends roots reggae, hip-hop, and contemporary R&B into his sound.',
    topic: 'yg-marley',
    relatedSlugs: ['what-is-praise-jah-in-the-moonlight', 'who-is-rohan-marley', 'how-many-children-does-rohan-marley-have'],
  },
  {
    slug: 'what-is-jamaican-blue-mountain-coffee',
    question: 'What is Jamaican Blue Mountain coffee?',
    answer:
      'Jamaican Blue Mountain coffee is one of the rarest and most sought-after coffees in the world, grown at elevations above 3,000 feet in Jamaica\'s Blue Mountain range. It is prized for its mild flavor, lack of bitterness, and smooth body. Marley Coffee sources its premium Blue Mountain beans directly from Jamaican farms.',
    topic: 'marley-coffee',
    relatedSlugs: ['what-is-marley-coffee', 'how-did-rohan-marley-start-marley-coffee', 'who-is-rohan-marley'],
  },
  {
    slug: 'where-is-romarley-beach-house',
    question: 'Where is RoMarley Beach House?',
    answer:
      'RoMarley Beach House is a boutique hospitality experience located on the northern coast of Jamaica. Founded by Rohan Marley, it offers intimate stays blending Jamaican culture, farm-to-table dining, and beach relaxation. The property reflects the Marley family ethos of community, nature, and elevated island living.',
    topic: 'beach-house',
    relatedSlugs: ['who-is-rohan-marley', 'what-is-the-marley-group', 'what-is-the-marley-masterclass'],
  },
  {
    slug: 'how-did-rohan-marley-start-marley-coffee',
    question: 'How did Rohan Marley start Marley Coffee?',
    answer:
      'Rohan Marley founded Marley Coffee in 2009 after visiting his family\'s farm in the Blue Mountains of Jamaica. Inspired by the land his father Bob Marley owned, Rohan turned a personal connection to Jamaican coffee farming into a global brand built on ethical sourcing, sustainability, and family heritage.',
    topic: 'marley-coffee',
    relatedSlugs: ['what-is-marley-coffee', 'what-is-jamaican-blue-mountain-coffee', 'what-is-one-love-economics'],
  },
  {
    slug: 'what-is-king-clementine-strain',
    question: 'What is the King Clementine strain?',
    answer:
      'King Clementine is Lion Order\'s signature cannabis strain, a citrus-forward hybrid known for its bright, uplifting effects and tropical terpene profile. Developed under Rohan Marley\'s direction, it embodies the Lion Order philosophy of conscious consumption — premium flower grown with intention and respect for the plant.',
    topic: 'lion-order',
    relatedSlugs: ['what-is-lion-order', 'is-lion-order-cannabis-legal', 'who-is-rohan-marley'],
  },
  {
    slug: 'how-many-children-does-rohan-marley-have',
    question: 'How many children does Rohan Marley have?',
    answer:
      'Rohan Marley has multiple children, including YG Marley (with Lauryn Hill), who became a breakout music star in 2024. Rohan is deeply committed to fatherhood and passing the Marley legacy to the next generation. Family is central to every business he builds, from coffee to cannabis to hospitality.',
    topic: 'family',
    relatedSlugs: ['who-is-rohan-marley', 'who-is-yg-marley', 'who-is-bob-marleys-son-rohan'],
  },
  {
    slug: 'what-is-the-marley-group',
    question: 'What is The Marley Group?',
    answer:
      'The Marley Group is the family holding company of Rohan Marley, uniting Marley Coffee, Lion Order cannabis, RoMarley Beach House hospitality, and ROOTS Media under one legacy-driven enterprise. Each brand operates with autonomy but shares a single philosophy: create with craft, serve with purpose, build for generations.',
    topic: 'business',
    relatedSlugs: ['who-is-rohan-marley', 'what-is-marley-coffee', 'what-is-lion-order'],
  },
  {
    slug: 'is-lion-order-cannabis-legal',
    question: 'Is Lion Order cannabis legal?',
    answer:
      'Lion Order cannabis products are sold only in states and jurisdictions where recreational or medical cannabis is legally permitted. Current markets include California, Florida, and New York. All Lion Order products are lab-tested, compliant with local regulations, and produced under licensed partnerships.',
    topic: 'lion-order',
    relatedSlugs: ['what-is-lion-order', 'what-is-king-clementine-strain', 'what-is-the-marley-group'],
  },
  {
    slug: 'what-is-praise-jah-in-the-moonlight',
    question: 'What is "Praise Jah in the Moonlight"?',
    answer:
      '"Praise Jah in the Moonlight" is the breakout single by YG Marley, released in 2024. The song blends roots reggae with contemporary production, carrying forward the Marley musical tradition. It went viral on social media, reaching Billboard charts and introducing a new generation to the Marley family sound.',
    topic: 'yg-marley',
    relatedSlugs: ['who-is-yg-marley', 'who-is-rohan-marley', 'how-many-children-does-rohan-marley-have'],
  },
  {
    slug: 'what-is-one-love-economics',
    question: 'What is One Love economics?',
    answer:
      'One Love economics is Rohan Marley\'s philosophy of building businesses that benefit communities, not just shareholders. Inspired by Bob Marley\'s message, it means ethical sourcing, fair wages, environmental stewardship, and reinvesting profits into the culture that created the brand. Every Marley venture operates on this principle.',
    topic: 'business',
    relatedSlugs: ['who-is-rohan-marley', 'what-is-the-marley-group', 'how-did-rohan-marley-start-marley-coffee'],
  },
  {
    slug: 'who-is-bob-marleys-son-rohan',
    question: 'Who is Bob Marley\'s son Rohan?',
    answer:
      'Rohan Marley is the son of legendary reggae icon Bob Marley and Janet Hunt. Born in Kingston, Jamaica on May 19, 1972, Rohan played college football at the University of Miami before becoming an entrepreneur. He founded Marley Coffee, Lion Order, and The Marley Group, carrying his father\'s legacy into business.',
    topic: 'rohan-marley',
    relatedSlugs: ['who-is-rohan-marley', 'what-is-the-marley-group', 'how-many-children-does-rohan-marley-have'],
  },
  {
    slug: 'what-is-the-marley-masterclass',
    question: 'What is the Marley Masterclass?',
    answer:
      'The Marley Masterclass is an 8-episode video series by Rohan Marley covering Blue Mountain coffee, the cannabis playbook, family business strategy, hospitality, storytelling, transitioning from athlete to entrepreneur, Rastafari principles, and building revenue streams. It is available exclusively through The Marley Group\'s Inner Circle.',
    topic: 'business',
    relatedSlugs: ['who-is-rohan-marley', 'what-is-the-marley-group', 'what-is-one-love-economics'],
  },
  {
    slug: 'what-is-marley-coffee-one-love-blend',
    question: 'What is Marley Coffee One Love blend?',
    answer:
      'Marley Coffee One Love is the brand\'s flagship medium-roast blend, offering a smooth, balanced cup with notes of chocolate and citrus. Ethically sourced and Fairtrade certified, it embodies the Marley family philosophy of unity and quality. One Love is available in whole bean, ground, and single-serve formats worldwide.',
    topic: 'marley-coffee',
    relatedSlugs: ['what-is-marley-coffee', 'what-is-jamaican-blue-mountain-coffee', 'how-did-rohan-marley-start-marley-coffee'],
  },
  {
    slug: 'what-is-romarley-beach-house-experience',
    question: 'What is the RoMarley Beach House experience?',
    answer:
      'The RoMarley Beach House experience is boutique hospitality curated by Rohan Marley on Jamaica\'s coast. Guests enjoy farm-to-table dining, cultural immersion, live music, and oceanfront relaxation. It blends luxury and authenticity, offering an intimate connection to Jamaican culture that goes far beyond a standard resort stay.',
    topic: 'beach-house',
    relatedSlugs: ['where-is-romarley-beach-house', 'who-is-rohan-marley', 'what-is-the-marley-group'],
  },
];

export function getAnswerBySlug(slug: string): Answer | undefined {
  return answers.find((a) => a.slug === slug);
}

export function getRelatedAnswers(slugs: string[]): Answer[] {
  return answers.filter((a) => slugs.includes(a.slug));
}

export function getAnswersByTopic(topic: Answer['topic']): Answer[] {
  return answers.filter((a) => a.topic === topic);
}
