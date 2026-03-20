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
  MessageCircle,
  Camera
} from 'lucide-react';

/// --- Types ---
interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  url: string;
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
    image: '/secao-2/pizza.jpeg',
    description: 'Massas de fermentação natural e ingredientes selecionados.',
    url: 'https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa' // Altere este link para onde desejar (ex: link do cardápio)
  },
  {
    id: 'coffee',
    title: 'Cafeteria',
    icon: <Coffee className="w-6 h-6" />,
    image: '/secao-2/doce.png',
    description: 'Grãos especiais, métodos artesanais e acompanhamentos únicos.',
    url: 'https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-dois-90---aparecida-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d' // Altere este link para onde desejar
  },
  {
    id: 'gelato',
    title: 'Gelateria',
    icon: <IceCream className="w-6 h-6" />,
    image: '/secao-2/gelato.jpeg',
    description: 'Gelatos italianos feitos diariamente com frutas frescas.',
    url: 'https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-dois-90---aparecida-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d' // Altere este link para onde desejar
  },
  {
    id: 'bakery',
    title: 'Salgados & Padaria',
    icon: <Croissant className="w-6 h-6" />,
    image: '/secao-2/salgados.jpeg',
    description: 'Pães artesanais, croissants e salgados assados na hora.',
    url: 'https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-dois-90---aparecida-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d' // Altere este link para onde desejar
  }
];

