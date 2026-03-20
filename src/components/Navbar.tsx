import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Dois90" className="h-10 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest ${isScrolled ? 'text-ink' : 'text-white'}`}>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#categorias" className="hover:text-primary transition-colors">Cardápio</a>
          <a href="#unidades" className="hover:text-primary transition-colors">Unidades</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Delivery
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
          <MenuIcon className={isScrolled ? 'text-ink' : 'text-white'} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-base z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-8 mt-12 text-2xl font-display font-bold">
              <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
              <a href="#categorias" onClick={() => setIsMobileMenuOpen(false)}>Cardápio</a>
              <a href="#unidades" onClick={() => setIsMobileMenuOpen(false)}>Unidades</a>
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
              <button className="bg-primary text-white py-4 rounded-2xl mt-4">Pedir Agora</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
