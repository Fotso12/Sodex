'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { carouselSlides, company, presentation, activities, values, clients } from '@/data/content';

const stats = [
  { value: '15+', label: "Années d'expérience" },
  { value: '500+', label: 'Projets réalisés' },
  { value: '100%', label: 'Satisfaction' },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % carouselSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="relative h-screen overflow-hidden">
        {carouselSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-gradient-to-br ${s.gradient} transition-opacity duration-1000 ease-in-out`}
            style={{ opacity: i === slide ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-black text-2xl tracking-tight">DW</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-[0.15em] mb-4">
              DOOKE WORKS
            </h1>
            <p className="text-base md:text-lg text-primary font-light tracking-[0.3em] uppercase mb-10">
              {company.slogan}
            </p>
            <div className="h-14">
              <p key={slide} className="text-xl md:text-2xl text-white/70 animate-fade-in-up">
                {carouselSlides[slide].title}
                <span className="text-white/40 hidden sm:inline"> &mdash; {carouselSlides[slide].subtitle}</span>
              </p>
            </div>
          </div>

          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/presentation"
              className="inline-flex items-center gap-3 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/20">
              Découvrir nos activités <i className="fa fa-arrow-right text-sm"></i>
            </Link>
          </div>

          <div className="absolute bottom-24 left-0 right-0 px-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="max-w-2xl mx-auto grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {carouselSlides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? 'w-8 bg-primary' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
                aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== QUI SOMMES-NOUS ========== */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Qui sommes-nous</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-6">{presentation.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          {presentation.paragraphs.map((p, i) => (
            <p key={i} className="text-white/60 text-base md:text-lg leading-relaxed mb-4">{p}</p>
          ))}
          <Link href="/presentation"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all mt-2">
            En savoir plus <i className="fa fa-arrow-right text-sm"></i>
          </Link>
          <div className="mt-12 relative h-48 md:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-dark to-dark border border-white/5 max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <i className="fa fa-hard-hat text-primary text-2xl"></i>
                </div>
                <p className="text-white/20 text-sm">Expertise technique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NOS PRESTATIONS ========== */}
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Notre savoir-faire</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Nos prestations de services</h2>
            <p className="text-white/40 mt-3 max-w-2xl mx-auto">Dooke propose de nombreuses prestations de services spécialisés dans le bâtiment, l&apos;industrie, la télécommunication et la mise en sécurité.</p>
            <div className="w-16 h-1 bg-primary mx-auto mt-5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(() => {
              const pages: Record<string, string> = {
                'Bâtiment & Travaux Publics': '/projets/batiment',
                'Industrie': '/projets/industrie',
                'Télécommunications': '/projets/telecoms',
                'Mise en sécurité': '/projets/securite',
              };
              return activities.map((item) => (
                <Link key={item.title} href={pages[item.title] || '/'}
                  className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 block">
                  <div className="h-44 bg-gradient-to-br from-dark via-dark to-dark/80 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary),transparent_70%)]" />
                    <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                      <i className={`fa ${item.icon} text-primary text-3xl`}></i>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* ========== NOS VALEURS ========== */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Notre engagement</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Nos valeurs</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title}
                className="group bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <i className={`fa ${v.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NOS CLIENTS ========== */}
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-primary/80 text-xs font-semibold uppercase tracking-[0.3em]">Ils nous font confiance</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">Nos clients</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-5" />
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-12 py-4">
              {[...clients, ...clients].map((client, i) => (
                <div key={`${client}-${i}`}
                  className="flex-shrink-0 bg-white/[0.03] border border-white/10 rounded-xl h-20 min-w-[160px] flex items-center justify-center px-6 hover:bg-white/[0.06] hover:border-primary/30 transition-all duration-300">
                  <span className="text-white/40 hover:text-white/70 text-sm font-semibold text-center transition-colors whitespace-nowrap">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Prêt à réaliser votre projet ?</h2>
          <p className="text-white/40 mb-8">Contactez-nous pour discuter de vos besoins en travaux techniques et industriels.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/20">
            Nous contacter <i className="fa fa-arrow-right text-sm"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
