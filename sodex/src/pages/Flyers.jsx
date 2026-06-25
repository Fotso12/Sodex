import { motion } from 'framer-motion';
import { sectors, companyInfo } from '../data/sectors';
import AnimatedSection from '../components/AnimatedSection';
import './Flyers.css';

const flyers = [
  {
    id: 'O&G-NDT',
    title: 'Secteur Oil & Gaz',
    subtitle: 'Inspection et maintenance',
    icon: 'fas fa-oil-well',
    color: '#7c3aed',
    description: 'Flyer détaillant nos prestations dans le secteur pétrolier et gazier : inspection, maintenance et contrôles non destructifs.',
    file: '/flyers/OG-NDT.pdf',
    size: '4.1 MB',
  },
  {
    id: 'Batiment',
    title: 'Secteur Bâtiment',
    subtitle: 'Travaux en hauteur',
    icon: 'fas fa-building',
    color: '#8b5cf6',
    description: 'Nos solutions pour le secteur du bâtiment : façades, toitures, étanchéité et rénovation.',
    file: '/flyers/Batiment.pdf',
    size: '2.0 MB',
  },
  {
    id: 'Agro',
    title: 'Secteur Agro-industrie',
    subtitle: 'Solutions agricoles et industrielles',
    icon: 'fas fa-tractor',
    color: '#6d28d9',
    description: 'Flyer présentant nos interventions dans le secteur agro-industriel et agricole.',
    file: '/flyers/Agro.pdf',
    size: '8.1 MB',
  },
  {
    id: 'Barrage',
    title: 'Secteur Barrages',
    subtitle: 'Infrastructures hydrauliques',
    icon: 'fas fa-water',
    color: '#a78bfa',
    description: 'Nos compétences pour l\'inspection et la maintenance des barrages et infrastructures hydrauliques.',
    file: '/flyers/Barrage.pdf',
    size: '3.8 MB',
  },
  {
    id: 'Chantier_Naval_Portuaire',
    title: 'Chantier Naval & Portuaire',
    subtitle: 'Maintenance navale et portuaire',
    icon: 'fas fa-ship',
    color: '#5b21b6',
    description: 'Flyer dédié à nos services pour les chantiers navals et les infrastructures portuaires.',
    file: '/flyers/Chantier_Naval_Portuaire.pdf',
    size: '2.5 MB',
  },
  ...sectors.filter(s => s.id !== 'oil-gas' && s.id !== 'batiments').map(s => ({
    id: `secteur-${s.id}`,
    title: `Secteur ${s.title}`,
    subtitle: s.subtitle,
    icon: s.icon,
    color: s.color,
    description: `Flyer détaillant nos prestations dans le secteur ${s.title} : services, réalisations et références.`,
    file: null,
    size: 'À venir',
  })),
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Flyers() {
  const handleDownload = (flyer) => {
    if (!flyer.file) {
      alert('Ce flyer sera bientôt disponible. Contactez-nous pour le recevoir directement.');
      return;
    }
    const link = document.createElement('a');
    link.href = flyer.file;
    link.download = `Sodex_${flyer.title.replace(/\s+/g, '_')}.pdf`;
    link.click();
  };

  return (
    <div className="flyers-page">
      <AnimatedSection className="flyers-hero" variant="fadeIn">
        <div className="container">
          <span className="section-tag"><i className="fas fa-download"></i> Documentation</span>
          <h1 className="flyers-page-title">Télécharger nos <span className="highlight">flyers</span></h1>
          <p className="flyers-page-subtitle">
            Téléchargez nos brochures et flyers pour découvrir toute l'étendue de notre expertise.
          </p>
        </div>
      </AnimatedSection>

      <div className="container">
        <motion.div
          className="flyers-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {flyers.map((flyer) => (
            <motion.div
              key={flyer.id}
              className="flyer-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="flyer-card-visual" style={{ background: `linear-gradient(135deg, ${flyer.color}, ${flyer.color}dd)` }}>
                <i className={`${flyer.icon} flyer-card-icon`}></i>
              </div>
              <div className="flyer-card-info">
                <h3 className="flyer-card-title">{flyer.title}</h3>
                <p className="flyer-card-subtitle">{flyer.subtitle}</p>
                <p className="flyer-card-desc">{flyer.description}</p>
                <div className="flyer-card-footer">
                  <span className="flyer-card-size">
                    <i className="fas fa-file-pdf"></i> {flyer.size}
                  </span>
                  <button
                    className={`flyer-download-btn ${!flyer.file ? 'disabled' : ''}`}
                    onClick={() => handleDownload(flyer)}
                  >
                    <i className="fas fa-download"></i>
                    {flyer.file ? 'Télécharger' : 'Bientôt'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection className="flyers-info" variant="fadeInUp" delay={0.3}>
          <div className="flyers-info-content">
            <h3><i className="fas fa-question-circle"></i> Vous ne trouvez pas ce que vous cherchez ?</h3>
            <p>
              Contactez-nous directement pour recevoir une documentation personnalisée
              adaptée à vos besoins spécifiques.
            </p>
            <a href={`mailto:${companyInfo.email}`} className="flyers-contact-btn">
              <i className="fas fa-envelope"></i> Nous contacter
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
