import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/logo.jpg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Presence', href: '#presence' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-border shadow-card' : 'bg-white/95 backdrop-blur-lg'
    }`}>
      <div className="container mx-auto container-mobile py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Design Edge MEP LLP Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto mr-2 sm:mr-3 object-contain"
            />
            <div className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-primary">
              Design<span className="text-accent">Edge</span>
              <span className="ml-1 sm:ml-2 text-sm sm:text-base font-normal">MEP LLP</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-body font-medium text-primary hover:text-accent transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-touch bg-gradient-accent hover:shadow-accent hover:scale-105 transition-all duration-300">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 sm:p-3 rounded-lg hover:bg-secondary transition-colors btn-touch"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 sm:mt-4 py-4 bg-background/95 backdrop-blur-lg rounded-lg border border-border shadow-card animate-fade-up">
            <div className="flex flex-col space-y-1 px-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-body font-medium text-primary hover:text-accent transition-colors py-3 border-b border-border/50 last:border-0 btn-touch text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="btn-touch bg-gradient-accent mt-4 w-full">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;