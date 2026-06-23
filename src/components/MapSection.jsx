import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { companyInfo } from '../data/sectors';
import AnimatedSection from './AnimatedSection';
import './MapSection.css';

export default function MapSection() {
  const coord = companyInfo.coordinates;

  return (
    <section className="map-section">
      <div className="container">
        <AnimatedSection className="map-header" variant="fadeInUp">
          <span className="section-tag"><i className="fas fa-map-marker-alt"></i> Localisation</span>
          <h2 className="section-title">Où nous <span className="highlight">trouver</span></h2>
        </AnimatedSection>
        <AnimatedSection className="map-wrapper" variant="fadeInUp" delay={0.2}>
          <MapContainer
            center={coord}
            zoom={16}
            scrollWheelZoom={false}
            className="map-container"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coord}>
              <Popup>
                <strong>{companyInfo.name}</strong><br />
                {companyInfo.address}<br />
                {companyInfo.city}
              </Popup>
            </Marker>
          </MapContainer>
          <div className="map-info-card">
            <div className="map-info-icon"><i className="fas fa-map-pin"></i></div>
            <h4>Notre adresse</h4>
            <p>{companyInfo.address}</p>
            <p>{companyInfo.city}</p>
            <a href={`https://maps.google.com/?q=${coord[0]},${coord[1]}`}
               target="_blank" rel="noopener noreferrer"
               className="map-directions-btn">
              <i className="fas fa-directions"></i> Voir sur Google Maps
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
