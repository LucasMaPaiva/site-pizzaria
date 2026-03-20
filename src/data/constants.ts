import React from 'react';
import { Pizza, Coffee, IceCream, Croissant } from 'lucide-react';
import { Category, Unit } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'pizza',
    title: 'Pizzaria',
    icon: React.createElement(Pizza, { className: "w-6 h-6" }),
    image: '/categories/pizza.jpeg',
    description: 'Massas de fermentação natural e ingredientes selecionados.',
    url: 'https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa'
  },
  {
    id: 'restaurant',
    title: 'Restaurante',
    icon: React.createElement(Croissant, { className: "w-6 h-6" }),
    image: '/gallery/lunch.png',
    description: 'Almoço executivo com pratos variados e ingredientes frescos',
    url: 'https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-dois-90---aparecida-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d'
  },
  {
    id: 'gelato',
    title: 'Gelateria',
    icon: React.createElement(IceCream, { className: "w-6 h-6" }),
    image: '/categories/gelato.jpeg',
    description: 'Gelatos italianos feitos diariamente com frutas frescas.',
    url: 'https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-dois-90---aparecida-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d'
  },
  {
    id: 'coffee',
    title: 'Cafeteria',
    icon: React.createElement(Coffee, { className: "w-6 h-6" }),
    image: '/categories/dessert.png',
    description: 'Grãos especiais, métodos artesanais e acompanhamentos únicos.',
    url: 'https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-dois-90---aparecida-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d'
  },
];

export const UNITS: Unit[] = [
  {
    id: 'pizzaria-aeroporto',
    name: 'Pizzaria Dois90 Aeroporto',
    address: 'R. Yeyê Coelho, 580A - Aeroporto, Boa Vista - RR, 69310-118',
    image: '/units/aeroporto-pizzaria.jpeg',
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
    image: '/units/cacari.jpeg',
    mapsUrl: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/dir//Dois90%2BPizzaria%2BCa%25C3%25C7ari%2B-%2BAv.%2BVille%2BRoy,%2B2155%2B-%2BTerreo%2B-%2BCa%25C3%25A7ari,%2BBoa%2BVista%2B-%2BRR,%2B69307-725/data%3D!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8d930899c9b5cac5:0xf9103c15ad8a4b12%3Fsa%3DX%26ved%3D1t:57443%26ictx%3D111&ved=2ahUKEwiMsaOUpK2TAxXtRTABHUkrEoAQ48ADegQIKBAL&usg=AOvVaw1O_qnLqrqPclp07II2W8UB',
    menuUrl: 'https://pigz.com.br/dois90pizzaria',
    phone: '(95) 3621-8600',
    whatsapp: '(95) 3621-8600',
    type: 'pizzaria'
  },
  {
    id: 'gelateria-aeroporto',
    name: 'Gelateria Dois90 Aeroporto',
    address: 'R. Yeyê Coelho, 580A - Aeroporto, Boa Vista - RR, 69310-118',
    image: '/units/aeroporto-gelateria.jpeg',
    mapsUrl: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/dir//pizzaria%2Bdois90%2B-%2BR.%2BYey%25C3%25AA%2BCoelho,%2B580A%2B-%2BAeroporto,%2BBoa%2BVista%2B-%2BRR,%2B69310-118/data%3D!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8d9305848658b945:0x8393b0a06729d2c8%3Fsa%3DX%26ved%3D1t:57443%26ictx%3D111&ved=2ahUKEwiMsaOUpK2TAxXtRTABHUkrEoAQ48ADegQIJxAL&usg=AOvVaw0rSb-m9PFFWjy0ZBHM6TKR',
    menuUrl: 'https://pedido.anota.ai/loja/pizzaria-e-gelateria-dois90-aeroporto?f=msa',
    whatsapp: '(95) 99150-0290',
    type: 'gelateria'
  },
  {
    id: 'gelateria-aparecida',
    name: 'Gelateria Dois90 Aparecida',
    address: 'Gelatos dois90, R. José Bonifácio, 504 - Aparecida, Boa Vista - RR, 69306-275',
    image: '/units/aparecida.jpeg',
    mapsUrl: 'https://www.google.com/maps?client=firefox-b-d&lei=Q5-8abSzFYeTwbkPqZewiA0&cs=0&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KcU6ImccBpONMZNxyDUymG74&daddr=R.+Jos%C3%A9+Bonif%C3%A1cio,+504+-+Aparecida,+Boa+Vista+-+RR,+69306-275',
    menuUrl: 'https://www.ifood.com.br/delivery/boa-vista-rr/gelateria-dois-90---aparecida-nossa-senhora-aparecida/45eb126d-1641-4d56-a1fb-7acbbb0b1f2d',
    whatsapp: '(95) 98112-6473',
    type: 'gelateria'
  }
];

export const GALLERY_PIZZA = [
  '/gallery/pizza.png',
  '/gallery/interior.png',
  '/gallery/lunch.png',
  '/gallery/pasta.jpeg',
  '/gallery/bread.png',
  '/gallery/acai.png'
];

export const GALLERY_GELATO = [
  '/gallery/pizza.png',
  '/gallery/interior.png',
  '/gallery/lunch.png',
  '/gallery/pasta.jpeg',
  '/gallery/bread.png',
  '/gallery/acai.png'
];
