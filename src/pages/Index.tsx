import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ConsultingCTA from '@/components/ConsultingCTA';
import Projects from '@/components/Projects';
import PresenceMap from '@/components/PresenceMap';
import Footer from '@/components/Footer';
import ExpertiseStrip from '@/components/ExpertiseStrip';
import StatsBar from '@/components/StatsBar';
import ClientsBand from '@/components/ClientsBand';
import Testimonials from '@/components/Testimonials';
import UnderConstructionOverlay from '@/components/UnderConstructionOverlay';

const Index = () => {
  const comingSoon =
    (import.meta.env?.VITE_COMING_SOON ?? 'true') === 'true' ||
    (import.meta.env as any)?.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {comingSoon ? (
        <UnderConstructionOverlay sectionName="Site Under Construction">
          <div />
        </UnderConstructionOverlay>
      ) : (
        <>
          <About />
          <Services />
          <ExpertiseStrip />
          <ConsultingCTA />
          <StatsBar />
          <Projects />
          <ClientsBand />
          <Testimonials />
          <PresenceMap />
          <Footer />
        </>
      )}
      {comingSoon && (
        <div style={{ display: 'none' }}>
          <About />
          <Services />
          <ExpertiseStrip />
          <ConsultingCTA />
          <StatsBar />
          <Projects />
          <ClientsBand />
          <Testimonials />
          <PresenceMap />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
