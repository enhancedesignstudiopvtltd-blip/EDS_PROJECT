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
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Worried about your{' '}
            <span className="text-accent block md:inline">MEP Engineering?</span>
          </h1>
          
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-heading font-light mb-4">
              <span className="text-accent font-bold italic">...leave it to us!!!</span>
            </p>
            <p className="text-xl md:text-2xl font-body font-light opacity-90">
              DesignEdge MEP Consultancy & Build Solutions | HVAC, Electrical, Fire Safety & BMS Integration
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
            <Button 
              size="lg"
              className="bg-gradient-accent hover:shadow-accent text-white font-heading font-semibold px-8 py-4 text-lg group"
            >
              Let's Redefine Spaces Together
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-body px-8 py-4 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Our Work
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