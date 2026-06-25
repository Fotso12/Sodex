import { trustedCompanies } from '../data/sectors';
import AnimatedSection from './AnimatedSection';
import './TrustedCompanies.css';

export default function TrustedCompanies() {
  return (
    <section className="trusted-section">
      <div className="container">
        <AnimatedSection className="trusted-header" variant="fadeInUp">
          <span className="section-tag"><i className="fas fa-handshake"></i> Ils nous font confiance</span>
          <h2 className="section-title">Nos <span className="highlight">partenaires</span></h2>
        </AnimatedSection>
      </div>
      <AnimatedSection variant="fadeIn" delay={0.2}>
        <div className="trusted-scroll">
          <div className="trusted-track">
            {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
              <div key={index} className="trusted-logo-item">
                {company.logo ? (
                  <div className="trusted-logo-img-wrapper">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="trusted-logo-img"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="trusted-logo-placeholder">
                    <span className="trusted-logo-text">{company.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
