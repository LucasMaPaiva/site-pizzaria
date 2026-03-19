/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Pizza, 
  Coffee, 
  IceCream, 
  Croissant, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  ChevronLeft,
  Menu as MenuIcon, 
  X,
  ExternalLink,
  Clock,
  Navigation,
  Send,
  MessageCircle
} from 'lucide-react';

/// --- Types ---
interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
}

interface Unit {
  id: string;
  name: string;
  address: string;
  image: string;
  mapsUrl: string;
  menuUrl: string;
  phone?: string;
  whatsapp?: string;
  type: 'pizzaria' | 'gelateria';
}

// --- Data ---
const CATEGORIES: Category[] = [
  {
    id: 'pizza',
    title: 'Pizzaria',
    icon: <Pizza className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    description: 'Massas de fermentação natural e ingredientes selecionados.'
  },
  {
    id: 'coffee',
    title: 'Cafeteria',
    icon: <Coffee className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
    description: 'Grãos especiais, métodos artesanais e acompanhamentos únicos.'
  },
  {
    id: 'gelato',
    title: 'Gelateria',
    icon: <IceCream className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?q=80&w=2070&auto=format&fit=crop',
    description: 'Gelatos italianos feitos diariamente com frutas frescas.'
  },
  {
    id: 'bakery',
    title: 'Salgados & Padaria',
    icon: <Croissant className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop',
    description: 'Pães artesanais, croissants e salgados assados na hora.'
  }
];

const UNITS: Unit[] = [
  {
    id: 'pizzaria-aeroporto',
    name: 'Pizzaria Dois90 Aeroporto',
    address: 'Bairro Aeroporto, Boa Vista - RR (Endereço Fictício)',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
    mapsUrl: 'https://maps.google.com',
    menuUrl: 'https://ifood.com.br',
    phone: '(95) 3621-8600',
    whatsapp: '(95) 9152-0290',
    type: 'pizzaria'
  },
  {
    id: 'pizzaria-cacari',
    name: 'Pizzaria Dois90 Caçari',
    address: 'Bairro Caçari, Boa Vista - RR (Endereço Fictício)',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    mapsUrl: 'https://maps.google.com',
    menuUrl: 'https://ifood.com.br',
    phone: '(95) 3621-8600',
    whatsapp: '(95) 3621-8600',
    type: 'pizzaria'
  },
  {
    id: 'gelateria-aeroporto',
    name: 'Gelateria Dois90 Aeroporto',
    address: 'Bairro Aeroporto, Boa Vista - RR (Endereço Fictício)',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?q=80&w=2070&auto=format&fit=crop',
    mapsUrl: 'https://maps.google.com',
    menuUrl: 'https://ifood.com.br',
    whatsapp: '(95) 99150-0290',
    type: 'gelateria'
  },
  {
    id: 'gelateria-aparecida',
    name: 'Gelateria Dois90 Aparecida',
    address: 'Bairro Aparecida, Boa Vista - RR (Endereço Fictício)',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop',
    mapsUrl: 'https://maps.google.com',
    menuUrl: 'https://ifood.com.br',
    whatsapp: '(95) 8112-6473',
    type: 'gelateria'
  }
];

const GALLERY = [
  'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop'
];

// --- Components ---

