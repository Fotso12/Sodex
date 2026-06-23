import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import MapSection from '../components/MapSection';
import SectorsCarousel from '../components/SectorsCarousel';
import TrustedCompanies from '../components/TrustedCompanies';
import ContactFormSection from '../components/ContactFormSection';
import PhoneCTA from '../components/PhoneCTA';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <AboutSection />
      <MapSection />
      <SectorsCarousel />
      <TrustedCompanies />
      <ContactFormSection />
      <PhoneCTA />
    </div>
  );
}
