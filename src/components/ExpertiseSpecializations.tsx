import React from 'react';
import expertiseImg from '@/assets/expertise_specialization.png';

const itemsCol1 = [
  'Healthcare',
  'Commercial',
  'Research and Development',
  'Laboratories',
  'Data Centres',
  'Retails and Malls',
];

const itemsCol2 = [
  'Hospitality',
  'Industrial',
  'Residentials',
  'Luxury Villas and Residences',
  'Large Infrastructures',
  'School and Institution',
];

const ExpertiseSpecializations = () => {
  return (
    <section className="w-full bg-background py-20" data-reveal="up" data-stagger data-aos-once="true">
      <div className="container mx-auto container-mobile">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="md:col-span-7">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-primary whitespace-nowrap">Expertise & Specialization</h2>
            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-[1.85] max-w-[62ch]">
              Our multidisciplinary team has evolved into a comprehensive MEP engineering firm, serving diverse sectors with integrated design, consulting, and delivery excellence.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              <ul className="space-y-3">
                {itemsCol1.map((it) => (
                  <li key={it}>
                    <a href="#" className="text-primary hover:text-primary-light hover:underline transition-colors">{it}</a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {itemsCol2.map((it) => (
                  <li key={it}>
                    <a href="#" className="text-primary hover:text-primary-light hover:underline transition-colors">{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-xl md:aspect-[16/10] aspect-[16/10] rounded-lg overflow-hidden shadow-card">
              <img src={expertiseImg} alt="Expertise & Specialization" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSpecializations