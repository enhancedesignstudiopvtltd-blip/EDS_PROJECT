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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
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
  );
};

export default Index;
