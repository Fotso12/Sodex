'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { carouselSlides, company, presentation, activities, values, clients, pourquoiNous, methodology, addresses } from '@/data/content';

const stats = [
  { value: '10+', label: "Ans d'expertise" },
  { value: '200+', label: 'Projets digitaux' },
  { value: '50+', label: 'Clients' },
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
      <section className="relative h-screen w-full overflow-hidden">
        {carouselSlides.map((s, i) => (
          <div key={i}
            className={`absolute inset-0 bg-gradient-to-br ${s.gradient} transition-opacity duration-1000 ease-in-out ${i === slide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
        ))}
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <span className="inline-block border border-primary/40 text-primary font-heading font-semibold text-xs uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              Innovation numerique
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl text-white mb-4 animate-fade-in-up">DOOKE CONSULTING</h1>
            <p className="text-primary font-heading font-bold text-xl sm:text-2xl md:text-3xl mb-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {company.slogan}
            </p>
            <p key={slide} className="text-lg sm:text-xl text-gray-300 font-light mb-10 animate-fade-in">
              {carouselSlides[slide].subtitle}
            </p>
            <Link href="/presentation"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-lg hover:bg-primary-dark transition-all text-base hover:shadow-lg hover:shadow-primary/25">
              Decouvrir nos services <i className="fa fa-arrow-right text-sm"></i>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-20">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex justify-center gap-8 md:gap-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-black text-2xl md:text-3xl text-primary">{stat.value}</div>
                  <div className="text-gray-400 text-xs md:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {carouselSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`rounded-full transition-all duration-300 ${i === slide ? 'bg-primary w-8 h-2.5' : 'bg-white/30 hover:bg-white/50 w-2.5 h-2.5'}`}
              aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* ========== POURQUOI NOUS ========== */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white">POURQUOI NOUS ?</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {pourquoiNous.map((item) => (
              <a key={item.title} href={item.href}
                className="group cursor-pointer">
                <div className="w-24 h-24 mx-auto border-2 border-white/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 mb-4">
                  <i className={`fa ${item.icon} text-2xl text-white group-hover:text-white transition-colors`}></i>
                </div>
                <h6 className="font-heading font-bold text-sm text-white/60 uppercase tracking-wider">{item.title}</h6>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== QUI SOMMES-NOUS ========== */}
      <section className="py-20 md:py-28 bg-white/[0.02]" id="about">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="section_title">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-2">Qui sommes-nous ?</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="text-primary italic text-lg mb-6 font-heading font-semibold">
            &quot;Notre mission est de créer de la valeur ajoutée chez nos clients par des solutions digitales adaptées.&quot; — The Managing Director.
          </div>
          {presentation.paragraphs.map((p, i) => (
            <p key={i} className="text-white/60 mb-4 leading-relaxed">{p}</p>
          ))}
          <div className="mt-12 relative h-48 md:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-dark to-dark border border-white/5 max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <i className="fa fa-code text-primary text-2xl"></i>
                </div>
                <p className="text-white/20 text-sm">Innovation digitale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NOS VALEURS ========== */}
      <section className="py-20 md:py-28 relative bg-cover bg-center" id="values"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85))' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white">Nos valeurs</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title}
                className="relative bg-black/70 border border-white/10 p-8 text-center group hover:border-primary/50 transition-all duration-500">
                <span className="line vertical top left"></span>
                <span className="line horizontal top left"></span>
                <span className="line vertical bottom right"></span>
                <span className="line horizontal bottom right"></span>
                <div className="font-heading font-black text-lg uppercase text-white mb-6">{v.title}</div>
                <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
                <p className="text-primary-light text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NOTRE EXPERTISE ========== */}
      <section className="py-20 md:py-28" id="expertise">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white">Notre Expertise</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: 'fa-refresh', title: 'Refonte des\nApplications', desc: "Nous adaptons vos applications existantes pour satisfaire à vos besoins actuels, tout en optimisant la qualité, la fiabilité et les performances." },
              { img: 'fa-bug', title: 'Correction des\nbugs applicatifs', desc: "Nous résolvons les dysfonctionnements techniques et fonctionnels de vos logiciels, afin d'améliorer leur rendement en production." },
              { img: 'fa-arrow-up', title: 'Migration des\ntechnologies', desc: "Nos ingénieurs mettent à niveau vos applications avec des concepts, des architectures et des technologies innovantes à forte valeur ajoutée." },
              { img: 'fa-cubes', title: 'Développement\nde microservices', desc: "Nous mettons en œuvre des services puissants, faiblement couplés et facile à intégrer pour résoudre des problématiques complexes." },
            ].map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-500">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <i className={`fa ${item.img} text-primary text-2xl`}></i>
                </div>
                <h4 className="text-white font-heading font-bold text-sm uppercase mb-3 leading-tight whitespace-pre-line">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NOS SERVICES ========== */}
      <section className="py-20 md:py-28" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white">Nos Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            <p className="text-white/40 mt-4 max-w-3xl mx-auto">
              Nous offrons des services complets en ingénierie logicielle, notamment le développement d&apos;applications et la maintenance corrective et évolutive de votre système d&apos;information.
            </p>
          </div>
          {activities.map((act) => (
            <div key={act.title} className="mb-12 last:mb-0 text-center">
              <h3 key={act.title} className="bg-primary text-white font-heading font-bold text-base px-6 py-3 inline-block mb-4">{act.title}</h3>
              <p className="text-white/60 mb-4 max-w-3xl mx-auto">{act.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== NOTRE DÉMARCHE ========== */}
      <section className="py-20 md:py-28 relative" id="methodology"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85))' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white">NOTRE DÉMARCHE</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((m) => (
              <div key={m.title} className="border border-white/10 p-6 text-center hover:border-primary/30 transition-all duration-500">
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <i className={`fa ${m.icon} text-primary text-xl`}></i>
                </div>
                <h4 className="text-white font-heading font-bold text-sm uppercase mb-2">{m.title}</h4>
                <p className="text-white/50 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NOTRE ÉQUIPE ========== */}
      <section className="py-20 md:py-28" id="team">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-2">Notre équipe</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-white/60 leading-relaxed mb-4">
            Nos équipes sont constituées de petits groupes autonomes disposant de compétences transversales, qui leur permettent de se compenser mutuellement et de former des unités complètes de livraison.
          </p>
          <p className="text-white/60 leading-relaxed mb-4">
            Chaque groupe est sous la supervision d&apos;un chef de groupe et d&apos;un responsable qualité qui veillent au maintien d&apos;une productivité optimale, à la qualité des livrables et à la relation avec le client.
          </p>
          <p className="text-white/60 leading-relaxed">
            Nous encourageons par ailleurs le perfectionnement de nos ingénieurs dans les technologies innovantes par des formations, pour suivre la veille technologique, gagner en agilité et améliorer notre efficacité.
          </p>
          <div className="mt-12 relative h-48 md:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-dark to-dark border border-white/5 max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fa fa-users text-primary text-5xl opacity-30"></i>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NOS CLIENTS ========== */}
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white">Ils nous font confiance</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
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

      {/* ========== NOUS ÉCRIRE ========== */}
      <section className="py-20 md:py-28 relative" id="contact"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85))' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white">Nous écrire</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          <form method="post" action="https://formspree.io/f/your-form-id" className="space-y-5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div>
                <label className="block text-gray-300 text-xs font-medium uppercase tracking-wider mb-2">Nom complet *</label>
                <input type="text" placeholder="Votre Nom" required
                  className="w-full h-12 px-5 rounded-lg bg-white text-dark text-sm border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              </div>
              <div>
                <label className="block text-gray-300 text-xs font-medium uppercase tracking-wider mb-2">Email *</label>
                <input type="email" placeholder="Votre Email" required
                  className="w-full h-12 px-5 rounded-lg bg-white text-dark text-sm border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              </div>
              <div>
                <label className="block text-gray-300 text-xs font-medium uppercase tracking-wider mb-2">Téléphone *</label>
                <input type="tel" placeholder="Votre Téléphone" required
                  className="w-full h-12 px-5 rounded-lg bg-white text-dark text-sm border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              </div>
              <div>
                <label className="block text-gray-300 text-xs font-medium uppercase tracking-wider mb-2">Pays *</label>
                <select required
                  className="w-full h-12 px-5 rounded-lg bg-white text-dark text-sm border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                  <option value="">Sélectionner...</option>
                  <option value="France">France</option>
                  <option value="Cameroun">Cameroun</option>
                  <option value="Côte d&apos;Ivoire">Côte d&apos;Ivoire</option>
                  <option value="Sénégal">Sénégal</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Maroc">Maroc</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-xs font-medium uppercase tracking-wider mb-2">Message *</label>
              <textarea placeholder="Votre Message" required rows={5}
                className="w-full px-5 py-3.5 rounded-lg bg-white text-dark text-sm border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"></textarea>
            </div>
            <div className="text-center">
              <button type="submit"
                className="bg-primary text-white font-bold px-10 py-3 rounded-lg hover:bg-primary-dark transition-all uppercase tracking-wider hover:shadow-lg hover:shadow-primary/25">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ========== CONTACT / MAP + ADRESSES ========== */}
      <footer className="bg-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-10">
            <iframe
              src="https://www.google.com/maps/embed/v1/search?q=60+Allee+des+Champs+Elysees+91080+Evry&key=AIzaSyDGIQFri3XZ5kIG_OoJwvYVH478FSY5m_w"
              className="w-full h-72 rounded-xl border border-white/20"
              allowFullScreen
              loading="lazy">
            </iframe>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addresses.map((addr) => (
              <div key={addr.country} className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                <h5 className="font-heading font-bold text-sm text-white uppercase mb-4 flex items-center gap-2">
                  <span className={`fi fi-${addr.flag?.split('.')[0]}`}></span>
                  {addr.country}
                </h5>
                <p className="text-white/50 text-sm leading-relaxed whitespace-pre-line mb-3">{addr.address}</p>
                <p className="text-white/50 text-sm">
                  <i className="fa fa-phone text-primary mr-2"></i>
                  <a href={`tel:${addr.tel?.replace(/\s/g, '')}`} className="hover:text-primary transition">{addr.tel}</a>
                </p>
                {addr.fax && (
                  <p className="text-white/50 text-sm">
                    <i className="fa fa-fax text-primary mr-2"></i>{addr.fax}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <h5 className="font-heading font-bold text-white uppercase mb-4">Suivez-nous</h5>
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-white/20 rounded-lg text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <i className="fa fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} DOOKE CONSULTING. Une division de Dooke Corporation.
        </div>
      </footer>
    </div>
  );
}
