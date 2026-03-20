import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { CATEGORIES } from '../data/constants';

export const Categories = () => {
  return (
    <section id="categorias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Explore nossos mundos</h2>
          <p className="text-ink/60 max-w-2xl mx-auto">De uma manhã com café especial a uma noite com a melhor pizza da cidade.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.a
              href={cat.url}
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer block"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-primary transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
                <div className="bg-white text-ink py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Ver Cardápio <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
