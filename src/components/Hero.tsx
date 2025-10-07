import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-mep-building.jpg';
import GetQuoteForm from '@/components/GetQuoteForm';

const Hero = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  return (
    <>
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern MEP Engineering Building"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto container-mobile text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-responsive-2xl font-heading font-bold mb-4 sm:mb-6 leading-tight px-2 drop-shadow-lg">
            Worried about your{' '}
            <span className="text-accent block sm:inline">MEP Engineering?</span>
          </h1>
          
          <div className="mb-6 sm:mb-8 px-4">
            <p className="text-responsive-lg font-heading font-light mb-3 sm:mb-4 drop-shadow-md">
              <span className="text-accent font-bold italic">...leave it to us!!!</span>
            </p>
            <p className="text-responsive-base font-body font-light opacity-90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Design Edge MEP LLP Consultancy & Build Solutions | HVAC, Electrical, Fire Safety & BMS Integration
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-in-right px-4">
            <Button 
              className="btn-touch w-full sm:w-auto bg-gradient-accent hover:bg-gradient-accent/90 text-white font-heading font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-fade-up animation-delay-500"
            >
              <span className="hidden sm:inline">Let's Redefine Spaces Together</span>
              <span className="sm:hidden">Let's Get Started</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button 
              variant="outline"
              className="btn-touch w-full sm:w-auto text-white border-2 border-white bg-transparent hover:bg-white hover:text-primary hover:scale-105 animate-fade-up animation-delay-700 transition-all duration-300 font-heading font-semibold"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Get Quote Modal */}
    <GetQuoteForm 
      isOpen={isQuoteModalOpen}
      onClose={() => setIsQuoteModalOpen(false)}
    />
    </>
  );
};

export default Hero;