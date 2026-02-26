import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import GetQuoteForm from '@/components/GetQuoteForm';
import homeVideo from '@/assets/Preview_live.mp4';

const Hero = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  return (
    <>
      <section id="home" className="relative h-dvh flex items-center justify-center overflow-hidden">
      {/* Background Media: simple HTML5 video */}
      <div className="absolute inset-0 z-0">
        <video
          src={homeVideo}
          className="absolute inset-0 w-full h-full object-cover object-center"
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          controls={false}
        />

        
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto container-mobile text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-responsive-2xl font-heading font-bold mb-4 sm:mb-6 leading-tight px-2 drop-shadow-lg">
            Enhance Design Studio Pvt. Ltd.
            <span className="text-accent block sm:inline"> — Engineering Innovation</span>
          </h1>
          
          <div className="mb-6 sm:mb-8 px-4">
            <p className="text-responsive-base font-body font-light opacity-90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Engineering Innovation | Integrated MEP Design & Build | Precision Fit-Out Solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-in-right px-4">
            <a href="#services" className="w-full sm:w-auto">
              <Button 
                className="btn-touch w-full sm:w-auto bg-gradient-accent hover:bg-gradient-accent/90 text-white font-heading font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-fade-up animation-delay-500"
              >
                Design & Build Solutions
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </a>
            <a href="/consulting" className="w-full sm:w-auto">
              <Button 
                variant="outline"
                className="btn-touch w-full sm:w-auto text-white border-2 border-white bg-transparent hover:bg-white hover:text-primary hover:scale-105 animate-fade-up animation-delay-600 transition-all duration-300 font-heading font-semibold"
              >
                Book Consulting <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Button 
              variant="outline"
              className="btn-touch w-full sm:w-auto text-white border-2 border-white bg-transparent hover:bg-white hover:text-primary hover:scale-105 animate-fade-up animation-delay-700 transition-all duration-300 font-heading font-semibold"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6">
          <div className="bg-black/50 text-white px-3 py-2 rounded-md backdrop-blur-sm">
            <span className="font-heading font-bold text-sm sm:text-base md:text-lg">
              Live Preview — Integrated MEP Workflows
            </span>
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
