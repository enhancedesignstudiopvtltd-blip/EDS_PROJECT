import React from 'react';
import { Card } from '@/components/ui/card';
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
    'HVAC Design & Installation',
    'Electrical Systems',
    'Fire & Safety Systems',
    'BMS Integration',
    'UPS & Power Backup',
    'IT Infrastructure',
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Presence', href: '#presence' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src={logoImage} 
                  alt="Design Edge MEP LLP Logo" 
                  className="h-8 w-auto mr-2 object-contain"
                />
                <div className="text-2xl font-heading font-bold">
                  Design<span className="text-accent">Edge</span>
                  <span className="ml-2 text-lg font-normal">MEP LLP</span>
                </div>
              </div>
              <p className="text-white/80 font-body text-sm leading-relaxed">
                Leading MEP consultancy delivering integrated solutions with 
                cost-effective designs and value engineering excellence.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <div className="space-y-1">
                  <div className="font-body">sales@designedgemep.com</div>
                  <div className="font-body">projects@designedgemep.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span className="font-body">+91 9504322143</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span className="font-body">
                  Office No. 511C, C-Wing, Baitunnoor, Kurla West, Mumbai, Maharashtra, 400070
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-white/80 hover:text-accent transition-colors font-body text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors font-body text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-white/80 font-body text-sm">
                Follow us for the latest updates on MEP innovations and projects.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:text-white" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-white group-hover:text-white" />
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:text-white" />
                </a>
              </div>
              
              <Card className="bg-white/10 border-0 backdrop-blur-sm">
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-accent" />
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

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 font-body text-sm text-center md:text-left">
              © 2024 Design Edge MEP LLP. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors font-body text-sm group"
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