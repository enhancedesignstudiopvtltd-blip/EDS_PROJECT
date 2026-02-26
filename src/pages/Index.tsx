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
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <UnderConstructionOverlay sectionName="About Us">
        <About />
      </UnderConstructionOverlay>
      <UnderConstructionOverlay sectionName="Our Services">
        <Services />
      </UnderConstructionOverlay>
      <UnderConstructionOverlay sectionName="Expertise & Specializations">
        <ExpertiseStrip />
      </UnderConstructionOverlay>
      <UnderConstructionOverlay sectionName="Design & Build">
        <ConsultingCTA />
      </UnderConstructionOverlay>
      <UnderConstructionOverlay sectionName="Key Metrics">
        <StatsBar />
      </UnderConstructionOverlay>
      <UnderConstructionOverlay sectionName="Our Projects">
        <Projects />
      </UnderConstructionOverlay>
      <UnderConstructionOverlay sectionName="Clients">
        <ClientsBand />
      </UnderConstructionOverlay>
      <UnderConstructionOverlay sectionName="Testimonials">
        <Testimonials />
      </UnderConstructionOverlay>
      <UnderConstructionOverlay sectionName="Presence Map">
        <PresenceMap />
      </UnderConstructionOverlay>
      <Footer />
    </div>
  );
};

export default Index;
