'use client';

import { useState } from 'react';
import Link from 'next/link';

const images = [
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1551817958-8b209d6e8df3?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=500&fit=crop',
  'https://images.unsplash.com/photo-1508829040597-5725f2c8d9f6?w=800&h=500&fit=crop',
];

export default function TelecomsPage() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="min-h-screen pt-36 pb-20 bg-dark">
      <div className="max-w-5xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-sm mb-8">
          <i className="fa fa-arrow-left"></i> Retour à l&apos;accueil
        </Link>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5">
              <img src={images[current]} alt="" className="w-full h-72 md:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center"><i className="fa fa-chevron-left text-sm"></i></button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center"><i className="fa fa-chevron-right text-sm"></i></button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-white/40 hover:bg-white/60'}`} />
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${i === current ? 'border-primary opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Nos projets</span>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">Télécommunications</h1>
            <div className="w-12 h-1 bg-primary mb-6" />
            <p className="text-white/60 text-base leading-relaxed mb-6">Déploiement de réseaux, installation d&apos;antennes et maintenance d&apos;infrastructures télécoms.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/50 text-sm"><i className="fa fa-check-circle text-primary mt-0.5 flex-shrink-0"></i><span>Déploiement de réseaux fibre optique et cuivre pour les opérateurs.</span></li>
              <li className="flex items-start gap-3 text-white/50 text-sm"><i className="fa fa-check-circle text-primary mt-0.5 flex-shrink-0"></i><span>Installation et maintenance de sites d&apos;antennes relais (4G, 5G).</span></li>
              <li className="flex items-start gap-3 text-white/50 text-sm"><i className="fa fa-check-circle text-primary mt-0.5 flex-shrink-0"></i><span>Gestion de projets d&apos;infrastructures télécoms clé en main.</span></li>
              <li className="flex items-start gap-3 text-white/50 text-sm"><i className="fa fa-check-circle text-primary mt-0.5 flex-shrink-0"></i><span>Interventions chez les principaux opérateurs africains.</span></li>
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-dark font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all mt-8">Demander un devis <i className="fa fa-arrow-right text-sm"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
