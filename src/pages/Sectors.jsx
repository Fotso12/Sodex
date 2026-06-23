import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sectors } from '../data/sectors';
import AnimatedSection from '../components/AnimatedSection';
import './Sectors.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Sectors() {
  const [activeSector, setActiveSector] = useState(null);

  return (
    <div className="sectors-page">
      <AnimatedSection className="sectors-hero" variant="fadeIn">
        <div className="container">
          <span className="section-tag"><i className="fas fa-cogs"></i> Notre expertise</span>
          <h1 className="sectors-page-title">Secteurs <span className="highlight">d'activité</span></h1>
          <p className="sectors-page-subtitle">
            Découvrez comment notre expertise en travaux sur cordes répond aux défis
            uniques de chaque secteur d'activité.
        </p>
        </div>
      </AnimatedSection>

      <div className="container">
        <motion.div
          className="sectors-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              className={`sector-card-large ${index % 2 === 0 ? 'sector-row' : 'sector-row-reverse'}`}
              variants={itemVariants}
              onMouseEnter={() => setActiveSector(sector.id)}
              onMouseLeave={() => setActiveSector(null)}
            >
              <div className="sector-card-visual" style={{ background: sector.gradient }}>
                <div className={`sector-visual-animation ${sector.animation}`}>
                  <i className={`${sector.icon} sector-visual-icon`}></i>
                </div>
              </div>

              <div className="sector-card-info">
                <h2 className="sector-card-name" style={{ color: sector.color }}>
                  {sector.title}
                </h2>
                <p className="sector-card-subtitle">{sector.subtitle}</p>
                <p className="sector-card-description">{sector.description}</p>

                <div className="sector-card-missions-list">
                  <h4><i className="fas fa-list-check"></i> Nos prestations :</h4>
                  <ul>
                    {sector.missions.map((mission, i) => (
                      <li key={i}>
                        <span className="mission-bullet" style={{ background: sector.color }}></span>
                        {mission}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={`/secteurs/${sector.id}`} className="sector-detail-btn" style={{ background: sector.color }}>
                  Voir en détail <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
