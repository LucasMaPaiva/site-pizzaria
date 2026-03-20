import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpeg"
          alt="Pizza Background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-white/30 text-xs font-bold uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
            Desde 2000 • Tradição & Sabor
          </span>
          <h1 className="text-5xl md:text-8xl font-display mb-6 leading-[1.1] text-balance flex flex-col items-center gap-4">
            <img src="/logo.svg" alt="Dois90" className="h-24 md:h-40 w-auto" />
            <span className="text-white font-serif italic font-normal flex flex-col md:flex-row items-center md:items-baseline gap-2">
              <span className="text-7xl md:text-7xl">25</span>
              <span className="text-7xl md:text-7xl">anos com você.</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Sabores artesanais, café especial, gelatos italianos e momentos únicos em um ambiente feito para você.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#categorias"
              className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-2xl shadow-primary/30"
            >
              Ver Cardápio
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#unidades"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Escolher Unidade
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
