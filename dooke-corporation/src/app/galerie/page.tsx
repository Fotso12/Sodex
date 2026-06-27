'use client';

import { useState } from 'react';

const images: Record<string, string[]> = {
  Travaux: [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1541888946425-d81bb1c1e9e2?w=600&h=400&fit=crop',
  ],
  Technologie: [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1563770551467-0ea5f7e5b4b2?w=600&h=400&fit=crop',
  ],
  Événement: [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
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

const categories = ['Toutes', 'Travaux', 'Technologie', 'Événement'];

export default function GaleriePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState('Toutes');
  const filtered = filter === 'Toutes' ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen bg-dark pt-48 pb-20 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center w-full mt-12">
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="text-primary/60 text-xs font-semibold uppercase tracking-[0.3em]">
            Nos réalisations
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Galerie
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mt-5" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary text-dark'
                  : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.1] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item.url)}
              className="relative rounded-xl h-64 overflow-hidden cursor-pointer group bg-white/[0.02]"
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12">
                <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                <span className="text-white/30 text-xs uppercase tracking-wider">{item.category}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/0 group-hover:bg-primary transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <img src={selected} alt="" className="max-w-full max-h-full rounded-2xl" />
          <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all" onClick={() => setSelected(null)}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      )}
    </div>
  );
}
