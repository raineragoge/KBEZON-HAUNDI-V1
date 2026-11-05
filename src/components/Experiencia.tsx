import React from 'react';
import { GlassWater, Utensils, Sparkles, Clock, Users } from 'lucide-react';

export const Experiencia: React.FC = () => {
  const rituals = [
    {
      number: '01',
      title: 'Un pintxo',
      subtitle: 'La parada en barra',
      description:
        'El rito donostiarra por excelencia. Llegar sin reserva, acodarse en la barra de roble, pedir un txakoli recién escanciado o un zurito frío y elegir dos bocados calientes de pase.',
      pace: '15 – 30 min',
      atmosphere: 'Espontáneo · De pie en barra · Informal',
      itemsNote: 'Gilda de la casa, tosta tibia de txangurro o croqueta melosa.',
    },
    {
      number: '02',
      title: 'Algo para compartir',
      subtitle: 'Medias raciones al centro',
      description:
        'La fórmula predilecta para venir entre dos o en pequeño grupo. Pedir tres medias raciones diferentes para disfrutar del contraste de texturas, charlar sin prisa y descorchar una botella.',
      pace: '1 hora',
      atmosphere: 'Mesas altas o bajas · Conversación fluida',
      itemsNote: 'Foie con compota de manzana, steak tartar cortado a mano y tabla de quesos de pastor.',
    },
    {
      number: '03',
      title: 'Una buena comida',
      subtitle: 'Sobremesa reposada',
      description:
        'Para cuando el cuerpo pide mesa completa, brasas encendidas y tiempo por delante. Platos contundentes de lonja cantábrica, arroz al estilo KBZÓN y una sobremesa que se niega a terminar.',
      pace: '2 horas +',
      atmosphere: 'Sala · Reserva previa recomendada',
      itemsNote: 'Gambas a la parrilla, arroz chaufa de lonja y vino de Rioja Alavesa.',
    },
  ];

  return (
    <section
      id="experiencia"
      aria-label="Maneras de vivir la mesa"
      className="py-20 md:py-32 bg-[#F3EEE5] text-[#211F1C] border-t border-[#211F1C]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-[#211F1C]/15">
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#46534B] font-semibold mb-4">
            <span className="font-editorial text-sm italic text-[#873C2F]">06</span>
            <span>Rituales de sala</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02]">
            La mesa es para <span className="italic text-[#873C2F]">compartir.</span>
          </h2>
          <p className="text-sm md:text-base text-[#211F1C]/75 mt-4 leading-relaxed">
            Tres maneras de vivir KBZÓN HAUNDI según el momento del día y las ganas
            con las que cruces la puerta. Sin corsés ni menús cerrados.
          </p>
        </div>

        {/* 3 Editorial Compositions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {rituals.map((ritual) => (
            <div
              key={ritual.number}
              className="group bg-[#EAE4D9]/80 border border-[#211F1C]/12 rounded-sm p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-[#873C2F] transition-all duration-300 shadow-xs"
            >
              <div>
                {/* Number & Subtitle */}
                <div className="flex items-baseline justify-between pb-4 border-b border-[#211F1C]/10 mb-6">
                  <span className="font-editorial text-4xl text-[#873C2F]">
                    {ritual.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#46534B] font-semibold">
                    {ritual.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-3xl text-[#211F1C] mb-4 group-hover:text-[#873C2F] transition-colors">
                  {ritual.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#211F1C]/80 leading-relaxed mb-6">
                  {ritual.description}
                </p>
              </div>

              {/* Editorial Docket / Recipe details */}
              <div className="pt-6 border-t border-[#211F1C]/10 space-y-3 text-xs text-[#211F1C]/70">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#211F1C]">Tiempo estimado:</span>
                  <span className="font-mono text-[11px] text-[#46534B]">{ritual.pace}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#211F1C]">Ambiente:</span>
                  <span className="text-right text-[11px]">{ritual.atmosphere}</span>
                </div>

                <div className="pt-2 border-t border-dashed border-[#211F1C]/10">
                  <span className="font-semibold text-[#873C2F]">Recomendamos:</span>{' '}
                  <span className="italic text-[11px] text-[#211F1C]/80">{ritual.itemsNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
