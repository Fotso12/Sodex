'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks, company } from '@/data/content';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="hidden md:flex bg-primary text-dark text-xs font-semibold tracking-wide justify-center">
        <div className="container mx-auto px-4 w-full flex items-center justify-center h-9 gap-6">
          <a href={`mailto:${company.email}`} className="hover:opacity-80 transition flex items-center gap-1.5">
            <i className="fa fa-envelope"></i>
            {company.email}
          </a>
          <a href={`tel:${company.phones[0].number.replace(/\s/g, '')}`} className="hover:opacity-80 transition flex items-center gap-1.5">
            <i className="fa fa-phone"></i>
            {company.phones[0].number}
          </a>
          <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
            <i className="fa fa-linkedin text-sm"></i>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg' : 'bg-dark'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
            <div className="bg-primary text-dark font-black text-xl px-3 py-1 rounded-lg">DC</div>
            <span className="text-white text-lg font-bold tracking-wider hidden sm:block">DOOKE CORPORATION</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="text-white/80 hover:text-primary font-medium px-6 py-3 text-sm tracking-wide transition-colors flex items-center gap-1.5">
                    {link.label}
                    <i className="fa fa-chevron-down text-[10px]"></i>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-dark/95 backdrop-blur-sm border border-white/10 rounded-xl py-2 min-w-[200px] shadow-xl">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-white/70 hover:text-primary hover:bg-white/5 transition text-sm"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-primary font-medium px-6 py-3 text-sm tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-dark/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="py-2">
                    <span className="text-white/50 text-xs uppercase tracking-wider px-3">{link.label}</span>
                    <div className="mt-2 ml-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 text-white/70 hover:text-primary transition text-sm"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block py-2.5 text-white/80 hover:text-primary transition font-medium px-3"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="border-t border-white/10 pt-3 pb-2 mt-3 space-y-2 px-3">
                <a href={`mailto:${company.email}`} className="block text-white/50 hover:text-primary transition text-sm">
                  <i className="fa fa-envelope mr-2"></i>{company.email}
                </a>
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="block text-white/50 hover:text-primary transition text-sm">
                  <i className="fa fa-linkedin mr-2"></i>LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
