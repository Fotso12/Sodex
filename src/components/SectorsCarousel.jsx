import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { sectors } from '../data/sectors';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import AnimatedSection from './AnimatedSection';
import './SectorsCarousel.css';

export default function SectorsCarousel() {
  return (
    <section className="sectors-carousel-section" id="secteurs">
      <div className="container">
        <AnimatedSection className="sectors-header" variant="fadeInUp">
          <span className="section-tag"><i className="fas fa-cogs"></i> Notre expertise</span>
          <h2 className="section-title">
            Nos secteurs <span className="highlight">d'activité</span>
          </h2>
          <p className="section-subtitle">
            Chez Sodex, notre polyvalence et notre expertise en travaux sur cordes
            nous permettent d'intervenir dans une multitude de secteurs.
            Nous apportons des solutions agiles et sécurisées aux projets les plus exigeants.
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection className="carousel-wrapper" variant="scaleIn" delay={0.2}>
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          spaceBetween={24}
          slidesPerView={1}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1.5,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, coverflowEffect: { depth: 60, modifier: 1.2 } },
            968: { slidesPerView: 3, coverflowEffect: { depth: 80, modifier: 1.5 } },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="sectors-swiper"
        >
          {sectors.map((sector) => {
            const imgSrc = sector.images?.length > 0
              ? `/images/sectors/${sector.folder}/${sector.images[0]}`
              : null;

            return (
              <SwiperSlide key={sector.id}>
                <Link to={`/secteurs/${sector.id}`} className="sector-slide-link">
                  <div
                    className="sector-slide-card"
                    style={{
                      backgroundImage: imgSrc
                        ? `url(${imgSrc})`
                        : sector.gradient,
                    }}
                  >
                    <div className="sector-slide-overlay" style={{ background: `linear-gradient(to top, ${sector.color}ee, ${sector.color}44 60%, transparent)` }}></div>
                    <div className="sector-slide-content">
                      <div className="sector-slide-icon-wrapper">
                        <i className={`${sector.icon} sector-slide-icon`}></i>
                      </div>
                      <h3 className="sector-slide-title">{sector.title}</h3>
                      <div className="sector-slide-missions">
                        {sector.missions.slice(0, 2).map((m, i) => (
                          <span key={i} className="sector-slide-tag">
                            <i className="fas fa-check-circle"></i> {m}
                          </span>
                        ))}
                      </div>
                      <span className="sector-slide-btn">
                        En savoir plus <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </AnimatedSection>
    </section>
  );
}
