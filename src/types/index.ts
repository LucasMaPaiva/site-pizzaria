import React from 'react';

export interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  url: string;
}

export interface Unit {
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
