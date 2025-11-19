import React from 'react';
import { MotionSection, MotionItem } from '@/components/Motion';
import { Check } from 'lucide-react';
// Slider moved to the page-level to allow full-bleed width

type ColumnProps = { title: string; description: string; items: string[] };

const Column = ({ title, description, items }: ColumnProps) => (
  <div className="bg-white rounded-[14px] border-2 border-black shadow-[0_4px_18px_rgba(0,0,0,0.06)] p-4 md:p-5 h-full flex flex-col">
    <h3 className="font-heading font-bold text-[#0A0A0A] text-[18px] md:text-[20px] leading-[1.3]">
      {title}
    </h3>
    <p className="mt-1.5 font-body text-[14px] leading-[1.7] text-[#6B7280]">
      {description}
    </p>
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check className="w-[16px] h-[16px] text-accent mt-[2px]" strokeWidth={1.5} />
          <span className="font-body text-[14px] leading-[1.6] text-[#1f2d3d]">{item}</span>
        </li>
      ))}
    </ul>
    <div className="mt-5 md:mt-6 pt-1.5 md:pt-2 mt-auto">
      <a href="#contact" className="inline-flex items-center font-body text-[13px] px-3 py-1.5 rounded-full bg-secondary text-primary shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:bg-muted transition-colors">
        Read More
      </a>
    </div>
  </div>
);

const ConsultingServicesGrid = () => {
  return (
    <MotionSection className="py-12 md:py-16 bg-background" variant="up" stagger data-aos-once="true">
      <div className="container mx-auto container-mobile">
        <div className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
            <MotionItem variant="up">
              <Column
              title="MEP Design"
              description="Our team of skilled engineers and designers excel in creating comprehensive MEP design solutions for commercial, industrial, healthcare, hospitality, offices, infra and residential projects."
              items={[
                'Mechanical',
                'Electrical',
                'Public Health Engineering',
                'Emergency Power',
                'Fire Safety',
                'Voice & Data Systems',
                'Security Systems',
                'PEER Review',
                'Solar PV',
              ]}
              />
            </MotionItem>
            <MotionItem variant="up" delay={0.08}>
              <Column
              title="Sustainability Consulting"
              description="Embrace a greener future with our sustainability consulting services. Our experts will assess your current practices, identify areas of improvement, and create tailored strategies."
              items={[
                'Building Energy Simulation',
                'External & Internal CFD Simulation',
                'CFD Modelling',
                'Thermal Comfort Analysis',
                'Daylight Simulations',
                'Artificial Lighting Simulations',
                'Solar Analysis',
                'Microclimate Study',
                'Renewable Energy',
                'Energy Audit',
                'Edge Audit & Certification',
              ]}
              />
            </MotionItem>
            <MotionItem variant="up" delay={0.16}>
              <Column
              title="VDC and BIM Services"
              description="Enhance your performance with VDC & BIM services. Optimize systems, drive coordination, and create tailored strategies for improvement."
              items={[
                'MEP Virtual Design',
                'Architectural Virtual Design',
                'Structural Virtual Design',
                'BIM Design for Construction',
                'Virtual Design for facility management',
                'Clash Detection',
                'Quantification',
                'BIM Coordination',
                'Virtual Reality',
                'Augmented Reality',
              ]}
              />
            </MotionItem>
          </div>
        </div>

        {/* Slider is now rendered at page level for full-screen width */}
      </div>
    </MotionSection>
  );
};

export default ConsultingServicesGrid;