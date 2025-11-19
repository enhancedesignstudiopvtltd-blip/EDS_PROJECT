import React from 'react';
import { MotionSection, MotionItem } from '@/components/Motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import { Users, Cpu, ClipboardCheck, Wrench, Leaf } from 'lucide-react';

const services = [
  { icon: Wrench, title: 'MEP Design Services' },
  { icon: Cpu, title: 'Integrated Simulation Services' },
  { icon: ClipboardCheck, title: 'BIM Consulting' },
  { icon: Users, title: 'Engineering Design Services' },
  { icon: Leaf, title: 'Sustainability & Advisory Services' },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* About Section – mirrors the "About CAPTEC" layout */}
      <MotionSection className="section-padding bg-background" variant="up" stagger data-aos-once="true">
        <div className="container mx-auto container-mobile">
          <div className="max-w-5xl mx-auto text-center animate-fade-up">
            <h2 className="text-responsive-xl font-heading font-bold text-primary mb-6">ABOUT ENHANCE DESIGN STUDIO PVT. LTD.</h2>
            <p className="text-responsive-base font-body text-muted-foreground leading-relaxed">
              Enhance Design Studio Pvt. Ltd. is an Integrated MEP Design Consultancy and Design–Build firm specializing in delivering comprehensive engineering and fit-out solutions for commercial, residential, and industrial projects. We focus on sustainability, precision engineering, and delivering business value through design innovation.
            </p>
          </div>

          {/* Our Services – identical structure styling to current design */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-center text-primary mb-8">Our Services</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-stretch">
              {services.map((s, i) => (
                <MotionItem key={s.title} variant="up" delay={i * 0.06} className="group bg-white rounded-2xl shadow-card p-6 text-center transition-all duration-300 hover:shadow-hover">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-heading text-sm sm:text-base text-primary">{s.title}</div>
                </MotionItem>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </div>
  );
};

export default AboutUs;