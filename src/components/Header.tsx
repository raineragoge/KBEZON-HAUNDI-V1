import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface HeaderProps {
  onReserveClick?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Nuestra cocina', href: '#manifiesto' },
    { label: 'La carta', href: '#carta' },
    { label: 'El espacio', href: '#espacio' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Dónde estamos', href: '#visitanos' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F3EEE5]/95 backdrop-blur-md shadow-sm border-b border-[#211F1C]/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with original logo */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="KBZÓN HAUNDI - Inicio"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-[#211F1C]/20 shadow-xs bg-white shrink-0 group-hover:scale-105 transition-transform">
              <img
                src={RESTAURANT_INFO.logoUrl}
                alt="Logotipo KBZÓN HAUNDI Gastrobar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl md:text-2xl font-normal tracking-tight text-[#211F1C] leading-none">
                KBZÓN HAUNDI
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#46534B] font-medium mt-0.5">
                Gastrobar · Gros
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single line, clean text with subtle underlines) */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-8 text-[14px] font-medium tracking-wide text-[#211F1C]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#873C2F] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#873C2F] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={RESTAURANT_INFO.theForkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#F3EEE5] bg-[#873C2F] hover:bg-[#6e2f24] rounded-sm transition-colors whitespace-nowrap shadow-xs hover:shadow-md"
            >
              <span>Reservar mesa</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#211F1C] hover:text-[#873C2F] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#873C2F]"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
          className="fixed inset-0 z-50 bg-[#211F1C]/70 backdrop-blur-xs lg:hidden"
        >
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F3EEE5] shadow-2xl p-7 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#211F1C]/10">
                <div className="flex items-center gap-3">
                  <img
                    src={RESTAURANT_INFO.logoUrl}
                    alt="Logo KBZÓN HAUNDI"
                    className="w-10 h-10 rounded-full border border-[#211F1C]/20 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-editorial text-xl font-normal text-[#211F1C] leading-none">
                      KBZÓN HAUNDI
                    </p>
                    <p className="text-[10px] tracking-widest uppercase text-[#46534B] mt-0.5">
                      Gros · Donostia
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#211F1C] hover:text-[#873C2F] rounded-full"
                  aria-label="Cerrar menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-8 flex flex-col gap-6" aria-label="Enlaces móviles">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="group flex items-baseline justify-between text-2xl font-editorial text-[#211F1C] hover:text-[#873C2F] transition-colors pb-3 border-b border-[#211F1C]/8"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-sans text-[#BC9B74] font-mono">
                      0{idx + 1}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-8 border-t border-[#211F1C]/10 space-y-4">
              <a
                href={RESTAURANT_INFO.theForkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold tracking-wider uppercase text-[#F3EEE5] bg-[#873C2F] hover:bg-[#6e2f24] rounded-sm transition-colors text-center"
              >
                <span>Reservar mesa en TheFork</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-medium tracking-wide text-[#211F1C] border border-[#211F1C]/20 hover:border-[#873C2F] rounded-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#873C2F]" />
                <span>Llamar {RESTAURANT_INFO.phoneDisplay}</span>
              </a>

              <p className="text-xs text-[#211F1C]/60 text-center pt-2">
                {RESTAURANT_INFO.address} · Gros, Donostia–San Sebastián
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
