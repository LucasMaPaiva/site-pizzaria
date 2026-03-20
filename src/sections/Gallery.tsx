import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { GALLERY_PIZZA } from '../data/constants';

interface GalleryProps {
  title?: string;
  images?: string[];
}

export const Gallery = ({
  title = "Siga nosso ritmo",
  images = GALLERY_PIZZA
}: GalleryProps) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-display font-bold">{title}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 0.98 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-sm"
          >
            <img src={img} alt={`${title} item`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
