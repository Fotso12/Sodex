import { useState } from 'react';
import { motion } from 'framer-motion';
import { sectors, companyInfo } from '../data/sectors';
import AnimatedSection from '../components/AnimatedSection';
import './Devis.css';

export default function Devis() {
  const [formData, setFormData] = useState({
    nom: '', prenom: '', email: '', telephone: '', pays: '',
    entreprise: '', secteur: '', description: '', urgence: 'standard',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const requiredFields = ['nom', 'prenom', 'email', 'telephone', 'pays', 'description'];

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
    setFormData({
      nom: '', prenom: '', email: '', telephone: '', pays: '',
      entreprise: '', secteur: '', description: '', urgence: 'standard',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="devis-page">
      <AnimatedSection className="devis-hero" variant="fadeIn">
        <div className="container">
          <span className="section-tag"><i className="fas fa-file-invoice"></i> Demande de devis</span>
          <h1 className="devis-page-title">Demander un <span className="highlight">devis</span></h1>
          <p className="devis-page-subtitle">
            Parlez-nous de votre projet et recevez une estimation personnalisée sous 24h.
          </p>
        </div>
      </AnimatedSection>

      <div className="container">
        <div className="devis-content">
          <motion.div
            className="devis-form-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="devis-form-header">
              <h2>Formulaire de demande</h2>
              <p>Tous les champs marqués d'un <span className="required">*</span> sont obligatoires</p>
            </div>

            {submitted && (
              <div className="devis-success">
                <div className="devis-success-icon"><i className="fas fa-check"></i></div>
                <h3>Votre demande a été envoyée !</h3>
                <p>Notre équipe vous contactera dans les plus brefs délais pour discuter de votre projet.</p>
              </div>
            )}

            {!submitted && (
              <form className="devis-form" onSubmit={handleSubmit}>
                <div className="devis-form-section">
                  <h3><i className="fas fa-user"></i> Informations personnelles</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nom <span className="required">*</span></label>
                      <input type="text" name="nom" value={formData.nom} onChange={handleChange}
                        className={errors.nom ? 'error' : ''} placeholder="Votre nom" />
                      {errors.nom && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.nom}</span>}
                    </div>
                    <div className="form-group">
                      <label>Prénom <span className="required">*</span></label>
                      <input type="text" name="prenom" value={formData.prenom} onChange={handleChange}
                        className={errors.prenom ? 'error' : ''} placeholder="Votre prénom" />
                      {errors.prenom && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.prenom}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email <span className="required">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className={errors.email ? 'error' : ''} placeholder="votre@email.com" />
                      {errors.email && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label>Téléphone <span className="required">*</span></label>
                      <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange}
                        className={errors.telephone ? 'error' : ''} placeholder="+243 8X XX XX XX XX" />
                      {errors.telephone && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.telephone}</span>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Pays <span className="required">*</span></label>
                      <input type="text" name="pays" value={formData.pays} onChange={handleChange}
                        className={errors.pays ? 'error' : ''} placeholder="Votre pays" />
                      {errors.pays && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.pays}</span>}
                    </div>
                    <div className="form-group">
                      <label>Nom de l'entreprise</label>
                      <input type="text" name="entreprise" value={formData.entreprise}
                        onChange={handleChange} placeholder="Optionnel" />
                    </div>
                  </div>
                </div>

                <div className="devis-form-section">
                  <h3><i className="fas fa-tasks"></i> Détails du projet</h3>
                  <div className="form-group">
                    <label>Secteur d'activité</label>
                    <select name="secteur" value={formData.secteur} onChange={handleChange}>
                      <option value="">Sélectionnez un secteur (optionnel)</option>
                      {sectors.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Description du projet <span className="required">*</span></label>
                    <textarea name="description" value={formData.description} onChange={handleChange}
                      className={errors.description ? 'error' : ''}
                      rows={5} placeholder="Décrivez votre projet, vos besoins et contraintes..."></textarea>
                    {errors.description && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.description}</span>}
                  </div>
                  <div className="form-group">
                    <label>Niveau d'urgence</label>
                    <div className="urgence-options">
                      {[
                        { value: 'standard', label: 'Standard', desc: 'Sous 1 semaine' },
                        { value: 'urgent', label: 'Urgent', desc: 'Sous 48h' },
                        { value: 'tres-urgent', label: 'Très urgent', desc: 'Sous 24h' },
                      ].map(opt => (
                        <label key={opt.value} className={`urgence-option ${formData.urgence === opt.value ? 'active' : ''}`}>
                          <input type="radio" name="urgence" value={opt.value}
                            checked={formData.urgence === opt.value} onChange={handleChange} />
                          <i className={`fas ${formData.urgence === opt.value ? 'fa-circle-dot' : 'fa-circle'} urgence-radio`}></i>
                          <span className="urgence-label">{opt.label}</span>
                          <span className="urgence-desc">{opt.desc}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <button type="submit" className="devis-submit-btn">
                  <i className="fas fa-paper-plane"></i> Envoyer ma demande de devis
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="devis-sidebar"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="devis-sidebar-card">
              <h3><i className="fas fa-check-circle"></i> Pourquoi choisir Sodex ?</h3>
              <ul>
                <li><i className="fas fa-check"></i> Devis gratuit et sans engagement</li>
                <li><i className="fas fa-check"></i> Réponse sous 24h</li>
                <li><i className="fas fa-check"></i> Équipe de cordistes certifiés</li>
                <li><i className="fas fa-check"></i> Respect des normes de sécurité</li>
                <li><i className="fas fa-check"></i> Interventions rapides</li>
              </ul>
            </div>

            <div className="devis-sidebar-card">
              <h3><i className="fas fa-phone-alt"></i> Contact direct</h3>
              <div className="sidebar-contact">
                <i className="fas fa-phone"></i>
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a>
              </div>
              <div className="sidebar-contact">
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </div>
            </div>

            <div className="devis-sidebar-card">
              <h3><i className="fas fa-cogs"></i> Nos secteurs</h3>
              <div className="sidebar-secteurs">
                {sectors.slice(0, 4).map(s => (
                  <span key={s.id} className="sidebar-secteur-tag">
                    <i className={s.icon}></i> {s.title}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
