export const company = {
  name: 'DOOKE WORKS',
  slogan: "L'excellence technique et industrielle",
  email: 'contact@dookecorporation.com',
  phones: [
    { country: 'France', number: '(+33) 1 74 57 62 00' },
    { country: "Côte d'Ivoire", number: '(+225) 21 36 10 37' },
    { country: 'Cameroun', number: '(+237) 243 85 95 94' },
    { country: 'Sénégal', number: '(+221) 33 82 96 415' },
  ],
  linkedin: 'https://linkedin.com/in/dooke-works-5a94b213b/',
  founded: 2015,
};

export const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Présentation', href: '/presentation' },
  { label: 'Le Groupe', href: '/groupe' },
  { label: 'Nos réalisations', href: '/references' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Contact', href: '/contact' },
];

export const carouselSlides = [
  {
    title: 'Bâtiment & Travaux Publics',
    subtitle: 'Expertise en génie civil et construction',
    gradient: 'from-gray-900 via-gray-800 to-gray-900',
  },
  {
    title: 'Solutions Industrielles',
    subtitle: 'Interventions et maintenance sur sites industriels',
    gradient: 'from-gray-900 via-amber-900 to-gray-900',
  },
  {
    title: 'Infrastructures Télécoms',
    subtitle: 'Installation et maintenance d\'infrastructures',
    gradient: 'from-gray-900 via-blue-900 to-gray-900',
  },
  {
    title: 'Sécurité & Conformité',
    subtitle: 'Protection des personnes et des biens',
    gradient: 'from-gray-900 via-green-900 to-gray-900',
  },
];

export const presentation = {
  title: 'Bienvenue à Dooke Works',
  paragraphs: [
    "Dooke Works est la division technique et industrielle du groupe Dooke Corporation. Spécialisée dans le bâtiment, les travaux publics, l'industrie, les télécommunications et la sécurité, nous intervenons sur l'ensemble des projets d'envergure en Afrique et en Europe.",
    'Notre équipe est composée de techniciens et ingénieurs expérimentés, engagés à fournir des prestations de haute qualité dans le respect des normes de sécurité les plus strictes.',
  ],
};

export const activities = [
  { title: 'Bâtiment & Travaux Publics', description: 'Génie civil, construction d\'infrastructures, routes, ponts et bâtiments.', icon: 'fa-building' },
  { title: 'Industrie', description: 'Maintenance industrielle, installation d\'équipements et suivi de production.', icon: 'fa-industry' },
  { title: 'Télécommunications', description: 'Déploiement de réseaux, installation d\'antennes et maintenance d\'infrastructures télécoms.', icon: 'fa-signal' },
  { title: 'Mise en sécurité', description: 'Systèmes de sécurité, protection incendie, conformité et audit sécurité.', icon: 'fa-shield' },
];

export const groupe = {
  title: 'Le Groupe Dooke Works',
  paragraphs: [
    'Dooke Works incarne l\'excellence technique et industrielle au sein du groupe Dooke Corporation. Nous intervenons dans les métiers du bâtiment, de l\'industrie et des télécommunications avec un savoir-faire reconnu.',
    'Notre force réside dans notre capacité à mobiliser des équipes techniques pluridisciplinaires pour répondre aux défis les plus complexes, tout en maintenant un niveau d\'exigence irréprochable en matière de qualité, de sécurité et de respect de l\'environnement.',
  ],
};

export const values = [
  { icon: 'fa-cogs', title: 'Technique', desc: 'Maîtrise des métiers techniques et industriels avec un haut niveau d\'exigence.' },
  { icon: 'fa-hard-hat', title: 'Expertise', desc: 'Compétences pointues dans le BTP, l\'industrie et les télécommunications.' },
  { icon: 'fa-shield', title: 'Sécurité', desc: 'Normes de sécurité strictes appliquées sur tous nos chantiers.' },
  { icon: 'fa-leaf', title: 'Environnement', desc: 'Engagement pour le respect de l\'environnement et le développement durable.' },
  { icon: 'fa-trophy', title: 'Qualité', desc: 'Démarche qualité rigoureuse pour des prestations haut de gamme.' },
  { icon: 'fa-handshake', title: 'Confiance', desc: 'Relations durables avec nos partenaires et clients basées sur la confiance.' },
];

export const clients = [
  'Bolloré', 'Orange', 'TotalEnergies', 'Nestlé', 'Siemens',
  'Sonatel', 'Canal+', 'MTN', 'Schneider', 'Lafarge',
  'Bouygues', 'CFAO', 'Air France', 'BIC', 'Samsung',
];

export const projectData: Record<string, {
  title: string;
  description: string;
  details: string[];
  images: string[];
}> = {
  'batiment-travaux-publics': {
    title: 'Bâtiment & Travaux Publics',
    description: 'Génie civil, construction d\'infrastructures, routes, ponts et bâtiments.',
    details: [
      'Plus de 50 projets de construction réalisés en Afrique et en Europe.',
      'Expertise en fondations, structures béton armé et charpentes métalliques.',
      'Maîtrise des normes de construction internationales (ISO, Eurocodes).',
      'Équipes pluridisciplinaires : ingénieurs, chefs de chantier, techniciens.',
    ],
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d81bb1c1e9e2?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1590674899484-d5640d0f7b6c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=500&fit=crop',
    ],
  },
  industrie: {
    title: 'Industrie',
    description: 'Maintenance industrielle, installation d\'équipements et suivi de production.',
    details: [
      'Interventions sur sites industriels : usines, entrepôts, plateformes.',
      'Installation et maintenance de machines et équipements de production.',
      'Diagnostic technique et optimisation des processus industriels.',
      'Respect strict des normes HSE (Hygiène, Sécurité, Environnement).',
    ],
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1563770551467-0ea5f7e5b4b2?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1565615835840-2baace1e2f2c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1620662732149-e6d5b30d58e3?w=800&h=500&fit=crop',
    ],
  },
  telecommunications: {
    title: 'Télécommunications',
    description: 'Déploiement de réseaux, installation d\'antennes et maintenance d\'infrastructures télécoms.',
    details: [
      'Déploiement de réseaux fibre optique et cuivre pour les opérateurs.',
      'Installation et maintenance de sites d\'antennes relais (4G, 5G).',
      'Gestion de projets d\'infrastructures télécoms clé en main.',
      'Interventions chez les principaux opérateurs africains.',
    ],
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551817958-8b209d6e8df3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1508829040597-5725f2c8d9f6?w=800&h=500&fit=crop',
    ],
  },
  'mise-en-securite': {
    title: 'Mise en sécurité',
    description: 'Systèmes de sécurité, protection incendie, conformité et audit sécurité.',
    details: [
      'Audit et diagnostic sécurité des bâtiments et installations industrielles.',
      'Installation de systèmes de détection incendie et d\'extinction automatique.',
      'Mise en conformité réglementaire et certification des équipements.',
      'Formation des équipes à la sécurité et aux gestes de premiers secours.',
    ],
    images: [
      'https://images.unsplash.com/photo-1586339949916-3e5f20c7f2b5?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1552267776-bfda5ed476e3?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1503945433747-fe51271497c7?w=800&h=500&fit=crop',
    ],
  },
};
