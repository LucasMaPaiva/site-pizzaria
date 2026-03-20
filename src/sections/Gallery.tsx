import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { GALLERY } from '../data/constants';

export const Gallery = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-display font-bold">Siga nosso ritmo</h2>
        <a
          href="https://www.instagram.com/dois90pizzaria/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-bold flex items-center gap-2 hover:underline"
        >
          @dois90_oficial <Instagram className="w-5 h-5" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
        {GALLERY.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 0.98 }}
            className="aspect-square rounded-2xl overflow-hidden"
          >
            <img src={img} alt="Gallery item" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