const Navbar = () => {
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
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-display font-bold text-xl">290</div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-ink' : 'text-white'}`}>Dois90</span>
        </div>

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

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" 
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
            Desde 1998 • Tradição & Sabor
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 leading-[1.1] text-balance">
            Dois90. <br />
            <span className="text-primary italic font-serif font-normal">Uma experiência.</span>
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

const About = () => {
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
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                alt="Ambiente Dois90" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent rounded-3xl -z-10 hidden lg:block" />
            <div className="absolute top-1/2 -left-10 glass p-8 rounded-2xl shadow-xl hidden lg:block max-w-[200px]">
              <p className="text-primary font-display font-bold text-4xl mb-1">25+</p>
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

            <button className="mt-12 group flex items-center gap-3 font-bold text-ink hover:text-primary transition-colors">
              Conheça nossa história
              <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  return (
    <section id="categorias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Explore nossos mundos</h2>
          <p className="text-ink/60 max-w-2xl mx-auto">De uma manhã com café especial a uma noite com a melhor pizza da cidade.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
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
                <button className="bg-white text-ink py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Ver Cardápio <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Units = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
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
              className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-8"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {UNITS.map((unit) => (
              <motion.div 
                key={unit.id}
                className="min-w-full md:min-w-[calc(50%-1rem)] shrink-0"
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-ink/5 border border-ink/5 h-full flex flex-col">
                  <div className="h-64 relative">
                    <img src={unit.image} alt={unit.name} className="w-full h-full object-cover" />
                    <div className="absolute top-6 right-6 glass px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold">
                      <Clock className="w-4 h-4 text-primary" /> Aberto até as 23h
                    </div>
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <h3 className="text-2xl font-display font-bold mb-4">{unit.name}</h3>
                    <div className="flex flex-col gap-3 mb-8 flex-grow">
                      <div className="flex items-start gap-3 text-ink/60">
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <p>{unit.address}</p>
                      </div>
                      {unit.phone && (
                        <div className="flex items-center gap-3 text-ink/60">
                          <Phone className="w-5 h-5 text-primary shrink-0" />
                          <p>Central: {unit.phone}</p>
                        </div>
                      )}
                      {unit.whatsapp && (
                        <div className="flex items-center gap-3 text-ink/60">
                          <div className="w-5 h-5 flex items-center justify-center bg-green-500 rounded-full text-white">
                            <Phone className="w-3 h-3" />
                          </div>
                          <p>WhatsApp: {unit.whatsapp}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <a 
                        href={unit.menuUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
                      >
                        Cardápio <ExternalLink className="w-4 h-4" />
                      </a>
                      <a 
                        href={unit.mapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-ink text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-ink/90 transition-all"
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
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-display font-bold">Siga nosso ritmo</h2>
        <a href="#" className="text-primary font-bold flex items-center gap-2 hover:underline">
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

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Peça agora ou venha nos visitar.</h2>
              <p className="text-white/80 text-lg mb-10">Estamos prontos para tornar o seu dia mais saboroso. Escolha o seu canal favorito.</p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60">Central de Atendimento</p>
                    <p className="text-xl font-bold">(95) 3621-8600</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60">Instagram</p>
                    <p className="text-xl font-bold">@dois90_oficial</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-ink">
              <h3 className="text-2xl font-display font-bold mb-6">Fale Conosco</h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Seu nome" className="w-full px-6 py-4 bg-base rounded-2xl border-none focus:ring-2 focus:ring-primary transition-all" />
                <input type="email" placeholder="Seu e-mail" className="w-full px-6 py-4 bg-base rounded-2xl border-none focus:ring-2 focus:ring-primary transition-all" />
                <textarea placeholder="Sua mensagem" rows={4} className="w-full px-6 py-4 bg-base rounded-2xl border-none focus:ring-2 focus:ring-primary transition-all resize-none"></textarea>
                <button className="bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-display font-bold text-xl">290</div>
              <span className="font-display font-bold text-2xl tracking-tight">Dois90</span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Uma experiência gastronômica completa. Da pizza artesanal ao café especial, celebramos os bons momentos da vida com sabor e qualidade.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Links Rápidos</h4>
            <ul className="flex flex-col gap-4 text-white/60">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#categorias" className="hover:text-white transition-colors">Cardápio</a></li>
              <li><a href="#unidades" className="hover:text-white transition-colors">Unidades</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-ink transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-ink transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 Dois90 Experiência Gastronômica. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const phoneNumber = '5595991520290';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[320px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-ink/5"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold leading-tight">Dois90 Atendimento</h4>
                  <p className="text-xs text-white/80">Normalmente responde em minutos</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 bg-[#E5DDD5] min-h-[150px] relative">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[80%]">
                Olá! Como podemos ajudar você hoje? 🍕☕🍦
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-grow px-4 py-3 bg-base rounded-full text-sm border-none focus:ring-2 focus:ring-[#25D366] transition-all"
                />
                <button
                  type="submit"
                  className="w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-lg"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${
          isOpen ? 'bg-ink text-white' : 'bg-[#25D366] text-white'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </motion.button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Units />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppChat />
    </div>
  );
}
