'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { company } from '@/data/content';

const activityLinks = [
  { label: "Bâtiments & TP", href: '/presentation' },
  { label: 'Industries on/offshore', href: '/presentation' },
  { label: 'Télécommunications', href: '/presentation' },
  { label: 'Mise en sécurité', href: '/presentation' },
  { label: 'Formations', href: '/presentation' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="hidden md:flex bg-primary text-white text-xs font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-end h-9 gap-6">
          <a href={`mailto:${company.email}`} className="hover:opacity-80 transition flex items-center gap-1.5">
            <i className="fa fa-envelope"></i>{company.email}
          </a>
          <a href={`tel:${company.phones[0].number.replace(/\s/g, '')}`} className="hover:opacity-80 transition flex items-center gap-1.5">
            <i className="fa fa-phone"></i>{company.phones[0].number}
          </a>
          <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <i className="fa fa-linkedin text-sm"></i>
          </a>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg' : 'bg-dark'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:bg-primary-dark transition-colors">
              <span className="text-white font-black text-sm tracking-tight">DW</span>
            </div>
            <span className="text-white font-bold text-lg tracking-wide hidden sm:block">Dooke Works</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-white/80 text-sm font-medium px-5 py-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/presentation" className="text-white/80 text-sm font-medium px-5 py-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors">
              Présentation
            </Link>
            <div className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}>
              <button className="text-white/80 text-sm font-medium px-5 py-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors flex items-center gap-1.5">
                Nos activités <i className="fa fa-chevron-down text-[10px]"></i>
              </button>
              {dropdown && (
                <div className="absolute top-full left-0 mt-1 bg-dark/95 backdrop-blur-sm border border-white/10 rounded-xl py-2 min-w-[220px] shadow-xl">
                  {activityLinks.map((a) => (
                    <Link key={a.label} href={a.href}
                      className="block px-4 py-2.5 text-white/70 hover:text-primary hover:bg-white/5 transition text-sm">
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative"
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}>
              <button className="text-white/80 text-sm font-medium px-5 py-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors flex items-center gap-1.5">
                Galeries <i className="fa fa-chevron-down text-[10px]"></i>
              </button>
              <div className="absolute top-full left-0 mt-1 bg-dark/95 backdrop-blur-sm border border-white/10 rounded-xl py-2 min-w-[180px] shadow-xl opacity-0 pointer-events-none">
                <Link href="/galerie" className="block px-4 py-2.5 text-white/70 hover:text-primary hover:bg-white/5 transition text-sm">
                  Photos
                </Link>
                <Link href="/galerie" className="block px-4 py-2.5 text-white/70 hover:text-primary hover:bg-white/5 transition text-sm">
                  Vidéos
                </Link>
              </div>
            </div>
            <Link href="/references" className="text-white/80 text-sm font-medium px-5 py-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors">
              Nos références
            </Link>
            <Link href="/contact" className="text-white/80 text-sm font-medium px-5 py-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <button className="lg:hidden text-white text-xl p-2 hover:text-primary transition-colors"
            onClick={() => setOpen(!open)} aria-label="Menu">
            <i className={`fa ${open ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-dark border-t border-white/5 px-4 pb-4">
            <Link href="/" className="block text-white/80 text-sm py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" onClick={() => setOpen(false)}>Accueil</Link>
            <Link href="/presentation" className="block text-white/80 text-sm py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" onClick={() => setOpen(false)}>Présentation</Link>
            <div className="text-white/50 text-xs uppercase tracking-wider px-3 py-2">Nos activités</div>
            {activityLinks.map((a) => (
              <Link key={a.label} href={a.href}
                className="block text-white/70 text-sm py-2 px-6 rounded-lg hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                {a.label}
              </Link>
            ))}
            <Link href="/galerie" className="block text-white/80 text-sm py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" onClick={() => setOpen(false)}>Galerie</Link>
            <Link href="/references" className="block text-white/80 text-sm py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" onClick={() => setOpen(false)}>Nos références</Link>
            <Link href="/contact" className="block text-white/80 text-sm py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </div>
  );
}
