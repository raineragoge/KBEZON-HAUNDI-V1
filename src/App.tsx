import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifiesto } from './components/Manifiesto';
import { PlatosProtagonistas } from './components/PlatosProtagonistas';
import { LaCarta } from './components/LaCarta';
import { ElEspacio } from './components/ElEspacio';
import { Experiencia } from './components/Experiencia';
import { Visitarnos } from './components/Visitarnos';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F3EEE5] text-[#211F1C] flex flex-col font-sans selection:bg-[#873C2F] selection:text-[#F3EEE5]">
      {/* Editorial Top Navigation */}
      <Header />

      {/* Main Content Flow */}
      <main id="main-content" className="flex-1">
        {/* Section 01: Hero Editorial */}
        <Hero />

        {/* Section 02: Manifiesto */}
        <Manifiesto />

        {/* Section 03: Platos Protagonistas */}
        <PlatosProtagonistas />

        {/* Section 04: La Carta */}
        <LaCarta />

        {/* Section 05: El Espacio */}
        <ElEspacio />

        {/* Section 06: Experiencia */}
        <Experiencia />

        {/* Section 07: Visítanos */}
        <Visitarnos />
      </main>

      {/* Section 08: Footer */}
      <Footer />
    </div>
  );
}
