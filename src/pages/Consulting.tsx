import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ConsultingHero from '@/components/ConsultingHero';
import ConsultingServicesGrid from '@/components/ConsultingServicesGrid';
import ExpertiseStrip from '@/components/ExpertiseStrip';
import ConstructionAnimation from '@/components/ConstructionAnimation';
import ConsultingTabs from '@/components/ConsultingTabs';
import ConsultingSlider from '@/components/ConsultingSlider';
import StatsBar from '@/components/StatsBar';
import ClientsBand from '@/components/ClientsBand';
import Testimonials from '@/components/Testimonials';
import { MotionSection } from '@/components/Motion';
import vdc1 from '@/assets/vdc_1.png';
import vdc2 from '@/assets/vdc_2.png';
import bim1 from '@/assets/bim_1.png';
import bim2 from '@/assets/bim_2.png';
import ExpertiseSpecializations from '@/components/ExpertiseSpecializations';
import UnderConstructionOverlay from '@/components/UnderConstructionOverlay';

const ConsultingPage = () => {
  const comingSoon =
    (import.meta.env?.VITE_COMING_SOON ?? 'true') === 'true' ||
    (import.meta.env as any)?.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ConsultingHero />
      {comingSoon ? (
        <UnderConstructionOverlay sectionName="From Concept to Handover">
          <MotionSection className="w-full bg-background mt-4 md:mt-6" variant="up" stagger>
            <div className="w-full px-0">
              <div className="grid grid-cols-12 gap-4 md:gap-6 xl:gap-8 items-start">
                <div className="col-span-12 md:col-span-7 px-6 md:px-8">
                  <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-primary mb-2">From Concept to Handover :</h2>
                  <p className="font-heading text-base sm:text-lg md:text-xl text-primary">MEP Design, VDC Consulting & Sustainability</p>
                  <div className="h-px bg-border my-4"></div>
                  <div className="space-y-6 text-slate-800 leading-[1.85] text-sm sm:text-base max-w-[90ch]">
                    <p>
                      At Enhance Design Studio, we deliver comprehensive solutions from concept to handover through integrated MEP Design, VDC Consulting, and Sustainability Engineering. Our approach combines technical precision with environmental responsibility — ensuring systems that are efficient, coordinated, and future-ready. Using advanced BIM workflows and data-driven analysis, we optimize energy performance, reduce carbon footprint, and enable seamless collaboration between Architecture, Structure, and MEP disciplines. The result — smarter, sustainable, and high-performing buildings delivered with clarity and confidence.
                    </p>
                    <p>
                      Beyond design and coordination, we believe in partnership through the entire journey — supporting our clients during execution, testing, commissioning, and post-handover stages. This holistic approach ensures that every system performs as intended, aligning technology, functionality, and sustainability goals to create spaces that truly work for people. The result — smarter, sustainable, and high-performing buildings delivered with clarity, confidence, and measurable value.
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5 relative md:max-h-[380px] md:pr-0">
                  <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
                    <div className="relative">
                      <div className="absolute inset-x-0 top-0 h-9 bg-black/80 text-white flex items-center justify-center text-xs sm:text-sm font-heading z-10 rounded-t-md">VDC (Virtual Design & Construction)</div>
                      <div className="overflow-hidden rounded-md h-[140px] sm:h-[160px] md:h-[180px]" data-parallax="0.12">
                        <img src={vdc2} alt="VDC" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-x-0 top-0 h-9 bg-black/80 text-white flex items-center justify-center text-xs sm:text-sm font-heading z-10 rounded-t-md">BIM (Building Information Modeling)</div>
                      <div className="overflow-hidden rounded-md h-[140px] sm:h-[160px] md:h-[180px]" data-parallax="0.1">
                        <img src={bim2} alt="BIM" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="overflow-hidden rounded-md h-[140px] sm:h-[160px] md:h-[180px]" data-parallax="0.08">
                        <img src={vdc1} alt="Workflow 1" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="overflow-hidden rounded-md h-[140px] sm:h-[160px] md:h-[180px]" data-parallax="0.06">
                        <img src={bim1} alt="Workflow 2" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-card px-3 py-1.5 rounded-md font-heading text-xs sm:text-sm">INTEGRATED WORKFLOWS</div>
                </div>
              </div>
            </div>
          </MotionSection>
        </UnderConstructionOverlay>
      ) : (
        <MotionSection className="w-full bg-background mt-4 md:mt-6" variant="up" stagger>
          <div className="w-full px-0">
            <div className="grid grid-cols-12 gap-4 md:gap-6 xl:gap-8 items-start">
              <div className="col-span-12 md:col-span-7 px-6 md:px-8">
                <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-primary mb-2">From Concept to Handover :</h2>
                <p className="font-heading text-base sm:text-lg md:text-xl text-primary">MEP Design, VDC Consulting & Sustainability</p>
                <div className="h-px bg-border my-4"></div>
                <div className="space-y-6 text-slate-800 leading-[1.85] text-sm sm:text-base max-w-[90ch]">
                  <p>
                    At Enhance Design Studio, we deliver comprehensive solutions from concept to handover through integrated MEP Design, VDC Consulting, and Sustainability Engineering. Our approach combines technical precision with environmental responsibility — ensuring systems that are efficient, coordinated, and future-ready. Using advanced BIM workflows and data-driven analysis, we optimize energy performance, reduce carbon footprint, and enable seamless collaboration between Architecture, Structure, and MEP disciplines. The result — smarter, sustainable, and high-performing buildings delivered with clarity and confidence.
                  </p>
                  <p>
                    Beyond design and coordination, we believe in partnership through the entire journey — supporting our clients during execution, testing, commissioning, and post-handover stages. This holistic approach ensures that every system performs as intended, aligning technology, functionality, and sustainability goals to create spaces that truly work for people. The result — smarter, sustainable, and high-performing buildings delivered with clarity, confidence, and measurable value.
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 relative md:max-h-[380px] md:pr-0">
                <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
                  <div className="relative">
                    <div className="absolute inset-x-0 top-0 h-9 bg-black/80 text-white flex items-center justify-center text-xs sm:text-sm font-heading z-10 rounded-t-md">VDC (Virtual Design & Construction)</div>
                    <div className="overflow-hidden rounded-md h-[140px] sm:h-[160px] md:h-[180px]" data-parallax="0.12">
                      <img src={vdc2} alt="VDC" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-x-0 top-0 h-9 bg-black/80 text-white flex items-center justify-center text-xs sm:text-sm font-heading z-10 rounded-t-md">BIM (Building Information Modeling)</div>
                    <div className="overflow-hidden rounded-md h-[140px] sm:h-[160px] md:h-[180px]" data-parallax="0.1">
                      <img src={bim2} alt="BIM" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="overflow-hidden rounded-md h-[140px] sm:h-[160px] md:h-[180px]" data-parallax="0.08">
                      <img src={vdc1} alt="Workflow 1" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="overflow-hidden rounded-md h-[140px] sm:h-[160px] md:h-[180px]" data-parallax="0.06">
                      <img src={bim1} alt="Workflow 2" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-card px-3 py-1.5 rounded-md font-heading text-xs sm:text-sm">INTEGRATED WORKFLOWS</div>
              </div>
            </div>
          </div>
        </MotionSection>
      )}
      {comingSoon ? (
        <>
          <UnderConstructionOverlay sectionName="Consulting Services">
            <ConsultingServicesGrid />
          </UnderConstructionOverlay>
          <UnderConstructionOverlay sectionName="Solutions Carousel">
            <ConsultingSlider />
          </UnderConstructionOverlay>
          <UnderConstructionOverlay sectionName="Expertise & Specializations">
            <ExpertiseStrip />
          </UnderConstructionOverlay>
          <UnderConstructionOverlay sectionName="Construction Animation">
            <ConstructionAnimation />
          </UnderConstructionOverlay>
          <UnderConstructionOverlay sectionName="Consulting Tabs">
            <ConsultingTabs />
          </UnderConstructionOverlay>
          <UnderConstructionOverlay sectionName="Key Metrics">
            <StatsBar />
          </UnderConstructionOverlay>
          <UnderConstructionOverlay sectionName="Specializations">
            <ExpertiseSpecializations />
          </UnderConstructionOverlay>
          <UnderConstructionOverlay sectionName="Clients">
            <ClientsBand />
          </UnderConstructionOverlay>
          <UnderConstructionOverlay sectionName="Testimonials">
            <Testimonials />
          </UnderConstructionOverlay>
          {/* Footer hidden during maintenance */}
        </>
      ) : (
        <>
          <ConsultingServicesGrid />
          <ConsultingSlider />
          <ExpertiseStrip />
          <ConstructionAnimation />
          <ConsultingTabs />
          <StatsBar />
          <ExpertiseSpecializations />
          <ClientsBand />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ConsultingPage;
