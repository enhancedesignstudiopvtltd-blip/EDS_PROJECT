import React, { useEffect, useCallback } from 'react';
import { MotionSection } from '@/components/Motion';
import useEmblaCarousel from 'embla-carousel-react';

const slides = [
  {
    title: 'INTEGRATED MEP DESIGN, SUSTAINABILITY & STRATEGIC CONSULTING SERVICES',
    description:
      'We are committed to providing cutting-edge MEP (Mechanical, Electrical, and Plumbing) design, sustainability, and strategic consulting services. Our mission is to empower businesses and organizations with innovative solutions that optimize efficiency, reduce carbon-footprint, and drive long-term success',
    image: '',
    bgImageClass: 'bg-[url(/src/assets/hero-mep-building.jpg)]',
  },
  {
    title: '“DECARBONISATION SHAPING A GREENER TOMORROW”',
    description:
      'We are committed to building a better, greener future. Our Decarbonisation Services offer innovative solutions to reduce carbon footprints and promote sustainable practices. Join us on this journey towards a more sustainable world.',
    image: '',
    bgImageClass: 'bg-[url(/src/assets/hvac-systems.jpg)]',
  },
];

const ConsultingSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const autoScroll = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(autoScroll, 5000);
    return () => clearInterval(id);
  }, [emblaApi, autoScroll]);

  return (
    <MotionSection className="py-8 md:py-10 bg-background" variant="fade" data-aos-once="true">
      <div className="w-full overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((s, idx) => (
              <div key={idx} className="embla__slide flex-[0_0_100%] relative">
                <div className={`${s.bgImageClass} bg-center bg-cover w-full h-[220px] md:h-[320px] lg:h-[360px]`}></div>
                <div className="absolute inset-0 bg-[rgba(0,32,64,0.45)]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                  <h3 className="text-white uppercase tracking-[0.06em] font-heading text-sm md:text-base">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-4xl text-white/90 text-[12px] md:text-[14px] leading-relaxed font-body">
                    {s.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-block px-4 py-2 rounded-md bg-primary text-white font-body text-sm hover:bg-primary-light transition-colors"
                  >
                    Know More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default ConsultingSlider;