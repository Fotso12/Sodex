import Link from 'next/link';
import { company, navLinks } from '@/data/content';

export default function Footer() {
  const allLinks = navLinks.flatMap((l) => ('dropdown' in l ? [...l.dropdown] : [l]));

  return (
    <footer className="bg-dark text-white/80 pt-16 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-16 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-primary flex items-center justify-center w-10 h-10 rounded-lg shadow-lg">
                <span className="text-dark font-bold text-lg">DW</span>
              </div>
              <span className="text-white font-extrabold tracking-widest text-lg">DOOKE WORKS</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm">
                <i className="fa fa-map-marker text-primary mt-1 w-4 text-center"></i>
                <span className="text-white/70">Abidjan, Côte d&apos;Ivoire</span>
              </div>
              {company.phones.slice(0, 1).map((p) => (
                <div key={p.country} className="flex items-start gap-3 text-sm">
                  <i className="fa fa-phone text-primary mt-1 w-4 text-center"></i>
                  <a href={`tel:${p.number.replace(/\s/g, '')}`} className="text-white/70 hover:text-primary transition-colors">
                    {p.number}
                  </a>
                </div>
              ))}
              <div className="flex items-start gap-3 text-sm">
                <i className="fa fa-envelope text-primary mt-1 w-4 text-center"></i>
                <a href={`mailto:${company.email}`} className="text-white/70 hover:text-primary transition-colors">
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {allLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-primary hover:pl-1 transition-all text-sm block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors / Social */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-6">Réseaux sociaux</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary hover:pl-1 transition-all text-sm block py-1"
                >
                  <i className="fa fa-linkedin mr-2"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col items-center text-white/50 text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} Dooke Works. Une division de Dooke Corporation.</p>
        </div>
      </div>
    </footer>
  );
}
