import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sectors from './pages/Sectors';
import SectorDetail from './pages/SectorDetail';
import Contact from './pages/Contact';
import Flyers from './pages/Flyers';
import Devis from './pages/Devis';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className={isHome ? 'main-home' : 'main-page'}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/secteurs" element={<Sectors />} />
            <Route path="/secteurs/:sectorId" element={<SectorDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/flyers" element={<Flyers />} />
            <Route path="/devis" element={<Devis />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
