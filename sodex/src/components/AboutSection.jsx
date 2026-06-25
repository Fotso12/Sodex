import { companyInfo } from '../data/sectors';
import AnimatedSection from './AnimatedSection';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <AnimatedSection className="about-image-wrapper" variant="fadeInLeft">
            <div className="about-image-placeholder">
              <div className="about-icon-large">
                <i className="fas fa-mountain" style={{ fontSize: 80 }}></i>
              </div>
              <div className="about-years-badge">
                <span className="years-number">15+</span>
                <span className="years-text">Années<br/>d'expertise</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="about-content" variant="fadeInRight" delay={0.2}>
            <span className="section-tag"><i className="fas fa-info-circle"></i> À propos</span>
            <h2 className="section-title">Bienvenue chez <span className="highlight">Sodex</span></h2>
            <p className="about-text">{companyInfo.about}</p>
            <div className="about-values">
              <div className="value-item">
                <i className="fas fa-shield-alt value-icon"></i>
                <h4>Sécurité</h4>
                <p>Normes les plus strictes</p>
              </div>
              <div className="value-item">
                <i className="fas fa-bolt value-icon"></i>
                <h4>Efficacité</h4>
                <p>Solutions rapides et économiques</p>
              </div>
              <div className="value-item">
                <i className="fas fa-bullseye value-icon"></i>
                <h4>Précision</h4>
                <p>Expertise certifiée</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
