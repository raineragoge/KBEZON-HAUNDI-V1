import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowUp, ArrowUpRight, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Pie de página editorial"
      className="bg-[#211F1C] text-[#F3EEE5] pt-20 pb-12 border-t border-[#F3EEE5]/15"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Grand Headline: Hasta la próxima */}
        <div className="pb-16 border-b border-[#F3EEE5]/15">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-[#F3EEE5]">
              Hasta la <br className="hidden sm:inline" />
              <span className="italic text-[#873C2F]">próxima.</span>
            </h2>

            <div className="max-w-xs space-y-3">
              <p className="font-editorial text-2xl text-[#BC9B74] leading-snug">
                «Una cocina con carácter. Una mesa para disfrutarla.»
              </p>
              <p className="text-xs text-[#F3EEE5]/60">
                Gastrobar de cocina vasca de fusión en el barrio de Gros, Donostia–San Sebastián.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Editorial Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-[#F3EEE5]/10">
          {/* Col 1: Brand & Original Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#BC9B74] bg-white shrink-0 shadow-md">
                <img
                  src={RESTAURANT_INFO.logoUrl}
                  alt="Logotipo original KBZÓN HAUNDI"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-editorial text-2xl text-[#F3EEE5] font-normal leading-none">
                  KBZÓN HAUNDI
                </p>
                <p className="text-[11px] uppercase tracking-widest text-[#BC9B74] font-medium mt-1">
                  Gastrobar · Gros
                </p>
              </div>
            </div>
            <p className="text-xs text-[#F3EEE5]/70 leading-relaxed max-w-sm">
              Tradición culinaria vasca combinada con técnicas contemporáneas y
              producto fresco. Punto de encuentro gastronómico en Donostia.
            </p>
          </div>

          {/* Col 2: Navegación (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#BC9B74]">
              Navegación
            </p>
            <ul className="space-y-2 text-xs text-[#F3EEE5]/80">
              <li>
                <a href="#manifiesto" className="hover:text-[#BC9B74] transition-colors">
                  Nuestra cocina
                </a>
              </li>
              <li>
                <a href="#platos-protagonistas" className="hover:text-[#BC9B74] transition-colors">
                  Platos protagonistas
                </a>
              </li>
              <li>
                <a href="#carta" className="hover:text-[#BC9B74] transition-colors">
                  La carta de gastrobar
                </a>
              </li>
              <li>
                <a href="#espacio" className="hover:text-[#BC9B74] transition-colors">
                  El espacio y sala
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#BC9B74] transition-colors">
                  Maneras de vivir la mesa
                </a>
              </li>
              <li>
                <a href="#visitanos" className="hover:text-[#BC9B74] transition-colors">
                  Dónde estamos y reservas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacto & Reservas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#BC9B74]">
              Contacto & Reservas
            </p>
            <div className="space-y-2 text-xs text-[#F3EEE5]/80">
              <p>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="hover:text-[#BC9B74] transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#873C2F]" />
                  <span>{RESTAURANT_INFO.phoneDisplay}</span>
                </a>
              </p>
              <p className="text-[#F3EEE5]/70">
                {RESTAURANT_INFO.address}
                <br />
                {RESTAURANT_INFO.neighborhood}, {RESTAURANT_INFO.city}
              </p>
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.theForkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#873C2F] hover:text-[#BC9B74] font-medium"
                >
                  <span>Reservar mesa en TheFork</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Sello Gastronómico Editorial (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <div className="w-24 h-24 rounded-full border border-dashed border-[#BC9B74]/50 p-2 flex items-center justify-center text-center">
              <span className="text-[9px] uppercase tracking-widest text-[#BC9B74] leading-tight font-mono">
                EUSKAL <br />
                HERRIA <br />
                · GROS ·
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-xs text-[#F3EEE5]/70 hover:text-[#BC9B74] transition-colors cursor-pointer"
              aria-label="Volver arriba"
            >
              <span>Subir al inicio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F3EEE5]/50">
          <p>
            © {new Date().getFullYear()} KBZÓN HAUNDI Gastrobar · Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span>Donostia–San Sebastián</span>
            <span aria-hidden="true">·</span>
            <span>Cocina Vasca de Fusión</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
