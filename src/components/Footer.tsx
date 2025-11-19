import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowUp
} from 'lucide-react';
import logoImage from '@/assets/logo.jpg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'HVAC (High & Low Side)',
    'Electrical Systems',
    'Cable Tray Systems',
    'Fire Protection Systems',
    'Fire Alarm & Suppression',
    'IBMS Integration',
    'UPS & Power Backup',
    'IT Passive Infrastructure',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/#services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Presence', href: '/#presence' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto container-mobile section-padding">
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
          
          <div className="space-y-4 md:col-span-2 lg:col-span-1 order-1">
            <div>
              <div className="flex items-center mb-3 lg:mb-4">
                <img 
                  src={logoImage} 
                  alt="Enhance Design Studio Pvt. Ltd. Logo" 
                  className="h-6 sm:h-7 lg:h-8 w-auto mr-2 object-contain"
                />
                <div className="text-lg sm:text-xl lg:text-2xl font-heading font-bold">
                  Enhance <span className="text-accent">Design Studio</span>
                  <span className="ml-2 text-sm sm:text-base lg:text-lg font-normal">Pvt. Ltd.</span>
                </div>
              </div>
              <p className="text-white/80 font-body text-sm leading-relaxed mb-4 max-w-[36ch]">
                Leading MEP consultancy delivering integrated solutions with 
                cost-effective designs and value engineering excellence.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0">
                  <div className="font-body break-all">sales@designedgemep.com</div>
                  <div className="font-body break-all">projects@designedgemep.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="font-body">+91 9504322143</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="font-body leading-relaxed max-w-[34ch]">
                  Office No. 511C, C-Wing, Baitunnoor, Kurla West, Mumbai, Maharashtra, 400070
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2 order-2">
            <div className="block md:hidden">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="services" className="border-white/20">
                  <AccordionTrigger className="text-left text-base font-heading font-semibold text-white hover:text-accent py-3">
                    Our Services
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {services.map((service, index) => (
                        <li key={index}>
                          <a 
                            href="#services"
                            className="text-white/80 hover:text-accent transition-colors font-body text-sm block py-1"
                          >
                            {service}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="quick-links" className="border-white/20">
                  <AccordionTrigger className="text-left text-base font-heading font-semibold text-white hover:text-accent py-3">
                    Quick Links
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {quickLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-white/80 hover:text-accent transition-colors font-body text-sm block py-1"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div>
                <h3 className="text-base lg:text-lg font-heading font-semibold mb-4 lg:mb-6">Our Services</h3>
                <ul className="space-y-2 lg:space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a 
                        href="#services"
                        className="text-white/80 hover:text-accent transition-colors font-body text-sm inline-block py-1"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base lg:text-lg font-heading font-semibold mb-4 lg:mb-6">Quick Links</h3>
                <ul className="space-y-2 lg:space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-accent transition-colors font-body text-sm inline-block py-1"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="order-3 lg:order-3">
            <h3 className="text-base lg:text-lg font-heading font-semibold mb-4 lg:mb-6">Connect With Us</h3>
            <div className="space-y-3 lg:space-y-4">
              <p className="text-white/80 font-body text-sm leading-relaxed">
                Follow us for the latest updates on MEP innovations and projects.
              </p>
              
              <div className="flex space-x-3 lg:space-x-4">
                <a 
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                >
                  <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:text-white" />
                </a>
                <a 
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                >
                  <Twitter className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:text-white" />
                </a>
                <a 
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                >
                  <Facebook className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:text-white" />
                </a>
              </div>
              
              <Card className="bg-white/10 border-0 backdrop-blur-sm">
                <div className="p-3 lg:p-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-4 h-4 lg:w-5 lg:h-5 text-accent flex-shrink-0" />
                    <div>
                      <div className="text-sm font-body font-medium">24/7 Emergency Support</div>
                      <div className="text-xs text-white/70">Quick response for critical MEP issues</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 font-body text-xs sm:text-sm text-center md:text-left order-2 md:order-1">
              © 2024 Enhance Design Studio Pvt. Ltd. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors font-body text-sm group btn-touch order-1 md:order-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;