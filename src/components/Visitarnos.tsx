import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  Navigation,
  Compass,
  AlertCircle,
} from 'lucide-react';

export const Visitarnos: React.FC = () => {
  return (
    <section
      id="visitanos"
      aria-label="Información y visitas"
      className="py-20 md:py-32 bg-[#211F1C] text-[#F3EEE5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#F3EEE5]/15">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#BC9B74] font-semibold mb-4">
              <span className="font-editorial text-sm italic text-[#873C2F]">07</span>
              <span>Localización & Reservas</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02]">
              Nos vemos en <span className="italic text-[#BC9B74]">Gros.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#F3EEE5]/75 max-w-md leading-relaxed">
            A escasos minutos de la playa de Zurriola y de la ría del Urumea. En
            una de las zonas gastronómicas con más pulso de Donostia.
          </p>
        </div>

        {/* 2-Column Split: Info & Actions (left) + Stylized Editorial Map (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Details & Real Action Buttons (6 cols) */}
          <div className="lg:col-span-6 space-y-10">
            {/* Primary Action Buttons */}
            <div className="p-7 sm:p-8 bg-[#282623] border border-[#F3EEE5]/15 rounded-sm space-y-6">
              <div>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#BC9B74]">
                  Gestión directa
                </span>
                <h3 className="font-editorial text-3xl text-[#F3EEE5] mt-1">
                  Reserva tu mesa en sala
                </h3>
                <p className="text-xs sm:text-sm text-[#F3EEE5]/75 mt-2 leading-relaxed">
                  Para mesas de sala recomendamos reservar con antelación a
                  través de nuestra página oficial en TheFork. Para la barra de
                  pintxos, atendemos por orden de llegada.
                </p>
              </div>

              {/* Action Buttons Group */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={RESTAURANT_INFO.theForkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold tracking-wider uppercase text-[#F3EEE5] bg-[#873C2F] hover:bg-[#6e2f24] rounded-xs shadow-md transition-all text-center"
                >
                  <span>Reservar en TheFork</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold tracking-wider uppercase text-[#F3EEE5] border border-[#F3EEE5]/30 hover:border-[#BC9B74] hover:text-[#BC9B74] rounded-xs transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-[#BC9B74]" />
                  <span>{RESTAURANT_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#BC9B74] hover:text-[#F3EEE5] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir en Google Maps para indicaciones paso a paso →</span>
                </a>
              </div>
            </div>

            {/* Address & Hours Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address */}
              <div className="p-6 bg-[#282623]/60 border border-[#F3EEE5]/10 rounded-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BC9B74] mb-3">
                  <MapPin className="w-4 h-4 text-[#873C2F]" />
                  <span>Dirección</span>
                </div>
                <p className="font-editorial text-2xl text-[#F3EEE5] leading-snug">
                  {RESTAURANT_INFO.address}
                </p>
                <p className="text-xs text-[#F3EEE5]/70 mt-1">
                  Barrio de {RESTAURANT_INFO.neighborhood}
                </p>
                <p className="text-xs text-[#F3EEE5]/70">
                  {RESTAURANT_INFO.city}
                </p>
                <p className="text-[11px] text-[#BC9B74]/80 italic mt-3 pt-3 border-t border-[#F3EEE5]/10">
                  * {RESTAURANT_INFO.addressNote}
                </p>
              </div>

              {/* Horarios */}
              <div className="p-6 bg-[#282623]/60 border border-[#F3EEE5]/10 rounded-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BC9B74] mb-3">
                  <Clock className="w-4 h-4 text-[#873C2F]" />
                  <span>Horarios habituales</span>
                </div>
                <div className="space-y-3 text-xs">
                  {RESTAURANT_INFO.hours.map((h, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="font-medium text-[#F3EEE5]">{h.days}</span>
                      <span className="text-[#F3EEE5]/65 font-mono text-[11px]">
                        {h.shifts}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#BC9B74]/80 italic mt-3 pt-3 border-t border-[#F3EEE5]/10">
                  * {RESTAURANT_INFO.hoursNotice}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Editorial Map of Gros (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-[#282623] border border-[#F3EEE5]/15 rounded-sm p-7 sm:p-8 flex flex-col justify-between">
              {/* Map header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F3EEE5]/10 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#BC9B74]">
                  <Compass className="w-4 h-4 text-[#873C2F]" />
                  <span>DONOSTIA · DISTRITO GROS</span>
                </div>
                <span className="text-[11px] text-[#F3EEE5]/50">43.3236° N, 1.9734° W</span>
              </div>

              {/* Stylized Visual Map Vector Rendering */}
              <div className="relative aspect-4/3 w-full bg-[#1c1a18] rounded-xs overflow-hidden border border-[#F3EEE5]/10 p-6 flex flex-col justify-between">
                {/* Sea / Cantabrian Gulf Graphic */}
                <div className="absolute top-0 inset-x-0 h-16 bg-[#2c3d36]/40 border-b border-[#46534B]/40 flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#BC9B74]/60 font-mono">
                    MAR CANTÁBRICO · PLAYA DE ZURRIOLA
                  </span>
                </div>

                {/* Grid Lines resembling street plan */}
                <div className="relative z-10 pt-16 flex-1 flex flex-col justify-around py-4 opacity-40 pointer-events-none">
                  <div className="h-[1px] bg-[#F3EEE5]/20 w-full" />
                  <div className="h-[1px] bg-[#F3EEE5]/20 w-full" />
                  <div className="h-[1px] bg-[#F3EEE5]/20 w-full" />
                </div>

                {/* Point: KBZÓN HAUNDI Location Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-6 h-6 bg-[#873C2F] rounded-full border-2 border-[#F3EEE5] shadow-lg flex items-center justify-center animate-pulse" />
                    <div className="absolute -inset-2 rounded-full border border-[#873C2F]/50 pointer-events-none" />
                  </div>
                  <div className="mt-2 bg-[#211F1C]/95 border border-[#BC9B74]/60 px-3 py-1.5 rounded-xs shadow-md text-center whitespace-nowrap">
                    <p className="font-editorial text-sm text-[#F3EEE5] font-semibold leading-none">
                      KBZÓN HAUNDI
                    </p>
                    <p className="text-[9px] uppercase tracking-wider text-[#BC9B74] mt-0.5">
                      Gran Vía, 30 · Gros
                    </p>
                  </div>
                </div>

                {/* Neighborhood reference landmarks */}
                <div className="relative z-10 flex items-center justify-between text-[10px] text-[#F3EEE5]/60 pt-4 border-t border-[#F3EEE5]/10">
                  <span>← Puente del Kursaal</span>
                  <span>Plaza Vasconia →</span>
                </div>
              </div>

              {/* Directions Prompt */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#F3EEE5]/75">
                  <p className="font-medium text-[#F3EEE5]">Fácil acceso a pie:</p>
                  <p>A 4 min de Zurriola y 10 min de la Parte Vieja por el Kursaal.</p>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#211F1C] bg-[#BC9B74] hover:bg-[#F3EEE5] rounded-xs transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Cómo llegar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
