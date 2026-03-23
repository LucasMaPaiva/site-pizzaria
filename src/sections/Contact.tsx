import { Instagram, ArrowRight } from 'lucide-react';
import { GALLERY_PIZZA } from '../data/constants';
import { siteConfig } from '../config';

export const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-accent rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-accent/20 transition-all hover:shadow-accent/30">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side: Image Grid */}
            <div className="flex-1 w-full order-2 lg:order-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {GALLERY_PIZZA.slice(0, 6).map((img, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-2xl overflow-hidden shadow-lg group relative"
                  >
                    <img 
                      src={img} 
                      alt={`Instagram ${index}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Instagram className="text-white w-6 h-6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Typography & CTA */}
            <div className="lg:w-1/3 text-center lg:text-left order-1 lg:order-2">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm border border-white/10">
                | Social
              </span>
              <h2 className="text-4xl md:text-5xl font-display mb-2 leading-tight">
                Confira nossas
              </h2>
              <p className="text-7xl md:text-9xl font-serif italic text-white mb-8 block -mt-2">
                redes
              </p>
              
              <a 
                href={siteConfig.links.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all shadow-xl shadow-black/10 group active:scale-95"
              >
                Confira nossas redes sociais
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
