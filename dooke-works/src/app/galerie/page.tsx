'use client';

import { useState } from 'react';
import Link from 'next/link';

const images: Record<string, string[]> = {
  BTP: [
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1541888946425-d81bb1c1e9e2?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1590674899484-d5640d0f7b6c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=400&fit=crop',
  ],
  Industrie: [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1563770551467-0ea5f7e5b4b2?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1565615835840-2baace1e2f2c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1620662732149-e6d5b30d58e3?w=600&h=400&fit=crop',
  ],
  Télécoms: [
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551817958-8b209d6e8df3?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1508829040597-5725f2c8d9f6?w=600&h=400&fit=crop',
  ],
};

const galleryItems = Object.entries(images).flatMap(([category, urls]) =>
  urls.map((url, i) => ({
    id: `${category}-${i}`,
    title: `${category} ${i + 1}`,
    category,
    url,
  }))
);

const categories = ['Toutes', 'BTP', 'Industrie', 'Télécoms'];

const projectLinks: Record<string, string> = {
  BTP: '/projets/batiment',
  Industrie: '/projets/industrie',
  Télécoms: '/projets/telecoms',
};

export default function GaleriePage() {
  const [filter, setFilter] = useState('Toutes');
  const filtered = filter === 'Toutes' ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen pt-48 pb-20 bg-dark flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 mt-12 flex flex-col items-center text-center w-full">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa fa-image text-primary text-lg"></i>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-wide">Galerie</h1>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                filter === cat
                  ? 'bg-primary text-dark'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <Link
              key={item.id}
              href={projectLinks[item.category] || '#'}
              className="rounded-2xl h-64 relative group cursor-pointer overflow-hidden animate-fade-in-up bg-white/[0.03] block"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <span className="text-primary text-xs uppercase tracking-widest font-medium">{item.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
