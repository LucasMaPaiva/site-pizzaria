import { useState, useEffect } from 'react';

// Components
import { Navbar } from './components/Navbar';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { CookieBanner } from './components/CookieBanner';

// Sections
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { DriveThru } from './sections/DriveThru';
import { Categories } from './sections/Categories';
import { Units } from './sections/Units';
import { Gallery } from './sections/Gallery';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { StoryPage } from './sections/StoryPage';
import { LegalPage } from './sections/LegalPage';
import { GALLERY_PIZZA, GALLERY_GELATO } from './data/constants';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Sempre que o hash mudar para um dos nossos "modais" de página, vai para o topo
    const legalHashes = ['#historia', '#privacidade', '#termos'];
    if (legalHashes.includes(hash)) {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  if (hash === '#historia') {
    return (
      <div className="min-h-screen font-sans">
        <Navbar />
        <StoryPage />
        <Footer />
        <WhatsAppWidget />
        <CookieBanner />
      </div>
    );
  }

  if (hash === '#privacidade' || hash === '#termos') {
    return (
      <div className="min-h-screen font-sans">
        <Navbar />
        <LegalPage type={hash === '#privacidade' ? 'privacidade' : 'termos'} />
        <Footer />
        <WhatsAppWidget />
        <CookieBanner />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <DriveThru />
      <Categories />
      <Units />
      <Gallery title="Pizzaria & Restaurante" images={GALLERY_PIZZA} />
      <Gallery title="Gelataria & Acai" images={GALLERY_GELATO} />
      <Contact />
      <Footer />
      <WhatsAppWidget />
      <CookieBanner />
    </div>
  );
}
