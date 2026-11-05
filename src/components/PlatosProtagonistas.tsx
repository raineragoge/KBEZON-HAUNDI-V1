import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/menuData';
import { ArrowUpRight, Flame, Sparkles, X, Info } from 'lucide-react';

export const PlatosProtagonistas: React.FC = () => {
  // Select the featured star dishes
  const starDishes = MENU_ITEMS.filter((item) => item.isFeatured);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  return (
    <section
      id="platos-protagonistas"
      aria-label="Platos protagonistas"
      className="py-20 md:py-32 bg-[#211F1C] text-[#F3EEE5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#F3EEE5]/15">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#BC9B74] font-semibold mb-4">
              <span className="font-editorial text-sm italic text-[#873C2F]">03</span>
              <span>Propuesta de la casa</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
              Aquí se viene a <span className="italic text-[#BC9B74]">comer.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#F3EEE5]/70 max-w-md leading-relaxed">
            Platos bandera donde la brasa, los fondos trabajados y el producto del
            Cantábrico se dan la mano con una interpretación propia.
          </p>
        </div>

        {/* Editorial Dishes Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {starDishes.map((dish, index) => (
            <article
              key={dish.id}
              className="group flex flex-col justify-between bg-[#282623] border border-[#F3EEE5]/10 rounded-sm overflow-hidden hover:border-[#BC9B74]/50 transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-black/40">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Visual badge */}
                <div className="absolute top-3 left-3 bg-[#211F1C]/85 backdrop-blur-xs text-[#BC9B74] text-[11px] font-mono px-2.5 py-1 rounded-xs tracking-wider">
                  0{index + 1}
                </div>

                {dish.isFusion && (
                  <div className="absolute top-3 right-3 bg-[#873C2F] text-[#F3EEE5] text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded-xs font-semibold">
                    Fusión
                  </div>
                )}
              </div>

              {/* Dish Content */}
              <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#BC9B74] font-medium mb-2">
                    {dish.portionType}
                  </div>
                  <h3 className="font-editorial text-2xl lg:text-3xl text-[#F3EEE5] mb-3 group-hover:text-[#BC9B74] transition-colors leading-tight">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-[#F3EEE5]/75 leading-relaxed line-clamp-3 mb-6">
                    {dish.description}
                  </p>
                </div>

                {/* Bottom metadata and action */}
                <div className="pt-4 border-t border-[#F3EEE5]/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1 text-[11px] text-[#F3EEE5]/60">
                    {dish.allergens && dish.allergens.length > 0 && (
                      <span>Alérgenos: {dish.allergens.join(', ')}</span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedDish(dish)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#BC9B74] hover:text-[#F3EEE5] transition-colors cursor-pointer"
                    aria-label={`Ver detalle de ${dish.name}`}
                  >
                    <span>Detalle</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note of market availability */}
        <div className="mt-14 pt-6 border-t border-[#F3EEE5]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#F3EEE5]/60">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#BC9B74] shrink-0" />
            <span>
              Carta viva: las referencias y presentaciones evolucionan según temporada y lonja diaria.
            </span>
          </div>
          <a
            href="#carta"
            className="text-[#BC9B74] hover:text-[#F3EEE5] underline underline-offset-4 font-medium transition-colors"
          >
            Consultar carta completa interactiva ↓
          </a>
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Detalle del plato ${selectedDish.name}`}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-[#F3EEE5] text-[#211F1C] max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Image */}
            <div className="relative aspect-16/9 bg-black">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 p-2 bg-[#211F1C]/80 hover:bg-[#873C2F] text-white rounded-full transition-colors"
                aria-label="Cerrar detalle"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#873C2F] font-semibold mb-2">
                <span>{selectedDish.portionType}</span>
                <span className="text-[#46534B]">KBZÓN HAUNDI</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl text-[#211F1C] mb-4">
                {selectedDish.name}
              </h3>

              <p className="text-sm sm:text-base text-[#211F1C]/80 leading-relaxed mb-6">
                {selectedDish.description}
              </p>

              {/* Ingredients list */}
              {selectedDish.ingredients && (
                <div className="mb-6 pt-4 border-t border-[#211F1C]/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#211F1C]/70 mb-2">
                    Ingredientes clave
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-[#211F1C]">
                    {selectedDish.ingredients.map((ing, i) => (
                      <span key={i} className="bg-[#211F1C]/5 px-2.5 py-1 rounded-xs">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              {selectedDish.availabilityNote && (
                <p className="text-xs text-[#46534B] italic mb-6">
                  * {selectedDish.availabilityNote}
                </p>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-[#211F1C]/15">
                <a
                  href="#carta"
                  onClick={() => setSelectedDish(null)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#873C2F] hover:underline"
                >
                  Ver en la carta
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedDish(null)}
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#F3EEE5] bg-[#211F1C] hover:bg-[#873C2F] rounded-xs"
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
