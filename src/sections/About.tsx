import { motion } from 'motion/react';
import { Pizza, Coffee, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config';

export const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfHistory = currentYear - parseInt(siteConfig.since);

  return (
    <section id="sobre" className="py-24 bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-3 left-3 md:top-6 md:left-6 w-full h-full bg-accent rounded-3xl" />
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-white">
              <img
                src="/about-1.jpeg"
                alt="Ambiente Dois90"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 -left-10 glass p-8 rounded-2xl shadow-xl hidden lg:block max-w-[200px]">
              <p className="text-primary font-display font-bold text-4xl mb-1">{yearsOfHistory}+</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Anos de história e paixão pela gastronomia.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Nossa Essência</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Onde a tradição encontra o <span className="font-serif italic font-normal">contemporâneo.</span>
            </h2>
            <p className="text-lg text-ink/70 mb-8 leading-relaxed">
              A Dois90 nasceu do desejo de criar um espaço onde cada detalhe importa. Começamos com a pizza perfeita, mas descobrimos que a vida é feita de muitos outros sabores.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Pizza className="w-6 h-6" />
                </div>
                <h4 className="font-bold">Artesanal</h4>
                <p className="text-sm text-ink/60">Ingredientes frescos e processos manuais.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                  <Coffee className="w-6 h-6" />
                </div>
                <h4 className="font-bold">Acolhedor</h4>
                <p className="text-sm text-ink/60">Ambientes pensados para o seu conforto.</p>
              </div>
            </div>

            <a href="#historia" className="mt-12 group inline-flex items-center gap-3 font-bold text-ink hover:text-primary transition-colors">
              Conheça nossa história
              <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                <ChevronRight className="w-5 h-5" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
