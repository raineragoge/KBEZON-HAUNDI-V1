import React, { useState, useMemo } from 'react';
import {
  MENU_ITEMS,
  PORTION_CONCEPTS,
  MenuCategory,
  MenuItem,
} from '../data/menuData';
import { filterMenuByCategory, searchMenuItems } from '../utils/menuUtils';
import { Search, Sparkles, Filter, Wine, Flame, Clock } from 'lucide-react';

export const LaCarta: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: MenuCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'Toda la propuesta' },
    { key: 'pintxos', label: 'Pintxos' },
    { key: 'medias', label: 'Medias raciones' },
    { key: 'raciones', label: 'Raciones' },
    { key: 'bebidas', label: 'Bebidas y vinos' },
  ];

  // Filtered items computed memo
  const displayedItems = useMemo(() => {
    let result = filterMenuByCategory(MENU_ITEMS, activeCategory);
    if (searchQuery.trim()) {
      result = searchMenuItems(result, searchQuery);
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="carta"
      aria-label="La carta del restaurante"
      className="py-20 md:py-32 bg-[#F3EEE5] text-[#211F1C]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#211F1C]/15">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#46534B] font-semibold mb-4">
              <span className="font-editorial text-sm italic text-[#873C2F]">04</span>
              <span>Propuesta Gastronómica</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02]">
              Para probar. Para compartir.{' '}
              <span className="italic text-[#873C2F]">Para repetir.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#211F1C]/75 max-w-md leading-relaxed">
            Una carta viva, cambiante según lonja y mercado de proximidad.
            Diseñada para construir tu propia experiencia al ritmo que prefieras.
          </p>
        </div>

        {/* Concept Cards: Pintxo vs Media vs Ración */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PORTION_CONCEPTS.map((concept) => (
            <div
              key={concept.type}
              className={`p-6 rounded-sm border transition-all ${
                activeCategory === concept.type
                  ? 'bg-white border-[#873C2F] shadow-sm'
                  : 'bg-[#EAE4D9]/60 border-[#211F1C]/10 hover:border-[#BC9B74]'
              }`}
            >
              <div className="text-xs uppercase tracking-wider font-semibold text-[#873C2F] mb-1">
                {concept.subtitle}
              </div>
              <h3 className="font-editorial text-2xl text-[#211F1C] mb-2">
                {concept.title}
              </h3>
              <p className="text-xs text-[#211F1C]/75 leading-relaxed mb-4">
                {concept.description}
              </p>
              <div className="pt-3 border-t border-[#211F1C]/10 text-[11px] font-medium text-[#46534B]">
                {concept.idealFor}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-[#211F1C]/10">
          {/* Category Tabs */}
          <div
            role="tablist"
            aria-label="Filtrar platos por categoría"
            className="flex flex-wrap items-center gap-2"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-xs transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#211F1C] text-[#F3EEE5] shadow-xs'
                      : 'bg-[#EAE4D9] text-[#211F1C]/80 hover:bg-[#BC9B74]/20 hover:text-[#211F1C]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#211F1C]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por plato o ingrediente..."
              aria-label="Buscar en la carta"
              className="w-full bg-[#EAE4D9]/80 border border-[#211F1C]/15 rounded-xs pl-10 pr-4 py-2 text-xs text-[#211F1C] placeholder:text-[#211F1C]/50 focus:outline-hidden focus:border-[#873C2F] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#211F1C]/60 hover:text-[#211F1C]"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Menu Items List - Editorial Printed Sheet Layout */}
        {displayedItems.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-[#211F1C]/20 rounded-sm">
            <p className="font-editorial text-2xl text-[#211F1C] mb-2">
              No encontramos platos con «{searchQuery}»
            </p>
            <p className="text-xs text-[#211F1C]/60 mb-4">
              Prueba con otra palabra clave o selecciona otra categoría.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F3EEE5] bg-[#211F1C] rounded-xs"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="group relative pb-6 border-b border-[#211F1C]/12 flex flex-col justify-between"
              >
                <div>
                  {/* Category and portion type */}
                  <div className="flex items-center justify-between gap-4 mb-1.5">
                    <span className="text-[11px] uppercase tracking-widest text-[#873C2F] font-semibold">
                      {item.portionType}
                    </span>
                    {item.isFeatured && (
                      <span className="text-[10px] uppercase tracking-wider text-[#46534B] font-mono">
                        Plato estrella
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-editorial text-2xl text-[#211F1C] group-hover:text-[#873C2F] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#211F1C]/75 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Footer details: ingredients and allergens */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-[#211F1C]/60">
                  {item.ingredients && item.ingredients.length > 0 && (
                    <div className="truncate max-w-xs sm:max-w-md">
                      <span className="text-[#211F1C]/80 font-medium">Base:</span>{' '}
                      {item.ingredients.join(', ')}
                    </div>
                  )}

                  {item.allergens && item.allergens.length > 0 && (
                    <span className="text-[#873C2F]/80">
                      Alérgenos: {item.allergens.join(' · ')}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Editorial Footnote / Market Notice */}
        <div className="mt-16 p-6 md:p-8 bg-[#EAE4D9] rounded-sm border border-[#211F1C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-editorial text-xl text-[#211F1C] mb-1">
              Sugerencias fuera de carta y mercado diario
            </h4>
            <p className="text-xs text-[#211F1C]/70 leading-relaxed">
              Cada semana preparamos elaboraciones especiales en función del
              pescado desembarcado en Pasajes y Getaria, así como setas y verduras
              de temporada. Consulta la pizarra de barra a tu llegada.
            </p>
          </div>

          <a
            href="tel:+34943142717"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#211F1C] border border-[#211F1C]/30 hover:border-[#873C2F] hover:text-[#873C2F] rounded-xs whitespace-nowrap shrink-0 transition-colors"
          >
            <span>Consultar disponibilidad</span>
          </a>
        </div>
      </div>
    </section>
  );
};
