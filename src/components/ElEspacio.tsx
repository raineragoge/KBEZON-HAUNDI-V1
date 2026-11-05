import React, { useState } from 'react';
import { LightboxModal, GalleryImage } from './LightboxModal';
import { Maximize2, Sparkles } from 'lucide-react';

export const ElEspacio: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages: GalleryImage[] = [
    {
      src: '/src/assets/images/space_vertical_dining_1793876667015.jpg',
      alt: 'Rincón íntimo con mesa de madera rústica y luz natural en KBZÓN HAUNDI',
      title: 'El rincón de sala',
      subtitle: 'Maderas nobles, luz de mediodía y mesas dispuestas para la pausa reposada.',
    },
    {
      src: '/src/assets/images/space_gastrobar_bar_1793876667976.jpg',
      alt: 'Barra viva con vitrina de pintxos y ambiente cálido de gastrobar en Donostia',
      title: 'La barra viva',
      subtitle: 'El epicentro del gastrobar. Pizarra de vinos, pintxos recién salidos y servicio cercano.',
    },
    {
      src: '/src/assets/images/experience_sharing_table_1793876684117.jpg',
      alt: 'Mesa compartida con copas de txakoli y medias raciones de autor',
      title: 'Mesa de compartir',
      subtitle: 'Detalle de sobremesa con amigos, copas finas y medias raciones al centro.',
    },
    {
      src: '/src/assets/images/hero_gastrobar_dish_1793876637326.jpg',
      alt: 'Pase de cocina y vajilla de autor sobre piedra',
      title: 'El pase de cocina',
      subtitle: 'Punto de fuego y emplatado con texturas que rinden homenaje al producto.',
    },
  ];

  const handleOpenImage = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section
      id="espacio"
      aria-label="El espacio del restaurante"
      className="py-20 md:py-32 bg-[#EAE4D9] text-[#211F1C] border-t border-[#211F1C]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#211F1C]/15">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#46534B] font-semibold mb-4">
              <span className="font-editorial text-sm italic text-[#873C2F]">05</span>
              <span>Ambiente y atmósfera</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02]">
              Un lugar para <span className="italic text-[#873C2F]">quedarse.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-sm md:text-base text-[#211F1C]/80 leading-relaxed">
              Madera natural, piedra arenisca, iluminación ámbar y el sonido de
              copas brindando. Un refugio contemporáneo en el ritmo costero de Gros.
            </p>
            <p className="text-xs text-[#46534B] font-medium">
              * Haz clic sobre cualquier fotografía para abrir la galería ampliada.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Mosaic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* 1 Dominant Vertical Photo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <button
              type="button"
              onClick={() => handleOpenImage(0)}
              aria-label={`Abrir en grande: ${galleryImages[0].title}`}
              className="group relative flex-1 min-h-[420px] lg:min-h-full rounded-sm overflow-hidden bg-[#211F1C]/5 shadow-md cursor-pointer text-left w-full"
            >
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211F1C]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />
              
              {/* Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-[#F3EEE5] flex items-end justify-between pointer-events-none">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-[#BC9B74] font-semibold">
                    01 · Sala
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F3EEE5]">
                    {galleryImages[0].title}
                  </h3>
                  <p className="text-xs text-[#F3EEE5]/80 mt-1 max-w-xs">
                    {galleryImages[0].subtitle}
                  </p>
                </div>
                <div className="p-2.5 rounded-full bg-[#F3EEE5]/20 group-hover:bg-[#873C2F] text-white transition-colors shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </button>
          </div>

          {/* Right Column: 2 Horizontal + 1 Panoramic Bottom (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            {/* 2 Smaller Horizontals in a 2-col subgrid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image 2 */}
              <button
                type="button"
                onClick={() => handleOpenImage(2)}
                aria-label={`Abrir en grande: ${galleryImages[2].title}`}
                className="group relative aspect-4/3 rounded-sm overflow-hidden bg-[#211F1C]/5 shadow-sm cursor-pointer text-left w-full"
              >
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211F1C]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-[#F3EEE5] flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#BC9B74]">
                      02 · Mesa
                    </span>
                    <h3 className="font-editorial text-lg leading-snug">
                      {galleryImages[2].title}
                    </h3>
                  </div>
                  <Maximize2 className="w-3.5 h-3.5 text-[#F3EEE5]/80 group-hover:text-white" />
                </div>
              </button>

              {/* Image 3 */}
              <button
                type="button"
                onClick={() => handleOpenImage(3)}
                aria-label={`Abrir en grande: ${galleryImages[3].title}`}
                className="group relative aspect-4/3 rounded-sm overflow-hidden bg-[#211F1C]/5 shadow-sm cursor-pointer text-left w-full"
              >
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211F1C]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-[#F3EEE5] flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#BC9B74]">
                      03 · Fuego
                    </span>
                    <h3 className="font-editorial text-lg leading-snug">
                      {galleryImages[3].title}
                    </h3>
                  </div>
                  <Maximize2 className="w-3.5 h-3.5 text-[#F3EEE5]/80 group-hover:text-white" />
                </div>
              </button>
            </div>

            {/* 1 Panoramic Image (Image 1: space_gastrobar_bar) */}
            <button
              type="button"
              onClick={() => handleOpenImage(1)}
              aria-label={`Abrir en grande: ${galleryImages[1].title}`}
              className="group relative aspect-16/9 sm:aspect-21/9 lg:aspect-16/8 rounded-sm overflow-hidden bg-[#211F1C]/5 shadow-md cursor-pointer flex-1 text-left w-full"
            >
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211F1C]/85 via-[#211F1C]/30 to-transparent pointer-events-none" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#F3EEE5] flex items-end justify-between pointer-events-none">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-[#BC9B74] font-semibold">
                    04 · Panorámica
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F3EEE5]">
                    {galleryImages[1].title}
                  </h3>
                  <p className="text-xs text-[#F3EEE5]/80 mt-0.5">
                    {galleryImages[1].subtitle}
                  </p>
                </div>
                <div className="p-2 rounded-full bg-[#F3EEE5]/20 group-hover:bg-[#873C2F] text-white transition-colors shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={galleryImages}
        currentIndex={selectedImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onSelectIndex={setSelectedImageIndex}
      />
    </section>
  );
};
