import { useState } from 'react';
import { companyInfo } from '../data/sectors';
import AnimatedSection from './AnimatedSection';
import './ContactFormSection.css';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    nom: '', prenom: '', object: '', email: '', pays: '',
    entreprise: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const requiredFields = ['nom', 'prenom', 'object', 'email', 'pays'];
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    requiredFields.forEach(field => {
      if (!formData[field].trim()) newErrors[field] = 'Ce champ est requis';
    });
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ nom: '', prenom: '', object: '', email: '', pays: '', entreprise: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact-form-section" id="contact-home">
      <div className="container">
        <div className="contact-form-grid">
          <AnimatedSection className="contact-form-info" variant="fadeInLeft">
            <span className="section-tag"><i className="fas fa-envelope"></i> Contact</span>
            <h2 className="section-title">Parlons de votre <span className="highlight">projet</span></h2>
            <p className="contact-info-text">
              Que ce soit pour un devis, une question technique ou un partenariat,
              notre équipe est à votre écoute.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <i className="fas fa-map-marker-alt detail-icon"></i>
                <div>
                  <h4>Adresse</h4>
                  <p>{companyInfo.address}<br />{companyInfo.city}</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <i className="fas fa-phone detail-icon"></i>
                <div>
                  <h4>Téléphone</h4>
                  <p>{companyInfo.phone}</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <i className="fas fa-envelope detail-icon"></i>
                <div>
                  <h4>Email</h4>
                  <p>{companyInfo.email}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="contact-form" variant="fadeInRight" delay={0.2}>
            {submitted && (
              <div className="form-success">
                <i className="fas fa-check-circle"></i> Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
              </div>
            )}
            <form onSubmit={handleSubmit} className={submitted ? 'hidden' : ''}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="hnom">Nom <span className="required">*</span></label>
                  <input type="text" id="hnom" name="nom" value={formData.nom} onChange={handleChange}
                    className={errors.nom ? 'error' : ''} placeholder="Votre nom" />
                  {errors.nom && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.nom}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="hprenom">Prénom <span className="required">*</span></label>
                  <input type="text" id="hprenom" name="prenom" value={formData.prenom} onChange={handleChange}
                    className={errors.prenom ? 'error' : ''} placeholder="Votre prénom" />
                  {errors.prenom && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.prenom}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="hemail">Email <span className="required">*</span></label>
                  <input type="email" id="hemail" name="email" value={formData.email} onChange={handleChange}
                    className={errors.email ? 'error' : ''} placeholder="votre@email.com" />
                  {errors.email && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="hpays">Pays <span className="required">*</span></label>
                  <input type="text" id="hpays" name="pays" value={formData.pays} onChange={handleChange}
                    className={errors.pays ? 'error' : ''} placeholder="Votre pays" />
                  {errors.pays && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.pays}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="hobject">Objet <span className="required">*</span></label>
                <input type="text" id="hobject" name="object" value={formData.object} onChange={handleChange}
                  className={errors.object ? 'error' : ''} placeholder="Objet de votre message" />
                {errors.object && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.object}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="hentreprise">Nom de l'entreprise</label>
                <input type="text" id="hentreprise" name="entreprise" value={formData.entreprise}
                  onChange={handleChange} placeholder="Votre entreprise (optionnel)" />
              </div>
              <div className="form-group">
                <label htmlFor="hmessage">Message</label>
                <textarea id="hmessage" name="message" value={formData.message} onChange={handleChange}
                  rows={4} placeholder="Votre message (optionnel)"></textarea>
              </div>
              <button type="submit" className="form-submit-btn">
                <i className="fas fa-paper-plane"></i> Envoyer le message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
