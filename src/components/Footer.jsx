import { Link, useLocation } from 'react-router-dom';
import { sectors, companyInfo } from '../data/sectors';
import AnimatedSection from './AnimatedSection';
import './Footer.css';

export default function Footer() {
  const location = useLocation();

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <AnimatedSection className="footer-grid" variant="fadeInUp">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <rect width="40" height="40" rx="8" fill="#7c3aed" />
                <text x="20" y="26" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">S</text>
              </svg>
              <span className="footer-logo-text">SODEX</span>
            </div>
            <p className="footer-desc">
              Expert en travaux en hauteur et accès difficile. Solutions sécurisées
              et innovantes pour tous vos projets.
            </p>
            <div className="footer-contact-info">
              <div className="footer-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{companyInfo.address}, {companyInfo.city}</span>
              </div>
              <div className="footer-info-item">
                <i className="fas fa-phone"></i>
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a>
              </div>
              <div className="footer-info-item">
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <Link to="/" onClick={(e) => handleAnchorClick(e, '/')}>Accueil</Link>
            <Link to="/#about" onClick={(e) => handleAnchorClick(e, '/#about')}>À propos</Link>
            <Link to="/secteurs">Secteurs d'activités</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/flyers">Télécharger nos flyers</Link>
            <Link to="/devis">Demander un devis</Link>
          </div>

          <div className="footer-links">
            <h4>Secteurs</h4>
            {sectors.map((s) => (
              <Link key={s.id} to={`/secteurs/${s.id}`}>{s.title}</Link>
            ))}
          </div>
        </AnimatedSection>

        <div className="footer-bottom">
          <p>Copyright &copy; Sodex 2026. Tous droits réservés.</p>
          <p className="footer-legal">
            <i className="fas fa-helmet-safety"></i> Site conçu avec passion pour l'excellence et la sécurité.
          </p>
        </div>
      </div>
    </footer>
  );
}
