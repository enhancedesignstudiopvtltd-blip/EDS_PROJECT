import React, { useEffect, useCallback, useRef } from 'react';
import { MotionSection, MotionItem } from '@/components/Motion';
import useEmblaCarousel from 'embla-carousel-react';

// Curated external images for clear visual identification of each sector
const sectors = [
  {
    title: 'Healthcare',
    image:
      'https://images.pexels.com/photos/260287/pexels-photo-260287.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Corporate',
    image:
      'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Educational',
    image:
      'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Buildings',
    image:
      'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Industrial Plants',
    image:
      'https://images.pexels.com/photos/236754/pexels-photo-236754.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Logistics & Warehousing',
    image:
      'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Automotive',
    image:
      'https://images.pexels.com/photos/4480460/pexels-photo-4480460.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Finance',
    image:
      'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
];

const ExpertiseStrip = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const timerRef = useRef<number | null>(null);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const startAuto = useCallback(() => {
    if (timerRef.current) return;
    timerRef.current = window.setInterval(scrollNext, 3000);
  }, [scrollNext]);

  const stopAuto = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    startAuto();
    return () => stopAuto();
  }, [emblaApi, startAuto, stopAuto]);

  return (
    <MotionSection className="py-8 md:py-10 bg-primary" variant="fade" data-aos-once="true">
      <div className="container mx-auto container-mobile">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Left heading area */}
          <div className="flex-shrink-0 w-[220px] md:w-[280px]">
            <MotionItem variant="up">
              <h3 className="text-white font-heading font-semibold text-sm md:text-base">Our Expertise Across Sectors</h3>
            </MotionItem>
          </div>

          {/* Carousel area */}
          <div
            className="flex-1 overflow-hidden"
            ref={emblaRef}
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
          >
            <div className="flex embla__container gap-3 md:gap-4">
              {sectors.map((s) => (
                <MotionItem key={s.title} variant="up" className="embla__slide flex-[0_0_auto] w-[170px] sm:w-[200px] md:w-[240px] lg:w-[260px]">
                  <div className="relative rounded-[20px] overflow-hidden ring-2 ring-white/90 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.35)]">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                      className="h-[130px] sm:h-[150px] md:h-[170px] lg:h-[190px] w-full object-cover"
                    />
                  </div>
                </MotionItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default ExpertiseStrip;