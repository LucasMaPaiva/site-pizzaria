import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Clock, MapPin, Phone, ExternalLink, Navigation } from 'lucide-react';
import { UNITS } from '../data/constants';

export const Units = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newItemsPerPage = 1;
      if (width >= 768) {
        newItemsPerPage = 2;
      }
      setItemsPerPage(newItemsPerPage);

      // Adjust currentIndex if it's out of bounds after resize
      const newTotalPages = Math.ceil(UNITS.length / newItemsPerPage);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, newTotalPages - 1)));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(UNITS.length / itemsPerPage);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="unidades" className="py-24 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Onde estamos</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Nossas Unidades</h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-white transition-all active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-white transition-all active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <motion.div
            className="flex gap-8"
            animate={{ x: `calc(-${currentIndex} * (100% + 2rem))` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {UNITS.map((unit) => (
              <motion.div
                key={unit.id}
                className="w-full md:w-[calc(50%-1rem)] shrink-0"
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-ink/5 border border-ink/5 h-full flex flex-col">
                  <div className="h-64 relative">
                    <img src={unit.image} alt={unit.name} className="w-full h-full object-cover" />
                    <div className="absolute top-6 right-6 glass px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold">
                      <Clock className="w-4 h-4 text-primary" /> Aberto até as 23h
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-4" style={{ color: '#000' }}>{unit.name}</h3>
                    <div className="flex flex-col gap-3 mb-8 flex-grow">
                      <div className="flex items-start gap-3" style={{ color: 'rgba(0,0,0,0.6)' }}>
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <p className="text-sm md:text-base" style={{ color: 'rgba(0,0,0,0.6)' }}>{unit.address}</p>
                      </div>
                      {unit.phone && (
                        <div className="flex items-center gap-3" style={{ color: 'rgba(0,0,0,0.6)' }}>
                          <Phone className="w-5 h-5 text-primary shrink-0" />
                          <p className="text-sm md:text-base" style={{ color: 'rgba(0,0,0,0.6)' }}>Central: {unit.phone}</p>
                        </div>
                      )}
                      {unit.whatsapp && (
                        <div className="flex items-center gap-3" style={{ color: 'rgba(0,0,0,0.6)' }}>
                          <div className="w-5 h-5 flex items-center justify-center bg-green-500 rounded-full text-white shrink-0">
                            <Phone className="w-3 h-3" />
                          </div>
                          <p className="text-sm md:text-base" style={{ color: 'rgba(0,0,0,0.6)' }}>WhatsApp: {unit.whatsapp}</p>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <a
                        href={unit.menuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white py-3 md:py-4 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-95"
                      >
                        Cardápio <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={unit.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-ink text-white py-3 md:py-4 rounded-2xl font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-ink/90 transition-all active:scale-95"
                      >
                        Como chegar <Navigation className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-primary' : 'w-2 bg-ink/10'
                }`}
              aria-label={`Ir para página ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
