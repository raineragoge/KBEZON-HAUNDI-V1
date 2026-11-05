import React from 'react';

export const Manifiesto: React.FC = () => {
  return (
    <section
      id="manifiesto"
      aria-label="Manifiesto gastronómico"
      className="py-20 md:py-32 bg-[#F3EEE5] border-t border-[#211F1C]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section number & eyebrow */}
        <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#46534B] font-semibold mb-6">
          <span className="font-editorial text-sm italic text-[#873C2F]">02</span>
          <span>Nuestra filosofía de mesa</span>
        </div>

        {/* Grand Headline */}
        <div className="max-w-4xl mb-14 md:mb-20">
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#211F1C] tracking-tight leading-[1.02]">
            Las cosas buenas se hacen <br className="hidden sm:inline" />
            <span className="italic text-[#873C2F]">a nuestra manera.</span>
          </h2>
        </div>

        {/* Grid: 2 Text Columns + 1 Detail Photo Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Column 1 of text (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-base md:text-lg text-[#211F1C]/85 leading-relaxed">
            <p className="font-medium text-[#211F1C]">
              En Donostia comer bien no es un lujo ocasional, es una conversación
              cotidiana. En KBZÓN HAUNDI recogemos esa devoción por la buena
              mesa y la trasladamos a una propuesta libre, directa y con fondo.
            </p>
            <p className="text-sm md:text-base text-[#211F1C]/75">
              No creemos en encorsetar la cocina vasca ni en esconder la calidad
              de la materia prima tras florituras innecesarias. Aquí se viene a
              disfrutar de lo que nos da la mar del Cantábrico y la huerta
              cercana, con la chispa justa de creatividad.
            </p>
          </div>

          {/* Column 2 of text (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-sm md:text-base text-[#211F1C]/75 leading-relaxed">
            <p>
              Nuestra carta está concebida para no tener reglas fijas: puedes
              apoyarte en la barra con un pintxo caliente y un txakoli recién
              tirado, o sentarte a compartir tres medias raciones y un buen vino
              con amigos mientras la sobremesa se alarga sin mirar el reloj.
            </p>
            <p>
              Cercanía en el trato, honestidad en los fuegos y el ritmo vibrante
              que caracteriza a las calles de Gros. Esa es nuestra receta.
            </p>

            {/* Culinary principles quote */}
            <div className="pt-4 border-t border-[#211F1C]/15">
              <blockquote className="font-editorial text-xl italic text-[#46534B]">
                «Sin artificios, con respeto a la brasa y con ganas de que cada
                visita apetezca repetir.»
              </blockquote>
            </div>
          </div>

          {/* Detail Photo Frame (4 cols) */}
          <div className="lg:col-span-4 relative mt-2 lg:mt-0">
            <div className="relative overflow-hidden rounded-sm bg-[#211F1C]/5 shadow-md aspect-4/5">
              <img
                src="/src/assets/images/experience_sharing_table_1793876684117.jpg"
                alt="Detalle de mesa compartida en KBZÓN HAUNDI con pintxos de barra y txakoli"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-[#211F1C]/10 pointer-events-none" />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-[#211F1C]/60">
              <span className="font-mono text-[11px]">GROS · DONOSTIA</span>
              <span>Barra & Compartir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
