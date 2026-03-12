import React from 'react';
import { MotionSection, MotionItem } from '@/components/Motion';
import { Phone, Mail, MapPin, Globe, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      value: [
        'PHOENIX PARAGON PLAZA, 1ST FLOOR, OFFICE NO. 1B/53',
        'LBS MARG, KURLA WEST, MUMBAI – 400070, India',
      ],
      link: null,
    },
    {
      icon: MapPin,
      title: 'Satellite Office',
      value: ['VASHI – NAVI MUMBAI'],
      link: null,
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'www.enhancedesignstudio.com',
      link: 'https://www.enhancedesignstudio.com',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'Info@enhancedesignstudio.com',
      link: 'mailto:Info@enhancedesignstudio.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: ['Mon–Fri: 9:00 AM – 6:00 PM', 'Sat: 9:00 AM – 2:00 PM'],
      link: null,
    },
  ];

  const phoneContacts = [
    {
      name: 'Rabbani',
      phone: '+91 9504322143',
      link: 'tel:+919504322143',
    },
    {
      name: 'Rizwan',
      phone: '+91 77984 69191',
      link: 'tel:+917798469191',
    },
  ];

  const mapQuery = encodeURIComponent(
    'PHOENIX PARAGON PLAZA, LBS MARG, Kurla West, Mumbai 400070'
  );

  return (
    <MotionSection id="contact" className="section-padding bg-transparent" variant="up" stagger data-aos-once="true">
      <div className="container mx-auto container-mobile">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl rounded-[22px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.11),_rgba(255,255,255,0.06))] backdrop-blur-xl border border-white/12 ring-1 ring-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.50)] p-6 sm:p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
              <div className="space-y-5">
                <MotionItem variant="up">
                  <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                    Let’s Build Smart Together
                  </h2>
                </MotionItem>
                <MotionItem variant="up" delay={0.06}>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white/85">
                    Let’s Start Your Next Project
                  </h3>
                </MotionItem>
                <MotionItem variant="fade" delay={0.12}>
                  <p className="text-base sm:text-lg font-body text-white/75 leading-[1.85] max-w-[65ch]">
                    Whether you’re planning a new commercial development, upgrading an industrial facility, or exploring sustainable design options, our engineering team is ready to help. Tell us your goals and challenges, and we’ll recommend solutions tailored to your timeline and performance targets.
                  </p>
                </MotionItem>
              </div>

              <div className="space-y-5">
                <MotionItem variant="up" delay={0.18}>
                  <h4 className="text-lg sm:text-xl font-heading font-semibold text-white">
                    Contact Information
                  </h4>
                </MotionItem>

                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <MotionItem
                      key={info.title}
                      variant="up"
                      delay={0.2 + index * 0.05}
                      className="group"
                    >
                      <div className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/7 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_16px_44px_rgba(0,0,0,0.30)]">
                        <div className="mt-0.5 w-9 h-9 rounded-full bg-accent/18 text-accent flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="font-heading font-semibold text-sm sm:text-base text-white">
                            {info.title}
                          </div>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="font-body text-sm sm:text-base text-white/80 hover:text-white"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="font-body text-sm sm:text-base text-white/75 space-y-0.5">
                              {(Array.isArray(info.value) ? info.value : [info.value]).map((line) => (
                                <div key={line}>{line}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </MotionItem>
                  ))}
                </div>

                <MotionItem variant="up" delay={0.55}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {phoneContacts.map((p) => (
                      <a
                        key={p.name}
                        href={p.link}
                        className="group rounded-2xl border border-white/12 bg-white/7 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_16px_44px_rgba(0,0,0,0.30)]"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 w-9 h-9 rounded-full bg-accent/18 text-accent flex items-center justify-center flex-shrink-0">
                            <Phone className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-heading font-semibold text-sm sm:text-base text-white">
                              {p.name}
                            </div>
                            <div className="font-body text-sm sm:text-base text-white/80 group-hover:text-white">
                              {p.phone}
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </MotionItem>

                <MotionItem variant="fade" delay={0.65}>
                  <div className="overflow-hidden rounded-2xl border border-white/12 bg-white/7">
                    <iframe
                      title="Enhance Design Studio location"
                      className="w-full h-[240px] grayscale contrast-125 brightness-90"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    />
                  </div>
                </MotionItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Contact;
