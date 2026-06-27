'use client';

import { useState } from 'react';
import { company } from '@/data/content';

export default function ContactPage() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ nom: '', email: '', sujet: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-48 pb-24 flex flex-col items-center">
      <div className="container mx-auto px-4 max-w-6xl w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          {/* Contact Info (Left Side) */}
          <div className="animate-fade-in-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
              <i className="fa fa-envelope"></i> Contactez-nous
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 tracking-tight">
              Parlons de votre <span className="text-primary">projet</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Que ce soit pour un devis, une question technique ou un partenariat,
              notre équipe est à votre écoute.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:-translate-y-1 transition-transform">
                <i className="fa fa-map-marker text-primary text-xl mt-1 w-6 text-center"></i>
                <div>
                  <h4 className="text-dark font-bold text-sm mb-1">Adresse</h4>
                  <p className="text-gray-500 text-sm">Dooke Works<br/>Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:-translate-y-1 transition-transform">
                <i className="fa fa-phone text-primary text-xl mt-1 w-6 text-center"></i>
                <div>
                  <h4 className="text-dark font-bold text-sm mb-1">Téléphone</h4>
                  {company.phones.slice(0, 2).map((p) => (
                    <p key={p.country} className="text-gray-500 text-sm">
                      <a href={`tel:${p.number.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{p.number}</a>
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:-translate-y-1 transition-transform">
                <i className="fa fa-envelope text-primary text-xl mt-1 w-6 text-center"></i>
                <div>
                  <h4 className="text-dark font-bold text-sm mb-1">Email</h4>
                  <p className="text-gray-500 text-sm">
                    <a href={`mailto:${company.email}`} className="hover:text-primary transition-colors">{company.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form (Right Side) */}
          <div className="bg-white rounded-[20px] p-8 md:p-10 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {sent && (
              <div className="bg-purple-100 text-purple-800 font-medium px-5 py-4 rounded-xl mb-6 flex items-center gap-3 text-sm">
                <i className="fa fa-check-circle text-lg"></i>
                Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
              </div>
            )}

            <form onSubmit={handleSubmit} className={`space-y-6 ${sent ? 'hidden' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-primary text-sm font-semibold mb-2">
                    Nom <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-[10px] px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-primary text-sm font-semibold mb-2">
                    Prénom <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-[10px] px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-primary text-sm font-semibold mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-[10px] px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-primary text-sm font-semibold mb-2">
                    Pays <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border-2 border-gray-200 rounded-[10px] px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="Votre pays"
                  />
                </div>
              </div>

              <div>
                <label className="block text-primary text-sm font-semibold mb-2">
                  Objet <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.sujet}
                  onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-[10px] px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all"
                  placeholder="Objet de votre message"
                />
              </div>
              
              <div>
                <label className="block text-primary text-sm font-semibold mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-[10px] px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold px-6 py-4 rounded-[10px] hover:bg-primary-dark transition-all flex items-center justify-center gap-2 text-base hover:-translate-y-1 hover:shadow-lg"
              >
                <i className="fa fa-paper-plane"></i>
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
