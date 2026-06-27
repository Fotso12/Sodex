'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { company } from '@/data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-white text-xs font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <span>nous contacter</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phones[0].number.replace(/\s/g, '')}`} className="hover:opacity-80 transition flex items-center gap-1.5">
              <i className="fa fa-phone-square"></i>{company.phones[0].number}
            </a>
            <a href={`mailto:${company.email}`} className="hover:opacity-80 transition flex items-center gap-1.5">
              <i className="fa fa-envelope"></i>{company.email}
            </a>
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <i className="fa fa-linkedin text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-dark/60 backdrop-blur-sm'}`}>
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-black text-sm tracking-tight">DC</span>
            </div>
            <span className="text-white font-heading font-bold text-sm md:text-base tracking-wide">DOOKE CONSULTING</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-white/80 hover:text-primary font-medium px-5 py-3 text-sm transition-colors rounded-lg hover:bg-white/5">Accueil</Link>
            <Link href="/#about" className="text-white/80 hover:text-primary font-medium px-5 py-3 text-sm transition-colors rounded-lg hover:bg-white/5">Dooke</Link>
            <Link href="/#expertise" className="text-white/80 hover:text-primary font-medium px-5 py-3 text-sm transition-colors rounded-lg hover:bg-white/5">Expertise</Link>
            <Link href="/#services" className="text-white/80 hover:text-primary font-medium px-5 py-3 text-sm transition-colors rounded-lg hover:bg-white/5">Services</Link>
            <Link href="/#contact" className="text-white/80 hover:text-primary font-medium px-5 py-3 text-sm transition-colors rounded-lg hover:bg-white/5">Contact</Link>
          </div>

          <button className="lg:hidden text-white text-xl p-2 hover:text-primary transition-colors"
            onClick={() => setOpen(!open)} aria-label="Menu">
            <i className={`fa ${open ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </nav>

        {open && (
          <div className="lg:hidden bg-dark/95 backdrop-blur-md border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link href="/" className="block py-3 text-white/80 hover:text-primary hover:bg-white/5 rounded-lg px-3 transition-colors" onClick={() => setOpen(false)}>Accueil</Link>
              <Link href="/#about" className="block py-3 text-white/80 hover:text-primary hover:bg-white/5 rounded-lg px-3 transition-colors" onClick={() => setOpen(false)}>Dooke</Link>
              <Link href="/#expertise" className="block py-3 text-white/80 hover:text-primary hover:bg-white/5 rounded-lg px-3 transition-colors" onClick={() => setOpen(false)}>Expertise</Link>
              <Link href="/#services" className="block py-3 text-white/80 hover:text-primary hover:bg-white/5 rounded-lg px-3 transition-colors" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/#contact" className="block py-3 text-white/80 hover:text-primary hover:bg-white/5 rounded-lg px-3 transition-colors" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
