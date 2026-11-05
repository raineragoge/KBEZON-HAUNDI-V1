import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowDown, ArrowUpRight, UtensilsCrossed } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      aria-label="Presentación principal"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex-1 flex flex-col justify-center">
        {/* Asymmetric 12-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Zone: Typography & Narrative (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location & Concept Kicker */}
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#873C2F] font-semibold mb-6">
              <span>{RESTAURANT_INFO.neighborhood}</span>
              <span aria-hidden="true" className="text-[#BC9B74]">·</span>
              <span>{RESTAURANT_INFO.city.split('–')[0]}</span>
              <span aria-hidden="true" className="text-[#BC9B74]">·</span>
              <span className="text-[#46534B]">Gastrobar</span>
            </div>

            {/* Huge Editorial Headline */}
            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#211F1C] tracking-tight leading-[0.95] mb-6">
              Cocina con <br />
              <span className="italic font-normal text-[#873C2F]">carácter.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#211F1C]/80 font-normal leading-relaxed max-w-xl mb-10">
              «Una forma muy nuestra de entender el buen comer.»
            </p>

            {/* Narrative text note */}
            <p className="text-sm md:text-base text-[#211F1C]/70 leading-relaxed max-w-lg mb-10">
              Pintxos en barra, medias raciones para compartir y platos de fondo
              con raíces vascas y guiños viajeros. En pleno corazón de Gros.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#carta"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#F3EEE5] bg-[#211F1C] hover:bg-[#873C2F] rounded-sm transition-colors shadow-xs"
              >
                <span>Descubre la carta</span>
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#BC9B74]" />
              </a>

              <a
                href={RESTAURANT_INFO.theForkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#211F1C] border border-[#211F1C]/30 hover:border-[#873C2F] hover:text-[#873C2F] bg-transparent rounded-sm transition-colors"
              >
                <span>Reserva tu mesa</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Micro annotations */}
            <div className="mt-12 pt-6 border-t border-[#211F1C]/10 flex flex-wrap items-center gap-6 text-xs text-[#211F1C]/60">
              <div>
                <span className="font-semibold text-[#211F1C]">Barra & Sala:</span>{' '}
                Pintxos al momento
              </div>
              <span aria-hidden="true" className="text-[#BC9B74]">·</span>
              <div>
                <span className="font-semibold text-[#211F1C]">Ubicación:</span>{' '}
                {RESTAURANT_INFO.address}
              </div>
            </div>
          </div>

          {/* Right Zone: Large Format Gastronomic Photography (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              {/* Asymmetric offset frame */}
              <div className="absolute -inset-3 border border-[#BC9B74]/40 rounded-sm -rotate-1 pointer-events-none transition-transform duration-500 group-hover:rotate-0" />
              
              <div className="relative overflow-hidden rounded-sm bg-[#211F1C]/5 shadow-xl aspect-4/3 sm:aspect-5/4 lg:aspect-4/5">
                <img
                  src="/src/assets/images/hero_gastrobar_dish_1793876637326.jpg"
                  alt="Propuesta gastronómica de autor en KBZÓN HAUNDI - Gamba roja sobre tosta con emulsión cítrica"
                  className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle scrim and editorial caption badge */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#211F1C]/90 via-[#211F1C]/40 to-transparent text-[#F3EEE5]">
                  <p className="text-[11px] uppercase tracking-widest text-[#BC9B74] font-medium">
                    Pintxo & Parrilla
                  </p>
                  <p className="font-editorial text-lg text-[#F3EEE5] leading-snug">
                    Producto noble, brasa limpia y punto exacto.
                  </p>
                </div>
              </div>

              {/* Editorial Stamp Badge */}
              <div className="absolute -top-4 -right-4 bg-[#F3EEE5] border border-[#211F1C]/15 rounded-full p-2.5 shadow-md flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={RESTAURANT_INFO.logoUrl}
                    alt="Sello original KBZÓN HAUNDI"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discrete Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-8 flex items-center justify-between text-xs text-[#211F1C]/50">
        <div className="flex items-center gap-2">
          <span className="font-editorial text-sm italic text-[#873C2F]">01</span>
          <span>Editorial Gastrobar · Donostia</span>
        </div>
        <a
          href="#manifiesto"
          className="flex items-center gap-2 hover:text-[#873C2F] transition-colors py-1"
          aria-label="Desplazarse a la sección Manifiesto"
        >
          <span className="hidden sm:inline">Desplazar hacia abajo</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#873C2F]" />
        </a>
      </div>
    </section>
  );
};