const UNITS: Unit[] = [
  {
    id: 'pizzaria-aeroporto',
    name: 'Pizzaria Dois90 Aeroporto',
    address: 'R. Yeyê Coelho, 580A - Aeroporto, Boa Vista - RR, 69310-118',
    image: '/public/unidades/aeroporto-pizzaria.jpeg',
    mapsUrl: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/dir//pizzaria%2Bdois90%2B-%2BR.%2BYey%25C3%25AA%2BCoelho,%2B580A%2B-%2BAeroporto,%2BBoa%2BVista%2B-%2BRR,%2B69310-118/data%3D!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8d9305848658b945:0x8393b0a06729d2c8%3Fsa%3DX%26ved%3D1t:57443%26ictx%3D111&ved=2ahUKEwiMsaOUpK2TAxXtRTABHUkrEoAQ48ADegQIJxAL&usg=AOvVaw0rSb-m9PFFWjy0ZBHM6TKR',
    menuUrl: 'https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa',
    phone: '(95) 3621-8600',
    whatsapp: '(95) 9152-0290',
    type: 'pizzaria'
  },
  {
    id: 'pizzaria-cacari',
    name: 'Pizzaria Dois90 Caçari',
    address: 'Av. Ville Roy, 2155 - Terreo - Caçari, Boa Vista - RR, 69307-725',
    image: '/public/unidades/cacari.jpeg',
    mapsUrl: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/dir//Dois90%2BPizzaria%2BCa%25C3%25A7ari%2B-%2BAv.%2BVille%2BRoy,%2B2155%2B-%2BTerreo%2B-%2BCa%25C3%25A7ari,%2BBoa%2BVista%2B-%2BRR,%2B69307-725/data%3D!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8d930899c9b5cac5:0xf9103c15ad8a4b12%3Fsa%3DX%26ved%3D1t:57443%26ictx%3D111&ved=2ahUKEwiMsaOUpK2TAxXtRTABHUkrEoAQ48ADegQIKBAL&usg=AOvVaw1O_qnLqrqPclp07II2W8UB',
    menuUrl: 'https://pigz.com.br/dois90pizzaria',
    phone: '(95) 3621-8600',
    whatsapp: '(95) 3621-8600',
    type: 'pizzaria'
  },
  {
    id: 'gelateria-aeroporto',
    name: 'Gelateria Dois90 Aeroporto',
    address: 'R. Yeyê Coelho, 580A - Aeroporto, Boa Vista - RR, 69310-118',
    image: '/public/unidades/aeroporto-gelateria.jpeg',
    mapsUrl: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/dir//pizzaria%2Bdois90%2B-%2BR.%2BYey%25C3%25AA%2BCoelho,%2B580A%2B-%2BAeroporto,%2BBoa%2BVista%2B-%2BRR,%2B69310-118/data%3D!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8d9305848658b945:0x8393b0a06729d2c8%3Fsa%3DX%26ved%3D1t:57443%26ictx%3D111&ved=2ahUKEwiMsaOUpK2TAxXtRTABHUkrEoAQ48ADegQIJxAL&usg=AOvVaw0rSb-m9PFFWjy0ZBHM6TKR',
    menuUrl: 'https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa',
    whatsapp: '(95) 99150-0290',
    type: 'gelateria'
  },
  {
    id: 'gelateria-aparecida',
    name: 'Gelateria Dois90 Aparecida',
    address: 'Gelatos dois90, R. José Bonifácio, 504 - Aparecida, Boa Vista - RR, 69306-275',
    image: '/public/unidades/aparecida.jpeg',
    mapsUrl: 'https://www.google.com/maps?client=firefox-b-d&lei=Q5-8abSzFYeTwbkPqZewiA0&cs=0&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KcU6ImccBpONMZNxyDUymG74&daddr=R.+Jos%C3%A9+Bonif%C3%A1cio,+504+-+Aparecida,+Boa+Vista+-+RR,+69306-275',
    menuUrl: 'https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-dois-90---aparecida-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d',
    whatsapp: '(95) 98112-6473',
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
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Dois90" className="h-10 w-auto" />
        </a>

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
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 leading-[1.1] text-balance flex flex-col items-center gap-4">
            <img src="/logo.svg" alt="Dois90" className="h-24 md:h-40 w-auto" />
            <span className="text-white italic font-serif font-normal text-3xl md:text-5xl">25 anos com você.</span>
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
                src="/secao-1.jpeg"
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

const Units = () => {
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

const Gallery = () => {
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
              <img src="/logo.svg" alt="Dois90" className="h-12 w-auto brightness-0 invert" />
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

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const whatsappNumber = '559591520290'; // Pizzaria Aeroporto

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!message.trim()) return;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl overflow-hidden shadow-2xl border border-ink/5 mb-4"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-6 text-white text-left">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20">
                    <img
                      src="/milla.png"
                      alt="Mila - Assistente Virtual"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Mila</h4>
                  <p className="text-xs text-white/80 text-left">Assistente Virtual Dois90</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-auto hover:bg-black/10 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-left" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="h-64 p-6 bg-[#E5DDD5] relative overflow-hidden flex flex-col justify-end gap-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-left"
              >
                <p className="text-sm text-ink font-medium mb-1 text-left">Mila:</p>
                <p className="text-sm text-ink text-left">
                  Olá! 👋 Eu sou a Mila. Como posso ajudar você hoje? <br />
                  Peça sua pizza, reserve uma mesa ou tire suas dúvidas!
                </p>
                <span className="text-[10px] text-ink/40 mt-1 block text-right">
                  {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}
                </span>
              </motion.div>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full w-fit flex gap-1 items-center"
                >
                  <span className="w-1.5 h-1.5 bg-ink/30 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-ink/30 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-ink/30 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white">
              <form onSubmit={handleSend} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-base border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#25D366] transition-all"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:scale-100"
                >
                  <Send className="w-5 h-5 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-ink/5"
            >
              <p className="text-sm font-bold text-ink">Fale com a Mila</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'w-16 h-16 bg-ink text-white rotate-90 shadow-2xl' : 'w-24 h-24 bg-transparent'
            }`}
        >
          {isOpen ? <X className="w-8 h-8" /> : (
            <div className="relative w-full h-full">
              <img
                src="/milla.png"
                alt="Mila"
                className="w-full h-full object-cover drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-[#25D366] rounded-full animate-pulse"></span>
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
};

const StoryPage = () => {
  return (
    <div className="pt-32 pb-24 bg-ink min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <a href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs mb-12">
          <ChevronLeft className="w-4 h-4" /> Voltar para o início
        </a>

        <h1 className="text-5xl md:text-7xl font-display font-bold mb-12 text-white">De onde viemos.</h1>

        <div className="prose prose-lg max-w-none text-white/80 font-sans leading-relaxed mb-16 space-y-6">
          <p className="text-2xl font-display font-bold text-white mb-8 leading-snug">
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
        </div>

        {/* Car Image Header */}
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl mb-24 relative border border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-12 flex justify-center">
          <img src="/carro.png" alt="Aero Willys 2-90 - 1966" className="w-full h-auto max-h-[600px] object-contain relative z-0" />
        </div>

        {/* Missão e Valores */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Missão */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-primary/40 transition-colors flex flex-col">
            <h3 className="text-2xl font-display font-bold mb-4 text-primary">Nossa Missão</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Trabalhar em equipe para transformar a vontade de comer em uma experiência agradável, sendo diferenciado pela qualidade, atendimento, inovação e produtividade.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-white/40 transition-colors flex flex-col">
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Nossa Visão</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Ser referência em oferecer produtos que busquem atender a necessidade do público em alimentação dentro e fora de casa.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-accent/40 transition-colors flex flex-col">
            <h3 className="text-2xl font-display font-bold mb-4 text-accent">Nossos Valores</h3>
            <ul className="flex flex-col gap-4 text-white/80 text-sm">
              <li>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-white">Respeito:</strong> <span className="text-white/70">Valorize o que torna cada pessoa única.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-white">Colaboração:</strong> <span className="text-white/70">Juntos somos mais fortes.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-white">Empatia:</strong> <span className="text-white/70">Tente se colocar no lugar do outro.</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (hash === '#historia') {
    return (
      <div className="min-h-screen font-sans">
        <Navbar />
        <StoryPage />
        <Footer />
        <WhatsAppWidget />
      </div>
    );
  }

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
      <WhatsAppWidget />
    </div>
  );
}
