import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { sectors } from '../data/sectors';
import AnimatedSection from '../components/AnimatedSection';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SectorDetail.css';

export default function SectorDetail() {
  const { sectorId } = useParams();
  const sector = sectors.find(s => s.id === sectorId);

  if (!sector) {
    return (
      <div className="sector-not-found">
        <h1>Secteur non trouvé</h1>
        <Link to="/secteurs">Voir tous les secteurs</Link>
      </div>
    );
  }

  const prevSector = sectors[(sectors.indexOf(sector) - 1 + sectors.length) % sectors.length];
  const nextSector = sectors[(sectors.indexOf(sector) + 1) % sectors.length];

  const imageBase = `/images/sectors/${sector.folder}/`;

  return (
    <div className="sector-detail-page">
      <div className="sector-detail-hero" style={{ background: sector.gradient }}>
        <div className="container">
          <Link to="/secteurs" className="sector-back-link"><i className="fas fa-arrow-left"></i> Retour aux secteurs</Link>
          <motion.div
            className="sector-detail-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <i className={`${sector.icon} sector-detail-icon`}></i>
            <div>
              <h1 className="sector-detail-title">{sector.title}</h1>
              <p className="sector-detail-subtitle">{sector.subtitle}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="sector-detail-content">
          <motion.div
            className="sector-detail-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2><i className="fas fa-info-circle"></i> À propos de ce secteur</h2>
            <p>{sector.description}</p>
          </motion.div>

          <motion.div
            className="sector-detail-carousel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="detail-swiper"
            >
              {sector.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="detail-slide"
                    style={{
                      backgroundImage: `url(${imageBase}${img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="detail-slide-overlay"></div>
                    <div className="detail-slide-content">
                      <h3>{sector.title}</h3>
                      <p>Projet {index + 1} - Travaux en hauteur</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div
            className="sector-detail-missions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2><i className="fas fa-clipboard-list"></i> Nos prestations</h2>
            <div className="missions-grid">
              {sector.missions.map((mission, i) => (
                <div key={i} className="mission-card" style={{ borderLeft: `4px solid ${sector.color}` }}>
                  <span className="mission-number">0{i + 1}</span>
                  <p>{mission}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <AnimatedSection className="sector-detail-cta" variant="scaleIn" delay={0.3}>
            <div className="sector-cta-content" style={{ background: sector.gradient }}>
              <h3>Vous avez un projet dans le secteur {sector.title} ?</h3>
              <p>Contactez-nous pour une solution sur mesure</p>
              <Link to="/devis" className="sector-cta-btn">
                <i className="fas fa-file-invoice"></i> Demander un devis
              </Link>
            </div>
          </AnimatedSection>

          <div className="sector-nav-links">
            <Link to={`/secteurs/${prevSector.id}`} className="sector-nav-link prev">
              <i className="fas fa-chevron-left nav-arrow"></i>
              <span className="nav-text">
                <small>Secteur précédent</small>
                <strong>{prevSector.title}</strong>
              </span>
            </Link>
            <Link to={`/secteurs/${nextSector.id}`} className="sector-nav-link next">
              <span className="nav-text">
                <small>Secteur suivant</small>
                <strong>{nextSector.title}</strong>
              </span>
              <i className="fas fa-chevron-right nav-arrow"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
