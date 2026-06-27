'use client';

import { useState } from 'react';

const images: Record<string, string[]> = {
  Web: [
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  ],
  Mobile: [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
  ],
  Logiciel: [
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=600&h=400&fit=crop',
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

const categories = ['Toutes', 'Web', 'Mobile', 'Logiciel'];

export default function GaleriePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState('Toutes');
  const filtered = filter === 'Toutes' ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen pt-48 pb-20 bg-dark flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 mt-12 flex flex-col items-center text-center w-full">
        <div className="text-center mb-14 animate-fade-in">
          <span className="text-primary font-heading font-semibold text-xs uppercase tracking-[0.25em]">
            Nos realisations
          </span>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Galerie
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setSelected(item.url)}
              className="rounded-xl h-64 relative group cursor-pointer overflow-hidden border border-white/5 bg-white/[0.02]"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12">
                <h3 className="text-white font-heading font-bold text-lg mb-1">{item.title}</h3>
                <span className="text-primary text-xs uppercase tracking-wider">{item.category}</span>
              </div>
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
