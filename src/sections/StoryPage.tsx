import { useState, useEffect } from 'react';
import { ChevronLeft, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { UNITS } from '../data/constants';

export const StoryPage = () => {
  const [selectedUnit, setSelectedUnit] = useState(UNITS[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ink min-h-screen relative overflow-hidden font-sans">
      {/* Hero Section / Title */}
      <div className="pt-40 pb-16 bg-ink relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <a href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs mb-8">
            <ChevronLeft className="w-4 h-4" /> Voltar para o início
          </a>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold text-white mb-8"
          >
            De onde viemos.
          </motion.h1>
        </div>
      </div>

      {/* Section 1: Text - Image (History) */}
      <section className="py-20 bg-ink relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-white/80 leading-relaxed space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">Nossa Origem</h2>
            <p className="text-xl font-display font-bold text-white leading-snug">
              Quem sou... Eu sou de Roraima, sou do dia 12 de junho de 2000, sou de Boa Vista, sou a Pizzaria Dois90.
            </p>
            <p>
              Um nome singular para uma pizzaria, mas com certeza um nome bem contextualizado com a história de Roraima, pois 2-90 foi a placa do primeiro automóvel táxi de Boa Vista que não era um Jeep.
            </p>
            <p>
              Em 1966, o Aero Willys azul, com sua placa 2-90, tornou-se um sucesso. Muitas pessoas queriam aproveitar a novidade e dar uma volta pela cidade.
            </p>
            <p>
              Assim, também foi criado o primeiro ponto de táxi de Boa Vista, localizado na esquina onde hoje são as avenidas Getúlio Vargas e Sílvio Botelho, no centro. O ponto recebeu do então governador Hélio Campos a concessão de uma linha telefônica com o mesmo número: 2-90.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4"
          >
            <img src="/car.png" alt="Aero Willys 2-90" className="w-full h-auto rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Image - Text (Lorem Ipsum) */}
      <section className="py-20 bg-[#151515] relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src="/25-yers.jpg" 
              alt="25 Anos Dois90" 
              className="w-full h-full object-cover aspect-video md:aspect-[4/5]" 
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 prose prose-lg max-w-none text-white/80 leading-relaxed space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">Tradição e Qualidade</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Visit Us (Green Background) */}
      <section className="py-24 bg-primary relative z-10 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-4"
            >
              Venha nos visitar
            </motion.h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Escolha uma de nossas unidades e venha saborear a melhor experiência gastronômica de Roraima.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Unit Selection Buttons */}
            <div className="space-y-4">
              {UNITS.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit)}
                  className={`w-full p-6 rounded-2xl text-left transition-all flex items-start gap-4 border-2 ${
                    selectedUnit.id === unit.id 
                      ? 'bg-white text-primary border-white shadow-xl scale-[1.02]' 
                      : 'bg-white/10 text-white border-transparent hover:bg-white/20'
                  }`}
                >
                  <MapPin className={`w-6 h-6 shrink-0 mt-1 ${selectedUnit.id === unit.id ? 'text-primary' : 'text-white'}`} />
                  <div>
                    <h3 className="font-bold text-lg leading-tight mb-1">{unit.name}</h3>
                    <p className={`text-sm ${selectedUnit.id === unit.id ? 'text-primary/70' : 'text-white/70'}`}>
                      {unit.address}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-2 relative group">
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 h-[500px] md:h-[600px] bg-white/5 backdrop-blur-md">
                <iframe
                  title="Google Maps"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedUnit.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="py-12 bg-ink text-center">
        <p className="text-white/30 text-xs uppercase tracking-[0.3em]">Dois90 Pizzaria & Gelateria • Roraima</p>
      </div>
    </div>
  );
};
