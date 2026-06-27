export const company = {
  name: 'DOOKE CORPORATION',
  slogan: "L'excellence multisectorielle",
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
  {
    label: 'Nos activités',
    dropdown: [
      { label: 'Dooke Works', href: 'https://dooke-works.vercel.app' },
      { label: 'Dooke Consulting', href: 'https://dooke-consulting.vercel.app/' },
    ],
  },
  { label: 'Nos références', href: '/references' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Contact', href: '/contact' },
];

export const carouselSlides = [
  {
    title: 'DOOKE CORPORATION',
    subtitle: "L'excellence multisectorielle",
    description: 'BTP & Construction — Infrastructure',
    gradient: 'from-amber-950/40 via-neutral-900 to-neutral-950',
  },
  {
    title: 'DOOKE CORPORATION',
    subtitle: "L'excellence multisectorielle",
    description: 'Industrie & Maintenance — Production',
    gradient: 'from-orange-950/40 via-neutral-900 to-neutral-950',
  },
  {
    title: 'DOOKE CORPORATION',
    subtitle: "L'excellence multisectorielle",
    description: 'Télécoms & Réseaux — Connectivité',
    gradient: 'from-blue-950/40 via-neutral-900 to-neutral-950',
  },
  {
    title: 'DOOKE CORPORATION',
    subtitle: "L'excellence multisectorielle",
    description: 'Sécurité & Sûreté — Protection',
    gradient: 'from-emerald-950/40 via-neutral-900 to-neutral-950',
  },
];

export const presentation = {
  title: 'Bienvenue à Dooke Corporation',
  paragraphs: [
    "DOOKE CORPORATION a été créée en 2015 d'une part pour répondre au besoin de professionnels multisectoriels dans un monde sans cesse en mouvement, et d'autre part pour être à la hauteur des défis des prochaines décennies, en apportant des solutions plus sûres, plus crédibles et surtout plus précises sur le continent qui abritera le quart de la population mondiale d'ici 2050.",
    "En effet, la population africaine, qui compte actuellement 1,2 milliard d'habitants, doublera d'ici le milieu du siècle et atteindra 4,2 milliards d'ici 2100, selon l'Unicef. Cette croissance démographique entraînera une surpopulation encore plus forte, et d'ici la fin des années 2030 la plupart des Africains vivront dans des villes.",
    "DOOKE CORPORATION s'inscrit dans cette vision futuriste d'un continent qui se déplace, et compte apporter sa pierre à la construction de l'Afrique. C'est aussi pour cette raison qu'elle s'est entourée des experts et des partenaires socio-économiques venant d'Europe, des États Unis d'Amérique et bien évidemment d'Afrique.",
    'Nous sommes aujourd\'hui présents dans 3 pays :\n\n• En Côte d\'Ivoire pour l\'Afrique de l\'Ouest\n• Au Cameroun pour l\'Afrique centrale\n• En France pour l\'Europe centrale',
  ],
};

export const activities = {
  title: 'Nos activités',
  paragraphs: [
    'Contribuer à l\'essor du continent africain en apportant des solutions innovantes et durables dans les domaines techniques et numériques.',
    'Notre ambition est de devenir une Holding de référence composée de deux divisions complémentaires : Dooke Works pour les activités techniques et industrielles, et Dooke Consulting pour les services numériques.',
  ],
};

export const dookeWorksActivities = [
  { title: 'Bâtiment & Travaux Publics', description: 'Génie civil, construction et infrastructure.', icon: 'fa-building' },
  { title: 'Industrie', description: 'Interventions sur sites industriels et maintenance.', icon: 'fa-industry' },
  { title: 'Télécommunications', description: 'Installation et maintenance d\'infrastructures télécoms.', icon: 'fa-signal' },
  { title: 'Mise en sécurité', description: 'Sécurité des personnes et des biens.', icon: 'fa-shield' },
];

export const dookeConsultingActivities = [
  { title: 'Développement logiciel', description: 'Planification et exécution de projets de bout en bout.', icon: 'fa-code' },
  { title: 'Développement Web', description: 'Design, développement et déploiement de sites web.', icon: 'fa-globe' },
  { title: 'Développement mobile', description: 'Applications pour smartphones et tablettes.', icon: 'fa-mobile' },
  { title: 'Maintenance applicative', description: 'TMA : évolution et maintenance d\'applications.', icon: 'fa-cogs' },
];

export const groupe = {
  title: 'Le Groupe',
  paragraphs: [
    'Dooke Corporation se distingue par l\'exceptionnelle diversité de ses compétences : technique, technologie et ingénierie.',
    'Nous mettons un point d\'honneur à offrir des prestations haut de gamme, en relevant des défis techniques complexes tout en respectant strictement l\'environnement, les normes de sécurité et de qualité.',
  ],
  highlights: ['Technique', 'Technologie', 'Ingénierie'],
};

export const clients = [
  'Bolloré', 'Orange', 'TotalEnergies', 'Nestlé', 'Air France',
  'Sonatel', 'Canal+', 'MTN', 'Samsung', 'Siemens',
  'Schneider', 'BIC', 'Lafarge', 'CFAO', 'Bouygues',
];
