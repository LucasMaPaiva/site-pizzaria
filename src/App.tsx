import { useState, useEffect } from 'react';

// Components
import { Navbar } from './components/Navbar';
import { WhatsAppWidget } from './components/WhatsAppWidget';

// Sections
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Categories } from './sections/Categories';
import { Units } from './sections/Units';
import { Gallery } from './sections/Gallery';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { StoryPage } from './sections/StoryPage';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      const oldHash = hash;
      setHash(newHash);
      
      // Só reseta o scroll se estiver entrando ou saindo da página #historia
      if (newHash === '#historia' || oldHash === '#historia') {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [hash]);

  if (hash === '#historia') {
    return (
      <div className="min-h-screen font-sans">
        <Navbar />
        <StoryPage />
        <Footer />
        <WhatsAppWidget />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Units />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
