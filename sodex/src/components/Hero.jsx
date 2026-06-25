import { Link } from 'react-router-dom';
import { companyInfo } from '../data/sectors';
import './Hero.css';

export default function Hero() {
  const youtubeId = 'Xs8ipeQIZQU';

  return (
    <section className="hero-section" id="hero">
      <div className="hero-video-wrapper">
        <div className="hero-youtube-bg">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&enablejsapi=1&modestbranding=1`}
            title="Rope Access Background"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-hard-hat"></i> Travaux en hauteur & accès difficile
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">SODEX</span>
          <span className="hero-title-sub">{companyInfo.slogan}</span>
        </h1>

        <p className="hero-description">
          Expert en travaux sur cordes, nous intervenons
          sur tous types de structures pour garantir sécurité et excellence.
        </p>

        <div className="hero-actions">
          <Link to="/secteurs" className="btn-primary">
            <i className="fas fa-eye"></i> Nos secteurs d'activité
          </Link>
          <Link to="/devis" className="btn-secondary">
            <i className="fas fa-file-invoice"></i> Demander un devis
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Années d'expérience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Projets réalisés</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Satisfaction client</span>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
