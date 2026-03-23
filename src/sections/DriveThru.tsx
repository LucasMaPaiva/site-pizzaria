import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { UNITS } from '../data/constants';

export const DriveThru = () => {
  const aeroportoUnit = UNITS.find(u => u.id === 'pizzaria-aeroporto');

  return (
    <section id="drive-thru" className="py-24 bg-accent text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-black group border-4 border-white/10"
          >
            {/* YouTube Video */}
            <iframe
              src="https://www.youtube.com/embed/VnsfYxbgFl4?autoplay=1&mute=1&loop=1&playlist=VnsfYxbgFl4"
              title="Drive-Thru Dois90"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </motion.div>

          {/* Right Side: Content & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm border border-white/20">
              | Conveniência
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Drive-Thru <br />
              <span className="font-serif italic font-normal text-white/90">Dois90.</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
              Rapidez e sabor sem sair do carro. Nossa unidade Aeroporto já conta com sistema de Drive-Thru completo, e este mês teremos mais uma novidade chegando.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href={aeroportoUnit?.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-accent px-10 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all shadow-xl shadow-black/10 group active:scale-95"
              >
                Como Chegar
                <MapPin className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
              </a>

              <div className="flex items-center gap-3 px-6 py-3 border border-white/30 rounded-full backdrop-blur-sm bg-white/5">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/90">Nova unidade disponível em breve</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
