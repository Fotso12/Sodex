import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { companyInfo } from '../data/sectors';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

export default function Contact() {
  const coord = companyInfo.coordinates;
  const [formData, setFormData] = useState({
    nom: '', prenom: '', object: '', email: '', pays: '',
    entreprise: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const requiredFields = ['nom', 'prenom', 'object', 'email', 'pays'];

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
    <div className="contact-page">
      <AnimatedSection className="contact-hero" variant="fadeIn">
        <div className="container">
          <span className="section-tag"><i className="fas fa-envelope"></i> Contact</span>
          <h1 className="contact-page-title">Contactez-<span className="highlight">nous</span></h1>
          <p className="contact-page-subtitle">
            Une question ? Un projet ? Notre équipe est à votre écoute.
          </p>
        </div>
      </AnimatedSection>

      <div className="container">
        <div className="contact-page-content">
          <motion.div
            className="contact-page-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-main">
              <h2>Nos coordonnées</h2>

              <div className="contact-info-block">
                <i className="fas fa-map-marker-alt info-block-icon"></i>
                <div>
                  <h4>Adresse</h4>
                  <p>{companyInfo.address}</p>
                  <p>{companyInfo.city}</p>
                </div>
              </div>

              <div className="contact-info-block">
                <i className="fas fa-phone info-block-icon"></i>
                <div>
                  <h4>Téléphone</h4>
                  <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="info-link">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-info-block">
                <i className="fas fa-envelope info-block-icon"></i>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${companyInfo.email}`} className="info-link">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-info-block">
                <i className="fas fa-clock info-block-icon"></i>
                <div>
                  <h4>Horaires</h4>
                  <p>Lundi - Vendredi : 8h00 - 18h00</p>
                  <p>Samedi : 9h00 - 13h00</p>
                </div>
              </div>
            </div>

            <div className="contact-page-map">
              <MapContainer
                center={coord}
                zoom={15}
                scrollWheelZoom={false}
                style={{ width: '100%', height: '250px', borderRadius: '12px' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={coord}>
                  <Popup>{companyInfo.name} - {companyInfo.address}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>

          <motion.div
            className="contact-page-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Envoyez-nous un message</h2>
            {submitted && (
              <div className="form-success">
                <i className="fas fa-check-circle"></i> Message envoyé avec succès !
              </div>
            )}
            <form onSubmit={handleSubmit}>
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
              <div className="form-group">
                <label>Email <span className="required">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  className={errors.email ? 'error' : ''} placeholder="votre@email.com" />
                {errors.email && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.email}</span>}
              </div>
              <div className="form-group">
                <label>Pays <span className="required">*</span></label>
                <input type="text" name="pays" value={formData.pays} onChange={handleChange}
                  className={errors.pays ? 'error' : ''} placeholder="Votre pays" />
                {errors.pays && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.pays}</span>}
              </div>
              <div className="form-group">
                <label>Objet <span className="required">*</span></label>
                <input type="text" name="object" value={formData.object} onChange={handleChange}
                  className={errors.object ? 'error' : ''} placeholder="Objet de votre message" />
                {errors.object && <span className="error-text"><i className="fas fa-exclamation-circle"></i> {errors.object}</span>}
              </div>
              <div className="form-group">
                <label>Nom de l'entreprise</label>
                <input type="text" name="entreprise" value={formData.entreprise}
                  onChange={handleChange} placeholder="Optionnel" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange}
                  rows={4} placeholder="Votre message (optionnel)"></textarea>
              </div>
              <button type="submit" className="form-submit-btn">
                <i className="fas fa-paper-plane"></i> Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
