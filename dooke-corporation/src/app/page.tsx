'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { carouselSlides, presentation, activities, groupe, dookeWorksActivities, dookeConsultingActivities, clients } from '@/data/content';

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % carouselSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const sectionImages = [
    'from-neutral-800 via-amber-900/30 to-neutral-900',
    'from-neutral-800 via-orange-900/30 to-neutral-900',
    'from-neutral-800 via-blue-900/30 to-neutral-900',
    'from-neutral-800 via-emerald-900/30 to-neutral-900',
  ];

  return (
    <div>
      {/* ========== HERO CAROUSEL ========== */}
      <section className="relative h-screen overflow-hidden">
        {carouselSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
            <div className="absolute inset-0 bg-black/60" />
            {i === current && (
              <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 animate-fade-in-up">
                <div className="bg-primary/10 backdrop-blur-sm text-primary text-xs font-semibold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6 border border-primary/20">
                  Holding multisectorielle
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-4 text-center">
                  {slide.title}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-primary font-light tracking-wider mb-3 text-center">
                  {slide.subtitle}
                </p>
                <p className="text-base sm:text-lg text-white/50 font-light tracking-wide text-center">
                  {slide.description}
                </p>
                <div className="mt-10 flex gap-4">
                  <Link
                    href="/presentation"
                    className="bg-primary text-dark font-bold px-8 py-3 rounded-xl hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/20"
                  >
                    En savoir plus
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white/20 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-all"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50 w-2.5'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ========== BIENVENUE ========== */}
      <section className="py-20 md:py-28 flex justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Qui sommes-nous</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-6">{presentation.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          {presentation.paragraphs.map((p, i) => (
            <p key={i} className="text-white/60 text-base md:text-lg leading-relaxed mb-4">{p}</p>
          ))}
          <Link
            href="/presentation"
            className="inline-flex items-center gap-2 bg-primary text-dark font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all mt-2"
          >
            En savoir plus <i className="fa fa-arrow-right text-sm"></i>
          </Link>
          <div className="mt-12 relative h-48 md:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-900/20 via-neutral-800 to-neutral-900 border border-white/5 max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <i className="fa fa-building text-primary text-2xl"></i>
                </div>
                <p className="text-white/20 text-sm">Dooke Corporation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NOS ACTIVITÉS ========== */}
      <section className="py-20 md:py-28 bg-white/[0.02] flex justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Notre vision</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-6">{activities.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          {activities.paragraphs.map((p, i) => (
            <p key={i} className="text-white/60 text-base md:text-lg leading-relaxed mb-4">{p}</p>
          ))}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="https://dooke-works.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-dark font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all"
            >
              <i className="fa fa-industry"></i> Dooke Works
            </a>
            <a
              href="https://dooke-consulting.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
            >
              <i className="fa fa-code"></i> Dooke Consulting
            </a>
          </div>
          <div className="mt-12 relative h-48 md:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-900/20 via-neutral-800 to-neutral-900 border border-white/5 max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <i className="fa fa-cogs text-primary text-2xl"></i>
                </div>
                <p className="text-white/20 text-sm">Deux divisions complémentaires</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 flex justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Notre identité</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-6">{groupe.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          {groupe.paragraphs.map((p, i) => (
            <p key={i} className="text-white/60 text-base md:text-lg leading-relaxed mb-4">{p}</p>
          ))}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {groupe.highlights.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm">
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/groupe"
            className="inline-flex items-center gap-2 bg-primary text-dark font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all mt-6"
          >
            Découvrir le groupe <i className="fa fa-arrow-right text-sm"></i>
          </Link>
          <div className="mt-12 relative h-48 md:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 via-neutral-800 to-neutral-900 border border-white/5 max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <i className="fa fa-users text-primary text-2xl"></i>
                </div>
                <p className="text-white/20 text-sm">Une équipe pluridisciplinaire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DOOKE WORKS CARDS ========== */}
      <section className="py-20 md:py-28 bg-white/[0.02] flex justify-center w-full">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Division technique</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Dooke Works</h2>
            <p className="text-white/40 mt-3 max-w-2xl mx-auto">
              Activités techniques et industrielles  BTP, Industrie, Télécoms, Sécurité
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dookeWorksActivities.map((item, idx) => (
              <div
                key={item.title}
                className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-500"
              >
                <div className={`h-36 bg-gradient-to-br ${sectionImages[idx]} flex items-center justify-center`}>
                  <div className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                    <i className={`fa ${item.icon} text-primary text-2xl`}></i>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://dooke-works.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-dark font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all"
            >
              Voir toutes nos activités <i className="fa fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ========== DOOKE CONSULTING CARDS ========== */}
      <section className="py-20 md:py-28 flex justify-center w-full">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Division numérique</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Dooke Consulting</h2>
            <p className="text-white/40 mt-3 max-w-2xl mx-auto">
              Services numériques — Développement logiciel, Web, Mobile, Maintenance
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dookeConsultingActivities.map((item) => (
              <div
                key={item.title}
                className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Image fictive */}
                <div className={`h-36 bg-gradient-to-br from-purple-900/20 via-neutral-800 to-neutral-900 flex items-center justify-center`}>
                  <div className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                    <i className={`fa ${item.icon} text-primary text-2xl`}></i>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://dooke-consulting.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-xl hover:bg-primary/10 transition-all"
            >
              Voir tous nos services <i className="fa fa-arrow-right text-sm"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ========== NOS CLIENTS ========== */}
      <section className="py-20 md:py-28 bg-white/[0.02] flex justify-center w-full">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Ils nous font confiance</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Nos clients</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-5" />
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-12 py-4">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="flex-shrink-0 bg-white/[0.03] border border-white/10 rounded-xl h-20 min-w-[160px] flex items-center justify-center px-6 hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-300"
                >
                  <span className="text-white/40 hover:text-white/70 text-sm font-semibold text-center transition-colors whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
