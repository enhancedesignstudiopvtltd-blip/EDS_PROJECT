import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-mep-building.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern MEP Engineering Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto container-mobile text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-responsive-2xl font-heading font-bold mb-4 sm:mb-6 leading-tight px-2">
            Worried about your{' '}
            <span className="text-accent block sm:inline">MEP Engineering?</span>
          </h1>
          
          <div className="mb-6 sm:mb-8 px-4">
            <p className="text-responsive-lg font-heading font-light mb-3 sm:mb-4">
              <span className="text-accent font-bold italic">...leave it to us!!!</span>
            </p>
            <p className="text-responsive-base font-body font-light opacity-90 leading-relaxed max-w-3xl mx-auto">
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
              className="btn-touch w-full sm:w-auto text-white border-white/50 hover:bg-white/20 hover:border-white hover:scale-105 animate-fade-up animation-delay-700 transition-all duration-300"
            >
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;