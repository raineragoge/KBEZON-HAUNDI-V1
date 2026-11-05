import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

interface LightboxModalProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}) => {
  const handlePrev = useCallback(() => {
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    onSelectIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galería fotográfica ampliada de KBZÓN HAUNDI"
      className="fixed inset-0 z-50 bg-[#211F1C]/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-200"
    >
      {/* Top Bar: Counter & Close Button */}
      <div className="flex items-center justify-between text-[#F3EEE5] max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <span className="font-editorial text-lg italic text-[#BC9B74]">
            0{currentIndex + 1}
          </span>
          <span className="text-xs uppercase tracking-widest text-[#F3EEE5]/60">
            / 0{images.length} · El Espacio
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#F3EEE5]/10 hover:bg-[#873C2F] text-[#F3EEE5] transition-colors cursor-pointer"
          aria-label="Cerrar galería"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Frame with Nav Arrows */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-w-6xl mx-auto w-full">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 md:left-6 z-10 p-3 rounded-full bg-[#211F1C]/70 hover:bg-[#873C2F] text-[#F3EEE5] transition-colors cursor-pointer"
          aria-label="Fotografía anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Display Image */}
        <div className="max-h-[75vh] max-w-full flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[75vh] max-w-full object-contain rounded-xs shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 md:right-6 z-10 p-3 rounded-full bg-[#211F1C]/70 hover:bg-[#873C2F] text-[#F3EEE5] transition-colors cursor-pointer"
          aria-label="Siguiente fotografía"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption and Thumbnails */}
      <div className="max-w-4xl mx-auto w-full text-center text-[#F3EEE5] space-y-2">
        <p className="font-editorial text-xl sm:text-2xl text-[#F3EEE5]">
          {currentImage.title}
        </p>
        <p className="text-xs text-[#F3EEE5]/70 max-w-md mx-auto">
          {currentImage.subtitle}
        </p>
      </div>
    </div>
  );
};
