import { companyInfo } from '../data/sectors';
import AnimatedSection from './AnimatedSection';
import './PhoneCTA.css';

export default function PhoneCTA() {
  return (
    <section className="phone-cta-section">
      <div className="container">
        <AnimatedSection className="phone-cta-content" variant="scaleIn">
          <div className="phone-cta-text">
            <h2><i className="fas fa-phone-alt"></i> Pour plus de détails contactez nous dès à présent !</h2>
            <p>Notre équipe est disponible pour répondre à toutes vos questions</p>
          </div>
          <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="phone-cta-btn">
            <i className="fas fa-phone-alt phone-icon"></i>
            <span className="phone-number">{companyInfo.phone}</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
